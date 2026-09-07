---
qid: ing_087da45c83__aws__local
question: 'Explain: Log Retention — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 509
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:45:13-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to build a log‑retention system that could ingest high‑velocity application logs (≈ 10 M events/sec), store them for 90 days, and support real‑time analytics without breaking the source services. The goal was to replace an on‑premise Hadoop cluster that had become cost‑prohibitive and hard to maintain.

**Action**  
I chose a **Change Data Capture (CDC)** pipeline:  

1. **Source → Kinesis Data Streams** – 100 MB/s per shard, auto‑scaling with Lambda triggers for partitioning.  
2. **Processing → AWS Glue / Athena** – Glue jobs transform raw JSON to Parquet, partitioned by date and log level.  
3. **Storage → S3 Glacier Deep Archive + S3 Standard-IA** – first 30 days in Standard‑IA (access latency < 1 s), remaining 60 days in Glacier for $0.004/GB‑month.  
4. **Querying → Athena & Redshift Spectrum** – on demand, with materialized views for the most common aggregates.

I performed a **cost model**: 10 M events/sec × 30 days ≈ 2 PB raw; after compression (≈ 5×), storage cost dropped from $200K/month (Hadoop) to **$18K/month**. Latency from ingestion to query was < 2 min, meeting SLA.

I also implemented an automated **data‑quality monitor** using CloudWatch metrics and SNS alerts, reducing data drift incidents by 95 %.

**Result**  
The system handled peak traffic of 15 M events/sec with zero outages, cut infrastructure cost by **91 %**, and enabled ad‑hoc analytics in under 2 minutes—directly improving customer support response times.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivering near real‑time insights to ops teams.  
- *Ownership*: Designed from ingestion to cost optimization, owning the entire pipeline.  

**Bar‑raiser Takeaway**  
I demonstrated deep technical dive (shard sizing, partition strategy), quantified impact (cost savings, latency), and learned from early failures by iterating on the compression ratio and alert thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
