---
qid: ing_4e0a8604b8__aws__local
question: 'Explain: Permanent Storage — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 487
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:47-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** While leading a data‑science team at my last company, we had to move from an on‑prem Kafka cluster that only kept 7 days of logs to a fully managed, cost‑effective solution that could retain years of raw event data for downstream ML pipelines.  
> 
> **Task:** Design a “permanent storage” layer that is durable, searchable, and inexpensive while still feeding real‑time analytics and model training jobs on AWS.  
> 
> **Action (Technical):**  
> 1. **Kafka → S3 via Kafka Connect + S3 Sink Connector** – each topic partition writes to an S3 bucket in *parquet* format with partition keys (`topic`, `date`).  
> 2. **Glue Catalog** registers the S3 tables so Athena/Redshift Spectrum can query them on demand.  
> 3. **S3 Lifecycle policy** archives older data to Glacier Deep Archive, reducing cost by ~70 % after 6 months.  
> 4. For near‑real‑time use, a Lambda stream from Kinesis Data Firehose (the same source as Kafka) feeds into DynamoDB for quick lookups; this keeps the latency <50 ms for “last‑seen” queries.  
> 5. All data is encrypted at rest with SSE‑S3 and transit via TLS; IAM policies enforce least privilege.  
> 
> **Result (Quantified Impact):** The migration cut storage costs from $12k/month to $4k/month while providing 99.999% durability. ML model training time dropped by 35 % because data is already in parquet on S3, eliminating the ETL step. Customer‑observation dashboards saw a 20 % faster refresh rate.  
> 
> **Reflection (Bar‑raiser focus):** I took full ownership of the migration plan, dove deep into Kafka Connect’s offset management to avoid duplicate writes, and iterated based on failure logs from the first week. The success proved that “Ownership” + “Dive Deep” lead to sustainable, scalable solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
