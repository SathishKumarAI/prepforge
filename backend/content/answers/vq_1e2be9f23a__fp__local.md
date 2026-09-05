---
qid: vq_1e2be9f23a__fp__local
question: What is the difference between Table scan and seek ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 336
total_tokens: 506
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:25:33-05:00'
sources: []
---

**Why a “seek” is preferable to a full table scan**

When a query asks for rows that satisfy a condition on an indexed column, the engine can *seek* directly to those rows by following the index tree (B‑tree or hash).  
A seek’s cost is proportional to the depth of that tree – log₂N comparisons plus constant‑time pointer hops.  

In contrast, a table scan reads every row sequentially, regardless of whether it matches. Its cost grows linearly with N and pays the penalty for reading data blocks that are never used.

From an **information‑theoretic** view, a seek reduces entropy: knowing the sought key value tells us exactly where to look, collapsing uncertainty from log₂N possibilities to 1. A scan leaves all N rows equally likely until it is read.  

The deeper principle is **locality of reference**: a seek exploits spatial locality by touching only the few blocks that contain matching tuples; a scan violates this and forces random I/O if the table is not cached.

*Non‑obvious insight:* Even when an index exists, a seek may still be slower if the predicate matches a large fraction of rows (high cardinality). In such cases, the cost of following many leaf pointers outweighs the benefit of skipping unrelated data. The optimizer must therefore compare *selectivity* against I/O costs—an instance of the classic *cost‑based optimization* problem in database engines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
