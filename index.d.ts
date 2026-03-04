import type { Linter } from "eslint";

declare const plugin: {
  readonly meta: {
    readonly name: string;
    readonly version: string;
  };
  readonly configs: {
    readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
    readonly all: { readonly rules: Readonly<Linter.RulesRecord> };
  };
};

export default plugin;
