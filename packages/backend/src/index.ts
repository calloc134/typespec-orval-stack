import app from "./tyorapi";
import { serve } from "@hono/node-server";
import consola from "consola";
import color from "picocolors";
const launch = () => {
  consola.box("TypeSpec & Orval Stack Server");
  serve({
    fetch: app.fetch,
    port: 3777,
  });

  consola.info(color.green(`Server running at http://localhost:3777`));

  process.on("SIGINT", () => {
    consola.info(color.white(`Server stopped`));
    process.exit(0);
  });
};

launch();
