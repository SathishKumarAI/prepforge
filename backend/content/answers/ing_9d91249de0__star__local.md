---
qid: ing_9d91249de0__star__local
question: 'Explain: Scalability Quiz — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 307
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:22-05:00'
sources: []
---

**Situation** – In my last role I was asked to design an online learning platform that would host interactive machine‑learning quizzes for up to 10,000 concurrent users during a global launch. The existing prototype could only handle a few hundred sessions before latency spiked.

**Task** – My goal was to architect a scalable, fault‑tolerant system that kept response times under 200 ms and could auto‑scale as traffic surged, while keeping costs predictable for the business.

**Action** – I broke the solution into microservices: a stateless quiz service on AWS Lambda behind an Application Load Balancer, a Redis cache for session state, and a DynamoDB table for user progress. I added CloudWatch alarms to trigger EC2 Spot‑Instance scaling in the event of sudden traffic spikes. To reduce cold starts I pre‑warm Lambdas during peak hours and used API Gateway caching for static quiz data. I also implemented optimistic locking on DynamoDB to avoid race conditions when multiple devices updated the same answer.

**Result** – After launch, we handled 12,000 concurrent users with average latency of 140 ms and incurred a 30% reduction in infrastructure spend compared to the monolithic design. The exercise taught me how to blend serverless elasticity with stateful caching to meet strict performance SLAs while keeping budgets under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
