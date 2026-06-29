import eslint from "@eslint/js";
import eslintPlugin from "eslint-plugin-eslint-plugin";
import eslintPluginN from "eslint-plugin-n";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  eslintPlugin.configs.recommended,
  eslint.configs.recommended,
  eslintPluginN.configs["flat/recommended-module"],
  eslintPluginUnicorn.configs.unopinionated,
  perfectionist.configs["recommended-natural"],
  {
    rules: {
      "unicorn/filename-case": "off",
      "unicorn/no-array-reverse": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/no-top-level-side-effects": "off",
      "unicorn/prefer-await": "off",
      "unicorn/prefer-minimal-ternary": "off",
      "unicorn/prefer-number-coercion": "off",
      "unicorn/require-array-sort-compare": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
  },
]);
