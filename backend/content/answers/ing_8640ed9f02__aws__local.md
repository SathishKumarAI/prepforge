---
qid: ing_8640ed9f02__aws__local
question: 'Explain: ElasticSearch Cluster'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 383
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:13-05:00'
sources: []
---

**Situation & Task**  
When my team launched a real‑time recommendation engine, the search layer was bottlenecked by an on‑prem Elasticsearch cluster that couldn’t scale with user growth. I owned the redesign to ensure sub‑100 ms latency for 10 M daily requests.

**Action**  
I migrated to **Amazon OpenSearch Service** (managed ES) and implemented a multi‑AZ, auto‑scaling domain.  
- **Data model:** Sharded indices with index lifecycle policies (rollover/archival).  
- **Compute & storage:** EC2 M6g instances for compute‑heavy queries; EBS gp3 for fast I/O, with S3 for cold data.  
- **Security:** IAM roles + encryption at rest and in transit.  
- **Observability:** CloudWatch metrics + OpenSearch Dashboards for query latency and node health.

I used the **Customer Obsession** principle to benchmark against real user queries, then applied **Dive Deep** to profile slow hits. I added a caching layer with **Amazon ElastiCache (Redis)** to offload 30 % of repetitive searches, cutting costs by ~25 %.

**Result**  
Latency dropped from 350 ms to 78 ms (77 % improvement). The cluster handled a 4× traffic surge without manual intervention. Quarterly cost decreased by $18k/month, and we avoided the risk of downtime during peak shopping events.

**Bar‑raiser note** – I showcased ownership, quantified impact, deep technical trade‑offs, and learned that auto‑scaling policies need continuous tuning based on query patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
