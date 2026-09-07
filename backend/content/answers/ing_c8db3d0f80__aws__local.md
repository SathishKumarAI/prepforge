---
qid: ing_c8db3d0f80__aws__local
question: 'Explain: Sharding — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 403
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:03-05:00'
sources: []
---

**Sharding – a cheat‑sheet for high‑performance ML data stores**

*Leadership Principles:* **Ownership** (own the entire pipeline) & **Dive Deep** (understand every shard’s behavior).

**Situation / Task**  
I was tasked to scale our click‑stream feature store from 200 M rows/day to >2 B rows/day while keeping query latency <50 ms for model training jobs.

**Action**  
1. *Partitioning strategy*: Horizontal sharding by user ID hash, ensuring uniform distribution and locality of reference (all data for a user in one shard).  
2. *Storage engine*: Amazon DynamoDB with **global secondary indexes** per feature set; each shard is a separate table to avoid hot partitions.  
3. *Provisioned throughput*: Autoscaling on `ReadCapacityUnits`/`WriteCapacityUnits` per shard, backed by **DAX** for cache‑driven read bursts during training spikes.  
4. *Maintenance*: Scheduled **shard rebalancing** using AWS Glue jobs that migrate 5 % of rows weekly, keeping hotness in check.  
5. *Observability*: CloudWatch metrics + X-Ray traces to detect skew; alerting thresholds set at 95th‑percentile latency >30 ms.

**Result**  
- Query latency dropped from 120 ms to **35 ms** (–71%).  
- Throughput scaled linearly, handling 10× traffic without provisioning extra capacity.  
- Cost stayed within 12% of baseline by leveraging DynamoDB’s pay‑per‑request model and DAX caching.

*Bar‑raiser takeaway:* Showed full ownership, deep dive into shard skew, quantified performance gains, and learned that proactive rebalancing prevents silent hot spots.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
