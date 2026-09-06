---
qid: ing_a9ece991fd__fp__local
question: 'Explain: Composite Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 419
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:06:26-05:00'
sources: []
---

**Composite Indexes – Why they are inevitable in ML‑driven data systems**

In a relational store every query is reduced to a *set of predicates* on columns.  
A single‑column index can only accelerate lookups that match its **exact** key shape:  
`WHERE age = 42`.  
ML pipelines, however, routinely filter on several attributes simultaneously (e.g., `WHERE country='US' AND gender='M' AND age BETWEEN 25 AND 35`).  
If the engine had to scan a single‑column index for each predicate and then intersect the results, the cost would be *O(n)* per predicate plus an expensive join of intermediate sets.  

A composite (multi‑key) index solves this by **embedding all predicates into one B‑tree**: the tree’s key is a tuple `(country, gender, age)`.  
Query processing now becomes a single range scan on that tuple, turning the cost from *O(n)* to *O(log n + k)* where *k* is the number of matching rows.  

This design echoes **geometric indexing**: each row is a point in an *m*-dimensional space; a composite index partitions that space like a kd‑tree but with B‑tree guarantees, allowing efficient orthogonal range queries.  

**Non‑obvious insight:**  
Composite indexes are *not* just “more columns = better”; they also **reduce entropy** of the key distribution. By ordering columns strategically (most selective first), you shrink the fan‑out of the tree, yielding tighter leaf node ranges and lower I/O even if the index size grows. This subtle ordering can be the difference between a 10× speedup and a 2× slowdown in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
