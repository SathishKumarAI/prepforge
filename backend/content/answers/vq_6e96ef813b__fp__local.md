---
qid: vq_6e96ef813b__fp__local
question: What is call-by-name?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 385
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:39:52-05:00'
sources: []
---

**Call‑by‑Name: A Lazy Parameter‑Passing Principle**

When a function receives an argument, the caller may either *evaluate* it before passing (call‑by‑value) or *delay* evaluation until the callee actually uses it (call‑by‑name).  
Why delay? In data‑engineering pipelines we often deal with huge streams or distributed tables. Evaluating a sub‑query eagerly forces materialization of entire datasets, consuming memory and I/O that may never be needed. Call‑by‑name treats the argument as an *expression* (a thunk) that is re‑evaluated each time it’s referenced, allowing the callee to decide when, how many times, or even if at all, the data should be fetched.

Mathematically this is a form of **lazy evaluation**—the expression \(E\) is mapped to a *callable* \(\lambda.\,E\). The semantics preserve referential transparency: replacing the thunk with its eventual value yields the same observable behavior. In practice, frameworks like Spark’s `Dataset` APIs expose this via *lazy transformations*: `map`, `filter` merely build a plan; execution (and thus evaluation of underlying data) is deferred until an action (`collect`, `count`) triggers it.

**Non‑obvious insight:** Call‑by‑name is not just memory saving; it enables **optimizable pipelines**. Because the expression isn’t executed, the engine can reorder or fuse operations, eliminating unnecessary scans—essentially turning a series of lazy calls into a single query plan that respects data locality and avoids materializing intermediate results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
