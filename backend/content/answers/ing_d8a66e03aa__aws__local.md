---
qid: ing_d8a66e03aa__aws__local
question: 'Explain: Questionable Demands Made of Workers — Meta Superintelligence
  Labs: What We Know So Far | Built In'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 365
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:21-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional team at Meta Superintelligence Labs, we discovered that the newly released *Questionable Demands* model was generating predictions that unfairly penalised certain user segments—an issue flagged by our internal compliance audit.

**Task (T)**  
I owned the remediation effort: quantify bias, redesign the training pipeline, and deploy a production‑ready solution within two weeks while keeping SLA ≥ 99.9 % and cost < 5 % of baseline.

**Action (A)**  
- **Dive Deep & Ownership** – I ran a full data audit using Athena on S3 to identify skewed label distributions; found a 12 % bias against low‑income users.  
- **Bias for Action & Invent & Simplify** – Implemented a re‑weighting scheme in SageMaker, added a fairness metric (Equal Opportunity Difference) to the CI pipeline, and replaced the heavy TF‑Serving cluster with an Elastic Inference‑enabled endpoint on EC2 Spot to cut inference cost by 35 %.  
- **Customer Obsession** – Rolled out A/B tests to users; post‑fix churn dropped from 4.8 % to 1.9 %.

**Result (R)**  
Within 14 days we achieved a *bias reduction of 84 %*, maintained 99.95 % uptime, and saved $120k/month on inference costs—directly improving user trust and compliance posture.

*Bar‑raiser cues:* ownership of the problem, deep dive into root cause, quantitative impact, rapid learning loop from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
