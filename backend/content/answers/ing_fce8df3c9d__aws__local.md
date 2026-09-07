---
qid: ing_fce8df3c9d__aws__local
question: 'Explain: Reduce a cluster’s shard count — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 444
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:50-05:00'
sources: []
---

**Situation & Task**  
In 2024 I led the migration of our on‑prem Elasticsearch cluster (≈ 5 TB) to **Amazon OpenSearch Service** for a global e‑commerce search platform that handled ~ 12 M queries/day. The cluster had 200 shards across 30 nodes, causing high CPU spikes and expensive EBS usage.

**Action**  
1. **Dive Deep** – I ran *shard statistics* (OpenSearch APIs) and identified 150 underutilized shards (< 5 % storage) that were inflating node memory overhead.  
2. **Ownership & Bias for Action** – I designed a staged re‑sharding plan:  
   - Reindex to a smaller number of shards (30 → 10) using the *reindex* API with `shard_size` tuning.  
   - Parallelized the process across 5 “warm” nodes, keeping traffic on hot nodes via shard routing.  
3. **AWS Services** – Leveraged **OpenSearch Service’s snapshot restore** to S3 for safe rollback and used **Auto Scaling** to add capacity only during reindexing.  
4. **Cost & Availability** – Reduced node count from 30 to 18, saving ~ $2.8K/month in EBS and instance usage while maintaining 99.99% uptime.

**Result**  
- Shard count dropped by **85 %**, storage overhead fell by **70 %**, and query latency decreased from 350 ms to 210 ms (‑40 %).  
- Monthly cost cut by **$3K**, freeing budget for ML model experiments.  
- The migration was completed with zero downtime, demonstrating strong ownership and a scalable, maintainable solution.

**Learning** – I documented the reindexing workflow in Confluence, including rollback scripts; this became the standard operating procedure for future cluster optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
