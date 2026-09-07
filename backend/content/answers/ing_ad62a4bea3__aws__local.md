---
qid: ing_ad62a4bea3__aws__local
question: 'Explain: how we approach microservices and so the'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 386
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:29-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that had to expose an image‑classification model as a high‑throughput microservice for the mobile app (10 M daily requests). The goal was to reduce latency by 40 % while keeping cost < $1.5 k/month.

**Action**  
*Customer Obsession & Ownership* – I mapped user pain points: every 100 ms delay meant a drop in conversion.  
*Dive Deep* – profiled the model (ResNet‑50, 2.3 GB) and benchmarked inference on **EC2 G4dn** vs **AWS Inferentia**.  
I built an **API Gateway + Lambda@Edge** front‑end that routes requests to a **ECS Fargate** cluster running Docker containers with the model cached in **Elastic Inference (EI)**.  
To scale, I enabled **Application Load Balancer’s target group health checks** and auto‑scaling based on CPU > 70 % or request latency > 200 ms.  
For cost, I leveraged **Spot Instances** with a fallback to On‑Demand during traffic spikes.

**Result**  
Latency dropped from 320 ms to 190 ms (41 % improvement). Monthly spend fell to $1.2 k, a 20 % savings. Uptime stayed at 99.98 %.  

**Bar‑raiser focus** – I demonstrated ownership by driving the end‑to‑end pipeline, deep technical dive into inference optimizations, quantified ROI, and learned from an initial mis‑estimate of EI memory that required a quick switch to GPU instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
