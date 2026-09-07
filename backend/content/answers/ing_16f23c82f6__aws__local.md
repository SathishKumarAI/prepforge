---
qid: ing_16f23c82f6__aws__local
question: 'Explain: Cleaning Currency Values — How to Clean Messy CSV Files with Python:
  A Beginner\u2019s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 593
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:27-05:00'
sources: []
---

**Situation (S)**  
At a fintech startup I was tasked to ingest daily currency‑exchange feeds from 12 vendors in CSV format. The files were riddled with inconsistent decimal separators, missing headers, and stray non‑numeric characters—causing downstream ML pipelines to crash.

**Task (T)**  
Build an automated, scalable cleaning pipeline that normalizes all monetary fields into a single ISO‑4217 schema, validates data integrity, and exposes clean datasets for the model training step.

**Action (A)**  

| Step | AWS Service | Why |
|------|-------------|-----|
| 1. Ingest raw CSVs | **S3 + S3 Event Notifications** | Durable storage & trigger on arrival. |
| 2. Pre‑process & clean | **AWS Glue ETL job (Python Spark)** | Handles large files, provides schema inference, and integrates with AWS Data Catalog. |
| 3. Validation & error logging | **Amazon CloudWatch + SQS** | Real‑time metrics; failed rows are sent to an error queue for later review. |
| 4. Store cleaned data | **S3 (Parquet)** | Columnar format reduces storage and query cost. |
| 5. Trigger ML training | **Step Functions → SageMaker Training Job** | Orchestrates downstream steps only after successful cleaning. |

*Key design choices*  
- **Decimal Normalization:** Use `locale`‑aware regex to replace commas or periods based on vendor metadata, then cast to `float`.  
- **Missing Headers:** Glue’s dynamic frame infers schema; we map ambiguous column names via a config table in DynamoDB.  
- **Scalability:** Spark clusters auto‑scale (1–10 workers) per file size; cost is ~$0.25/hr per worker.  
- **Availability:** All services are regionally redundant; Glue jobs retry on transient failures.

**Result (R)**  
Within two weeks, processing time dropped from 45 min to 4 min for a 1‑GB dataset, and data quality errors fell by **92 %** (from ~1200 to 80 per file). The ML model’s prediction accuracy improved from 78 % to 86 % due to cleaner inputs.  

---

### Leadership Principles Highlighted  
- **Customer Obsession:** Delivered reliable, high‑quality data for the product team’s forecasting needs.  
- **Ownership & Dive Deep:** Built end‑to‑end pipeline, debugged edge cases, and continuously refined the schema mapping logic.  

*Bar‑raiser notes:* The candidate demonstrated ownership by automating a manual process, deep technical knowledge of Glue Spark, quantified impact on latency and accuracy, and reflected on iterative improvements (e.g., adding error queues).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
