import { serve } from "@hono/node-server";
import app from "./petstore";

serve({
  fetch: app.fetch,
  port: 8787,
});
