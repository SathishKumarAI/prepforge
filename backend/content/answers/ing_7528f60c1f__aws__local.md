---
qid: ing_7528f60c1f__aws__local
question: 'Explain: Key Components — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 430
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:01-05:00'
sources: []
---

**Situation / Task**  
I was hired as a ML Engineer at a fintech startup that needed a production‑grade recommendation engine for its mobile app. The team had a monolithic backend; we had to split it into a scalable client‑server architecture so the model could serve millions of requests per day while keeping latency < 120 ms.

**Action**  
* **Architecture** – I designed a stateless REST API layer (API Gateway + Lambda) that forwards inference requests to an ECS Fargate cluster running TensorFlow Serving.  
* **Data pipeline** – A nightly Spark job on EMR ingests user logs, trains the model in SageMaker, and pushes the checkpoint to S3.  
* **Caching** – We added a DynamoDB table with TTL for hot predictions; cache hit ratio increased from 12 % to 68 %.  
* **Observability** – CloudWatch metrics + X-Ray traces give us real‑time SLA monitoring.  

I chose **Serverless + Fargate** for *auto‑scaling* (cost ≈ $0.03/req), **SageMaker** for rapid MLOps, and **DynamoDB** for *high availability* (99.999 %). The trade‑off was a slightly higher cold‑start latency (~200 ms) that we mitigated with provisioned concurrency.

**Result**  
- Reduced average inference latency from 350 ms to 95 ms.  
- Cut ops cost by 45 % while handling 4× the traffic.  
- Achieved 99.8 % request success rate in production.  

**Learning & Ownership**  
I owned end‑to‑end delivery, performed a *dive deep* into CloudWatch logs to root cause a spike in latency, and iterated on the design—demonstrating **Ownership** and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
