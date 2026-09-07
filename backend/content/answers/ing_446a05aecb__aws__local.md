---
qid: ing_446a05aecb__aws__local
question: 'Explain: Log analytics — Elasticsearch: The Official Distributed Search
  & Analytics Engine | Elastic'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 407
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:50-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:*  
In 2023 I led the migration of our on‑prem log pipeline (5 TB/day) to a fully managed solution that could surface actionable insights in real time for the security team.

*Task:*  
Replace the legacy Elasticsearch cluster with an AWS‑native stack, reduce operational overhead by 70%, and cut query latency below 200 ms for 99.9% of requests.

*Action:*  
1. **Design** – I chose Amazon OpenSearch Service (forked from Elastic) as the core search engine because it offers native Elasticsearch APIs with built‑in scaling, snapshots, and security.  
2. **Data Ingestion** – Vended Kinesis Data Firehose to stream raw logs into OpenSearch; used a Lambda function for field enrichment (geo‑IP, threat intel).  
3. **Indexing Strategy** – Implemented time‑partitioned indices with rollover policies and index lifecycle management to keep hot data in SSD instances while archiving cold shards on EBS gp2.  
4. **Observability & Cost Control** – Enabled fine‑grained IAM access, automated snapshots, and set up Amazon CloudWatch metrics + alarms for free‑of‑charge usage.  

*Result:*  
- Query latency dropped from 1.2 s to 180 ms (95th percentile).  
- Operational costs fell by **68%** (from $12k/month to $4.5k).  
- Security incidents detected 30% faster due to near‑real‑time dashboards.

*Learnings:*  
I realized that “Dive Deep” means iterating on index templates and monitoring shard health; a misconfigured mapping can double query costs. Future rollouts will include automated anomaly detection with OpenSearch Dashboards to preemptively flag performance regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
