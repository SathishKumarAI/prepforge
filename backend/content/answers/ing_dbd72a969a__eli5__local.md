---
qid: ing_dbd72a969a__eli5__local
question: 'Explain: Hoisting — FrontEnd---JavaScript-TypeScript-React-Angular/JavaScript
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 284
total_tokens: 483
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:22:10-05:00'
sources: []
---

**Hoisting** is like a classroom where the teacher writes every lesson plan on a whiteboard before anyone arrives.  
In JavaScript (and TypeScript), the language first “scans” your code and lifts all *declarations*—functions and variables written with `var`, `let`, or `const`—to the top of their scope. It’s as if the teacher pulls every rule to the front before the class starts.

- **Function declarations** are fully moved, so you can call a function even before its text appears.
- **Variables declared with `var`** are also lifted but stay *undefined* until the line where they’re assigned.
- Variables with `let` or `const` are hoisted in name only; accessing them before the line throws an error (the “temporal dead zone”).

So, when you see code like:

```js
console.log(x);   // undefined if var, ReferenceError if let/const
var x = 5;
```

it’s because the declaration `var x` was hoisted to the top, but its value wasn’t set yet. This behavior is built into the language’s execution context and works in frameworks like React or Angular just as it does in plain JavaScript.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
