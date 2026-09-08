import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const runtimeDirectory = path.dirname(fileURLToPath(import.meta.url));
const publicDirectory = path.join(runtimeDirectory, "public");
const port = Number.parseInt(process.env.PORT || "3000", 10);

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".xml", "application/xml; charset=utf-8"],
]);

function candidatePaths(rawPathname) {
  const normalized = path.posix.normalize(`/${decodeURIComponent(rawPathname)}`);
  if (path.posix.extname(normalized)) return [normalized];
  if (normalized.endsWith("/")) return [`${normalized}index.html`];
  return [`${normalized}/index.html`, `${normalized}.html`];
}

async function findFile(rawPathname) {
  for (const candidate of candidatePaths(rawPathname)) {
    const absolutePath = path.resolve(publicDirectory, `.${candidate}`);
    if (!absolutePath.startsWith(`${publicDirectory}${path.sep}`)) continue;
    try {
      await access(absolutePath);
      if ((await stat(absolutePath)).isFile()) return absolutePath;
    } catch {
      // Tenta a próxima forma estática da mesma rota.
    }
  }
  return path.join(publicDirectory, "404.html");
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }

  try {
    const pathname = new URL(request.url || "/", "http://localhost").pathname;
    const filePath = await findFile(pathname);
    const notFound = filePath.endsWith(`${path.sep}404.html`);
    const extension = path.extname(filePath).toLowerCase();
    const immutableAsset = pathname.startsWith("/assets/");
    response.writeHead(notFound ? 404 : 200, {
      "Cache-Control": immutableAsset ? "public, max-age=31536000, immutable" : "public, max-age=300",
      "Content-Type": contentTypes.get(extension) || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Requisição inválida.");
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Static site ready on port ${port}`);
});
