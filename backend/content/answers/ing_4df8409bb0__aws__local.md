---
qid: ing_4df8409bb0__aws__local
question: 'Explain: Co-located Cache — What is Distributed Caching? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 441
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:39-05:00'
sources: []
---

**Situation & Task**  
I was hired to cut the latency of a global e‑commerce search service that served ~3 M requests/sec and had an SLA of <50 ms. The back‑end datastore (DynamoDB) introduced 80–120 ms read delays, so I needed a distributed cache that could be co‑located with compute nodes to keep data fresh while scaling elastically.

**Action & Design**  
I designed a **co‑located cache layer** using **Amazon ElastiCache for Redis** in the same Availability Zones as the Lambda/EC2 front‑ends.  
* *Data model*: Hot product attributes were stored as hash maps; a TTL of 10 min ensured consistency with DynamoDB’s eventual consistency.  
* *Read path*: Cache hit → 1–3 ms; miss → DynamoDB read + cache write, then return.  
* *Write path*: Update DynamoDB → publish to SNS topic → Lambda invalidates the Redis key, guaranteeing strong consistency for writes while keeping reads fast.  
I used **Auto Scaling Groups** for compute and **Redis Cluster Mode** (sharding) to handle 10 x traffic spikes, achieving <20 ms average latency with a 99.9% cache hit rate.

**Result**  
- Latency dropped from 120 ms to 25 ms (≈80 % reduction).  
- CPU utilization on compute nodes fell by 35 %, freeing capacity for new features.  
- Cost savings of ~12 k USD/month due to fewer DynamoDB read units.

**Reflection**  
The key was *ownership*—I drove the end‑to‑end solution, *dive deep* into cache consistency, and *bias for action* by prototyping in 2 weeks. The biggest failure was an initial mis‑configured TTL that caused stale reads; I learned to add automated health checks and alerting on hit ratios before production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
