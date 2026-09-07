---
qid: ing_7eab827efb__aws__local
question: 'Explain: Analytics engine — Elasticsearch: The Official Distributed Search
  & Analytics Engine | Elastic'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 480
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:42-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with building a real‑time log analytics platform for a SaaS product that generated ~200 GB/day of unstructured logs. The goal was to give developers instant visibility into errors and usage patterns while keeping cost below $5k/month.

**Action**  
I chose **Amazon OpenSearch (the AWS‑managed fork of Elasticsearch)** because it natively supports full‑text search, distributed aggregation, and low‑latency query response—exactly what we needed for “search + analytics.” I designed a pipeline:

1. **Data ingestion:** Kinesis Data Firehose streamed logs directly into an OpenSearch domain with 3 AZs, ensuring high availability.
2. **Indexing strategy:** Created a single index per day with rollover policies; used a `keyword` field for service names and a `date` field for time‑series queries.
3. **Query layer:** Built a Lambda function that translated RESTful requests into OpenSearch DSL, caching frequent aggregations in ElastiCache Redis to reduce query load.
4. **Cost control:** Enabled Auto‑Pause on warm indices and used the *cold* tier to archive older data.

**Result**  
Within 3 weeks of deployment, we achieved:

- **Query latency < 200 ms** for 95th percentile search requests (vs 1.2 s before).
- **$4.8k/month** total spend – 30% below budget.
- **90% reduction in engineer toil** by replacing manual log‑parsing scripts.

**Reflection**  
I owned the end‑to‑end solution, diving deep into OpenSearch internals to tune shard allocation and query caching. The biggest learning was that a “one‑size‑fits‑all” index template led to wasted storage; switching to per‑service templates cut disk usage by 18%.  

*Leadership Principles:* **Customer Obsession** (instant insights for devs), **Ownership** (from ingestion to cost optimization), and **Dive Deep** (profiling queries, adjusting shard counts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
