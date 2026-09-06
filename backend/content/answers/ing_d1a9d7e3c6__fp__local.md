---
qid: ing_d1a9d7e3c6__fp__local
question: 'Explain: Importance of Cardinality for Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 369
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:26:15-05:00'
sources: []
---

**Why cardinality matters in a database**

The *fundamental problem* is that every query must scan or join data rows; the cost of doing so grows with the number of distinct values (cardinality) that an indexed column can take.  
When an index is built on a high‑cardinality column, each value maps to at most one row, so a lookup touches only a few pages—\(O(\log N)\).  
If the same index covers a low‑cardinality column (e.g., gender), many rows share the key; the optimizer must read an entire bucket or use a bitmap. The query then degenerates to a table scan, \(O(N)\).

This behaviour is rooted in **information theory**: an index’s entropy equals \(\log_2\) of its cardinality. Higher entropy ⇒ more selective pointers and less I/O.  
It also ties into **graph‑based join optimization**: the expected size of a join result is inversely proportional to the product of operand cardinalities. Skewed, low‑cardinality columns inflate intermediate results, exhausting memory and forcing spills.

**Non‑obvious insight:**  
Low cardinality can *improve* performance when combined with **bitmap indexes** on highly selective predicates. The bitmap’s compactness (bit per row) turns a low‑entropy column into an efficient filter, but only if the database engine supports it and the query touches many distinct values. Thus, cardinality is not intrinsically “good” or “bad”; its impact depends on the indexing strategy and workload characteristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
