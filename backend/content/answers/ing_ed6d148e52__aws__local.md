---
qid: ing_ed6d148e52__aws__local
question: 'Explain: Netflix Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 427
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:12-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I led a cross‑functional team that built a recommendation engine for a streaming platform similar to Netflix. The client asked us to solve “custom problems” such as predicting next‑gen binge‑watch probability and handling cold‑start for new titles—classic FAANG interview puzzles.

**Approach (T)**  
- **Dive Deep** into the data: we extracted 1 M user‑action logs per day, engineered features (view streaks, genre affinity), and performed exploratory analysis in SageMaker Studio.  
- Designed a two‑stage model: an XGBoost classifier for short‑term binge risk, followed by a matrix‑factorization autoencoder for long‑term preference.  
- Leveraged **Amazon SageMaker Pipelines** to automate data preprocessing, training, and hyper‑parameter tuning; used **S3** for raw artifacts, **EFS** for shared feature store, and **AWS Glue** for cataloging.  
- Deployed with **SageMaker Hosting Services** behind an ALB, autoscaling on CPU utilization, achieving 99.9 % availability.

**Result (R)**  
- Accuracy of binge‑risk model improved from 72 % to **86 %** (AUC).  
- Cold‑start coverage increased by **40 %**, boosting overall watch time by **12 %** in the first month post‑deployment.  
- Cost per inference dropped from $0.04 to **$0.015** via spot instances and model compression.

**Learning & Ownership (L)**  
I owned end‑to‑end delivery, iterated on feedback loops, and documented failure modes—e.g., overfitting on genre spikes—which informed our feature‑selection guardrails. This experience demonstrates Amazon’s *Customer Obsession*, *Ownership*, and *Dive Deep* principles while showcasing a scalable, cost‑effective ML solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
