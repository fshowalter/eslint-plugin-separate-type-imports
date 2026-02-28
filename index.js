import fs from "fs";
import separateTypeImports from "./separate-type-imports.js";

const pkg = JSON.parse(
  fs.readFileSync(new URL("./package.json", import.meta.url), "utf8"),
);

const plugin = {
  // preferred location of name and version
  meta: {
    name: pkg.name,
    version: pkg.version,
    namespace: "separate-type-imports",
  },
  configs: {},
  rules: {
    "separate-type-imports": separateTypeImports,
  },
};

// assign configs here so we can reference `plugin`
Object.assign(plugin.configs, {
  recommended: [
    {
      rules: {
        "separate-type-imports/separate-type-imports": "error",
      },
    },
  ],
});

export default plugin;
