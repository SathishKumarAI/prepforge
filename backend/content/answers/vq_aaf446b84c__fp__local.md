---
qid: vq_aaf446b84c__fp__local
question: WHAT IS AN INDEX SCAN VERSUS AN INDEX SEEK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 340
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:50:45-05:00'
sources: []
---

In a database, an **index** is a sorted list of key‑value pairs that points to data pages.  
The *fundamental problem* it solves is: “How can I locate the rows that satisfy a predicate with minimal I/O?”  

An **Index Seek** is the optimal answer when the search condition is *specific enough* to jump directly to the desired keys. It performs a binary‑search on the index tree, descending from the root to a leaf node that contains exactly (or tightly bounds) the sought key(s). The cost is logarithmic in the number of indexed rows, and only the pages along that single path are read—usually one or two page I/Os.

An **Index Scan** is used when the predicate matches *many* index entries, so a seek would still require visiting almost every leaf. Instead, the engine reads each leaf node sequentially (a full scan of the index). The cost is linear in the number of qualifying rows, but because the leaves are stored contiguously on disk, I/O can be highly efficient.

**Non‑obvious insight:**  
A scan may actually be cheaper than a seek when the predicate covers > ~70 % of the table. Although a seek is log‑time, it still incurs at least one random page read per qualifying row; scanning turns that into a single sequential pass, amortizing the disk head movement cost. Thus, the optimizer’s decision hinges on *selectivity* and physical layout, not merely on whether “seek” or “scan” sounds faster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
