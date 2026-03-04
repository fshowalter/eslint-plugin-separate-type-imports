export default rule;
/**
 * ESLint rule to enforce separate type imports
 * Splits mixed imports like `import { type Foo, bar }` into:
 * - `import type { Foo }`
 * - `import { bar }`
 */
export type ImportDeclaration = import("estree").ImportDeclaration;
/**
 * ESLint rule to enforce separate type imports
 * Splits mixed imports like `import { type Foo, bar }` into:
 * - `import type { Foo }`
 * - `import { bar }`
 */
export type ImportSpecifier = import("estree").ImportSpecifier;
/**
 * ESLint rule to enforce separate type imports
 * Splits mixed imports like `import { type Foo, bar }` into:
 * - `import type { Foo }`
 * - `import { bar }`
 */
export type ImportDefaultSpecifier = import("estree").ImportDefaultSpecifier;
/**
 * ESLint rule to enforce separate type imports
 * Splits mixed imports like `import { type Foo, bar }` into:
 * - `import type { Foo }`
 * - `import { bar }`
 */
export type ImportNamespaceSpecifier =
  import("estree").ImportNamespaceSpecifier;
/**
 * ESLint rule to enforce separate type imports
 * Splits mixed imports like `import { type Foo, bar }` into:
 * - `import type { Foo }`
 * - `import { bar }`
 */
export type Identifier = import("estree").Identifier;
/**
 * ESLint rule to enforce separate type imports
 * Splits mixed imports like `import { type Foo, bar }` into:
 * - `import type { Foo }`
 * - `import { bar }`
 */
export type Literal = import("estree").Literal;
export type ImportDeclarationWithKind = ImportDeclaration & {
  importKind?: "type" | "value";
};
export type ImportSpecifierWithKind = ImportSpecifier & {
  importKind?: "type" | "value";
};
/** @type {import('eslint').Rule.RuleModule} */
declare const rule: import("eslint").Rule.RuleModule;
