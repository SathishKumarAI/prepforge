---
qid: vq_6449f90eec__aws__local
question: What exactly does the term "Data Science" mean?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 369
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:54:40-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“Data Science is the systematic practice of extracting actionable insights from large, heterogeneous datasets using statistical models, machine learning algorithms, and domain knowledge.”*  

During my last role as a **Senior Data Scientist at AWS**, I led a project to predict customer churn for the Amazon Prime Video service (S3 + Redshift + SageMaker).  
**Situation:** 1.2 M user logs per day were unstructured; we had no churn signal.  
**Task:** Build a model that reduces churn by ≥10% within six months.  
**Action:**  
1. **Ownership & Dive Deep:** I orchestrated data ingestion into an Athena‑powered lakehouse, cleaned 3× the raw volume using Glue ETL jobs, and engineered 45 features (viewing patterns, device types).  
2. **Bias for Action / Invent & Simplify:** Deployed a LightGBM pipeline on SageMaker, auto‑tuning hyperparameters via Hyperparameter Tuning Jobs; wrapped the model in a Lambda endpoint behind API Gateway for real‑time scoring.  
3. **Deliver Results:** The model achieved an AUC of 0.87 and, after roll‑out, cut churn by **12%**, saving ~$4 M annually.  

**Bar‑raiser takeaways:** I showed ownership (end‑to‑end pipeline), deep technical depth (data lake architecture, ML ops), quantified impact (churn reduction & cost savings), and iterated on failures (initial 0.78 AUC → improved with feature engineering).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
