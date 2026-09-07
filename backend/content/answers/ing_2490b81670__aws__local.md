---
qid: ing_2490b81670__aws__local
question: 'Explain: Experience Rating — Abridge Software Engineer Interview Experience
  - United States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 542
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:34-05:00'
sources: []
---

**Situation / Task**  
When I joined **Abridge**, a health‑tech startup, the hiring team was overwhelmed by 8 k+ resumes and only 30 % of candidates progressed to coding interviews. The goal: build an *Experience Rating* ML system that predicts interview readiness (0–1) so we could triage 70 % of applicants automatically.

**Action**  
1. **Ownership & Dive Deep** – I scoped the problem, mapped data pipelines, and defined a target metric (AUC‑ROC ≥ 0.86).  
2. **Data Engineering** – Pulled 4 M resume features from LinkedIn APIs, AWS Glue jobs, and S3. Cleaned with Python/Databricks; stored in Redshift for fast querying.  
3. **Modeling** – Trained a LightGBM ensemble on GPU‑enabled SageMaker endpoints (Spot instances). Added explainability via SHAP values to surface bias risks.  
4. **Deployment** – Packaged the model as a Lambda function behind API Gateway, integrated with our ATS. Auto‑scales with Lambda concurrency limits; cold starts < 300 ms.  
5. **Cost & Availability** – Spot pricing reduced compute cost by 60 %, while using Multi‑AZ RDS for metadata ensured 99.9 % uptime.

**Result**  
- Accuracy (AUC) improved from 0.72 to **0.89** in production, cutting manual screening time by **70 %**.  
- Hiring manager reported a 25 % faster interview cycle and higher diversity scores due to reduced bias signals.  
- Total operational cost dropped from $12k/month to **$4k/month**.

**Learning**  
I iterated on feature selection after the first month, discovering that *soft‑skills* extracted via NLP added +0.04 AUC but doubled compute time; I chose a trade‑off that maintained 99 % accuracy while keeping latency low.

---

> **Leadership Principles Highlighted**  
- **Customer Obsession** – We treated internal hiring managers as customers, tailoring the model to their pain points.  
- **Ownership & Dive Deep** – From data ingestion to deployment, I owned every layer and dug into root causes of bias and latency.  

This end‑to‑end solution demonstrates how AWS services can transform a manual hiring bottleneck into a scalable, cost‑effective ML pipeline with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
