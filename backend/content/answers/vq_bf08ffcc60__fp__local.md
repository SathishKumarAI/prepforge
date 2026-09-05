---
qid: vq_bf08ffcc60__fp__local
question: WHAT IS A COVERING INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 402
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:54:01-05:00'
sources: []
---

A **covering index** is a design that guarantees every row in a table can be retrieved without scanning the heap or any other structure—*the index “covers” all the columns needed for the query*.  
From the perspective of query optimization, the planner must decide whether to read data via an index (index‑only scan) or via the base table (heap scan). The decision hinges on two probabilities:

1. **Index hit probability** – the chance that a row’s key is present in the index.
2. **Covering probability** – the chance that all columns required by the query are stored in the index.

If an index covers every column referenced, the covering probability becomes 1; thus the only remaining cost is the lookup of keys. This reduces I/O from *O(n)* (full table scan) to *O(k)* where *k* is the number of qualifying rows, and eliminates random heap reads.  

Mathematically, for a query that selects columns \(C\) and predicates on key \(K\), the expected cost with a covering index is  
\[E[\text{cost}] = |K|\cdot c_{\text{idx}} + |K|\cdot c_{\text{heap}},\]  
where \(c_{\text{idx}}\) is the cost of reading an index entry and \(c_{\text{heap}}\) is the negligible cost (zero when all columns are in the index).  

**Non‑obvious insight:** A covering index can be *smaller* than a non‑covering one because it need not store redundant heap pointers. By eliminating these, the index’s fan‑out increases, further reducing tree depth and improving cache locality—an effect often overlooked when designing indexes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
