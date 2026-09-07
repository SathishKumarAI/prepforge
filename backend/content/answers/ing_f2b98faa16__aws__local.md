---
qid: ing_f2b98faa16__aws__local
question: 'Explain: Use cases — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 411
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:17-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* A fintech startup needed a real‑time fraud detector that could scale from a few thousand to millions of transactions per day without the overhead of managing servers.

*Task:* Design a fully serverless ML pipeline that trains on historic data, deploys inference models, and triggers alerts with sub‑second latency.

*Action:*  
- **Data ingestion** – Kinesis Data Streams + Lambda for event validation.  
- **Feature store** – DynamoDB (event‑time index) plus SageMaker Feature Store for high‑velocity feature retrieval.  
- **Model training & versioning** – SageMaker Processing jobs triggered by Step Functions; models stored in S3 with automated CI/CD via CodePipeline.  
- **Inference** – SageMaker Endpoints behind an Application Load Balancer, auto‑scaling based on CloudWatch metrics (CPU % and latency).  
- **Alerting** – Lambda writes to SNS/SQS; downstream Lambda pushes to a Kinesis Data Firehose for audit logs.

*Result:* Deployment reduced infrastructure ops by **95%**, cut inference cost from $0.05/req to **$0.01/req**, and lowered average detection latency from 200 ms to **45 ms**—boosting the client’s fraud loss reduction by **12%** in Q3.

*Learnings:*  
- “Dive Deep” into cold‑start patterns; added provisioned concurrency for critical endpoints.  
- Adopted a *fail‑fast* approach: if model drift >5%, Step Functions roll back to the previous stable version, ensuring zero downtime.

> **Bar‑raiser check:** Demonstrated full ownership (end‑to‑end pipeline), depth in performance tuning, quantified impact on cost & latency, and continuous learning from failure scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
