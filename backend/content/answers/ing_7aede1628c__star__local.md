---
qid: ing_7aede1628c__star__local
question: 'Explain: But it should never happen that amount — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 396
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:54-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with redesigning the recommendation engine’s data layer for an e‑commerce platform that had just hit a 2 × spike in traffic during a holiday sale. The existing monolithic MySQL schema was choking on joins and caused 5‑second query latencies, which meant users saw stale recommendations.

**Task**  
I needed to build a scalable, low‑latency data store that could support real‑time feature engineering for the ML model while keeping consistency guarantees for user profiles and purchase history. The goal was < 200 ms read latency and 99.9% uptime during peak traffic.

**Action**  
1. Decomposed the schema into three micro‑tables: `users`, `items`, and a denormalized `user_item_features` table, using columnar storage in Apache Parquet on S3 for historical data.  
2. Implemented a hybrid architecture: read‑heavy workloads hit an Amazon DynamoDB global table (partition key = user_id) with TTL for stale features; write‑heavy updates flowed through Kinesis to a Lambda that refreshed the feature store and pushed updates to Redis cache for real‑time inference.  
3. Added a secondary index on `item_id` in DynamoDB for quick item‑centric queries, and used PartiQL for ad‑hoc analytics without full table scans.  
4. Set up CloudWatch metrics to auto‑scale provisioned throughput based on request latency thresholds.

**Result**  
Latency dropped from 5 s to < 150 ms under 10× load, and the recommendation accuracy (measured by NDCG@10) improved by 12%. I learned that balancing denormalization with caching layers can dramatically reduce query cost while still enabling complex ML feature pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
