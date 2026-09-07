---
qid: ing_e28708aefe__aws__local
question: 'Q: How do you make a production LLM system EU AI Act ready without building
  a separate compliance stack?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 497
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:35-05:00'
sources: []
---

**Situation / Task**  
I led the rollout of an on‑prem LLM service for a financial client that needed to be EU AI Act compliant within six months. The goal was to avoid building a separate compliance stack while guaranteeing transparency, data minimization, and auditability.

**Action**  
*Anchored on *Customer Obsession* and *Ownership*. I mapped the Act’s “high‑risk” criteria onto our existing pipeline: data ingestion, model training, inference, and monitoring.  

1. **Data Governance Layer** – built a lightweight metadata catalog (AWS Glue Data Catalog + Athena) that tags every document with sensitivity level and source provenance.  
2. **Model Transparency Module** – integrated LLM‑specific explainability (LIME/SHAP) into the inference Lambda; outputs are stored in S3 with immutable versioning, satisfying “explainability” requirements.  
3. **Audit Trail & Access Control** – used AWS IAM roles + KMS‑encrypted CloudTrail logs to capture every request and model change.  
4. **Bias & Fairness Checks** – scheduled nightly SageMaker Processing jobs that run statistical tests (equal opportunity) on the last 10 k predictions; results are pushed to a Grafana dashboard for compliance review.

*Scalability*: The system runs on Fargate Spot + RDS Aurora Serverless, keeping costs < $1.2M/yr vs $3M for a custom stack.  
*Availability*: Multi‑AZ deployments and health checks give 99.9% uptime.  

**Result**  
Within four months we passed the EU AI Act audit with zero findings. The client’s regulatory cost dropped by **35%** (from $600k to $390k annually), and our model latency improved from 1.8 s to 1.2 s due to the streamlined data pipeline.

**Bar‑raiser notes**  
*Ownership*: I drove end‑to‑end compliance without external tooling.  
*Dive Deep*: Detailed metadata schema and bias metrics demonstrate depth.  
*Quantified Impact*: €300k cost savings, 30% latency reduction.  
*Learning*: Initial mis‑tagging of source data taught us to automate tag validation, preventing future audit gaps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
