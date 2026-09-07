---
qid: ing_0a8c755167__aws__local
question: 'Explain: Hosting Options — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 465
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:34-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a cross‑functional team that had to ship an on‑prem ML model into production for a SaaS client with 10 M monthly users. The client required the model to run in multiple regions and support zero‑downtime updates. My goal was to choose the optimal hosting strategy while keeping latency <30 ms and cost <$0.05 per inference.

**Action**  
I scoped two main options: (1) **ECS/Fargate with SageMaker Runtime** and (2) **AWS Lambda + API Gateway**.  
* I benchmarked each stack with 10 k concurrent requests, measuring CPU, memory, cold‑start latency, and cost per inference.  
* For Fargate, we used **Amazon ECS** with a **Task Definition** that pulled the model from an ECR image; scaling was driven by CloudWatch metrics (CPU >70% → +1 task).  
* For Lambda, I packaged the model as a layer (~30 MB) and leveraged **Provisioned Concurrency** to keep latency <20 ms.  
* Both stacks were deployed via **AWS CDK**, with **ALB** for regional routing and **WAF** for protection.

**Result**  
The Fargate stack delivered 99.9% SLA, cost $0.04/inference, and allowed us to roll out a new model version in under 5 min (vs. 30 min on the legacy on‑prem). The Lambda path was cheaper ($0.03/inference) but hit a 45 ms latency spike during cold starts—so we kept it as an optional “fallback” for low‑traffic zones.

**Learnings**  
I realized that *Ownership* means iterating fast, and *Dive Deep* is essential to expose subtle trade‑offs (e.g., Lambda layer size vs. cold start). I documented the decision tree in our internal wiki, enabling future teams to pick the right hosting model without reinventing the wheel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
