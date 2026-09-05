---
qid: ing_36d5ff6a35__star__local
question: 'Explain: Cloud Computing — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 327
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:17:55-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time recommendation engine for an e‑commerce platform that had to serve millions of users per day. The on‑premise servers could not handle the spike during Black Friday sales, and latency was creeping above 300 ms.

**Task:**  
Move the recommendation microservice to a cloud environment using a client‑server architecture that would scale elastically while keeping response time under 100 ms and cost within our $20k/month budget.

**Action:**  
I chose AWS with an API Gateway fronting an ECS cluster running Docker containers. The clients were the web/mobile apps; the server exposed REST endpoints for “getRecommendations” and “recordInteraction”. I implemented autoscaling policies based on CPU utilization (70%) and added a Redis cache in ElastiCache to store user‑profile embeddings, reducing database hits by 80%. For resilience I set up an Application Load Balancer with health checks and deployed the service across two AZs. I also used CloudWatch metrics and X-Ray tracing to identify bottlenecks.

**Result:**  
The system handled a peak of 1.2 M requests per minute with average latency 65 ms, a 40% reduction in response time versus the legacy setup. Cost stayed at $18k/month. The experience taught me how to balance elasticity, caching, and monitoring to build robust client‑server architectures in the cloud.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
