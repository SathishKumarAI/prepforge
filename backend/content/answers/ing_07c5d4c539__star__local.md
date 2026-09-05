---
qid: ing_07c5d4c539__star__local
question: 'Explain: Sizing considerations — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:44:23-05:00'
sources: []
---

**Situation:** In my last role I was building a recommendation engine that stored user interaction logs in Elasticsearch to power real‑time feature calculations. Our data volume had grown from 10 GB/day to 250 GB/day, and we needed sub‑second search latency for the model pipeline.

**Task:** I had to design shard allocation—decide how many primary shards per index and whether to use rollover or split indices—to keep query performance within SLA while avoiding cluster resource exhaustion.

**Action:** I started by profiling the average document size (≈1.2 KB) and typical query patterns (mostly term filters on user_id). Using the “shard‑per‑node” rule, I calculated that a 64‑GB heap node could comfortably hold 5 primary shards with 8 GB per shard, leaving headroom for replicas. I then set up a daily rollover index policy: each day’s data went into its own index, capped at 10 GB before rolling over. For hot traffic, I enabled hot‑warm tiers and moved older indices to the warm tier after 7 days. I also tuned refresh intervals (from 1s to 30s) and used bulk indexing with batching of 5k docs.

**Result:** After deployment, query latency dropped from 350 ms to under 80 ms for the critical feature lookups. Indexing throughput increased by 40%, and we avoided shard “unhealthy” states that previously caused node restarts. I learned that realistic sizing comes from combining document metrics, query patterns, and elastic’s tiered architecture rather than a one‑size‑fits‑all rule.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
