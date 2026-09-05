---
qid: vq_3c9537f739__fp__local
question: WHAT IS AN INDEX IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 341
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:31:46-05:00'
sources: []
---

**What is an index in SQL?**  
At its core, a database query asks: “Find me the rows that satisfy these predicates.” A table can be seen as a list of tuples; scanning it linearly costs *O(n)* per query. An **index** is a secondary data structure that reorganizes the tuples so that the search operation becomes sub‑linear—typically *O(log n)* for balanced tree indexes or *O(1)* for hash indexes.

Why must this happen? Consider the **information‑theoretic lower bound** on lookup: to distinguish among *n* rows, any deterministic data structure needs at least \(\log_2 n\) bits of decision information. A B‑tree index stores keys in a sorted order, allowing binary decisions at each node; each comparison eliminates half the remaining space, matching that bound while keeping disk I/O minimal because tree nodes are page‑aligned.

An often overlooked insight is that **indexes are not just “look‑ups” but also ordering mechanisms**. When a query requests an ordered result (`ORDER BY`), a well‑placed index can supply the data already sorted, eliminating an expensive merge sort. Thus, indexes simultaneously reduce search cost *and* ordering cost—two separate optimization problems unified in one structure.

In short, an SQL index is a carefully balanced, disk‑aware lookup table that turns linear scans into logarithmic searches and, when chosen correctly, can also satisfy ordering requirements for free.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
