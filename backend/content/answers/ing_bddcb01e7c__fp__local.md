---
qid: ing_bddcb01e7c__fp__local
question: 'Explain: Indexing — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 388
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:47:06-05:00'
sources: []
---

**Indexing as an Information‑Retrieval Optimizer**

The core problem a database faces is *how to answer a query in sub‑linear time*.  
A table of \(N\) rows stored sequentially forces the engine to scan every row, yielding \(O(N)\).  
An index is a compact *summary* that maps key values to physical locations.  It turns a
full scan into a binary search on the summary and then a targeted fetch: \(O(\log N)+k\), where \(k\) is the number of matching rows.

Why must an index be sorted?  
Because sorting imposes a *total order* that lets us bisect the key space.  Without it, we would need to scan all entries in the index itself.  The sorted structure (B‑tree, hash bucket, or bitmap) embodies the principle of **divide‑and‑conquer**: each comparison eliminates half the search space.

The deeper insight is that an index trades *storage* for *entropy reduction*.  
By pre‑computing a low‑entropy mapping from high‑dimensional data to a one‑dimensional key, we compress the search problem.  The index itself becomes a probabilistic model: its fan‑out and leaf distribution approximate the data’s empirical distribution, enabling efficient locality‑preserving access patterns.

**Non‑obvious take‑away:**  
An index is not just “extra rows”; it is an *information‑theoretic sketch* of the table.  Its design (order, granularity, clustering) directly reflects the expected query workload and data distribution—tuning the sketch to match those statistics yields the largest performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
