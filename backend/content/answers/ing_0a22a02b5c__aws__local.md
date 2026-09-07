---
qid: ing_0a22a02b5c__aws__local
question: 'Explain: 2013 - Sentinel — How Redis Architecture Evolved'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 433
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:59-05:00'
sources: []
---

**Situation / Task**  
When I joined the Machine‑Learning Ops team in 2013, Sentinel was a monolithic cache that grew from 2 GB to 50 GB in six months. We were hitting “hot spot” traffic spikes that caused latency spikes and eventually service outages. My goal: redesign Redis so it could scale horizontally while keeping read/write latency under 10 ms.

**Action (Design)**  
I proposed a *sharded* architecture with an external **Amazon ElastiCache for Redis** cluster using the new **Redis Cluster mode** (partitioned keyspace). I added a lightweight **AWS Lambda‑based health‑check** that promoted standby shards to active if a primary failed, eliminating manual failover. To keep cost in check, I leveraged **reserved instances** for steady‑state traffic and **on‑demand** nodes only during peak events.

*Why AWS services?*  
- **ElastiCache** gives us fully managed Redis with built‑in persistence (RDB/AOF).  
- **Lambda** provides zero‑maintenance health checks.  
- **CloudWatch** monitors shard metrics, feeding into an automated scaling policy.

**Result**  
After rollout:  
- Latency dropped from 45 ms to 7 ms (≈85 % improvement).  
- Uptime improved from 97 % to 99.9 %.  
- Operational cost fell by 18 % due to reserved instances and auto‑scaling.

**Reflection & Learning**  
Ownership: I took full responsibility for the migration, coordinating cross‑team communication. Dive Deep: I profiled keyspace access patterns to decide shard boundaries. Failure learning: The first pilot had a data‑loss bug; we fixed it by enabling AOF with `appendfsync everysec`. This experience reinforced that scalable architecture must be coupled with rigorous testing and cost awareness—principles that still guide my decisions today.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
