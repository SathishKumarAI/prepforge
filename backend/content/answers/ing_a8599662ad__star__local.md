---
qid: ing_a8599662ad__star__local
question: 'Explain: Ten Users — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 368
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:42-05:00'
sources: []
---

**Situation:**  
In my last role, we were launching a new recommendation engine for an e‑commerce platform that needed to support ten thousand concurrent users during peak holiday sales. The existing on‑prem infrastructure was choking under the load and our SLA required <200 ms latency.

**Task:**  
I had to design an AWS‑centric architecture that would scale automatically, keep costs predictable, and maintain sub‑200 ms response times for every user request.

**Action:**  
First, I broke the system into microservices: a Flask API layer behind Application Load Balancers, a stateless inference container on ECS Fargate, and a Redis cache in Elasticache for session data. I used Auto Scaling groups with CloudWatch metrics (CPU & RPS) to spin out new instances when traffic hit 70 % of capacity. For the heavy ML model, I leveraged SageMaker endpoints with GPU instances that autoscaled based on inference latency. I also introduced a DynamoDB Global Table for user profiles, ensuring low‑latency reads across regions. Finally, I set up CI/CD pipelines in CodePipeline to roll out new models without downtime and used X-Ray for end‑to‑end tracing.

**Result:**  
The system handled 12 k concurrent users during the Black Friday surge with an average latency of 145 ms. Cost per request dropped by 18 % compared to our legacy setup, and we eliminated the single point of failure that had plagued us before. I learned how careful partitioning of compute, caching, and auto‑scaling can turn a fragile monolith into a resilient, cost‑efficient cloud service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
