---
qid: ing_0fd7837752__fp__local
question: 'Explain: LSM-Tree — B-Tree vs. LSM-Tree'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 500
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:39:17-05:00'
sources: []
---

**Why do we need a new index structure?**  
In most databases the *primary* operation is *point‑lookup*: read a key → value.  
A B‑tree guarantees \(O(\log_B N)\) disk seeks because every node contains roughly \(B\) keys and a single seek lands you on the next level.  This works great when reads dominate, but writes become expensive: inserting or updating forces a *read–modify–write* cycle for each key that may touch multiple nodes along the same path.

**Enter the LSM‑Tree (Log‑Structured Merge‑Tree).**  
Instead of touching many nodes per write, we first append all new keys to an in‑memory buffer (a sorted array).  When it overflows we *flush* the whole buffer to disk as a new immutable run.  Subsequent writes keep piling into memory; old runs are merged lazily, usually in background.  Reads must search every run (but they’re small and cached), so read cost is \(O(\log_B N + R)\) where \(R\) is the number of runs.  In practice, because most runs are tiny, reads stay fast while write amplification drops from \(\Theta(\log_B N)\) to a constant.

**Fundamental principle:**  
The LSM‑Tree trades *write locality* for *read fan‑out*.  By grouping writes into large sorted batches we exploit sequential I/O (fast on SSD/HDD) and avoid random seeks.  The immutable runs form a **merging hierarchy**, which is essentially an external‑memory priority queue—an optimal way to maintain order with minimal disk traffic.

**Non‑obvious insight:**  
The *merge schedule* can be tuned as a *multi‑objective optimization*: aggressive merging reduces read cost but increases write amplification; conservative merging does the opposite.  Most systems expose a *compaction policy* that implicitly solves this trade‑off, yet many developers treat it as a black box and overlook its impact on latency tails.

In short, B‑trees are optimal for read‑heavy workloads with low write churn, while LSM‑Trees excel when writes dominate by converting random updates into sequential flushes and background merges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
