---
qid: ing_a658f01957__star__local
question: 'Explain: Hash-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 356
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:05:52-05:00'
sources: []
---

**Situation:**  
While leading a recommendation‑engine project at my previous company, we had to scale the user‑embedding database from 2 M to 50 M users. The single PostgreSQL instance started lagging; query latency hit 250 ms on average, and write throughput dropped below 300 ops/sec.

**Task:**  
I needed a sharding strategy that would evenly distribute data across multiple nodes, preserve fast read/write performance, and integrate cleanly with our existing ML pipeline (which pulls embeddings in real time).

**Action:**  
I chose hash‑based sharding. I implemented a consistent hashing ring using the MurmurHash3 algorithm on user IDs to map each embedding to one of 10 PostgreSQL shards. To handle node churn, I used a virtual‑node scheme with 100 replicas per physical node, ensuring minimal rebalancing when adding or removing servers. The ML inference service was updated to compute the hash locally and route requests to the correct shard via a lightweight proxy layer written in Go. We also added a Redis cache layer for hot embeddings to reduce cross‑shard lookups.

**Result:**  
After deployment, read latency dropped from 250 ms to 35 ms (≈ 86% improvement), write throughput increased to 1.2 k ops/sec, and the system comfortably handled the 50 M user base with no single point of failure. I learned that a well‑chosen hash function plus virtual nodes can deliver predictable load balancing while keeping data locality for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
