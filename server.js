const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
// In Plesk Phusion Passenger, process.env.PORT is a named pipe/socket or string ('passenger').
// Do NOT parseInt() it, otherwise it becomes NaN and falls back to TCP 3000!
const port = process.env.PORT || 3000;

// Initialize Next.js app in production mode with built-in compression & SSR support
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
        res.setHeader("X-Render-Engine", "Next.js SSR");
        res.setHeader("X-SSR", "1");
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Error handling request:", req.url, err);
        if (!res.headersSent) {
          res.statusCode = 500;
          res.end("Internal Server Error");
        }
      }
    });

    // Optimize keep-alive timeouts for reverse proxies (Nginx / Plesk Passenger)
    // Ensures persistent TCP connections reduce TLS handshake latency for visitors
    server.keepAliveTimeout = 65000;
    server.headersTimeout = 66000;

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(
        `> Laundro-Hub SSR server listening on ${port} [mode: ${
          dev ? "development" : "production"
        }]`
      );
    });

    // Graceful shutdown handling for Plesk worker recycles
    const shutdown = () => {
      console.log("> Gracefully stopping Laundro-Hub server...");
      server.close(() => {
        console.log("> Server stopped.");
        process.exit(0);
      });
      // Force exit if hanging
      setTimeout(() => process.exit(1), 5000).unref();
    };

    process.on("SIGTERM", shutdown);
    process.on("SIGINT", shutdown);
  })
  .catch((err) => {
    console.error("Failed to prepare Next.js app:", err);
    process.exit(1);
  });
