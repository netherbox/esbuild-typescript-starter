import esbuild from "esbuild";
import { clean } from "esbuild-plugin-clean";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

let ctx = await esbuild.context({
  entryPoints: ["src/app.ts"],
  outdir: "dist",
  assetNames: "assets/[name]",
  entryNames: "[dir]/[name]",
  metafile: true,
  sourcemap: true,
  bundle: true,
  inject: ["./scripts/live-reload-snippet.js"],
  plugins: [
    clean({
      patterns: ["./dist/*"],
    }),
    htmlPlugin({
      files: [
        {
          entryPoints: ["src/app.ts"],
          filename: "index.html",
          htmlTemplate: "src/index.html",
        },
      ],
    }),
  ],
});

await ctx.watch();

let { host, port } = await ctx.serve({
  servedir: "dist",
});

console.log(host, port);
