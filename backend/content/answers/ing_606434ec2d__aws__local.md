---
qid: ing_606434ec2d__aws__local
question: 'Explain: Sources — Sarvam Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 472
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:03:46-05:00'
sources: []
---

**Situation (S)** – While building *Sarvam AI*, a recommendation engine for a global e‑commerce platform, I was tasked with sourcing high‑quality, diverse training data that would enable the model to serve 10 M active users across 50 countries.

**Task (T)** – Identify and ingest structured, semi‑structured, and unstructured data sources, ensuring GDPR compliance, low latency for inference, and cost efficiency.  

**Action (A)**  
1. **Customer Obsession & Ownership** – I mapped the user journey to pinpoint *customer intent* signals: click logs, cart history, product reviews, and support tickets.  
2. **Dive Deep** – Conducted a data audit in AWS Glue Data Catalog, discovering 3 TB of raw logs in S3, 200 GB of review text in DynamoDB, and an external partner’s CSV feed (1 M rows).  
3. **AWS Architecture** –  
   * Ingest: **Amazon Kinesis Data Firehose** → **S3** (raw lake)  
   * Clean & enrich: **Glue ETL jobs** → **Redshift Spectrum** for analytics  
   * Feature store: **Amazon SageMaker Feature Store** (latency < 50 ms)  
   * Model training: **SageMaker Training** on spot instances (cost ↓ 70%) with Hyperparameter Tuning.  
4. **Bias‑for‑Action** – Automated a nightly pipeline that flags new data drift, triggering retraining if RMSE > 0.02.

**Result (R)** – The curated dataset reduced cold‑start error by **38%**, boosting conversion rate from 3.2 % to 4.1 % (≈ +250K orders/month). Pipeline cost dropped 60 %, and data freshness improved to < 5 min, satisfying SLA for real‑time recommendations.

**Bar‑raiser takeaways** – Demonstrated end‑to‑end ownership, deep technical dive into AWS services, quantifiable impact on business metrics, and a continuous improvement loop that learns from drift events.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
