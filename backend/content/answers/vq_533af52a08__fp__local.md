---
qid: vq_533af52a08__fp__local
question: What is the difference between call-by-value and call-by-name function parameters?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 359
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:35:21-05:00'
sources: []
---

**Call‑by‑value vs. call‑by‑name**

The fundamental problem any language must solve when it *calls* a function is how the caller’s data are presented to the callee.  
1. **Value** – The caller *evaluates* each argument, then copies its result into the callee’s parameter space.  
2. **Name** – The caller passes an unevaluated *reference* (often a thunk) that can be re‑evaluated inside the function.

Why this matters:  

- **Semantics of side effects** – In call‑by‑value, side‑effects in the argument expression occur before the function runs; in call‑by‑name they may happen multiple times or never.  
- **Lazy evaluation & infinite structures** – Call‑by‑name enables *delayed* computation, allowing functions to work on potentially infinite streams without materializing them.  
- **Optimization** – A compiler can inline a value once and reuse it; with a name it must generate a fresh thunk each time or risk recomputation.

A non‑obvious insight: **Call‑by‑name is essentially a *local* form of memoization that the programmer explicitly controls.** By wrapping an expression in a `lazy` construct (Scala) or a function argument (Haskell), you give the callee the power to decide when—and whether—to evaluate, turning what would be an eager cost into a controllable one.

Thus, call‑by‑value guarantees a single evaluation before entry; call‑by‑name defers that decision to the function body, trading predictability for flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
