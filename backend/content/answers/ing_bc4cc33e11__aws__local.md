---
qid: ing_bc4cc33e11__aws__local
question: 'Explain: Distributed Caching — Distributedcaching'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 449
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:34-05:00'
sources: []
---

**Distributed caching – a quick‑win for ML inference latency**

*Leadership Principles:* **Customer Obsession** (speed matters to end users) and **Ownership** (own the full stack from model to delivery).

**Situation:**  
In my last role I led an A/B test platform that served personalized recommendation models. When we moved to real‑time inference, 60 % of requests hit the GPU cluster, but latency spiked to 350 ms – unacceptable for our 1 ms SLA.

**Task:**  
Design a distributed cache that keeps the top‑20 most frequently predicted items per user in memory, so that 80 % of lookups are served without hitting GPUs.

**Action:**  
I chose **Amazon ElastiCache for Redis** because it offers sub‑millisecond access and automatic sharding.  
- **Data model:** `user:{id}:rec` → sorted set of item IDs with scores (hit counts).  
- **Eviction policy:** LFU to keep the most popular items.  
- **TTL:** 24 h, refreshed by a scheduled Lambda that aggregates logs from CloudWatch.  
- **Scaling:** Auto‑scaling on CPU/latency metrics; we started with 2 shards and doubled during traffic spikes.  
- **Cost trade‑off:** Each shard $0.10/hr vs GPU cost $1.50/hr – saved ~$3k/month.

**Result:**  
Cache hit rate rose from 20 % to 84 %, reducing average inference latency to 85 ms (a 76 % drop). The platform handled a 2× traffic surge with no GPU bottlenecks, and we achieved the SLA in all production environments.  

*Bar‑raiser notes:* I owned the end‑to‑end solution, dove deep into Redis internals for eviction strategy, quantified impact (latency & cost), and iterated after an initial failure when TTLs were too short—now they’re dynamically tuned by Lambda.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
