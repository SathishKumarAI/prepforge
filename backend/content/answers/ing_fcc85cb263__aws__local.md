---
qid: ing_fcc85cb263__aws__local
question: 'Explain: Caching — What is an API Gateway? - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 503
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:27-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation:* In my last role I led the migration of a legacy micro‑service to AWS, where our API latency doubled after adding a new recommendation model.  
*Task:* Reduce end‑to‑end response time below 200 ms while keeping cost < $5k/month.  
*Action:* I owned the solution, first diving deep into CloudWatch traces and X‑Ray segments. I added an **Amazon API Gateway** fronting the Lambda that calls the model, enabled *Caching* (TTL 60 s) and *Usage Plans* to enforce throttling. I also introduced a **DynamoDB Accelerator (DAX)** layer for frequent lookups.  
*Result:* Latency dropped from 480 ms to 140 ms (≈70 % improvement). Cost fell by 35 %, staying under budget, and the deployment was completed in two weeks—exceeding the original 4‑week target.

---

**Technical / System Design**

| Requirement | AWS Service | Reasoning |
|-------------|-------------|-----------|
| **Scalable API entry point** | Amazon API Gateway (REST/HTTP) | Handles millions of requests per day, auto‑scales, and integrates natively with Lambda. |
| **Low‑latency caching** | API Gateway Cache (Redis‑based) | TTL 60 s reduces repeated model invocations; cache hit ratio > 80 %. |
| **Fast key‑value lookups** | DynamoDB + DAX | 99.999% availability, sub‑millisecond reads, cost‑effective with on‑demand capacity. |
| **Observability & troubleshooting** | CloudWatch Logs / X‑Ray | Enables root‑cause analysis and continuous monitoring of latency. |

*Scalability:* API Gateway automatically shards traffic; Lambda scales to thousands of concurrent executions.  
*Availability:* All services are in a multi‑AZ deployment; failover is handled by AWS infrastructure.  
*Cost trade‑offs:* Cache memory incurs per GB/month charges, but the reduction in Lambda invocations offsets this—overall savings > 30 %.  

**Bar‑raiser signals:** ownership of the migration, deep dive into metrics, quantitative impact (latency & cost), and learning from initial failure to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
