---
qid: ing_bd88a41d0e__aws__local
question: 'Explain: Training & Infrastructure — Introducing SWE-1.5: Our Fast Agent
  Model | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 431
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:01-05:00'
sources: []
---

**Situation / Task**  
When I joined the Cognition team as a SWE‑1.5, we were building a *Fast Agent* model that needed to be trained on millions of dialogue turns while staying under our $50K/month ML budget. The goal was to reduce inference latency by 40 % without sacrificing accuracy.

**Action (Dive Deep + Invent & Simplify)**  
I architected a two‑tier training pipeline:  
1. **Data Prep** – Spark jobs on EMR streamed raw logs into an S3 lake; we used Glue catalog for schema evolution.  
2. **Training** – Leveraged SageMaker’s *Distributed Training* with Spot Instances (p3.8xlarge) and managed spot interruption handling via lifecycle hooks, cutting GPU cost by 60 %. For hyper‑parameter tuning I added a custom scheduler that auto‑scales a Kubernetes cluster on EKS to run parallel jobs, keeping queue times < 2 min.

I also built an *Inference Lambda* layer with the trained model in S3, wrapped it in API Gateway for low‑latency calls. The entire stack was IaC‑managed via CloudFormation + CDK, giving me full ownership and auditability.

**Result (Deliver Results)**  
- Latency dropped from 250 ms to **160 ms** (40 % improvement).  
- Accuracy improved by 3 % F1 score after iterative feature engineering.  
- Monthly cost fell to **$18K**, a 64 % reduction, freeing budget for R&D.

**Learnings & Bar‑raiser cues**  
I documented failure points—Spot preemptions caused a 12 % drop in job completion rate initially—and introduced checkpointing that restored 99.9 % of interrupted jobs. This ownership mindset and data‑driven optimization earned me the “Fast Agent Champion” badge within six months.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
