---
qid: ing_2437c2514f__aws__local
question: 'Explain: Sharding — Top 6 Data Management Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 447
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:55-05:00'
sources: []
---

**Sharding – the top 6 data‑management patterns for ML workloads**

*Situation*: At my previous startup, we were training recommendation models on a catalog of 120 M products. The single PostgreSQL instance stalled under >10k concurrent inference requests, hitting 200 ms latency and 95% CPU saturation.

*Task*: Design a scalable, fault‑tolerant data layer that would support both training (batch) and real‑time inference for millions of users.

*Action*  
1. **Horizontal partitioning (sharding)** – split the product table by `product_id % N` across 12 Aurora PostgreSQL clusters, each handling ~10 M rows.  
2. **Range sharding** – for time‑series feature tables, shard by month to keep hot data on faster SSD instances.  
3. **Consistent hashing** – route inference requests via an Elastic Load Balancer + Lambda@Edge that hashes the user ID to a shard, ensuring even load.  
4. **Read replicas & caching** – each shard has 5 RDS read replicas plus DynamoDB Accelerator (DAX) for hot feature lookups.  
5. **Materialized views** – pre‑aggregate popularity scores per shard in Athena, refreshed nightly via Glue jobs.  
6. **Feature store integration** – use SageMaker Feature Store with cross‑shard replication to keep training and inference data in sync.

*Result*: Latency dropped from 200 ms to <30 ms (10× faster), throughput increased to 50k RPS, cost fell by 25% due to targeted scaling.  

**Leadership Principles**: *Ownership* – I drove the end‑to‑end design; *Dive Deep* – profiled bottlenecks and quantified impact; *Deliver Results* – achieved measurable performance gains.  
**Bar‑raiser notes**: Look for clear ownership, depth of analysis (profiling & metrics), and evidence that failures (initial monolith) informed the sharding strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
