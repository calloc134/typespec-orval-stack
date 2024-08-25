import app from "./tyorapi";
import { serve } from "@hono/node-server";
import consola from "consola";
import color from "picocolors";
import { cors } from "hono/cors";
import { Hono } from "hono";

const app_configured = new Hono();

app_configured.use(
  "*",
  cors({
    origin: "*", // とりあえず全てのリクエストを許可
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app_configured.route("/", app);

const launch = () => {
  consola.box("TypeSpec & Orval Stack Server");
  serve({
    fetch: app_configured.fetch,
    port: 3777,
  });

  consola.info(color.green(`Server running at http://localhost:3777`));

  process.on("SIGINT", () => {
    consola.info(color.white(`Server stopped`));
    process.exit(0);
  });
};

launch();
