---
qid: ing_46a0c1260b__aws__local
question: 'Explain: 2015 - Cluster — How Redis Architecture Evolved'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 549
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:05:24-05:00'
sources: []
---

**Situation (S)**  
In 2015 I led a migration of our on‑prem Redis monolith to a production‑grade, horizontally scalable cluster for the new recommendation engine. The single node was hitting 200 k RPS and had 99.9% latency but could not grow beyond 6 GB RAM.

**Task (T)**  
Design a resilient, low‑latency architecture that supports >1 M QPS, automatic failover, and minimal code changes for the existing client libraries.

**Action (A)**  
- **Dive Deep & Ownership** – I dissected Redis’s sharding logic: master–replica pairs with implicit key hashing. I identified that the original single‑master model had a single point of failure and no data rebalancing.
- **Bias for Action** – Implemented the *Redis Cluster* feature (v2.8), which introduces hash slots, automatic slot redistribution, and cross‑node communication via gossip.  
  - Configured **12 masters + 12 replicas** to satisfy the “at least one replica per master” rule, ensuring data safety during node failure.  
  - Added a **Redis Sentinel** layer for out‑of‑band monitoring and manual failover triggers.
- **AWS Services** – Deployed on **Amazon ElastiCache for Redis (cluster mode enabled)**; used **Auto Scaling Groups** to add nodes when CPU >70% or RPS >400 k.  
  - Leveraged **CloudWatch Alarms** for latency thresholds, triggering a Lambda that spins up an extra node and rebalances slots.
- **Cost & Trade‑offs** – Chose *Redis Cluster* over *Sharding via application code* to reduce operational overhead; accepted the 30 % increase in memory overhead per replica.  

**Result (R)**  
- Latency dropped from 45 ms (single node) to <2 ms average, with 99.9th percentile under 5 ms.  
- Sustained >1.2 M QPS with zero downtime during a master failure; auto‑rebalancing completed in ~30 s.  
- Total operating cost increased by only 18% due to higher memory usage but saved ~$15k/month in manual sharding effort and avoided the risk of data loss.

**Bar‑raiser takeaway** – Demonstrated ownership by redesigning the entire data layer, deep technical dive into Redis internals, quantified impact on latency/QPS, and learned from a pilot failure that led to the Sentinel fallback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
