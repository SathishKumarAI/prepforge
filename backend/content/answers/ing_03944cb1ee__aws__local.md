---
qid: ing_03944cb1ee__aws__local
question: 'Explain: Application and infra monitoring — Elasticsearch: The Official
  Distributed Search & Analytics Engine | Elastic'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 491
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:35-05:00'
sources: []
---

**Customer Obsession | Dive Deep**

*Situation:* In my last role I led the migration of a legacy log‑analytics platform to an **Elastic Stack (Elasticsearch, Logstash, Kibana)** cluster that served over 10 000 daily active users and produced ~200 GB of logs per day. The existing on‑prem solution had 4‑hour lag times and frequent outages during peak traffic.

*Task:* Deliver a highly available, cost‑effective monitoring stack with real‑time visibility and automated anomaly detection while keeping operational overhead minimal.

*Action:*  
1. **Architecture** – Deployed a multi‑AZ **Amazon OpenSearch Service** (managed Elasticsearch) cluster with 3 data nodes (m6g.large.search) for high throughput and an additional warm tier for cost savings.  
2. **Ingest pipeline** – Used **AWS Lambda** + **Kinesis Data Firehose** to stream logs from CloudWatch, S3, and on‑prem sources into OpenSearch in near real time, applying the same ingestion logic as Logstash (filtering, enrichment).  
3. **Observability** – Created Kibana dashboards for latency, error rates, and custom business KPIs; set up Watcher alerts that trigger SNS notifications and automatic Lambda remediation scripts.  
4. **Scalability & Cost** – Enabled auto‑scaling via OpenSearch’s index lifecycle management to roll over indices after 7 days and delete after 30 days, reducing storage by 35% while keeping query performance >99th percentile <200 ms.

*Result:* Cut log processing latency from 4 hours to <5 minutes (90 % reduction), increased uptime from 96 % to 99.9 %, and saved ~$12k/month on infrastructure. Post‑migration, the team could drill into production issues in seconds rather than hours, directly improving customer experience.

**Learning & Ownership:** I iterated on data ingestion rules after discovering skewed log formats; this led to a reusable Lambda library now used across all analytics projects. The bar‑raiser will note my end‑to‑end ownership, deep dive into performance bottlenecks, and measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
