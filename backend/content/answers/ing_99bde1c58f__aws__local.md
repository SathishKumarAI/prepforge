---
qid: ing_99bde1c58f__aws__local
question: 'Explain: Tesla System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 431
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:18-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of a real‑time driver‑assist inference pipeline that processed 200 GB/day from on‑board cameras and lidar. The goal was to reduce inference latency by 40 % while keeping cost under $5k/month.

**Action (Design)**  
I scoped the problem with *Dive Deep* – collected telemetry, profiled CPU/GPU usage, and identified a bottleneck in data serialization. I proposed a **serverless micro‑service architecture**:

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| Ingestion | Kinesis Video Streams + Lambda | Auto‑scales with traffic; low latency |
| Pre‑processing | ECS Fargate (Docker) | Stateless, fast startup, no EC2 ops |
| Model Serving | SageMaker Endpoint (Multi‑Model) | Pay‑as‑you‑go inference, supports batch & streaming |
| Result Aggregation | DynamoDB + Step Functions | Durable, ACID guarantees for telemetry logs |

I added **model caching** with Redis‑Elasticache to hit the same model 70 % of the time, cutting GPU usage by 30 %. I also introduced *Bias for Action* by spinning up a pilot in 3 days and iterating on feedback.

**Result**  
Latency dropped from 350 ms to 210 ms (−40 %), cost fell from $9k/month to $4.2k/month, and we achieved 99.8 % uptime over six months. The bar‑raiser asked for ownership— I owned the full SLAs and hand‑rolled a rollback plan using CloudFormation stacks.

**Learnings**  
I discovered that *Invent & Simplify* often means replacing monolithic pipelines with composable serverless pieces, and that continuous monitoring (CloudWatch + X-Ray) is essential to sustain performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
