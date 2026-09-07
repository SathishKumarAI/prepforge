---
qid: ing_b9433ad7b5__aws__local
question: 'Explain: very attractive ability um and it easily'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 426
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:58-05:00'
sources: []
---

**Situation & Task**  
I was tasked to demonstrate how a new *Auto‑ML* capability could reduce the time our data scientists spent on feature engineering for credit‑risk models. The goal was to cut model build time from **2 weeks → 3 days** while maintaining or improving AUC.

**Action (Design & AWS Services)**  
1. Built an **SageMaker Autopilot** pipeline that ingests raw CSVs from S3, automatically scans for categorical/continuous fields, and applies preprocessing (imputation, encoding).  
2. Integrated a **Glue Crawler** to catalog the dataset; results feed into a **Lake Formation**‑secured data lake so only authorized users can access the raw tables.  
3. Leveraged **SageMaker Experiments** to log every training run, capturing hyperparameters, model size, and AUC.  
4. Deployed the best model via **SageMaker Endpoint** behind an **Application Load Balancer**, ensuring 99.9 % availability with auto‑scaling based on CloudWatch metrics.

**Result**  
- Build time decreased from **10 days → 3 days** (70 % reduction).  
- AUC improved from **0.82 to 0.85** without manual feature selection.  
- Cost per model training dropped by **35 %** due to reduced compute hours and spot instance usage.

**Reflection & Bar‑raiser Signals**  
I owned the end‑to‑end pipeline, diving deep into Glue schema inference to catch edge‑case data types that earlier caused failures. The quantified impact (time, accuracy, cost) met the bar for *Deliver Results*. I also documented a rollback plan after an initial failure where Auto‑ML over‑fit on a noisy feature; this learning loop sharpened our hyperparameter search space and prevented future regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
