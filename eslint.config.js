import eslint from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPlugin from "eslint-plugin-eslint-plugin";
import eslintPluginN from "eslint-plugin-n";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...eslintPlugin.configs.recommended,
    ...eslint.configs.recommended,
    ...eslintPluginN.configs["flat/recommended-module"],
    languageOptions: { globals: globals.node },
  },
]);
