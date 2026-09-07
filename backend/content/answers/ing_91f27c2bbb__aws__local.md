---
qid: ing_91f27c2bbb__aws__local
question: 'Explain: Basic Requirements — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 448
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:08-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup that wanted to launch an ML‑powered fraud detection engine for credit card transactions. The requirement: classify transactions in real time with < 1 % false positives while keeping latency under 50 ms and cost <$0.01 per inference.

**Action (Design)**  
*Data & Feature Layer*: Collected 2 M daily transactions, engineered 120 features (spend patterns, geolocation entropy, device fingerprint). Stored in **Amazon DynamoDB** for low‑latency reads.  
*Model Training*: Trained a gradient‑boosted tree on **AWS SageMaker** (using Spot instances to cut compute cost by 60 %). Implemented feature store with **S3 + Glue** for reproducibility.  
*Inference Pipeline*: Deployed the model as a **SageMaker Real‑Time Endpoint** behind an **Application Load Balancer**. Added a **Lambda@Edge** cache to serve 30 % of “low‑risk” queries locally, reducing endpoint calls and cost by 25 %.  
*Monitoring & Feedback*: Integrated **CloudWatch** metrics (latency, error rate) and set up an automated retraining trigger every week based on drift detection.

**Result**  
- False positives dropped from 3.8 % to **0.9 %**, saving the bank ~$4 M annually in unnecessary chargebacks.  
- Latency averaged **32 ms**, comfortably below target.  
- Inference cost decreased by **38 %** compared to a naive batch‑inference design.

**Reflection (Bar‑raiser)**  
I took full ownership of the end‑to‑end pipeline, dove deep into feature importance and latency bottlenecks, quantified impact through clear metrics, and iterated quickly after an initial 2‑month pilot that overestimated model confidence. This cycle taught me to validate assumptions early and keep stakeholders aligned—core Amazon principles of **Ownership** and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
