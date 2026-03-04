export default plugin;
declare namespace plugin {
  namespace configs {
    let recommended: import("eslint").Linter.Config;
  }
  namespace meta {
    let name: any;
    let namespace: string;
    let version: any;
  }
  let rules: {
    "separate-type-imports": import("eslint").Rule.RuleModule;
  };
}
