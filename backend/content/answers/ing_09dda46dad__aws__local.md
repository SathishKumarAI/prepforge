---
qid: ing_09dda46dad__aws__local
question: 'Explain: From Connected Project Data to Construction Intelligence: Building
  the Foundation for AI-Powered Construction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 425
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:27-05:00'
sources: []
---

**Situation & Task**  
At my previous firm we had siloed sensor feeds (IoT devices on rigs, BIM files, GPS logs) but no unified view to predict delays. I owned the “Construction Intelligence” project: ingest all connected‑project data and expose it as a training dataset for AI models that forecast schedule slips.

**Action – Architecture & Design**  
1. **Data ingestion** – AWS IoT Core streams telemetry → Kinesis Data Streams; BIM/CSV uploads go to S3 via Glue ETL.  
2. **Real‑time processing** – Lambda + DynamoDB TTL normalizes timestamps, tags by project ID, and writes a “facts” table for downstream ML.  
3. **Batch training** – AWS Glue jobs create Parquet datasets in Lake Formation; SageMaker pipelines train Gradient Boosting models nightly.  
4. **Inference API** – Endpoint on SageMaker hosting with Auto Scaling, front‑ed by API Gateway + CloudFront for low latency.  

I chose serverless where possible to keep costs < $2k/month and used Spot Instances for training (30% cheaper). Availability was 99.9% via multi‑AZ deployments; we added a fallback Lambda that reads from S3 if Kinesis throttles.

**Result**  
Within three months, the model achieved **87% precision** in predicting task overruns > 2 days, reducing schedule variance by **23%** and saving an estimated $1.4M annually in labor overrun costs.

**Learning & Ownership**  
I iterated on data quality by adding a “data health” metric; when latency spiked I blamed the IoT firmware and coordinated with vendors to patch it—demonstrating true ownership.  

*Leadership Principles:* **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
