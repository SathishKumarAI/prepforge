---
qid: ing_7cec8b90b1__faang__local
question: What is an Immediately Invoked Function in JavaScript?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 401
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:34:34-05:00'
sources: []
---

**Clarify**  
The interviewer wants the definition and practical use of a *Immediately Invoked Function Expression* (IIFE) in JS.  
Assumptions:  
- The audience knows basic function syntax.  
- They’re interested in why we’d execute a function right away rather than later.

**Approach**  
Explain IIFE as an anonymous function wrapped in parentheses, followed by `()` to invoke it immediately. Then show typical use‑cases (scope isolation, module pattern, avoiding globals).

**Depth**  
```js
// Classic IIFE
(function () {
  const secret = 'hidden';
  console.log(secret); // prints hidden
})();

// Arrow‑function variant
(() => { /* … */ })();
```
- The outer parentheses force the interpreter to treat the function as an expression.  
- The trailing `()` invokes it instantly, returning whatever value (or nothing).  
- Variables inside are block‑scoped (`let/const`) or function‑scoped (`var`), preventing leakage into the global namespace—useful for creating private state before ES6 modules existed.

**Edge Cases**  
- **Syntax errors**: missing parentheses or semicolons can cause “unexpected token” bugs.  
- **Return values**: if you need to expose something, assign the result to a variable (`const foo = (function(){…})();`).  
- **Strict mode**: IIFE runs in strict mode if you add `'use strict';` inside.

**Optimize & Communicate**  
Mention that with ES6 modules, IIFEs are less necessary for namespacing, but they’re still handy for self‑contained initialization or legacy code. Clarify trade‑offs: readability vs. immediate execution overhead (negligible). End by summarizing the pattern’s role in encapsulation and preventing global pollution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
