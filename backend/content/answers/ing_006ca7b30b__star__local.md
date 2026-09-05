---
qid: ing_006ca7b30b__star__local
question: 'Explain: 2.2 Availability — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 396
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:23-05:00'
sources: []
---

**Situation:**  
I was leading the architecture of a real‑time inventory system for an online marketplace that had to support 50k concurrent users during flash sales.

**Task:**  
The goal was to guarantee *Availability* so that every request returned data instantly, even when network partitions or node failures occurred, while still keeping data reasonably consistent across shards.

**Action:**  
I chose a **Cassandra‑based** cluster with a **Read/Write quorum (Quorum = N/2+1)** strategy. By tuning the consistency levels—`QUORUM` for writes and `LOCAL_QUORUM` for reads—I ensured that at least one live replica always served requests, satisfying Availability under CAP. I also implemented **hinted handoff** and **read repair** to reconcile divergent replicas after partitions healed, keeping eventual consistency within 2 seconds. Monitoring was set up with Prometheus/Grafana; automated failover scripts used `nodetool` to replace dead nodes in under a minute.

**Result:**  
The system achieved **99.97% uptime** during peak traffic, with average read latency < 150 ms and write latency < 200 ms. The trade‑off was a slight delay (≈ 2 s) before all replicas reflected the latest stock level—acceptable for inventory display but not for high‑frequency trading. This experience reinforced that prioritizing Availability in CAP often requires accepting eventual consistency, and careful tuning of quorum levels can balance latency, fault tolerance, and data freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
