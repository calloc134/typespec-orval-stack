import safeql from "@ts-safeql/eslint-plugin/config";
import tseslint from "typescript-eslint";
import hono from "@hono/eslint-config";

export default [
  "eslint:recommended",
  hono,
  tseslint.config(
    ...tseslint.configs.recommendedTypeCheckedOnly,
    safeql.configs.connections({
      databaseUrl:
        "postgresql://postgres@localhost:5432/reserv-keion?sslmode=disable",
      targets: [{ tag: "sql", transform: "{type}[]" }],
    })
  ),
];
