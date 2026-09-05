---
qid: ing_b2798753b8__star__local
question: 'Explain: We’ve Always Done It This Way — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 323
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:40-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our data‑science platform was built on a monolithic cloud stack that cost us $120k/month. The product team kept saying “we’ve always done it this way,” and any change required a full redeployment.

**Task:**  
I needed to reduce infrastructure costs by 40% while keeping the same model latency (<200 ms) and ensuring zero downtime for the next quarterly release.

**Action:**  
First, I mapped the service graph with Prometheus and identified that 70 % of compute was idle during off‑peak hours. I rewrote the inference microservice in Go, containerized it with Docker, and deployed it on a Kubernetes cluster using Spot Instances and autoscaling. To keep cost low, I switched from paid managed databases to a serverless Aurora Serverless pool, adding caching layers in Redis for hot queries. I also implemented CI/CD pipelines that used Terraform for immutable infrastructure, so each deployment was idempotent and reproducible.

**Result:**  
The platform’s monthly spend dropped to $70k—a 42 % reduction—while inference latency improved from 260 ms to 180 ms. The rollout had zero incidents, and the team now routinely reviews architecture decisions rather than defaulting to legacy patterns. I learned that “always done it this way” is a trap; measurable data and incremental refactoring can break cost cycles without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
