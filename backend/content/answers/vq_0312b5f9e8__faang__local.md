---
qid: vq_0312b5f9e8__faang__local
question: What is the difference between a call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 546
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:18-05:00'
sources: []
---

**Clarify**  
You’re asking how *call‑by‑value* differs from *call‑by‑name*. I’ll assume we’re talking about function arguments in a language that supports both (e.g., Scala or early ML). The goal is to explain evaluation strategy, side‑effects, and performance implications.

---

### 1. Approach  
- Define each strategy.  
- Highlight when each is evaluated.  
- Compare effects on side‑effects, lazy evaluation, and potential pitfalls.  

---

### 2. Depth (Core Answer)

| Feature | Call‑by‑Value | Call‑by‑Name |
|---------|---------------|--------------|
| **Evaluation time** | Argument expression is *fully evaluated* before the call. | Argument is *re‑evaluated* every time it’s referenced inside the function. |
| **Side‑effects** | Any side‑effect in the argument happens once, before the callee runs. | Side‑effects happen each time the parameter is accessed; can lead to repeated I/O or expensive work. |
| **Performance** | One evaluation → O(1) cost for passing. | Potentially many evaluations → O(n) if referenced n times; but avoids costly work if never used (lazy). |
| **Memory** | Stores a concrete value. | Stores the expression (closure); no immediate memory overhead. |
| **Use‑case** | When you need a stable, pre‑computed value. | For lazy evaluation, infinite data structures, or to avoid unnecessary work. |

---

### 3. Edge Cases  
- **Infinite recursion**: `f(while(true) { ... })` crashes with call‑by‑value but can be handled lazily in call‑by‑name if the function never uses it.  
- **Mutating state**: Repeated evaluation may change program semantics (e.g., reading a mutable counter).  
- **Performance regressions**: Accidentally passing an expensive lambda by name causes hidden O(n) costs.

---

### 4. Optimize & Communicate  
When designing APIs, prefer call‑by‑value for safety and predictability; reserve call‑by‑name for truly lazy contexts (e.g., streams). Document the strategy so callers know whether side‑effects will be duplicated or suppressed. In languages like Scala, use `=> T` to indicate by‑name and wrap with `.lazyVal` if you need a single evaluation.

*This answer balances clarity, technical depth, and practical guidance—key signals for FAANG interviewers.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
