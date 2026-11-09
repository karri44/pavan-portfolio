"use strict";
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const root = __dirname;
const args = process.argv.slice(2);
const portIndex = args.indexOf("--port");
const port = Number(
  process.env.PORT || (portIndex >= 0 ? args[portIndex + 1] : 3000),
);
const hostIndex = args.indexOf("--host");
const host =
  process.env.HOST ||
  (hostIndex >= 0 &&
  args[hostIndex + 1] &&
  !args[hostIndex + 1].startsWith("--")
    ? args[hostIndex + 1]
    : "127.0.0.1");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};
http
  .createServer((req, res) => {
    let pathname;
    try {
      pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
    } catch {
      res.writeHead(400);
      return res.end("Bad request");
    }
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405);
      return res.end("Method not allowed");
    }
    const file = path.resolve(
      root,
      "." + (pathname === "/" ? "/index.html" : pathname),
    );
    const relative = path.relative(root, file);
    if (
      relative.startsWith("..") ||
      path.isAbsolute(relative) ||
      relative.split(path.sep).some((part) => part.startsWith("."))
    ) {
      res.writeHead(403);
      return res.end("Forbidden");
    }
    fs.readFile(file, (error, data) => {
      if (error) {
        res.writeHead(404);
        return res.end("Not found");
      }
      res.writeHead(200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "no-cache",
      });
      res.end(req.method === "HEAD" ? undefined : data);
    });
  })
  .on("error", (error) => {
    console.error(
      error.code === "EADDRINUSE"
        ? `Port ${port} is in use. Try: npm run dev -- --port 3001`
        : error.message,
    );
    process.exitCode = 1;
  })
  .listen(port, host, () =>
    console.log(
      `Portfolio running at http://${host}:${port}\nPress Ctrl+C to stop.`,
    ),
  );
