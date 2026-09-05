---
qid: ing_e26451eb79__star__local
question: 'Explain: Stage 6: Sharding (10M+ users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 389
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:01:38-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a recommendation engine that served personalized ads to over 12 million active users worldwide. By Q4 the latency on the inference endpoint was averaging 350 ms and our single‑node cache hit rate dropped below 60 %, causing slow page loads during peak traffic.

**Task:**  
I had to redesign the data layer so the system could handle 10M+ concurrent requests with sub‑200 ms latency, while keeping model updates (every 6 hours) consistent across shards and ensuring minimal downtime during scaling.

**Action:**  
1. Adopted a **horizontal sharding strategy** on user ID hash buckets using Cassandra, splitting data into 48 partitions to balance read/write load.  
2. Implemented a **consistent hashing ring** with virtual nodes so new shards could be added without major re‑rebalancing.  
3. Added a **distributed cache (Redis Cluster)** per shard for feature vectors and used the *read‑through* pattern to keep it warm.  
4. Wrote a lightweight microservice that routes inference requests based on the hash key, reducing cross‑shard communication.  
5. Set up automated CI/CD pipelines with Canary releases to roll out new model weights to each shard sequentially.

**Result:**  
Latency dropped from 350 ms to 140 ms average, and cache hit rate rose to 92 %. The system handled a peak of 3 M requests per second during the holiday sale without any outages. I learned that sharding isn’t just about partitioning data—it’s also about designing routing logic, cache coherence, and zero‑downtime model deployment pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
