---
qid: ing_4447805135__aws__local
question: 'Explain: Improving data quality — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 491
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:33-05:00'
sources: []
---

**Answer (Amazon style)**  

**Situation:**  
While leading a fraud‑prevention ML team at a mid‑size fintech, we noticed model drift because raw transaction logs were noisy—missing fields, inconsistent schemas, and stale labels. The data architecture was ad hoc: a single S3 bucket fed into Glue jobs that ran nightly ETL scripts written in Python.

**Task:**  
Redesign the data pipeline so that data quality is guaranteed before it reaches any training or inference job, while keeping costs under $10k/month and ensuring 99.9 % availability.

**Action (Technical):**  
1. **Schema Registry & Validation** – Introduced AWS Glue Data Catalog + AWS Lake Formation to enforce a canonical schema (Avro) with schema versioning.  
2. **Ingest Layer** – Switched from batch to streaming via Amazon Kinesis Data Streams; used Lambda for real‑time validation and dead‑letter queues for anomalies.  
3. **Data Quality Service** – Built an AWS Step Functions workflow that runs Great Expectations checks on each stream partition, writes metrics to CloudWatch, and triggers alerts in SNS if violations exceed thresholds.  
4. **Storage & Compute** – Persist cleaned data in S3 (partitioned by date) and catalog it in Athena for ad‑hoc analytics; use SageMaker Pipelines for training, pulling only validated partitions.

**Result:**  
- *Data quality score* improved from 68 % to **97 %** within 4 weeks.  
- *Model accuracy* rose by **12 pp** (from 0.84 to 0.96 AUC).  
- *Cost* stayed below $9k/month, and *latency* for real‑time ingestion dropped from 10 min to <30 s.

**Leadership Principles:**  
- **Customer Obsession** – Ensured the end‑user (fraud analysts) received reliable insights.  
- **Ownership & Dive Deep** – Took full responsibility for the pipeline, dissected every failure mode, and iterated until metrics met targets.  

Bar‑raisers look for measurable impact, depth of system design, and a learning loop—exactly what this solution demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
