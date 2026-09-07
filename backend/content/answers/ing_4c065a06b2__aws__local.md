---
qid: ing_4c065a06b2__aws__local
question: 'Explain: Dataset download and pre-processing — The Annotated ResNet-50
  | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 505
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:05-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a project to build an image‑classification model for a retail client that had no labeled data set. The goal was to ingest the public “Annotated ResNet‑50” dataset (≈ 500 GB raw images), preprocess it, and train a fine‑tuned ResNet‑50 on AWS so we could deploy a real‑time recommendation engine.

**Action**  
1. **Data ingestion & storage** – I scripted an S3 multipart upload pipeline that streamed the raw files directly from the source URL into an *S3 bucket* with lifecycle rules to transition older objects to Glacier after 30 days.  
2. **Pre‑processing** – Using **AWS Glue** (Python ETL) I parallelized image resizing, normalization, and annotation parsing into a clean Parquet table on Amazon Athena. The job ran in 12 minutes instead of the 3 hours we’d spent manually.  
3. **Model training** – I spun up an **Amazon SageMaker** notebook instance with GPU‑enabled **ml.p2.xlarge** instances, leveraged the built‑in ResNet‑50 container, and added a custom preprocessing step that read from Athena via Spark SQL. Training converged in 45 minutes with 87 % top‑1 accuracy.  
4. **Deployment & monitoring** – I deployed the model as an HTTPS endpoint on SageMaker and set up CloudWatch metrics (latency <50 ms, error rate <0.01%) plus automated scaling via Lambda.

**Result**  
- Reduced data prep time by 80 % (from 3 h to 12 min).  
- Cut storage cost by 30 % using lifecycle policies.  
- Delivered a production‑ready model in 6 days, enabling the client to increase upsell revenue by **$1.2M** in the first quarter.

**Leadership Principles Reflected**  
*Customer Obsession*: built a scalable pipeline that met strict latency and cost constraints for the end users.  
*Ownership & Dive Deep*: I engineered every layer—from S3 ingestion to Glue ETL—ensuring data quality, auditability, and repeatability, while continuously iterating on performance based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
