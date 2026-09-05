---
qid: ing_002cbb6e70__star__local
question: 'Explain: Anti-patterns for partition keys — Partitionkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 349
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:53-05:00'
sources: []
---

**Situation** – While leading a data‑engineering sprint for our recommendation engine, the team was tempted to use user IDs as the sole partition key in Cassandra because it matched the natural request pattern (one row per user). The dataset had over 50 million users and each user’s interactions grew linearly.

**Task** – I needed to redesign the schema so that read/write throughput stayed predictable under peak load, while keeping query latency below 20 ms for top‑k recommendations.

**Action** – First, I analyzed the traffic heatmap and discovered a “hot spot” problem: active users generated >10× more writes than dormant ones. We switched to a composite partition key of `{region_id}_{shard}` where `shard = hash(user_id) % 256`. This spread writes evenly across nodes. Then we added a time‑bucket column (`day`) and used a TTL of 90 days for older interactions, keeping the table size bounded. Finally, I introduced secondary indexes on `product_category` to support cold‑start queries without scanning the entire partition.

**Result** – The write amplification dropped from 1.8× to 0.9×, and read latency for recommendation requests fell from 120 ms to 18 ms during peak traffic. We also cut disk usage by 35 % thanks to TTL pruning. I learned that choosing a stable, high‑cardinality partition key and adding time bucketing are essential anti‑patterns to avoid when scaling NoSQL workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
