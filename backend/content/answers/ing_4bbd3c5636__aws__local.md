---
qid: ing_4bbd3c5636__aws__local
question: 'Explain: So we check on a patient named — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 406
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:16:19-05:00'
sources: []
---

**Situation & Task**  
At a health‑tech startup I led the migration of our on‑prem ML model that predicts readmission risk for hospitalized patients to an end‑to‑end, cloud‑native pipeline. The goal was to reduce false positives by 30 % while cutting inference latency below 200 ms per patient.

**Action**  
- **Ownership & Dive Deep:** I audited the legacy code, identified data drift in vital‑sign streams, and re‑engineered feature extraction using **AWS Glue** for incremental ETL.  
- **Bias for Action:** Built a real‑time inference service with **Amazon SageMaker Endpoint** behind an **Application Load Balancer**, auto‑scaling on CPU utilisation.  
- **Invent & Simplify:** Replaced the monolithic model with a modular ensemble (XGBoost + LightGBM) stored in **S3** and versioned via **SageMaker Model Registry**.  
- Added **Amazon CloudWatch Metrics** for latency, error rate, and feature‑value distribution; set alarms that trigger a Lambda rollback to the previous stable model.

**Result**  
Within 90 days post‑deployment:  
- False‑positive rate dropped from 18 % to 12 % (≈ 33 % improvement).  
- Inference latency averaged 145 ms, meeting SLA.  
- Operational cost fell by 22 % due to serverless Lambda for monitoring and spot‑instance SageMaker training.

**Reflection**  
The failure mode was an untested feature drift script that initially produced NaNs; the rollback mechanism prevented a production outage. I documented this as a “model‑drift playbook” shared across teams, reinforcing a culture of continuous learning and ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
