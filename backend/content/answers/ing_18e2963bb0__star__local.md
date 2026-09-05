---
qid: ing_18e2963bb0__star__local
question: 'Explain: Practical Rules of Thumb — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:50-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling the recommendation engine for a streaming platform that served over 12 million active users. The daily prediction batch was hitting an average latency of 1.8 seconds and our data warehouse could only ingest about 200 k events per second, so we needed to shard the model inference pipeline.

**Task** – My goal was to partition the user base into shards that would keep each inference node’s memory footprint under 4 GB while maintaining a prediction latency below 300 ms and ensuring no single shard became a bottleneck during peak hours.

**Action** – I applied three practical sharding rules of thumb: (1) **Key‑based consistent hashing** on user ID to guarantee even distribution; (2) **Shard size tuning**—I started with 200 k users per shard, then monitored CPU and GPU utilization, shrinking shards to 150 k when a node hit 70% GPU usage. I used Redis Streams for routing requests to the correct shard. (3) **Hot‑spot mitigation** by periodically rebalancing the hash ring during low‑traffic windows. I also added a caching layer of the top 10K popular items per shard to cut query time.

**Result** – After implementation, inference latency dropped from 1.8 s to 250 ms on average, and our system could ingest 400 k events per second without any node exceeding 60% GPU load. The exercise taught me that sharding is not just about splitting data; it’s a disciplined trade‑off between distribution, resource limits, and operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
