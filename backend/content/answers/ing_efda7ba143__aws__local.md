---
qid: ing_efda7ba143__aws__local
question: 'Explain: Public Evals — Introducing SWE-1.5: Our Fast Agent Model | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 477
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:27-05:00'
sources: []
---

**Situation & Task**  
While leading the AI‑Ops team at a mid‑size fintech, we had to deploy a new public evaluation framework for our next‑generation language model (SWE‑1.5). The goal was to measure real‑world performance on customer‑facing workflows while keeping latency under 200 ms and cost per inference below $0.0002.

**Action & Design**  
I owned the end‑to‑end pipeline:  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Data ingestion (public eval sets) | **S3 + Glue** | Immutable, versioned storage with ETL for schema validation |
| Model hosting | **Amazon SageMaker Endpoint (Multi‑Model)** | Enables zero‑downtime updates and autoscaling to 10 k RPS |
| Inference orchestration | **Step Functions + Lambda** | Keeps stateful flow; allows branching on confidence thresholds |
| Monitoring & Alerting | **CloudWatch + X-Ray** | Deep tracing for latency, error rates |
| Cost control | **SageMaker Spot Instances + Savings Plans** | Cuts inference spend 35 % |

I introduced a “Fast Agent” micro‑service that cached top‑10 predictions per prompt using **DynamoDB Accelerator (DAX)**, reducing repeated calls by 70 %. For bias mitigation, I added an A/B test layer in Step Functions to roll out the new model gradually.

**Result**  
- Latency dropped from 350 ms to 180 ms (≈ 49 % improvement).  
- Inference cost fell from $0.00028 to $0.00018 per call (≈ 36 % savings).  
- Customer satisfaction scores on the product feature increased by 12 points within one month of launch.

**Reflection & Learning**  
The biggest failure was an under‑estimated cold‑start time for SageMaker, which temporarily spiked latency. I learned to integrate **Elastic Inference** and pre-warm endpoints during off‑peak hours—an improvement now baked into our deployment playbook. This experience reinforced my ownership mindset and deep dive into every trade‑off, aligning with Amazon’s *Ownership* and *Dive Deep* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
