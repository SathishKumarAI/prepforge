---
qid: ing_f5f4161f5e__aws__local
question: 'Explain: Key Learnings — Financial Analysis'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 468
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:01-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to justify the launch of an AI‑driven recommendation engine for a $3 B e‑commerce portfolio. The leadership team needed a clear financial model that linked compute, storage, and business outcomes.

**Action (Dive Deep + Ownership)**  
I built a **serverless cost engine** using AWS Lambda + Step Functions to pull daily SageMaker training metrics from CloudWatch, auto‑scaling EC2 spot fleets for inference, and S3 lifecycle policies. I integrated Cost Explorer APIs to map spend per model version and correlated it with conversion lift measured in A/B tests. The model produced a **$0.15/transaction cost** versus $0.10 on the legacy rule‑based system—an 18 % reduction—while boosting revenue by $12M annually.

I presented this as a **payback dashboard** (Redshift + QuickSight) that updated in real time, giving finance and product teams instant visibility. I also wrote a playbook for future AI pilots, documenting assumptions, risk buckets, and rollback triggers.

**Result (Deliver Results)**  
The engine was green‑lit with a 24 % lower total cost of ownership over two years. The quarterly review showed a 32 % lift in average order value attributable to the recommendation system—$15M incremental revenue.  

**Learnings & Bar‑raiser signals**  
- *Ownership*: I owned the entire end‑to‑end pipeline, from data ingestion to financial reporting.  
- *Dive Deep*: Leveraged granular metrics (CPU hours, GPU usage) to surface hidden inefficiencies.  
- *Quantified Impact*: Delivered concrete $M and % figures that directly influenced executive decisions.  
- *Learning from Failure*: When an initial spot fleet configuration hit throttling, I pivoted to reserved instances, documenting the trade‑off in a post‑mortem that became part of our AI cost framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
