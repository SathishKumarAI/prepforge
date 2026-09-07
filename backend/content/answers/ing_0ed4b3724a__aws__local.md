---
qid: ing_0ed4b3724a__aws__local
question: 'Explain: How Consistent Hashing Works — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 466
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:10-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** I was leading a team that had to scale an image‑processing pipeline from 10 GB/day to 10 PB/day while keeping latency under 200 ms. The bottleneck was the cache layer – adding nodes caused massive cache misses and rebalancing costs.  
> 
> **Task:** Design a distributed key–value store for model artifacts that remains *stable* when nodes are added or removed, without shuffling data across the cluster.  
> 
> **Action (Dive Deep & Ownership):**  
> 1. Adopted **consistent hashing**: map both keys and servers to a 0‑2³² ring using SHA‑256. Each server owns the segment of the ring between its predecessor and itself, so only ~1/N of keys move when a node joins/leaves (N = #servers).  
> 2. Implemented **virtual nodes** (≈100 per physical machine) to smooth load imbalance; this reduced hot‑spot variance from 35% to <5%.  
> 3. Deployed on **Amazon DynamoDB Accelerator (DAX)** for in‑memory reads, backed by **S3** for durable storage and **AWS Lambda** for rebalancing logic triggered by CloudWatch events.  
> 4. Added a **lease mechanism** via **Amazon DynamoDB Streams** to detect node failures instantly and trigger data migration within 30 s.  
> 
> **Result (Deliver Results):** The system handled 15 × the throughput with <10% cache miss increase, keeping latency below 180 ms. Cost dropped by 22% because we avoided expensive cross‑region replication.  
> 
> **Bar‑raiser takeaways:** I owned the end‑to‑end architecture, dove deep into hash distribution theory, quantified impact with real traffic metrics, and learned that virtual nodes are critical for stability—an insight I documented in a post‑mortem to prevent future regressions.  

**Leadership Principles highlighted:** *Customer Obsession*, *Ownership*, *Dive Deep*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
