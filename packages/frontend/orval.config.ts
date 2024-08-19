import { defineConfig } from "orval";

export default defineConfig({
  tyorapi: {
    output: {
      mode: "split",
      target: "src/tyorapi.ts",
      schemas: "src/schemas",
      client: "react-query",
      override: {
        query: {
          useSuspenseQuery: true,
        },
      },
    },
    input: {
      target: "../../_generated/@typespec/openapi3/openapi.yaml",
    },
  },
});
