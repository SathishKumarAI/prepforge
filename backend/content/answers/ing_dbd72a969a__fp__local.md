---
qid: ing_dbd72a969a__fp__local
question: 'Explain: Hoisting — FrontEnd---JavaScript-TypeScript-React-Angular/JavaScript
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 419
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:46:34-05:00'
sources: []
---

**Hoisting: the compiler’s “look‑ahead” for bindings**

At its core, hoisting solves a *scope‑resolution* problem: when an identifier is referenced before the line that declares it, JavaScript must still decide what value to bind to that name. The language’s interpreter therefore performs a two‑pass compilation:

1. **Declaration pass** – all `var`, function declarations, and `let/const` bindings are collected into the activation object (the lexical environment).  
2. **Execution pass** – code runs line by line with those bindings already present.

This mirrors *static analysis* in compilers: you need a symbol table before you can resolve references. In JavaScript the first pass is intentionally *lazy*: only the declaration part of a statement is processed, not its initializer. That’s why `var x = 5;` creates `x` at the top with value `undefined`, whereas `let/const` are created in the *temporal dead zone* (TDZ) and throw if accessed before initialization.

The deeper principle is **deferred evaluation**—bindings exist but their values may not. Hoisting guarantees that a program’s free variables can always be resolved, enabling features like function expressions (`function f(){}`) to be called before they appear in source order.

> **Non‑obvious insight:**  
> Hoisting is *not* about “moving code up”; it’s about moving *declarations* into the lexical environment early. The initializer remains where it was, so side effects happen only when execution reaches that line. This subtlety explains why `var x = 1;` and `x = 1;` differ: the former creates a binding in the first pass, while the latter merely assigns to an already‑existing global property.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
