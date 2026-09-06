---
qid: ing_48a0a55a46__fp__local
question: 'Explain: Bitmap Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 420
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:39:47-05:00'
sources: []
---

**Bitmap Indexes – the “bit‑wise oracle” of database design**

When a query asks *“which rows satisfy A = v?”* we want an *exact, constant‑time selector*.  
Imagine each row as a point in a high‑dimensional space; the predicate defines a hyperplane that cuts out a subset.  
Representing this subset by a bit vector of length *N* (the number of rows) gives us a *bitmap*: 1 for “row satisfies” and 0 otherwise.  

Why must we use bits?  
1. **Storage efficiency**: One bit per row → compression is trivial; run‑length encoding or packed words reduce size by 8×–32×, especially when the predicate’s selectivity is low (sparse bitmap).  
2. **Set algebra in hardware**: AND/OR/XOR of two predicates become single word‑level bitwise operations—O(1) per machine word, far faster than scanning indexes or tables.  
3. **Deterministic cardinality**: The count of 1’s (population count) is exact; no estimation error as in B‑trees.  

A deeper principle: bitmap indexes are *compressed bitmap indices*, an instance of *information theory* applied to data structures—each predicate stores the minimal sufficient statistic for that Boolean function.  
**Non‑obvious insight:** When multiple bitmaps overlap heavily (high correlation), a naïve bitmap index can explode in size. The key trick is *bitmap packing* by **frequency ordering**: store rare values first, then use *bit‑vector compression schemes* (EWAH, Concise) that exploit long runs of zeros/ones induced by this order. This transforms what could be an O(N) space problem into a logarithmic one while preserving constant‑time query speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
