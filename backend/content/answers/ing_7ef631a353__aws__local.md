---
qid: ing_7ef631a353__aws__local
question: 'Explain: Sales — Careers | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 523
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:12:15-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional team to build a *Sales‑Career Recommendation Engine* that matched prospects to internal roles using their behavioral data and company sales KPIs. The goal was to increase internal mobility by 15 % and reduce hiring time for sales positions by 20 %.

**Action (Technical & Design)**  
- **Data pipeline:** Ingested structured CRM logs, LinkedIn‑style career histories, and performance dashboards into an S3 data lake. Used Glue ETL to clean and enrich features (time‑to‑promotion, quota attainment).  
- **Modeling:** Trained a Gradient‑Boosted Decision Tree (XGBoost) on SageMaker, tuned hyper‑parameters via Bayesian optimization.  
- **Inference & Ops:** Deployed as a real‑time endpoint with SageMaker Hosting; used Lambda to trigger recommendations during the hiring workflow in HRIS.  
- **Scalability/Cost:** Auto‑scaling endpoints kept latency < 200 ms for 10k concurrent requests, costing <$1K/month vs an on‑prem solution of $15K.  
- **Governance:** Implemented Ground‑Truth validation with a feedback loop; A/B test showed a lift of **18 %** in successful role matches and a **22 %** reduction in time‑to‑hire.

**Result**  
- 18 % increase in internal mobility, surpassing the 15 % target.  
- $12K/month saved on infra and 3× faster hiring cycles.  
- The model’s explainability (SHAP) enabled managers to understand recommendation rationale, fostering trust.

**Leadership Principles Highlighted**  
- **Customer Obsession / Ownership:** I owned the end‑to‑end pipeline, continually iterating based on user feedback.  
- **Dive Deep & Bias for Action:** Probed data quality issues, re‑engineered feature sets, and moved from a proof of concept to production in 4 weeks.  

**Bar‑raiser Takeaway**  
Demonstrated ownership by steering the full ML lifecycle, quantified impact with real metrics, and learned from early mis‑labeling errors—quickly correcting the model, which prevented potential bias in career placement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
