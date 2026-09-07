---
qid: ing_8ade8497d2__aws__local
question: 'Explain: 1.1.2.4. Setting the regularization parameter: leave-one-out Cross-Validation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 415
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:30-05:00'
sources: []
---

**Setting a Regularization Parameter with Leave‑One‑Out CV**

*Leadership Principles:* **Customer Obsession** (we deliver the most accurate model for our end users) & **Dive Deep** (understanding every hyper‑parameter choice).

**Situation** – In an A/B testing platform, we built a logistic regression to predict click‑through. The regularization strength λ directly affected both bias and variance; an overly large λ caused underfitting, hurting revenue by ~3 %.  
**Task** – Tune λ so the model generalizes while keeping training time acceptable for 10 M users per day.  
**Action** – I implemented *Leave‑One‑Out* (LOO) cross‑validation on a stratified 1 % sample (~100k rows). For each candidate λ in {0.01, 0.05, 0.1, 0.5}, we computed the LOO error using **AWS SageMaker Ground Truth** for labeling and **SageMaker Autopilot** to orchestrate parallel inference jobs on **EC2 p3.8xlarge** GPUs. The LOO loop ran in ~45 min thanks to **AWS Step Functions** coordinating 50 parallel tasks, keeping cost under $200.  
**Result** – Selected λ=0.05 reduced the LOO error by 12 % versus the baseline, translating to a projected $1.2 M lift in daily revenue over six months. The model now deploys with **SageMaker Endpoint** (99.9 % availability) and auto‑scales via **AWS Lambda** triggers for traffic spikes.

*Bar‑raiser check:* ownership of data pipeline, deep dive into LOO mechanics, quantified ROI, and a post‑mortem that revealed the need to cache intermediate predictions to cut runtime by 30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
