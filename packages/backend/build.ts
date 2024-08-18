import { build } from "esbuild";

await build({
  entryPoints: ["src/index.ts"],
  format: "esm",
  platform: "node",
  outbase: "src",
  outdir: "dist",
  packages: "external",
  outExtension: {
    ".js": ".mjs",
  },
  bundle: true,
  sourcemap: true,
  banner: {
    // refer to https://zenn.dev/junkor/articles/2bcd22ca08d21d
    js: 'import { createRequire } from "module"; import url from "url"; const require = createRequire(import.meta.url); const __filename = url.fileURLToPath(import.meta.url); const __dirname = url.fileURLToPath(new URL(".", import.meta.url));',
  },
});
