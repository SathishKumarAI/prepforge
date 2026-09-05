---
qid: ing_62d05bcdcf__star__local
question: 'Explain: 94: Break Into Serverless Architecture — Serverless Architecture
  - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 341
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:45:32-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying a real‑time recommendation engine that processed user clicks and updated models every hour. The monolithic batch job kept the platform offline for over an hour, causing stale recommendations during peak traffic.

**Task** – My goal was to shift from a VM‑based pipeline to a fully serverless architecture so that model training, inference, and data ingestion could scale independently while keeping latency under 200 ms.

**Action** – I broke the solution into three Lambda functions: one triggered by S3 uploads (pre‑processing with Pandas on a temporary EC2 spot instance), another invoked by EventBridge to launch an AWS SageMaker batch transform job, and a third that writes predictions back to DynamoDB. I used API Gateway + Cognito for secure inference endpoints, and Step Functions to orchestrate the workflow. For state persistence I leveraged S3 versioning and DAX for fast cache reads. Cost‑wise, I switched from 4 GB R5 instances to on‑demand Lambda with provisioned concurrency of 50, reducing compute spend by ~60%.

**Result** – Deployment time dropped from 1 hour to under 10 minutes, real‑time inference latency fell to 150 ms, and monthly infrastructure cost decreased by $4.2k. I learned that a well‑designed serverless stack can dramatically improve agility while keeping budgets in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
