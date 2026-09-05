---
qid: ing_fce8df3c9d__star__local
question: 'Explain: Reduce a cluster’s shard count — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 355
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:25-05:00'
sources: []
---

**Situation**  
In my previous role I managed an e‑commerce search platform on a 12‑node Elasticsearch cluster. A sudden spike in traffic pushed the index size to 9 TB, and each document was split across 1,800 shards—far more than the recommended 10–20 shards per node. Query latency climbed from 120 ms to over 500 ms, hurting conversion rates.

**Task**  
I needed to reduce the shard count by at least 50% without downtime, while keeping search performance and data availability intact.

**Action**  
1. I performed a “shard size” analysis using the Cluster Allocation Explain API, identifying under‑utilized shards that were less than 200 GB each.  
2. Using Reindex API with `?wait_for_completion=false`, I created new indices with a target shard size of ~500 GB (≈18 shards per node).  
3. I set up index aliases to switch traffic seamlessly once reindexing finished, and used the Shard Allocation Filtering feature to pause migrations on critical nodes during peak hours.  
4. After migration, I ran the Cluster Health API to confirm all green status and used Kibana’s Monitoring UI to verify query latency dropped.

**Result**  
Shard count fell from 1,800 to 180 (a 90% reduction). Query latency improved to 80 ms on average, and CPU utilization per node decreased by ~35%. I learned that proactive shard sizing combined with careful reindexing can dramatically improve performance while maintaining zero‑downtime in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
