from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import json

BASE_URL = "http://localhost:3000"
ROUTES = ["/", "/artigos", "/admin"]

options = Options()
options.binary_location = "/usr/bin/chromium"
options.add_argument("--headless=new")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--window-size=1440,900")

driver = webdriver.Chrome(options=options)
results = {}
failed = False

try:
    for route in ROUTES:
        driver.get(BASE_URL + route)
        driver.implicitly_wait(2)
        driver.execute_script("document.body.focus()")
        sequence = []
        for _ in range(12):
            ActionChains(driver).send_keys(Keys.TAB).perform()
            current = driver.switch_to.active_element
            descriptor = driver.execute_script(
                r"""
                const el = arguments[0];
                return {
                  tag: el.tagName.toLowerCase(),
                  text: (el.innerText || el.getAttribute('aria-label') || el.getAttribute('placeholder') || '').trim().replace(/\s+/g, ' ').slice(0, 80),
                  href: el.getAttribute('href') || '',
                  id: el.id || '',
                  visible: !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length),
                };
                """,
                current,
            )
            sequence.append(descriptor)

        results[route] = sequence
        focusable = [item for item in sequence if item["tag"] != "body" and item["visible"]]
        if len(focusable) < 3:
            failed = True
        if route in ("/", "/artigos"):
            if not focusable or not focusable[0]["href"].startswith("#main-content"):
                failed = True
        if any(not item["text"] and item["tag"] in ("a", "button", "input", "select", "textarea") for item in focusable):
            failed = True

    print(json.dumps(results, ensure_ascii=False, indent=2))
    for route, sequence in results.items():
        labels = [item["text"] or item["id"] or item["tag"] for item in sequence if item["visible"]]
        print(f"{'PASS' if len(labels) >= 3 else 'FAIL'} {route}: " + " -> ".join(labels[:8]))
finally:
    driver.quit()

if failed:
    raise SystemExit(1)
