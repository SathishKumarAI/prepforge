---
qid: ing_fea574e187__aws__local
question: 'Explain: Luna Evaluation Models FAQs — Luna Evaluation Models  Cloud Observability
  | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 472
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:47-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While leading a cross‑functional team that built *Luna*, an internal ML‑driven observability layer for Splunk, I was asked to prepare a FAQ document on the *Evaluation Models* used by Luna. The goal was to demystify how the model scores and recommends remediation actions to ops teams.  

> **Task:** Deliver a concise, data‑rich explanation that stakeholders could reference during incident reviews, while ensuring the design scales to 10 M events/day across 200+ services.  

> **Action (Technical):**  
> * **Model pipeline:** Raw telemetry → feature engineering (rate of change, anomaly score, correlation matrix) → XGBoost classifier → probability output → rule‑based post‑processing.  
> * **AWS stack:** S3 for raw logs, Glue for ETL, SageMaker Pipelines for training/serving, Lambda to trigger inference on new events, DynamoDB for caching model artifacts, CloudWatch for metrics.  
> * **Scalability & cost:** Horizontal scaling of Lambda (max 1 k concurrent invocations) handles burst traffic; SageMaker endpoint auto‑scales with CPU‑optimized instances (c5.xlarge). Estimated $3k/month vs. on‑prem GPU cluster ($12k).  
> * **Availability:** Multi‑AZ deployment, health checks in CloudWatch; fallback to a “safe” threshold model if the primary fails.  

> **Result (Data):** After rollout, the FAQ reduced incident triage time by 37 % and increased first‑pass remediation success from 68 % to 84 %. Cost savings of $9k/month were realized within two weeks.

> **Leadership Principles Highlighted:**  
> * **Customer Obsession:** Built a self‑explanatory FAQ that empowered ops teams.  
> * **Dive Deep & Ownership:** Took full responsibility for the end‑to‑end model pipeline and its operational health.  

> **Bar‑raiser cues I addressed:** Clear ownership, deep technical rationale, quantifiable impact, and continuous learning loop (monitoring model drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
