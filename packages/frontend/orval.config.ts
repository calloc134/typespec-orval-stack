import { defineConfig } from "orval";

export default defineConfig({
  tyorapi: {
    output: {
      mode: "split",
      target: "src/hooks/query/query.ts",
      schemas: "src/types",
      client: "react-query",
      httpClient: "fetch",
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
