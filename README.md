# eslint-plugin-separate-type-imports

ESLint rule to enforce separate type imports.

Splits mixed imports like:

```
import { type Foo, bar }
```

into:

```
import type { Foo }
import { bar }
```

Avoids this esbuild behavior: https://github.com/evanw/esbuild/issues/1525
