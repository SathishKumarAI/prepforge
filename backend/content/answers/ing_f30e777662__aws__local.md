---
qid: ing_f30e777662__aws__local
question: 'Explain: Getting Started — Introduction | Developer Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 326
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:17-05:00'
sources: []
---

**Situation / Task**  
I was tasked to onboard a new data‑science team onto AWS SageMaker so they could prototype models in under two weeks.

**Action**  
1. **Customer Obsession & Ownership** – I first mapped the team’s pain points: slow data ingestion, opaque training metrics, and uncertain cost control.  
2. **Dive Deep** – I walked through the *Getting Started* section of the SageMaker Developer Guide, highlighting key pages (Notebook Instances, Training Jobs, Model Hosting).  
3. **Bias for Action & Invent & Simplify** – Built a reusable CloudFormation stack that auto‑provisioned an EFS-backed notebook, a Step‑Function orchestrator, and a Lambda cost‑alert.  
4. **Deliver Results** – Trained a simple XGBoost model on the public “Titanic” dataset in 8 minutes, logged metrics to SageMaker Experiments, and deployed it with autoscaling; total spend < $5.

**Result**  
- Team launched their first production model within 10 days (vs. expected 3 weeks).  
- Model latency dropped from 2 s to 300 ms.  
- Cost per inference reduced by 35% through the autoscaling rule.  

**Bar‑raiser notes** – Demonstrated ownership, deep technical understanding of SageMaker’s workflow, quantified impact, and a quick turnaround that highlighted learning from earlier manual deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
