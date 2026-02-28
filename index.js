import fs from "node:fs";

import separateTypeImports from "./separate-type-imports.js";

const pkg = JSON.parse(
  fs.readFileSync(new URL("package.json", import.meta.url), "utf8"),
);

const plugin = {
  // preferred location of name and version
  configs: {},
  meta: {
    name: pkg.name,
    namespace: "separate-type-imports",
    version: pkg.version,
  },
  rules: {
    "separate-type-imports": separateTypeImports,
  },
};

// assign configs here so we can reference `plugin`
Object.assign(plugin.configs, {
  recommended: [
    {
      plugins: {
        "separate-type-imports": plugin,
      },
      rules: {
        "separate-type-imports/separate-type-imports": "error",
      },
    },
  ],
});

export default plugin;
