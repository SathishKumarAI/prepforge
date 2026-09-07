---
qid: ing_2823e3061c__aws__local
question: 'Explain: Size your shards — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 485
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:24-05:00'
sources: []
---

**Situation**  
At a fintech startup I led the migration of our fraud‑detection pipeline from an on‑premise Hadoop cluster to **Amazon OpenSearch Service** (managed Elasticsearch). The dataset grew from 5 GB/day to 120 GB/day, and we needed near‑real‑time query latency (<200 ms) for risk analysts.

**Task**  
Design a sharding strategy that balances cost, throughput, and resilience while keeping index rebuild time under 30 min during daily data ingestion.

**Action**  
1. **Dive Deep** – I profiled the access patterns: ~70% of queries hit the latest 7 days, 20% queried the last month, 10% scanned the entire history.  
2. **Sharding Plan** – Adopted a time‑based shard allocation:
   * One primary shard per day (≤ 5 GB) → 120 shards for the last 30 days.
   * Each shard replicated once (replica count = 1) to meet high availability.
3. **AWS Services**  
   * **OpenSearch Service** for managed clusters, leveraging its autoscaling for storage and CPU.  
   * **S3** as cold‑archive; older shards (> 60 days) migrated to S3 using OpenSearch’s snapshot API, saving ~40% of storage costs.  
4. **Cost & Scale** – With 120 primary + 120 replica nodes (m5.large.search), estimated monthly cost: $18k vs $30k on the previous Hadoop setup.  
5. **Bias for Action** – Implemented a nightly Lambda that auto‑creates new shards and deletes those older than 90 days, reducing ops overhead to zero.

**Result**  
- Query latency dropped from 1 s to 120 ms (70% faster).  
- Daily ingest throughput increased by 3×, supporting a projected 10× user growth.  
- Operational cost fell 40%, freeing budget for model retraining.  

*Ownership & Deliver Results*: I owned the entire migration, iterated quickly with A/B testing, and continuously monitored metrics to ensure SLA compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
