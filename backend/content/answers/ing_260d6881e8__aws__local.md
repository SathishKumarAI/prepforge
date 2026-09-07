---
qid: ing_260d6881e8__aws__local
question: How to configure replication in Redis? — Redisleaderfollowreplication
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 443
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:52:24-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a migration of our real‑time analytics platform from on‑prem Redis to Amazon ElastiCache for Redis. The goal was to guarantee **99.99 % availability** while keeping write latency under 2 ms for 10k concurrent users.

**Action**  
I scoped the replication topology, chose *primary‑replica* mode, and configured automatic failover using ElastiCache’s Multi‑AZ feature.  
1. **Create a Redis cluster** with one primary node (cache.t4g.large) and two read replicas (cache.t4g.medium).  
2. Enable **Auto Discovery** in the client so it always points to the current primary.  
3. Set `maxmemory-policy` to `volatile-lru` on replicas for consistent eviction.  
4. Use CloudWatch alarms (`Redis:Latency`, `Redis:ReplicationLag`) and SNS to trigger Lambda that re‑initialises clients if lag > 500 ms.  

I also added **AWS Parameter Store** parameters for `cluster-replication-enabled=true` so the deployment pipeline can toggle replication without redeploying.

**Result**  
After rollout, read throughput increased by **35 %** (from 4k to 6.5k QPS) and write latency dropped from 3.8 ms to 1.9 ms. The automatic failover time averaged **12 s**, far below the SLA of 30 s. Cost savings were 18 % by using t4g instances.

**Reflection**  
I learned that *configuring replication isn’t just a “copy‑and‑paste” task*—you must anticipate failure modes and automate recovery. This aligns with **Ownership** (owning the end‑to‑end health of the system) and **Dive Deep** (monitoring lag, tuning eviction).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
