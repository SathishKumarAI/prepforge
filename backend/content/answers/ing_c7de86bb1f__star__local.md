---
qid: ing_c7de86bb1f__star__local
question: 'Explain: Sharding based on the tweet object — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 309
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:09:25-05:00'
sources: []
---

**Situation:**  
At a startup building a real‑time analytics platform for social media, we had to ingest millions of tweets per hour from the Twitter Search API. Our single PostgreSQL instance was choking on write throughput and our dashboards lagged by minutes.

**Task:**  
Design a sharding strategy that would keep writes fast, enable efficient range queries on tweet timestamps, and allow us to scale horizontally without rewriting application code.

**Action:**  
I proposed sharding the tweet table by hashing the `tweet_id` into 32 partitions, each backed by its own PostgreSQL replica. To preserve chronological order for time‑based analytics, I added a secondary index on `created_at` within each shard and used a partitioned materialized view to aggregate counts per hour across all shards. For query routing, I wrote a lightweight middleware that hashed incoming tweet IDs to the correct shard before insertion, and distributed read queries by querying only the relevant shards in parallel via a ThreadPoolExecutor. This kept write latency under 5 ms and allowed us to add new shards on demand.

**Result:**  
Write throughput increased from 2k TPS to 35k TPS, and dashboard refresh time dropped from 3 minutes to 12 seconds. The system now supports 100M tweets/day with linear scaling, and I learned the importance of combining hash‑based sharding for writes with secondary indexes for efficient range queries in a real‑time data pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
