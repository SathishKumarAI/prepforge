---
qid: ing_73da1b8283__aws__local
question: 'Explain: Data types supported (for value) — Datatypes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 491
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:56-05:00'
sources: []
---

**Answer – Amazon Interview Style**

During my last role at a fintech startup I led the migration of our on‑prem ML pipeline to **AWS SageMaker**, which required me to map every data type we handled (numeric, categorical, text, image, time‑series) into SageMaker’s supported formats.  

- **Situation**: Our legacy system stored values in heterogeneous formats (CSV with mixed delimiters, Parquet, Avro, and raw binary blobs).  
- **Task**: Convert all sources to a unified schema that SageMaker can ingest for training and inference without data loss.  
- **Action**:  
  1. Built an ETL workflow in **AWS Glue** using dynamic frames to *discover* schemas automatically (`inferSchema=True`).  
  2. Normalized numeric fields to `float32`, categorical to `int64` (after hashing), text to UTF‑8 strings, images to base64‑encoded JPEGs, and time‑series to ISO‑8601 timestamps.  
  3. Stored the cleaned data in **Amazon S3** as Parquet for columnar efficiency and registered it with SageMaker’s **Feature Store**.  
  4. Wrote unit tests that asserted schema consistency across 12 source tables, catching 3 previously unseen type mismatches.  

- **Result**: The pipeline now processes **10× more data per training job**, reduces storage costs by **35%** (Parquet vs CSV), and cuts model training time from 8 hrs to 1.2 hrs on SageMaker’s `ml.p3.8xlarge` instances—delivering predictions with <0.5 s latency for 99th‑percentile traffic.

**Leadership Principles Highlighted**

- **Customer Obsession** – Ensured the data pipeline served downstream ML models that directly improved user experience (faster fraud detection).  
- **Ownership / Dive Deep** – Took full responsibility, debugged schema drift at source level, and validated every conversion path.  

Bar‑raisers will note my *quantified impact*, the *deep dive into type handling*, and how I *learned from failures* by adding automated schema checks that prevented downstream data quality regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
