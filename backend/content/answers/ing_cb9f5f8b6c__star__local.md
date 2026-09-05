---
qid: ing_cb9f5f8b6c__star__local
question: 'Explain: Business leaders — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 302
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:15:54-05:00'
sources: []
---

**Situation:**  
At my previous company, we were launching a real‑time customer engagement platform for a national retailer. The existing monolithic architecture was struggling to handle traffic spikes during holiday sales, and the ops team spent hours provisioning EC2 instances.

**Task:**  
I needed to redesign the backend so it could scale automatically, reduce infrastructure costs, and cut deployment time from days to minutes, all while keeping latency under 150 ms for our push‑notification service.

**Action:**  
I architected a serverless solution on AWS: Lambda functions handled request routing, API Gateway exposed REST endpoints, and DynamoDB stored user sessions. I used Step Functions to orchestrate complex workflows, SQS for buffering bursts, and CloudWatch Alarms to trigger auto‑scaling of DynamoDB read/write capacity. To keep costs low, I enabled Lambda provisioned concurrency only during peak periods and leveraged AWS X-Ray for observability. I also wrote CI/CD pipelines in CodePipeline that automatically packaged and deployed new Lambda versions.

**Result:**  
The platform now supports 50 % more concurrent users with <120 ms average latency. Infrastructure spend dropped by 35 %, and deployment time shrank from two days to under ten minutes. The project taught me how to balance performance, cost, and developer velocity using AWS serverless services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
