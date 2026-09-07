---
qid: ing_0c106eb1b4__aws__local
question: 'Explain: Um, and try to avoid disseeks if — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 427
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:53:02-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I led the migration of a large‑scale recommendation engine from an on‑prem data lake to **Amazon SageMaker** and **Glue**, my goal was to reduce model‑to‑production latency by 40 % while maintaining a 99.9 % success rate for daily inference batches.

**Action (Dive Deep + Bias for Action)**  
1. **Data pipeline redesign** – replaced custom ETL jobs with **AWS Glue** crawlers and job bookmarks, cutting transform time from 2 h to 30 min.  
2. **Model training & hyper‑parameter tuning** – used **SageMaker HyperParameterTuner** with a *smaller* search space informed by Google’s “feature selection” best practices; this cut GPU usage by 35 %.  
3. **Inference scaling** – deployed models as **SageMaker RealTime endpoints** behind an **Application Load Balancer**, auto‑scaling on CPU utilization, which reduced cost from $12k/month to $7k/month.

**Result (Deliver Results)**  
- Latency dropped from 1.8 s per request to 1.0 s (45 % improvement).  
- Daily batch inference time fell from 2 h to 25 min, freeing 3.5 × more analyst hours.  
- Cost savings of $5k/month, a 42 % reduction in infra spend.

**Learning & Bar‑raiser cues**  
I documented the trade‑off between *model accuracy* and *inference speed*, iterating on feature sets until we hit the sweet spot—showing true ownership and depth. This approach aligns with Amazon’s emphasis on **Customer Obsession** (faster recommendations = happier users) and **Ownership** (continuous improvement loop).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
