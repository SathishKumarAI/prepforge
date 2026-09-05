---
qid: vq_f8f5676e24__fp__local
question: What is Pure function in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 333
total_tokens: 500
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:04:22-05:00'
sources: []
---

A **pure function** in Scala (or any language) is one that satisfies two conditions:

1. **Determinism:** For a given set of arguments it always returns the same result.
2. **No side‑effects:** It does not alter any state outside its own scope—no mutation, I/O, or global variable changes.

Why these rules?  
At the heart lies *referential transparency*: an expression can be replaced by its value without changing program behaviour. This property turns code into a mathematical function, enabling reasoning, memoisation, parallel execution, and formal verification. If a function had hidden state changes, substituting it with its value could break invariants or introduce race conditions.

The deeper principle is **compositionality** in functional programming: pure functions compose cleanly because their outputs depend only on inputs. This yields *modularity*—you can test, optimise, and refactor parts independently. It also aligns with the **Law of Least Astonishment**: developers expect that re‑running a function gives the same result.

A non‑obvious insight: **immutability is not enough for purity.** A function may never mutate data but still read from mutable external state (e.g., `System.currentTimeMillis`). Such reads break referential transparency because the function’s output can change over time even with identical arguments. Thus, *pure* demands both immutability of inputs and isolation from all external state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
