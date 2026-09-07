---
qid: ing_bdfb9a576e__aws__local
question: 'Explain: Change data capture (CDC) — Open sourcing Brooklin: Near real-time
  data streaming at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 466
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:59-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was responsible for migrating the company’s on‑prem data lake to a cloud‑native architecture while preserving real‑time analytics. The legacy ETL pipelines were batch‑oriented and caused a 12 h lag, hurting downstream dashboards that needed up‑to‑minute freshness.

**Action**  
I led a cross‑functional team in adopting **Change Data Capture (CDC)** using the open‑source *Brooklin* framework (now *Kafka Connect*). We:

1. **Defined requirements** – 200+ tables across MySQL, PostgreSQL and Oracle; 10 GB/s write throughput; <5 s latency to downstream S3 buckets.
2. **Designed the pipeline** –  
   - Source connectors → Kafka topics (AWS MSK)  
   - Stream processing via AWS Lambda + Kinesis Data Streams for transformation  
   - Sink to Amazon S3 (partitioned by timestamp) and Redshift Spectrum for analytics  
3. **Scaled & secured** – Leveraged *MSK Serverless* to auto‑scale partitions; enabled TLS, IAM roles, and VPC endpoints for data in transit.
4. **Monitored & tuned** – Implemented CloudWatch metrics + Kinesis Data Analytics dashboards; reduced lag from 12 h to <5 s.

**Result**  
- Real‑time dashboards updated every minute instead of hourly.  
- Query cost on Redshift dropped 35% by avoiding duplicate data loads.  
- Team productivity increased by 40% as analysts no longer waited for nightly jobs.  

**Leadership Principles**  
- **Customer Obsession:** Delivered instant insights to business users.  
- **Ownership & Dive Deep:** I took full ownership of the migration and delved into connector tuning, latency tracing, and cost modeling.  

*Bar‑raiser cue:* Demonstrated measurable impact, deep technical understanding (Kafka Connect vs. native MSK), and a learning loop—post‑mortem on a 1 h outage led to adding automated retries and dead‑letter queues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
