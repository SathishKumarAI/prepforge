---
qid: ing_353dc38738__star__local
question: 'Explain: Database architecture and scaling — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 377
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:36-05:00'
sources: []
---

**Situation** – At my previous startup we built a recommendation engine that processed user interaction logs for 12 million daily active users. The analytics pipeline was written in Python and used a single‑node MongoDB instance to store raw event data; as traffic grew, the database hit 250 GB and query latency spiked to 300 ms during peak hours.

**Task** – I had to design a scalable storage layer that would keep write throughput above 10k ops/sec while maintaining sub‑200 ms read latency for our ML feature extraction jobs.

**Action** – I introduced MongoDB sharding. First, I defined a shard key on the `user_id` field and created three shards across separate servers in different availability zones. Using the `mongos` router, I migrated 70 GB of data with `shardCollection`. To keep the chunks balanced, I enabled auto‑split and set chunk size to 64 MB, then monitored the balancer via Ops Manager. For writes, I wrapped event ingestion in a bulk write pipeline that used unordered inserts, reducing round‑trips. On the read side, I indexed `event_type` and `timestamp` on each shard, allowing our Spark jobs to pull only relevant partitions.

**Result** – After deployment, write throughput increased to 15k ops/sec with no dropped connections, while query latency fell from 300 ms to 80 ms during peak load. The sharded cluster also reduced the total storage cost by 30% due to more efficient disk usage. I learned that choosing the right shard key and tuning chunk size are critical for balancing load in a real‑time ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
