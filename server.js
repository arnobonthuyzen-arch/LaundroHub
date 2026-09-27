const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "localhost";
const port = parseInt(process.env.PORT, 10) || 3000;

// Initialize Next.js app in production mode with built-in compression & SSR support
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
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
        `> Laundro-Hub SSR server listening on port ${port} [mode: ${
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
