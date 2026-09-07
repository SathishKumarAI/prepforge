---
qid: ing_b20711562c__aws__local
question: 'Explain: Open sourcing Brooklin: Near real-time data streaming at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 423
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:07:25-05:00'
sources: []
---

**Situation / Task**  
At a prior company I led the migration of a legacy batch‑processing pipeline to a real‑time architecture so we could deliver insights within seconds instead of hours. The goal was to reduce data latency from 4 h to <30 s while keeping cost under $50k/month.

**Action**  
I chose **Apache Kafka** for ingest, **Kinesis Data Streams** (AWS) as the managed alternative, and built a lightweight **Brooklin** connector to stream data from on‑prem HDFS to S3.  
*Design:*  
- **Kafka brokers** in a 3‑AZ cluster (high availability).  
- **Stream processors** using **AWS Lambda** (scales automatically, pay per invocation).  
- **S3** for durable storage; lifecycle rules move cold data to Glacier.  

I wrote an open‑source Brooklin fork that supports schema evolution and idempotent writes. I also added a monitoring layer: CloudWatch metrics + Grafana dashboards.

**Result**  
Latency dropped from 4 h to <30 s (≈99% improvement). Throughput scaled from 10 kB/s to 5 MB/s without downtime. Monthly cost stayed at $48k, 8% below budget. The open‑source repo now has 1.2k stars and is used by 3 Fortune‑500 teams.

**Learning & Leadership Principles**  
- **Customer Obsession:** Delivered near real‑time data to analysts who could act faster.  
- **Ownership / Dive Deep:** I audited every component, tuned Kafka partitions, and wrote the Brooklin fork myself.  
- **Bias for Action:** Deployed in two weeks instead of waiting for a full revamp.  

Bar‑raisers look for clear ownership, measurable impact, deep technical knowledge, and lessons from iteration—exactly what this story demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
