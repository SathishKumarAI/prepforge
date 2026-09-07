---
qid: ing_8b80794f6a__aws__local
question: 'Explain: Elasticsearch — Elasticsearch: The Official Distributed Search
  & Analytics Engine | Elastic'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 452
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:29-05:00'
sources: []
---

**Situation / Task**  
I was tasked with replacing our legacy log‑aggregation stack for a global e‑commerce platform that served ~2 M page views per day. The goal was to enable near‑real‑time search and analytics on 1 TB of log data while keeping cost < $20k/month.

**Action**  
I evaluated Elastic’s open‑source **Elasticsearch** as the core engine, then mapped it onto AWS:

| Requirement | Design Choice | AWS Service |
|-------------|---------------|--------------|
| Distributed search | Shard‑based index with replication factor 2 | Amazon OpenSearch Service (managed Elasticsearch) |
| Near‑real‑time ingestion | Logstash → Kinesis Data Firehose → OpenSearch | Kinesis, OpenSearch |
| Scalability & high availability | Auto‑scaling domain with warm/cold node tiers | OpenSearch Multi‑AZ |
| Cost control | Spot instances for data nodes + reserved for master | EC2 spot, OpenSearch reserved capacity |

I implemented a **rolling index policy** (30‑day hot, 90‑day warm, > 120 days cold) and used **OpenSearch Dashboards** for ad‑hoc analytics. I also added an alerting pipeline that triggered Lambda functions on anomaly detection.

**Result**  
- Search latency dropped from 1.5 s to < 200 ms (95th percentile).  
- Query cost fell by 35% compared to the previous Splunk setup.  
- Team adoption grew to 120+ developers, with a 40% reduction in support tickets for log‑search issues.

**Learning & Ownership**  
I iterated on index mappings after a week of live traffic, discovering that adding keyword fields cut query time by 25%. I documented the trade‑offs between hot/warm nodes and shared this with the ops team, ensuring we avoided over‑provisioning. This experience reinforced my belief in **Ownership**—owning the full life cycle—and **Dive Deep**—profiling metrics to drive tangible improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
