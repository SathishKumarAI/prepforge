---
qid: ing_34aab60b59__aws__local
question: 'Explain: Claude Cowork — Claude Academy \u00b7 Learn to work and build
  with Claude'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 407
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:03-05:00'
sources: []
---

**Situation & Task**  
When I joined the data‑science team at a mid‑size fintech, we needed an internal learning platform that could expose engineers to large language models without exposing proprietary code. The client requested a “Claude Cowork” module in our existing Claude Academy portal, so I owned the design and rollout.

**Action**  
I scoped requirements: (1) secure sandboxed inference for 200+ users, (2) real‑time collaboration on prompt templates, (3) analytics to measure learning impact. I chose **Amazon SageMaker Endpoint** for low‑latency Claude inference, wrapped it in an **AWS Lambda** layer that handled per‑user API keys and rate limiting. For collaboration, I built a lightweight **WebSocket** service on **API Gateway + Lambda**, storing session state in **DynamoDB** (event‑driven, auto‑scaling). Metrics were pushed to **Amazon CloudWatch** and visualized with **QuickSight**.

**Result**  
Within two weeks of launch, 85 % of our engineers used the platform daily. Post‑deployment surveys showed a 47 % increase in model‑centric feature velocity (from 3 to 4.5 stories/month). Cost stayed under $1,200/mo thanks to on‑demand SageMaker and DynamoDB’s pay‑per‑request pricing.

**Reflection**  
I practiced *Ownership* by driving the end‑to‑end solution, *Dive Deep* into AWS services’ limits, and *Bias for Action* by iterating in sprints. The failure point was an initial over‑provisioned Lambda concurrency that hit throttles; I learned to model traffic with CloudWatch Alarms and apply reserved concurrency instead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
