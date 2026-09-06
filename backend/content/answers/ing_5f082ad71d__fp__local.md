---
qid: ing_5f082ad71d__fp__local
question: What is NaN property in JavaScript? — FrontEnd---JavaScript-TypeScript-React-Angular/JavaScript
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 342
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:26:51-05:00'
sources: []
---

In JavaScript the global `NaN` value is not a magic flag; it’s simply the *numeric* representation of an indeterminate or invalid result from a numeric operation.  
When the engine performs an arithmetic expression that cannot produce a finite number—say, dividing 0 by 0, parsing “foo” with `Number()` or performing `Math.sqrt(-1)`—the IEEE‑754 standard dictates that the result be **Not‑a‑Number**. The language exposes this as the single global property `NaN`.  

Why does it exist?  
* **Type safety**: All numeric operations must return a number type; `NaN` preserves that contract even when the value is undefined.  
* **Propagation**: In IEEE‑754, any arithmetic involving `NaN` yields `NaN`, ensuring errors bubble through calculations rather than silently yielding bogus numbers.  
* **Identity**: Unlike other values, `NaN !== NaN`. This intentional self‑inequality allows tests like `Number.isNaN(value)` to reliably detect the state without accidental true positives from other falsy or undefined values.

A subtle insight many miss: `NaN` is *the only value that is not equal to itself*. That property underpins JavaScript’s `Object.is()` implementation and explains why `=== NaN` is always false. Recognizing this identity lets you write robust checks (`Number.isNaN`, `isFinite`) rather than relying on the broken `==` or `!isNaN()`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
