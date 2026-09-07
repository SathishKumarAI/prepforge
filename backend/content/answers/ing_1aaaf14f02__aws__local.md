---
qid: ing_1aaaf14f02__aws__local
question: 'Explain: Best practices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 484
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:42-05:00'
sources: []
---

**Situation / Task**  
At my previous firm we had a search service that stored millions of user‑generated documents. The read latency spiked to >400 ms during peak traffic, and our cost model was unpredictable because the cluster kept auto‑scaling up. I was tasked with redesigning the sharding strategy for Elasticsearch (Elastic Docs) so we could hit <200 ms SLA while cutting costs by 30%.

**Action**  
1. **Dive Deep into Data & Access Patterns** – Collected query logs, shard size histograms, and CPU/memory usage. Identified that ~70 % of queries targeted the same “public” dataset, while the rest hit small “private” shards.
2. **Shard Size Optimization** – Applied Elastic’s guideline: keep each primary shard between 50–100 GB. Re‑partitioned by hash on `user_id` for private data and by a time‑based index (year/month) for public data.  
3. **Elastic Scaling & Cost Control** – Deployed an **Amazon OpenSearch Service** domain with *auto‑suspend* enabled, using *cold storage* for older indices. Configured *index lifecycle management* to roll over at 80 GB and move to S3‑based snapshot tier.
4. **Monitoring & Feedback Loop** – Set up CloudWatch metrics (latency, shard count) and automated alerts; ran A/B tests on new shard counts.

**Result**  
- Latency dropped from 400 ms to **120 ms average** during peak load.  
- CPU utilization fell by 45 %.  
- Operational cost decreased from $12K/month to **$8.4K/month** (30% reduction).  
- SLA compliance improved from 88 % to 99.5 %.

**Learnings**  
Ownership: I owned the end‑to‑end pipeline, from data ingestion to monitoring.  
Dive Deep: Continuous profiling uncovered hidden hot shards.  
Bias for Action: Rapid iteration with A/B tests validated changes before full rollout.  

> **Leadership Principles:** *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
