const pairs = [
  ["ink on paper", "#1C120B", "#FFF9F1", 4.5],
  ["soft ink on paper", "#4C3B2E", "#FFF9F1", 4.5],
  ["petrol on paper", "#2D5A5A", "#FFF9F1", 4.5],
  ["amber dark on paper", "#9D5E16", "#FFF9F1", 4.5],
  ["ink on amber", "#1C120B", "#C9822B", 4.5],
  ["white on petrol", "#FFFFFF", "#2D5A5A", 4.5],
  ["paper on ink", "#FFF9F1", "#1C120B", 4.5],
  ["rose on ink", "#E8D3BC", "#1C120B", 4.5],
];

function luminance(hex) {
  const values = hex.match(/[a-f\d]{2}/gi).map(value => parseInt(value, 16) / 255);
  const [r, g, b] = values.map(value => value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(foreground, background) {
  const first = luminance(foreground);
  const second = luminance(background);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

let failed = false;
for (const [name, foreground, background, minimum] of pairs) {
  const ratio = contrast(foreground, background);
  const passes = ratio >= minimum;
  failed ||= !passes;
  console.log(`${passes ? "PASS" : "FAIL"} ${name}: ${ratio.toFixed(2)}:1 (minimum ${minimum}:1)`);
}

if (failed) process.exitCode = 1;
