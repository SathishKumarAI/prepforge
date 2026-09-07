---
qid: ing_f3779a7cc5__aws__local
question: 'Explain: For example, it could reject requests from'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 451
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:59-05:00'
sources: []
---

**Situation & Task**  
In my last role as a senior ML engineer at a fintech startup, we had an API that approved credit‑card applications in real time. Our compliance team flagged a surge of suspicious requests during a holiday promotion—about 35 % higher than normal—and required the system to reject potentially fraudulent submissions without impacting legitimate users.

**Action (Design & Execution)**  
I spearheaded a **real‑time fraud‑detection microservice** using Amazon SageMaker for model training and AWS Lambda + API Gateway for inference. The model ingested user metadata, device fingerprints, and transaction patterns; we engineered 120 features and used XGBoost with a threshold tuned to maximize precision (≥ 0.95) while keeping recall above 0.85.  
To ensure **scalability**, the Lambda function was provisioned with *Provisioned Concurrency* (2× peak traffic). For **availability**, I deployed the model across two AZs and used CloudWatch alarms to trigger an automated failover to a cached “safe‑reject” policy if latency exceeded 200 ms.  
Cost control came from leveraging SageMaker’s spot training instances (≈ 70 % cheaper) and only invoking Lambda on new requests, keeping monthly spend under $1,200.

**Result**  
Within three days of deployment we reduced fraudulent approvals by **42 %**, saved the company ~$3M annually in chargebacks, and maintained a 99.9 % uptime during peak traffic. The model’s precision improved from 0.88 to 0.96 after A/B testing.  

**Reflection (Bar‑raiser lens)**  
I took full ownership of the end‑to‑end pipeline, dove deep into feature importance and latency bottlenecks, quantified impact with clear metrics, and iterated fast—learning that a conservative threshold initially hurt legitimate users, so we tuned it based on real feedback loops. This aligns with **Customer Obsession** (protecting customers from fraud) and **Ownership** (owning the system from data to deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
