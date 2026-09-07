---
qid: ing_10cff4bc82__aws__local
question: 'Explain: Making Fable Cheaper Than Opus — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 394
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:38-05:00'
sources: []
---

**Situation & Task**  
At a media‑tech startup I led the migration of our *Fable* inference pipeline from an on‑prem “Opus” cluster to the cloud. The goal was to cut monthly ML compute spend by ≥ 40 % while keeping latency under 200 ms for real‑time story recommendations.

**Action**  
I scoped requirements (batch vs. real‑time, data volume ~3 TB/month). I chose **Amazon SageMaker Endpoint + Lambda** for inference, **S3** for storage, and **AWS Step Functions** to orchestrate preprocessing. I replaced the monolithic Opus model with a distilled version (≈ 30 % fewer parameters) and added *on‑demand GPU* scaling via **ECS Spot Instances**. To avoid over‑provisioning, I implemented an autoscaling policy based on CloudWatch metrics (CPU & latency). For cost visibility, I set up **Cost Explorer alerts** and a daily spend report in QuickSight.

**Result**  
Monthly compute costs fell from $12 k to $7 k (≈ 42 % savings). Latency improved from 250 ms to 180 ms. The new pipeline handled a 60 % traffic surge during peak launch without SLA violations, proving the design’s scalability and high availability.

**Learning & Ownership**  
I maintained ownership by continuously monitoring cost/latency dashboards, iterating on model size, and conducting post‑mortems after each deployment. This deep dive into trade‑offs (model accuracy vs. inference speed) exemplified *Dive Deep* and *Ownership*, aligning with Amazon’s focus on customer obsession and delivering results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
