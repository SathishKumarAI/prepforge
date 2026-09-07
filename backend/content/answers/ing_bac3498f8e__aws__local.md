---
qid: ing_bac3498f8e__aws__local
question: 'Explain: Startups — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:57-05:00'
sources: []
---

**Situation / Task**  
I was hired by a 5‑person fintech startup that wanted to launch an on‑demand fraud‑prediction model without building and maintaining servers. The goal: deploy a machine‑learning pipeline in under two weeks while keeping monthly spend below $1 k.

**Action (Design)**  
* **Ownership + Bias for Action** – I scoped the entire flow: data ingestion → feature engineering → model inference → alerting.  
* **Dive Deep** – I chose AWS Serverless services that match each step:  
  * **Amazon S3** for raw logs and model artefacts (low‑latency read/write).  
  * **AWS Glue / Lambda** to transform and enrich data on the fly, storing results in **DynamoDB** for quick lookups.  
  * **Amazon SageMaker Edge Manager** to package a lightweight XGBoost model; inference runs inside **Lambda** (max 15 min) or **SageMaker Runtime** for batch scoring.  
  * **AWS Step Functions** orchestrate the workflow, guaranteeing idempotency and retry logic.  
* I added **Amazon CloudWatch** alarms and **SNS** notifications to keep stakeholders informed.

**Result**  
Deployment took 10 days—30 % faster than our original plan. The model scored fraud probability with 93 % precision at a 0.12 false‑positive rate, reducing manual review load by 40 %. Monthly cost stayed $920 (S3 0.2 GB, Lambda 100M invocations, SageMaker endpoints 5 hrs).  

**Learnings**  
The biggest trade‑off was the cold‑start latency of Lambda; we mitigated it with provisioned concurrency for peak hours. This experience reinforced that true **Customer Obsession** means delivering a low‑cost, highly available ML service while staying nimble enough to iterate on model accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
