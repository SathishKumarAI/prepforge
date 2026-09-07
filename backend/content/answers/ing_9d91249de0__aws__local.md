---
qid: ing_9d91249de0__aws__local
question: 'Explain: Scalability Quiz — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 408
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:17-05:00'
sources: []
---

**Situation & Task**  
While leading the ML‑powered “Course Intro Quiz” feature at my last startup, we had to support 1 M daily active users (DAU) across 50+ courses while delivering instant personalized questions. The existing monolith couldn’t scale beyond 10 k concurrent requests and incurred >$200k/month in compute costs.

**Action**  
*Ownership & Dive Deep*: I re‑architected the pipeline into microservices on AWS.  
1. **Ingestion Layer** – API Gateway + Lambda (Python) to receive user context, validate, and push events to an SQS queue.  
2. **Feature Engine** – Fargate ECS tasks that pull from SQS, query DynamoDB for user history, run a lightweight PyTorch inference model hosted on SageMaker Edge containers, and write the result back to DynamoDB.  
3. **Serving Layer** – API Gateway + CloudFront cache (TTL = 60 s) to return quiz JSON.  
*Bias for Action & Deliver Results*: I introduced automated CI/CD with CodePipeline, added CloudWatch dashboards, and set up auto‑scaling policies based on CPU/memory thresholds.

**Result**  
- **Latency dropped from 3.2 s → 120 ms (95th percentile)**.  
- **Cost reduced by 65%**, saving ~$140k annually.  
- **Uptime rose to 99.999%**, meeting SLA for a global user base.

**Bar‑raiser notes** – I owned the end‑to‑end solution, dove deep into Lambda cold starts and SageMaker inference latency, quantified impact with clear metrics, and learned from an initial failure where we over‑provisioned GPU workers—pivoting to CPU‑optimized models saved us 30% more.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
