---
qid: ing_89b2952783__aws__local
question: 'Explain: Distributed Counter API Design — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 542
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:21-05:00'
sources: []
---

**Situation & Goal**  
I led the design of a *Distributed Counter API* for a global e‑commerce platform that needed to handle > 10M daily increments per counter while guaranteeing eventual consistency and < 5 ms latency for reads.

**Task**  
Build a highly available, cost‑effective counter service that scales horizontally, tolerates network partitions, and provides an audit trail.

**Action**  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| **Write API** | *API Gateway + Lambda* (stateless) | Low‑cost, auto‑scales to spikes. |
| **Counter storage** | *DynamoDB* with `partition_key = counter_id`, `sort_key = timestamp` and a global secondary index for aggregates | Strong read/write capacity at low cost; automatic sharding. |
| **Aggregation worker** | *Kinesis Data Streams → Lambda → DynamoDB* | Processes 10M events/sec, guarantees ordering per shard. |
| **Read API** | *ElastiCache‑Redis (cluster mode)* with `SETNX` for in‑memory cache and TTL = 1 s | Provides < 5 ms read latency; cache warm‑up via Kinesis stream. |
| **Audit trail** | *S3 + Athena* | Immutable logs, cost‑effective analytics. |

- **Scalability:** DynamoDB auto‑scales on traffic; Kinesis shards increase with load.  
- **Availability:** Multi‑AZ deployment, automatic failover for Lambda and Redis cluster.  
- **Cost:** 0.25 USD per million writes (DynamoDB), < $1/day for cache.

**Result**  
Post‑launch, read latency dropped from 30 ms to **4 ms** (average) with a 99.9% success rate under peak load. Write throughput scaled linearly up to **12M ops/sec** without throttling. The audit logs enabled compliance reporting in < 2 hrs.

**Reflection**  
I owned the end‑to‑end design, dived deep into DynamoDB limits, and iterated on shard sizing based on real traffic patterns—an example of *Ownership* and *Dive Deep*. The success was quantified (latency & throughput) and validated by automated monitoring. This experience taught me that balancing consistency with performance requires continuous data‑driven tuning, a lesson I apply to every system design challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
