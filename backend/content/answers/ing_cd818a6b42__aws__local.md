---
qid: ing_cd818a6b42__aws__local
question: 'Explain: Partitioning/Sharding — Partitioningsharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 346
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:05:47-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: My team was launching a recommendation engine that had to serve 10 M users per day while keeping latency under 200 ms.  
*Task*: Design the data layer so the model could ingest and query millions of feature vectors without bottlenecking.

*Action*: I introduced **partition‑by‑user‑segment** (sharding) on DynamoDB, using a composite key `{SegmentID}_{UserID}`. Each shard held 1 M users, enabling parallel writes and reads. To keep the model fresh, we ran an EMR Spark job nightly that merged shards into Parquet files stored in S3 for batch training. The streaming pipeline used Kinesis Data Streams to push real‑time updates to the nearest shard.

*Result*: Sharding cut read latency from 1 s to **<200 ms** (90% reduction) and increased throughput by **4×**, allowing us to serve 15 M predictions per day without extra hardware. Costs dropped 30% because we used on‑demand DynamoDB for the hot shards and reserved capacity for cold ones.

*Reflection*: I initially underestimated cross‑shard joins, which caused a spike in throttles during peak hours. After adding a **global secondary index** and caching Hot Users in ElastiCache Redis, we eliminated those spikes. This taught me to always model real‑world access patterns first—“Dive Deep” into traffic logs before finalizing the partition strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
