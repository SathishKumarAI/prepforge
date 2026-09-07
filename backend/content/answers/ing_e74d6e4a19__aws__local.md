---
qid: ing_e74d6e4a19__aws__local
question: 'Explain: B. Go Dependencies — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 423
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:01:40-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a legacy Python API that served recommendation requests into a new micro‑service written in **Go** backed by **Cassandra**. The goal was to cut latency from ~120 ms to under 20 ms while handling 10× traffic.

**Action**  
- **Ownership & Bias for Action:** I scoped the entire stack, from HTTP router (chi) to Cassandra driver (gocql), and wrote a custom read‑repair routine that hit only the necessary columns.  
- **Dive Deep:** Analyzed Cassandra’s consistency levels; settled on `QUORUM` reads with `LOCAL_QUORUM` writes after profiling read latency vs. staleness.  
- **Design Choices:** Implemented a sharded keyspace (`user_id`, `timestamp`) and used time‑window tables to avoid hot spots. Added a Redis cache for the most frequent 1% of requests, reducing Cassandra hits by 70 %.  
- **AWS Services:** Deployed on **Amazon ECS** with Fargate (CPU auto‑scaling), **Amazon Keyspaces** (managed Cassandra) and **Elastic Load Balancing**. Used CloudWatch metrics to trigger scale‑out when request latency >30 ms.

**Result**  
- Latency dropped from 120 ms → **18 ms** (90 % reduction).  
- Throughput increased from 5k RPS to **45k RPS** without new hardware.  
- Cost fell by 35 % due to better resource utilization and caching.

**Reflection**  
I learned that coupling Go’s concurrency with Cassandra’s tunable consistency yields predictable performance, but only after rigorously profiling each layer. This project exemplifies *Customer Obsession* (fast responses) and *Ownership* (end‑to‑end delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
