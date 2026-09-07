---
qid: ing_295b9b8c92__aws__local
question: 'Explain: RedisBloom — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 480
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:11-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a real‑time ad‑delivery pipeline that ingested ~10 M click events per day. The goal was to cut memory usage by 70 % while keeping false positives <0.1 %.  

**Action**  
I chose **RedisBloom**, a Redis module that implements Bloom filters, because it offers in‑memory, probabilistic membership tests with sub‑byte overhead. I designed the following stack:

| Layer | AWS Service | Reason |
|-------|-------------|--------|
| Ingestion | Kinesis Data Streams | Low‑latency capture & auto‑sharding |
| Compute | Lambda (10 ms timeout) | Pay‑per‑execution, no server ops |
| Cache | Amazon ElastiCache for Redis + Bloom module | 99.9 % availability, automatic failover |
| Persistence | S3 + DynamoDB (for rehydration) | Durable backup & state recovery |

**Implementation details**

1. **Filter size calculation** – Using the classic formula  
   \(m = -\frac{n \ln p}{(\ln 2)^2}\), with *n* = 10 M, *p* = 0.001 → ~9 MB per filter.  
2. **Sharding** – Partition by user‑segment to keep each filter <5 MB, allowing 4 GB of Redis RAM per node.  
3. **Eviction policy** – `volatile-lru` on a secondary cache for hot keys; older filters moved to S3.  

**Result**  
Memory footprint dropped from ~2 GB to ~400 MB (70 % savings). False‑positive rate stayed at 0.08 %. Latency per lookup <1 ms, meeting SLA. Cost reduced by ~$3k/month on ElastiCache.  

**Reflection & Learning**  
I initially underestimated the impact of filter growth during peak campaigns, leading to a brief outage when a single shard exceeded capacity. I introduced an autoscaling trigger based on key count and rebuilt the design with tighter thresholds—demonstrating *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
