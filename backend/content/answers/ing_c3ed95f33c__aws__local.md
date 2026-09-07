---
qid: ing_c3ed95f33c__aws__local
question: 'Explain: Step 2: Create a high level design — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 520
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:04-05:00'
sources: []
---

**Situation (S)**  
I was tasked with designing a scalable ML pipeline for a fintech startup that needed real‑time fraud detection. The system had to ingest millions of transactions per day, train models weekly, and serve predictions with <50 ms latency.

**Task (T)**  
Create a high‑level design that balances speed, reliability, and cost while ensuring data integrity and compliance.

**Action (A)**  

1. **Data Ingestion & Storage** – Use **Amazon Kinesis Data Streams** for low‑latency ingestion; store raw events in **S3** (eventual consistency) and a **DynamoDB** table for quick lookups.  
2. **Feature Store** – Build an **AWS Glue** ETL job that aggregates features into a **Redshift Spectrum** catalog, enabling fast SQL queries for model training.  
3. **Model Training** – Spin up **Amazon SageMaker** notebooks on spot instances; schedule weekly training jobs via **Step Functions** to orchestrate data pulls, training, and hyper‑parameter tuning.  
4. **Inference** – Deploy models as **SageMaker Endpoints** behind an **Application Load Balancer** with auto‑scaling (target 90 % CPU). Cache recent predictions in **ElastiCache for Redis** to hit <10 ms latency.  
5. **Monitoring & Governance** – Integrate **CloudWatch** metrics, **AWS X-Ray** tracing, and **GuardDuty** alerts; enforce IAM roles for least privilege.

**Result (R)**  
The pipeline processed 3 M transactions/day with a 99.9 % success rate, reduced inference latency from 120 ms to <30 ms, and cut infrastructure costs by 25 % using spot instances and serverless components.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered real‑time fraud detection, directly protecting customers’ assets.  
- **Ownership & Dive Deep** – Own the end‑to‑end pipeline; deep dive into performance bottlenecks and cost optimization.  

### Bar‑raiser Takeaway
Listen for ownership in design choices, depth of architectural reasoning (service trade‑offs), quantified impact (latency, throughput, cost savings), and reflection on lessons learned when a training job failed due to missing feature schema.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
