---
qid: ing_3e888a2c7b__fp__local
question: 'Explain: Memory considerations — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 378
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:17:30-05:00'
sources: []
---

**Why sorting a search query taxes RAM**

Elasticsearch executes a *search request* by scanning shards, collecting matching documents and then ordering them.  
The “sort” clause forces the engine to hold every candidate document in memory **until the final merge**.  
This is because:

1. **Deterministic order** – Sorting must be stable across all shards; each shard can produce any subset of results, so the master must aggregate and reorder the entire set.
2. **Score‑free vs score‑based** – Even when sorting by a field (e.g., `timestamp`), every document’s value has to be read into RAM; if sorting by a *script* or _score_, the computed value is stored for comparison.

Thus, the memory footprint equals  
```
#shards × (#top hits per shard) × size_of(sort key + doc id)
```

**Practical limits**

- `size` (number of returned docs) and `track_total_hits` directly influence RAM.  
- A 1 GB JVM heap can comfortably sort a few thousand documents; millions quickly exhaust the heap, triggering a *Java Heap Space* error.

**Non‑obvious tip**

Use **fielddata cache** sparingly: for keyword fields Elasticsearch loads all unique terms into memory to enable sorting. If you only need to sort by a numeric field, set `index.numeric_type` and avoid storing the term dictionary; this cuts RAM by orders of magnitude.

**Bottom line:**  
Sorting is *O(n)* in memory because every candidate must be held for global ordering. Keep `size` small, leverage native types, and disable unnecessary fielddata to keep the heap sane.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
