import esbuild from "esbuild";
import { clean } from "esbuild-plugin-clean";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

await esbuild.build({
  entryPoints: ["src/app.ts"],
  outdir: "dist",
  assetNames: "assets/[name]-[hash]",
  entryNames: "[dir]/[name]-[hash]",
  metafile: true,
  sourcemap: false,
  bundle: true,
  minify: true,
  treeShaking: true,
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
