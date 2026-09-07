---
qid: ing_7db4a47230__faang__local
question: 'Explain: Sorting numeric fields — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 459
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:37:35-05:00'
sources: []
---

**Clarify**  
We need to explain how *numeric field sorting* works in **Elasticsearch**, specifically for search result ordering. Assume the user wants deterministic order, knows index mappings, and is using a typical query DSL.

**Approach**  
1. Map numeric fields (`int`, `float`, etc.) with a normalizer that stores them as doc values (default).  
2. In the search request, add a `_sort` clause pointing to the numeric field, optionally specifying `order: asc/desc`.  
3. Elasticsearch uses the stored *doc values* to retrieve the numeric value for each hit and applies a quick in‑memory sort on the shard level, then merges across shards.

**Depth**  
- **Doc values** are columnar, disk‑efficient structures that allow fast random access without loading whole documents.  
- Sorting is performed **shard‑by‑shard**: each shard sorts its hits locally; the coordinator node merges sorted lists (k‑way merge). Complexity ≈ *O(N log k)* where `N` = total hits, `k` = shards.  
- For large result sets (`size > 10k`) use **search_after** or **composite aggregations** to avoid deep pagination overhead.  
- To guarantee deterministic order when numeric values tie, add a second sort on `_score` or `_id`.

**Edge Cases**  
- Missing values: `missing` parameter (`_last`, `_first`, or a custom value).  
- Null vs. zero: numeric nulls are treated as missing; they appear last unless overridden.  
- Very large numbers may overflow the chosen type; ensure mapping matches data range.

**Optimize & Communicate**  
- Use **fielddata cache** sparingly; for text fields sorting requires fielddata, which is memory‑heavy.  
- Prefer numeric types over strings to avoid unnecessary conversions.  
- Explain that sorting on non‑docvalue fields forces Lucene’s `FieldCache`, potentially causing OOM.  

By mapping correctly, leveraging doc values, and using pagination tricks, you achieve efficient, deterministic numeric sorting in Elasticsearch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
