---
qid: ing_35d7aaa084__aws__local
question: 'Explain: Geo queries — Geo queries | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 672
total_tokens: 902
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:29-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the migration of our global recommendation engine from a monolithic SQL stack to an Elastic‑search powered microservice. The product team needed real‑time “geo‑nearest” queries for millions of users worldwide, each request demanding sub‑100 ms latency.

**Task (T)**  
Implement a scalable geo‑query solution that:
- Returns the top *k* nearest items within a 50 km radius
- Handles ~10 k QPS with <99th percentile >200 ms
- Keeps cost under $2 k/month

**Action (A) – Technical Design**  
1. **Data Model** – Store each item as an ES document with `location` field of type *geo_point*.  
2. **Indexing Strategy** – Use a single index per region, shard‑count = 8, replicas = 2 to balance write throughput and read availability.  
3. **Query Pattern** – Leverage the built‑in `geo_distance` query combined with a `sort` on `_geo_distance`. Example:

```json
{
  "size": 10,
  "query": {
    "bool": {
      "filter": [
        { "geo_distance": { "distance": "50km", "location": { "lat": 40.7128, "lon": -74.0060 } } }
      ]
    }
  },
  "sort": [{ "_geo_distance": { "location": { "lat": 40.7128, "lon": -74.0060 }, "order": "asc" } }]
}
```

4. **Caching & Warmers** – Enable *fielddata* caching for the `location` field and use index warmers to pre‑populate caches on node startup.  
5. **Scaling** – Deploy via Amazon OpenSearch Service (managed ES) with Auto Scaling enabled; monitor QPS, latency, and shard utilization.  
6. **Cost Optimization** – Spot instances for data nodes, reserved capacity for master nodes; use `index.refresh_interval` set to 30 s to reduce index refresh overhead.

**Result (R)**  
- Latency dropped from 1.2 s → <80 ms (99th percentile) under peak load.  
- Throughput increased to 15 k QPS without additional cost.  
- Monthly spend reduced by 35% compared to the legacy system.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered instant, location‑aware recommendations that boosted user engagement by 18%.  
- **Dive Deep & Ownership** – Designed end‑to‑end solution, tuned ES parameters, and iterated on shard strategy until metrics met SLA.  

**Bar‑raiser takeaways**  
- Demonstrates ownership: from requirement gathering to production rollout.  
- Shows depth: understanding of ES geo queries, caching, scaling, cost trade‑offs.  
- Quantified impact: clear latency & cost numbers.  
- Learning from failure: initial over‑sharding caused high GC pauses; resolved by rebalancing shards and adjusting JVM settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
