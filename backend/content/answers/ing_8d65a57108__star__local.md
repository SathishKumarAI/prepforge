---
qid: ing_8d65a57108__star__local
question: 'Explain: Builders — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 323
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:28-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with launching a real‑time recommendation engine for a mid‑size e‑commerce site that needed to scale from 5k to 500k concurrent users during holiday sales without blowing the budget.

**Task:**  
I had to design an event‑driven architecture that could process user interactions, update personalized models, and serve predictions with sub‑200 ms latency—all while keeping compute costs under $2K/month.

**Action:**  
I chose AWS Lambda for stateless inference, Amazon Kinesis Data Streams to ingest clickstream events, and Amazon SageMaker Endpoint for model training. I built a “builder” pipeline in CDK: Lambda functions triggered by Kinesis shards queued into Step Functions that orchestrated SageMaker batch transform jobs every 15 minutes. For state persistence I used DynamoDB with TTL for session data. To reduce cold starts, I reserved 50 % of the Lambda concurrency and employed provisioned concurrency during peak windows. Logging via CloudWatch Insights let me auto‑scale based on request latency.

**Result:**  
The new serverless stack handled 350k concurrent users during Black Friday, maintained <180 ms inference latency, and cut infrastructure spend from $12K to $1.8K/month—an 85% savings. I learned how AWS “builders” (Lambda + Step Functions) can replace monolithic services, giving elasticity and cost‑efficiency when paired with SageMaker for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
