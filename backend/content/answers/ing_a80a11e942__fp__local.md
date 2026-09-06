---
qid: ing_a80a11e942__fp__local
question: 'Explain: Step 4 - Executor — SQL Statement Execution in Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 395
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:02:54-05:00'
sources: []
---

### Step 4 – The Executor: Turning a Plan into Results  

**Fundamental problem:**  
After the optimizer has chosen an *execution plan* (a tree of operators), we must actually perform the I/O and CPU work that materialises the answer. The executor is the runtime engine that walks this tree, pulls data from storage, applies predicates, aggregates, sorts, etc., and streams rows back to the client.

**Why it must behave like a *pipeline*:**  
1. **Latency‑optimality** – Pulling one row at a time through operators keeps memory bounded and lets early filters reduce later work.  
2. **Parallelism** – Each operator can spawn worker threads that process independent partitions of its input; the executor coordinates these threads, merging streams in order or as required by semantics (e.g., `ORDER BY`).  

**Deeper principle: *Lazy evaluation* + *buffered pipelining***  
The executor implements a *lazy iterator* model: each operator exposes `next()` that returns the next row on demand. Internally it buffers only a small window of rows to satisfy ordering or aggregation, thereby keeping cache locality high and avoiding materialising entire intermediate results (a classic “no‑materialization” optimisation).

**Non‑obvious insight:**  
Most people view the executor as a black box, but its *cost model* is essentially an online algorithm: it must decide, on the fly, whether to push or pull data based on runtime statistics (e.g., row estimates). This dynamic adjustment mirrors *adaptive query processing*, where the executor revises its plan mid‑execution if observed cardinalities deviate from estimates—an elegant blend of probabilistic reasoning and real‑time optimisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
