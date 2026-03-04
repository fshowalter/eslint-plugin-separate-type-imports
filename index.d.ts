export default plugin;
declare namespace plugin {
    let configs: {};
    namespace meta {
        let name: any;
        let namespace: string;
        let version: any;
    }
    let rules: {
        "separate-type-imports": import("eslint").Rule.RuleModule;
    };
}
