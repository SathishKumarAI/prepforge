---
qid: ing_8400891761__aws__local
question: 'Explain: Example — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 407
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:28-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a migration of an on‑prem document store to Amazon OpenSearch (Elastic Docs) for a global e‑commerce platform that indexed ~4 B customer documents daily. The existing monolithic index suffered from 30 s query latency and frequent “shard failure” errors during peak traffic.

**Action**  
I applied **Ownership** and **Dive Deep**: first, I instrumented all write pipelines with CloudWatch metrics to capture *write throughput*, *latency*, and *shard health*. Using those data points, I calculated the optimal shard size by modeling “documents per shard” against the 1 GiB memory limit of an OpenSearch node.  
I re‑partitioned into **200 shards** (≈20 M docs each), enabling parallel ingestion across 20 EC2 r5.large nodes and a dedicated **EBS gp3** volume pool. I added an auto‑scaling policy based on CPU utilization >70% to spin up new instances during flash sales.  
To reduce cost, I enabled **OpenSearch’s cold storage tier**, moving inactive shards to S3 Glacier Deep Archive (≤ $0.004 per GB/month).  

**Result**  
Post‑migration query latency dropped from 30 s to < 200 ms for 95% of requests; shard failure rate fell below 0.01%. The cost savings were $120k annually, and the system handled a 4× traffic spike during Black Friday without degradation.

> **Bar‑raiser takeaways:** clear ownership of end‑to‑end migration, data‑driven shard sizing, measurable impact on latency & cost, and learning loop that informed future scaling policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
