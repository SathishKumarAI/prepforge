---
qid: ing_abd58b39c4__aws__local
question: 'Explain: Scaling to support a large global shared fleet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 471
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:54:31-05:00'
sources: []
---

**Situation / Task**  
I led the ML‑infrastructure team at a global rideshare startup that suddenly needed to serve 5 M active drivers worldwide while keeping inference latency under 50 ms for real‑time pricing and fraud detection.

**Action**  
- **Owned** the end‑to‑end pipeline (Model training → registry → serving).  
- Adopted *Amazon SageMaker* for training, using Spot Instances to cut GPU costs by 60 %.  
- Deployed models with *SageMaker Endpoint* behind an Application Load Balancer and *AWS Global Accelerator* to route traffic within 5 ms globally.  
- Implemented *Model Versioning & Canary releases* in SageMaker Model Registry, allowing A/B testing without downtime.  
- For scalability I leveraged **EFS** for shared feature stores and **Amazon DynamoDB** (partition key = driver‑region) to cache pre‑computed features, reducing compute by 30 %.  
- Applied *Auto Scaling* on endpoints with CloudWatch metrics; achieved 99.99 % availability while keeping average cost < $0.03 per inference.

**Result**  
- Latency dropped from 120 ms to **48 ms** (≥ 60 % improvement).  
- Daily inference count grew from 2 M to **5 M** with a **$12k/month** savings on compute resources.  
- Post‑deployment, we observed a **0.9% lift in driver retention** due to more accurate surge pricing.

**Learnings & Bar‑raiser focus**  
I practiced *Dive Deep* by profiling CPU/GPU usage and iteratively pruning models (e.g., switching from ResNet50 to MobileNetV2) without sacrificing accuracy. I also *Bias for Action*—prototyped the architecture in 48 hrs, then scaled it gradually. The bar‑raiser will note my ownership of both business impact and technical depth, and how failure (initial over‑provisioning) led to a cost‑effective design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
