---
qid: ing_06fa4c34ef__faang__local
question: 'Explain: Avoid unnecessary mapped fields — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 433
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:40-05:00'
sources: []
---

**Clarify**  
You’re asked why we should *avoid mapping unused fields* and *size shards appropriately* in an Elasticsearch cluster that stores machine‑learning (ML) artifacts (e.g., feature vectors, model metadata). I’ll assume:  
- The index holds millions of documents.  
- Queries are read‑heavy (searching models by tags, metrics).  
- Storage cost is a concern.

**Approach**  
1. Review current mapping for unused fields.  
2. Quantify field size and impact on shard allocation.  
3. Re‑index with an optimized schema.  
4. Verify performance and storage gains.

**Depth**  
*Unmapped fields* inflate the **doc value** and **fielddata** structures, consuming RAM during searches and increasing index size. For ML artifacts, many fields (e.g., raw feature vectors) are rarely queried; storing them as full‑text or keyword fields is wasteful. By removing or disabling indexing (`"index": false`) for such fields, we cut the shard’s memory footprint by ~30–50 %.  

Shard sizing: each shard should hold < 5 GB of **compressed** data to avoid CPU‑bound I/O and keep recovery fast. Over‑sharding leads to overhead; under‑sharding hurts parallelism. A rule of thumb is 10–15 shards per node for a 100‑node cluster, adjusting based on query latency.

**Edge Cases**  
- If a field becomes needed later, re‑indexing costs arise.  
- Shard size too small → many shards → higher GC overhead.  
- Skipping indexing may break aggregations that rely on those fields.

**Optimize & Communicate**  
Explain the trade‑off: *less storage vs. potential loss of searchability*. Show before/after metrics (index size, query latency). Conclude that a lean mapping plus optimal shard sizing yields faster queries, lower cost, and easier cluster maintenance—exactly what a FAANG team would prioritize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
