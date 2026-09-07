---
qid: ing_5bf7a92dee__aws__local
question: 'Explain: Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 500
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:12-05:00'
sources: []
---

**Situation / Task**  
In a recent e‑commerce project we needed to expose product search to millions of users while keeping latency under 200 ms and supporting full text queries across 50 M SKUs. The team decided to use Amazon OpenSearch Service (formerly Elasticsearch) because it offers managed scaling, automatic index lifecycle management, and tight integration with other AWS services.

**Action**  
1. **Define the index mapping** – used a *doc* type with keyword fields for `category`, `brand` and a text field (`description`) with an English analyzer plus a custom n‑gram sub‑field to enable partial matching.  
2. **Provisioned a cluster** – 3 data nodes (m5.large.search) in two AZs, autoscaling enabled with CPU > 70 % → add node; memory < 30 % → shrink.  
3. **Ingest pipeline** – S3 event triggers an AWS Lambda that transforms raw JSON from our catalog feed and pushes it to the index via the bulk API, ensuring idempotency by using `doc_as_upsert`.  
4. **Monitoring & alarms** – CloudWatch metrics (`search_latency`, `indexing_rate`) trigger SNS alerts; a step function re‑indexes the entire dataset if latency > 250 ms for >5 min.  

**Result**  
- Search latency dropped from 650 ms to 120 ms (average).  
- Query throughput increased from 1,200 QPS to 12,000 QPS without additional cost.  
- Cost per query fell by 35 % due to efficient autoscaling and the use of `doc_as_upsert`.  

**Reflection**  
I owned the end‑to‑end pipeline, diving deep into OpenSearch’s mapping quirks (e.g., field data cache). The bar‑raiser will note that I quantified impact with latency & cost metrics, iterated based on real user traffic, and learned that a custom n‑gram sub‑field drastically improves partial match recall.  

**Leadership Principles**  
- *Customer Obsession* – delivered a fast, reliable search experience.  
- *Ownership* – managed the full lifecycle from ingestion to monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
