---
qid: ing_953869efb6__star__local
question: 'Explain: Let''s say you are querying a database — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 347
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:31:30-05:00'
sources: []
---

**Situation** – While leading a churn‑prediction feature for a SaaS company, our analytics team needed to run nightly queries on a table that logged every user action. The raw data was growing at ~5 GB/day and the existing PostgreSQL cluster was hitting 300 ms latency during peak hours, which broke our SLA.

**Task** – I had to redesign the storage layer so that ad‑hoc analytics could finish under 200 ms on a 10 TB dataset, while still supporting real‑time ingestion for the ML pipeline.

**Action** – First, I benchmarked three options: PostgreSQL (partitioned), Amazon Redshift, and Apache Parquet on S3 with Athena. I modeled data as columnar time‑series, added a composite partition key on user_id + event_date, and created bitmap indexes for frequent filters. For the ML pipeline, I set up a Kafka stream that pushed new events to an Iceberg table; this allowed schema evolution without downtime. I also implemented automated vacuuming in Redshift to keep statistics fresh.

**Result** – Query latency dropped from 300 ms to 80 ms on average, and we could generate daily churn reports in under 5 minutes. The ingestion pipeline processed 10 k events per second with <1 % error rate. I learned that choosing the right storage format (columnar vs row) and partitioning strategy is often more critical than raw hardware when scaling ML analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
