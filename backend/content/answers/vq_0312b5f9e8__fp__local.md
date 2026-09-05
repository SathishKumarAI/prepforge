---
qid: vq_0312b5f9e8__fp__local
question: What is the difference between a call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 420
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:43-05:00'
sources: []
---

### Call‑by‑Value vs. Call‑by‑Name: A First‑Principles View

Both mechanisms decide **when** and **how often** an argument’s expression is evaluated, but they arise from fundamentally different optimization goals.

| Aspect | Call‑by‑Value (CBV) | Call‑by‑Name (CBN) |
|--------|--------------------|-------------------|
| Evaluation timing | Immediately, before the call | Lazily, each time the parameter is accessed inside the function |
| Value semantics | Argument is *evaluated* once; a copy of its value is passed | Argument is *passed as an unevaluated thunk*; evaluation is deferred |
| Resource usage | May waste computation if the argument isn’t used or is used many times | Avoids needless work but may recompute expensive expressions repeatedly |

**Why CBV must evaluate early:**  
In a deterministic data‑pipeline, you want to avoid side effects leaking into shared state. Evaluating upfront guarantees that the function receives a concrete value, enabling optimizations like inlining and constant propagation.

**Why CBN can be advantageous:**  
When the argument is expensive or potentially infinite (think streams), deferring evaluation turns a *potential* cost into an *actual* cost only when needed—this is the essence of lazy evaluation. It also supports *conditional execution*: if a branch never uses the parameter, its thunk never runs.

**Non‑obvious insight:**  
CBN’s “repeated evaluation” can be mitigated by **sharing** thunks (memoization). In practice, many languages implement CBN with *call‑by‑need*, which evaluates once and caches the result. Thus, what appears as a difference in semantics is actually an optimization trade‑off between eager computation and lazy sharing—rooted in the principle of *information cost* versus *computation cost*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
