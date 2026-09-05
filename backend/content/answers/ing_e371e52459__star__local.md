---
qid: ing_e371e52459__star__local
question: 'Explain: Various Services — Apigateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 326
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:22-05:00'
sources: []
---

**Situation** – In my last role I was building a predictive churn model for a telecom client. The model lived on an AWS SageMaker endpoint, but the marketing team needed to trigger predictions from their own web app and also expose a batch scoring API for partners.

**Task** – I had to design a single entry point that could route real‑time inference calls, scheduled batch jobs, and health checks without duplicating code or exposing the raw SageMaker URL.

**Action** – I set up an Amazon API Gateway REST API with three resources: `/predict`, `/batch`, and `/health`. For each stage I used Lambda authorizers to enforce role‑based access. The `/predict` route proxied directly to the SageMaker endpoint via a VPC link, passing JSON payloads and returning probability scores. The `/batch` route triggered an AWS Step Functions state machine that queued jobs in SQS, ran a Glue ETL job, and stored results in S3. I also enabled usage plans and throttling (200 req/min) to protect the backend.

**Result** – The unified API reduced client integration time from two weeks to five days, cut cost by 30% by eliminating duplicate endpoints, and the Step Functions workflow processed 10 GB of data per day with <2 min latency. I learned how to balance simplicity for developers with robust security and scalability in a production ML stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
