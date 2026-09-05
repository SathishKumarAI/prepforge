---
qid: ing_efb69ca7b5__star__local
question: 'Explain: Load Balancing — What is Distributed Caching? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 319
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:27:15-05:00'
sources: []
---

**Situation:**  
In my last role, we were launching a real‑time recommendation engine for a streaming platform. The service had to serve millions of requests per second while keeping latency below 50 ms. Our single‑node cache (Redis) started choking under traffic spikes; cache miss rates shot up to 30%, and the API response time doubled.

**Task:**  
I was tasked with redesigning the caching layer so it could scale horizontally, reduce miss rates, and maintain low latency across a global user base.

**Action:**  
First, I profiled cache access patterns and discovered that most keys were sharded by user ID. I implemented a distributed Redis cluster using Cluster mode, adding 12 nodes spread across three regions. To handle cross‑region consistency, I introduced a read‑through mechanism backed by DynamoDB for evicted items. I also added a lightweight in‑memory LRU policy per shard and enabled Redis’ built‑in key hashing to ensure even distribution. Finally, I set up Prometheus alerts on cache hit ratios and latency, and automated failover via Sentinel.

**Result:**  
Cache hit rate improved from 70% to 96%, cutting API latency by 60 ms (to 30 ms). The system now supports 5× the traffic without additional hardware. I learned that proper key partitioning, regional replication, and monitoring are critical for resilient distributed caching in high‑throughput ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
