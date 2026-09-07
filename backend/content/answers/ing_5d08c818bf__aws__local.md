---
qid: ing_5d08c818bf__aws__local
question: 'Explain: Setting Up Your Environment and Loading the Data'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 427
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:12-05:00'
sources: []
---

**Situation & Task**  
I was tasked with launching a fraud‑prediction model for a $2 B payment platform. To meet the 30‑day go‑live deadline I had to set up an end‑to‑end environment that could ingest terabytes of historical transactions and produce daily training batches.

**Action**  
* **Infrastructure (Ownership & Deliver Results)** – Spin‑up an EC2 Auto Scaling group with GPU instances (p3.8xlarge) behind a Network Load Balancer, paired with an S3 data lake for raw logs.  
* **Data pipeline (Dive Deep & Bias for Action)** – Use AWS Glue to crawl the S3 bucket, catalog schemas in Athena, and schedule ETL jobs that transform raw JSON into Parquet partitions by date.  
* **Model training (Invent & Simplify)** – Launch SageMaker notebooks with a pre‑built TensorFlow container; leverage Spot Instances to cut GPU cost 60 %. The notebook pulls data via the Glue Data Catalog, trains a LightGBM model, and pushes artifacts to S3.  
* **Automation** – Implement Step Functions orchestrating Glue → SageMaker → Lambda (push metrics to CloudWatch).  

**Result**  
Within 21 days we produced a daily retrain pipeline that processes 1 TB of data in under 4 h, with training time reduced from 12 h to 45 min. The model achieved an AUC‑ROC of **0.92**, up 8 % over the legacy rule engine, and prevented $15 M in projected fraud losses annually.

**Reflection (Bar‑raiser focus)**  
I documented failure points (Glue job timeouts) and introduced retry logic, learning that early visibility into Glue metrics saves hours of debugging. The end result demonstrates true ownership, deep technical insight, and a measurable impact on business outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
