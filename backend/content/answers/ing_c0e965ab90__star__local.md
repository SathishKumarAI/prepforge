---
qid: ing_c0e965ab90__star__local
question: 'Explain: User Base — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 383
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:56:11-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a photo‑sharing app that grew from 50k to over 3 million active users in just 18 months. The growth spurt revealed bottlenecks in our user‑management layer—profile lookups, follower graphs, and feed delivery were all hitting latency spikes during peak hours.

**Task:**  
I was tasked with redesigning the “user base” subsystem so that it could scale horizontally to support millions of concurrent users while keeping read latency under 200 ms and write throughput above 10k ops/sec.

**Action:**  
1. **Graph Sharding:** Partitioned the follower graph by user ID hash into 256 shards, each backed by a Redis cluster for fast adjacency queries.  
2. **CQRS Pattern:** Separated command (follow/unfollow) from query (feed fetch), using Kafka to stream updates to a read‑optimized Cassandra table with time‑to‑live partitions.  
3. **Cache Tiering:** Added a two‑level cache—edge CDN for public profile data and an application‑level LRU cache for personalized feed metadata—to reduce database hits.  
4. **Rate Limiting & Backpressure:** Implemented token‑bucket throttling per IP to guard against abuse, coupled with graceful degradation that served stale feeds when the write queue was saturated.

**Result:**  
Post‑deployment, read latency dropped from 750 ms to 120 ms during peak traffic, and write throughput increased to 25k ops/sec. The system handled a sudden 400% spike in follower activity without downtime. I learned that marrying graph sharding with CQRS and tiered caching is key for user‑centric services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
