---
qid: ing_53f8988b2d__faang__local
question: 'Explain: Difference between “ == “ and “ === “ operators.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 458
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:59:34-05:00'
sources: []
---

**Clarify**  
You’re asking about JavaScript’s equality operators.  
* `==` (loose equality) compares values after type coercion.  
* `===` (strict equality) compares both value **and** type without converting.

Assumptions: the context is JS (ES5/ES6), not TypeScript or another language.

---

**Approach**  
1. Define each operator’s semantics.  
2. Show a concise truth table of common cases.  
3. Explain coercion rules that make `==` behave unexpectedly.  
4. Recommend using `===` unless a specific conversion is needed.

---

**Depth**  

| Value  | `5 == "5"` | `5 === "5"` |
|--------|------------|-------------|
| `null` | false      | false       |
| `undefined` | false | false |
| `0`    | true (coerces `"0"` to 0) | false |

Key coercion rules for `==`:  
- `null == undefined` → **true**.  
- Any number compared to a string triggers `Number(string)` conversion.  
- Boolean is coerced to number (`true → 1`).  
- Objects are converted via their `valueOf()` or `toString()`.

Because of these conversions, bugs like `"0" == false` (true) can surface. `===` skips all this and simply checks if the two operands are identical in type and value.

---

**Edge cases**  
* `NaN === NaN` → **false**; use `Number.isNaN`.  
* `-0 === +0` → **true**, but `Object.is(-0, +0)` distinguishes them.  
* Comparing arrays or objects with `==` returns true only if they reference the same object.

---

**Optimize & communicate**  
Always default to `===` for safety and readability; reserve `==` for legacy code that explicitly requires coercion. Explain this choice during a review: “Using strict equality prevents accidental type conversion bugs, keeps the logic clear, and aligns with modern JS best practices.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
