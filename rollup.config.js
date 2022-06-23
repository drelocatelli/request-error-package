import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
   input: "src/index.ts",
   output: [
      {
         file: pkg.main,
         format: "cjs",
         exports: "named",
         sourcemap: true,
         strict: false,
      },
      {
         file: pkg.module,
         format: 'esm',
         sourcemap: true,
      },
   ],
   plugins: [
      typescript({ objectHashIgnoreUnknownHack: true }),
   ],
};