---
qid: ing_cbc65fc47c__aws__local
question: 'Explain: System Design Interview - Distributed Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 573
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:34-05:00'
sources: []
---

**System Design – Distributed Cache for ML Inference**

**Situation (S)**  
In my last role I led the migration of a monolithic inference service to a micro‑service architecture. The legacy in‑memory cache could not handle 10× traffic spikes during nightly batch jobs, causing 4xx errors and SLA violations.

**Task (T)**  
Design a highly available, low‑latency distributed cache that supports 100 k requests/sec, persists hot embeddings for 12 h, and auto‑scales with traffic while staying under $5 K/month.

**Action (A)**  
I chose **Amazon ElastiCache for Redis** as the core store because it offers sub‑millisecond latency, built‑in replication, and Redis Cluster for sharding.  
*Key decisions:*  
- **Cluster mode enabled** – 6 shards × 3 replicas = 18 nodes → 99.999% availability.  
- **Auto‑Pause/Resume** on idle hours to cut cost by ~30 %.  
- **Cache eviction policy LRU** with a TTL of 12 h ensures stale embeddings are purged automatically.  
- **AWS Global Accelerator** + Route 53 latency‑based routing gives the nearest endpoint for cross‑region traffic, reducing round‑trip time by ~15 ms.  

I wrote a simple load‑testing script (wrk + custom Lua) to validate 120 k req/sec with <5 ms latency and 0.1 % error rate.

**Result (R)**  
Post‑deployment, cache hit ratio jumped from 42 % to 92 %, cutting inference CPU usage by 35 %. SLA compliance improved from 93 % to 99.7 %, and monthly cost stayed below $4.8 K.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – ensured end‑user latency stayed <5 ms.  
- **Ownership** – drove the design, implementation, and monitoring strategy from scratch.  
- **Dive Deep & Bias for Action** – used metrics to iterate quickly on shard count and TTL settings.

---

### What a Bar‑Raiser Listens For
1. **Quantified Impact** – clear before/after numbers.  
2. **Depth of Thought** – trade‑offs between cost, latency, and durability.  
3. **Learning from Failure** – how the legacy system failed under load and what we did differently.

*This design balances performance, resilience, and budget while keeping operational complexity manageable.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
