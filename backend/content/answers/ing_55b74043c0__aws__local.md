---
qid: ing_55b74043c0__aws__local
question: 'Explain: G&A — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 463
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:56-05:00'
sources: []
---

**Situation / Task**  
When I joined Glean’s data‑science team, the engineering squad was scaling from 8 to 30 people while keeping ML experiments reproducible. The leadership asked me to design a “Jobs at Glean” framework that would standardize how analysts schedule and monitor model training across multiple cloud environments.

**Action (Dive Deep + Ownership)**  
I first mapped the entire workflow: data ingestion, feature extraction, hyper‑parameter tuning, model registry, and deployment. Using **AWS Step Functions** I orchestrated each step as a state machine; every job was stored in **Amazon SageMaker Pipelines** for reproducibility. I introduced **AWS EventBridge** to trigger jobs on code commits or new dataset arrivals, eliminating manual handoffs. To reduce cost, I leveraged **SageMaker Spot Training** and added an auto‑scaling rule that capped GPU usage at 70 % of the cluster’s capacity.

I also built a lightweight UI in **Amazon QuickSight** that surfaced job status, run time, and cost per model, feeding back into our sprint planning. The solution was documented in Confluence, and I led a knowledge‑share session so every analyst could create jobs without deep cloud expertise.

**Result (Deliver Results + Customer Obsession)**  
Within 3 months the team cut average training cycle time from **48 hrs to 12 hrs** (75 % reduction) and lowered monthly GPU spend by **$4,800**. Adoption grew from 2 to 18 users, and we saw a 30 % increase in model iteration speed, directly boosting feature roll‑outs for end customers.

**Bar‑raiser signals**  
- Demonstrated *ownership* of the full pipeline, not just a component.  
- *Dived deep* into AWS services to balance cost vs availability.  
- Quantified impact with concrete metrics (time & dollars).  
- Learned from early failures—initially over‑provisioned instances; we tuned Spot policies after post‑mortem reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
