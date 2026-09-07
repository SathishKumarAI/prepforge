---
qid: ing_787dcae720__aws__local
question: 'Explain: Golden-set construction and rotation — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 454
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:46-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I led a model‑deployment pipeline that shipped nightly updates to a recommendation engine used by ~4 M daily users. The engineering team was concerned about “model drift” and the risk of a bad model reaching production.

**Action (Dive Deep + Bias for Action)**  
I introduced **Golden‑Set Construction & Rotation** as an *Eval‑Gated CI/CD* step:

1. **Golden Set** – a curated, labeled validation dataset that mirrors real traffic (≈50 k samples per cycle).  
2. **Construction** – every night the set is regenerated from the latest production logs, ensuring it reflects current user behaviour and eliminating stale drift signals.  
3. **Rotation** – each new build runs inference on this golden set; we compute key metrics (AUC‑ROC, lift over baseline). If any metric falls below a *pre‑defined gate* (e.g., 2 % drop in lift), the deployment is automatically rolled back.  
4. **AWS Services** – S3 for storage, Glue for ETL, SageMaker Endpoint for inference, Step Functions orchestrating the pipeline, CloudWatch Alarms triggering rollback Lambda.

This closed loop gave us instant visibility into model health with <5 min turnaround, reduced A/B test churn by 37 % and cut rollback incidents from 8 to 1 per month.

**Result (Deliver Results)**  
The new CI/CD flow improved recommendation click‑through rate by **4.6 % YoY** while keeping infra cost down by **12 %** (thanks to automated rollbacks).  

**Bar‑raiser Insight** – The interviewer looks for ownership of the end‑to‑end pipeline, depth in understanding drift mitigation, and quantifiable impact on business metrics. I also highlighted lessons learned: initially we over‑filtered the golden set, leading to false positives; after tuning thresholds we achieved a better balance between safety and agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
