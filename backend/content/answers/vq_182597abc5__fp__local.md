---
qid: vq_182597abc5__fp__local
question: Difference between Call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 360
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:24:32-05:00'
sources: []
---

**Call‑by‑value vs. call‑by‑name: a principled view**

At its core, a function is an *optimization* problem: given an input description, we must produce an output while minimizing resource usage (time, memory).  
- **Call‑by‑value** supplies the *evaluated result* of each argument to the function. The caller pays for evaluation once; the callee receives a concrete value and can reuse it freely. This is optimal when arguments are cheap to compute or needed multiple times.
- **Call‑by‑name** hands the *thunk*—a lazy, unevaluated representation—into the function. Each time the function accesses the parameter, the thunk re‑evaluates. The caller defers cost until it’s actually required, which is optimal when arguments are expensive or possibly never used (e.g., in short‑circuit logical operators).

The deeper principle is **cost–benefit analysis**: we trade off *evaluation effort* against *potential reuse*. Call‑by‑value embodies eager evaluation; call‑by‑name embodies demand‑driven evaluation.

**Non‑obvious insight:** In a purely functional language, *call‑by‑name can be implemented without heap allocation* by transforming the function into one that takes an explicit “force” operation. This shows that laziness is not inherently more expensive—it’s simply a different control flow shape, and with proper sharing (e.g., call‑by‑need) it can achieve both deferred evaluation and single‑time computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
