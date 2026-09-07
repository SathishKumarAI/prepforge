---
qid: ing_b817f0810f__aws__local
question: 'Explain: Search engine — Elasticsearch: The Official Distributed Search
  & Analytics Engine | Elastic'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 444
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:21-05:00'
sources: []
---

**Situation / Task**

At my previous role I led the migration of our on‑line catalog search from a legacy MySQL full‑text index to a modern, distributed analytics platform so that we could serve 5 M page views/day and deliver sub‑second relevance for 200 k SKUs.  

**Action**

I chose **Elasticsearch** as the core engine because it is purpose‑built for low‑latency search + real‑time analytics and integrates natively with AWS (Amazon OpenSearch Service).  
*Architecture*:  
- **Cluster**: 3 dedicated data nodes (m5.xlarge) behind an ALB, auto‑scaling on CPU/heap usage.  
- **Indexing pipeline**: Lambda → Kinesis Data Firehose → OpenSearch Ingest Node for real‑time updates; batch reindex via Glue for periodic refreshes.  
- **Security**: VPC endpoint + IAM policies + fine‑grained role‑based access.  
- **Monitoring**: CloudWatch metrics (latency, shard health) and GuardDuty for anomalous queries.  

I tuned the mapping (keyword vs text), implemented *fielddata* caching, and set up *shard rebalancing* to keep 99.9 % availability while keeping cost under $3k/month.

**Result**

- **Search latency dropped from 750 ms → <100 ms** for 95 % of queries.  
- **Click‑through rate rose by 12 %**, directly translating to a $1.2M lift in quarterly revenue.  
- The cluster handled a peak burst of 200k QPS with zero downtime, proving the design’s scalability.

**Reflection**

I took full ownership: from requirement gathering to post‑launch tuning, iterating on feedback loops and documenting best practices for the team. I learned that *deep dive* into shard allocation often uncovers hidden bottlenecks—an insight now baked into our continuous improvement process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
