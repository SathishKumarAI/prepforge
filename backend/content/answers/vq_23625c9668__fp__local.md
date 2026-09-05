---
qid: vq_23625c9668__fp__local
question: Explain about a Clustered Index.?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 358
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:26:35-05:00'
sources: []
---

### Why a clustered index is necessary

When a database table is queried, the engine must locate rows that satisfy a predicate.  
Without any ordering, it would have to scan every page—an \(O(n)\) operation.  
A *clustered index* imposes a physical order on the data pages so that all rows sharing
the same key value are stored contiguously. This turns the search into an \(O(\log n)\) binary‑search over the index tree, followed by a single sequential read of the matching block.

### Deeper principle: locality of reference

A clustered index exploits **spatial locality**—rows that are logically related (same key range) are physically adjacent. Disk I/O is orders of magnitude slower than memory access; thus, minimizing seeks and maximizing sequential reads directly reduces latency, a classic optimization in systems design.

### One non‑obvious insight

Because the table’s physical order changes with each clustered index creation, **only one** such index can exist per table (the “clustered” part). If you need multiple sorted views, create *non‑clustered* indexes that store separate key–row-pointer structures. The trade‑off is that updates must maintain both the data pages and any non‑clustered index pages, so clustered indexes are best for tables with heavy read‑heavy workloads and infrequent writes.

> In short: a clustered index turns an unordered collection into a sorted array on disk, turning costly scans into efficient seeks plus sequential reads—an elegant application of locality to I/O optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
