---
qid: ing_693d71494e__star__local
question: 'Explain: Serverless on AWS — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 363
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:32-05:00'
sources: []
---

**Situation** – At my previous company we were building a real‑time recommendation engine that needed to scale from a few hundred requests per second during product launches to tens of thousands during peak holiday sales. The existing EC2 fleet was costly and hard to maintain; we hit a $12K/month bill with idle capacity for 70% of the time.

**Task** – I had to design a cost‑effective, highly scalable architecture that could automatically handle traffic spikes while keeping latency under 200 ms and staying within our budget of $5K/month.

**Action** – I migrated the inference layer to AWS Lambda using the Serverless Application Model (SAM). Each model was packaged in a Docker image and deployed as a Lambda function behind an API Gateway. I used Step Functions to orchestrate batch predictions for nightly analytics, and integrated S3 event triggers to re‑train models on new data automatically. To keep cold starts low, I enabled Provisioned Concurrency with 10 instances during peak periods and set up CloudWatch alarms to scale concurrency based on request latency. For persistence, DynamoDB handled user session caching.

**Result** – The new architecture reduced infrastructure costs by 68% (from $12K to $4.2K/month) while improving average prediction latency from 350 ms to 180 ms. Load testing confirmed it sustained 50k RPS with <5% error rate, and the team could focus on model improvements rather than server maintenance. I learned that proper use of Lambda concurrency controls and event‑driven workflows is key to balancing cost and performance in a serverless ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
