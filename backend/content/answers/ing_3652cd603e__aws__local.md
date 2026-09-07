---
qid: ing_3652cd603e__aws__local
question: 'Explain: Now if you want to extend it — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 480
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:30-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML team at my previous company we had a simple recommendation model that ran nightly on a single EC2 instance. The product manager asked us to *scale this up to serve real‑time predictions for millions of users across multiple regions*—essentially turning our batch job into a Google‑Maps‑style routing service.

**Action – Design & Implementation**  
I first mapped the requirements: low latency (<50 ms), high availability (99.9 % SLA), and cost control. I chose **Amazon SageMaker Endpoint** for model inference, auto‑scaling via **Application Auto Scaling** to handle traffic spikes, and **AWS Global Accelerator** to route users to the nearest endpoint. For feature enrichment we used **DynamoDB Streams + Lambda** to update user context in near real time. To keep costs down I switched from a single GPU instance to an **SageMaker Multi‑Model Endpoint**, sharing the same container across several models.

I also implemented **Amazon CloudWatch metrics** (latency, error rate) and **AWS X-Ray** for tracing, enabling rapid troubleshooting. The deployment pipeline was fully CI/CD with **CodePipeline** and **ECS Fargate** for the microservices that fed data into SageMaker.

**Result**  
Within 3 weeks of rollout we achieved:
- **99.97 % availability** across three regions,
- **30 % reduction in inference latency** (from 120 ms to 84 ms),
- **25 % cost savings** versus the previous on‑prem GPU cluster.

The model accuracy stayed at 0.89 AUROC, so we delivered faster predictions without compromising quality.

**Reflection & Bar‑raiser Signals**  
I took *ownership* of both ML and infra, *dived deep* into latency bottlenecks, and *bias for action* by iterating the design in sprints. The measurable impact (latency, cost, SLA) satisfies the bar‑raiser’s focus on quantified results. I learned that coupling model serving with regional routing can dramatically improve user experience—an insight I shared at our quarterly tech talks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
