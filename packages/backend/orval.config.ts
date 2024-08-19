import { defineConfig } from "orval";

export default defineConfig({
  tyorapi: {
    output: {
      mode: "split",
      target: "src/tyorapi.ts",
      client: "hono",
      override: {
        hono: {
          handlers: "src/handlers",
        },
        zod: {
          generate: {
            body: true,
            response: true,
            param: true,
            header: true,
            query: true,
          },
          strict: {
            response: true,
          },
          // よくわからない部分なので調べる
          //   preprocess: {
          //     response: {
          //       name: "stripNill",
          //       path: "./src/mutators.ts",
          //     },
          //   },
        },
      },
    },
    input: {
      target: "../../_generated/@typespec/openapi3/openapi.yaml",
    },
  },
});
