---
qid: ing_5f082ad71d__faang__local
question: What is NaN property in JavaScript? — FrontEnd---JavaScript-TypeScript-React-Angular/JavaScript
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 279
output_tokens: 493
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:05-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *“What is NaN in JavaScript?”*  
I’ll confirm they mean the global `NaN` value, its origin, and how it behaves in numeric operations.

---

### Approach
1. Explain the definition of `NaN`.  
2. Highlight its unique properties (self‑inequality, type).  
3. Show typical pitfalls and best practices for detection.  
4. Mention related constants (`Number.NaN`, `isNaN`, `Number.isNaN`).  

---

### Depth
- **Definition**: `NaN` stands for *Not a Number*—a numeric primitive representing an undefined or unrepresentable value (e.g., `0/0`, `parseInt('foo')`).  
- **Type & Equality**: It is of type *Number*, but it is the only value that is not equal to itself: `NaN === NaN` → `false`.  
- **Detection**:  
  - Legacy: `isNaN(value)` coerces to number, so `isNaN('foo')` → `true`.  
  - Modern: `Number.isNaN(value)` checks type first, safer for non‑numeric strings.  
- **Practical Use**: When parsing JSON or performing math, always guard against `NaN`; otherwise arithmetic chains can silently propagate errors.

---

### Edge Cases
- `isNaN(undefined)` → `true` (coerced to NaN).  
- `Number.isNaN(undefined)` → `false`.  
- `parseFloat('')` returns `NaN`.  

Test scenarios: division by zero, invalid string parsing, and use of both detection functions.

---

### Optimize & Communicate
Explain that `Number.isNaN` is preferable in modern codebases to avoid accidental type coercion. Mention that libraries often wrap this check. Conclude with a short code snippet demonstrating safe numeric parsing.  

> **Example**  
> ```js
> const val = parseInt(input, 10);
> if (!Number.isNaN(val)) { /* use val */ }
> ```
This structured answer showcases clear communication, depth of knowledge, and awareness of best practices—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
