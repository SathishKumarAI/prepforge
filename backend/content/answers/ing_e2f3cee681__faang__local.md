---
qid: ing_e2f3cee681__faang__local
question: 'Explain: Aggregations — Aggregations | Elasticsearch: The Definitive Guide
  [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 552
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:26:52-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how *aggregations* work in Elasticsearch, referencing the “Aggregations” chapter of *Elasticsearch: The Definitive Guide (2.x)*. I’ll assume they’re familiar with basic ES concepts (documents, indices) and that we’re focusing on the 5‑year‑old API surface.

**Approach**  
1. Define what an aggregation is (a way to compute metrics or group data).  
2. Explain the key types: *bucket* vs *metric*.  
3. Walk through a typical JSON DSL request, showing how filters, sub‑aggs, and ordering are composed.  
4. Highlight execution flow: query → filter → bucket formation → metric calculation.  
5. Mention performance knobs (shard-level aggregation, `pipeline` aggs).  

**Depth**  
Aggregations let you compute statistics (avg, sum, min/max), histograms, date ranges, terms buckets, etc., directly on the index, avoiding pulling data client‑side. A bucket agg (e.g., `terms`) groups docs by a field; a metric agg (`avg`) then aggregates over each bucket. Sub‑aggregations nest arbitrarily deep, enabling multi‑dimensional analysis. The DSL is JSON‑based; an example:

```json
{
  "size":0,
  "aggs":{
    "by_user":{"terms":{"field":"user_id"}},
    "stats_over_time":{
      "date_histogram":{"field":"timestamp","interval":"day"},
      "aggs":{"avg_score":{"avg":{"field":"score"}}}
    }
  }
}
```

Execution happens in two phases: each shard processes the query and emits local buckets; then a single node merges them, applying any pipeline aggs (e.g., moving average). Complexity is linear in matched docs plus bucket cardinality.  

**Edge Cases**  
- High‑cardinality fields → many shards + memory pressure.  
- Nested documents require `nested` agg wrappers.  
- Empty result sets produce zero buckets; need to handle that client‑side.  

**Optimize & Communicate**  
To improve, use `composite` aggs for deep pagination instead of `terms` with `from/size`. Cache frequently used aggregations via `search_type=dfs_query_then_fetch`. In an interview I’d emphasize clear trade‑offs: richer results vs. shard load, and how to profile using the `_explain` API. This structured walk‑through demonstrates both conceptual grasp and practical nuance expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
