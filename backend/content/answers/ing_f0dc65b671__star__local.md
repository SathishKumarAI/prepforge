---
qid: ing_f0dc65b671__star__local
question: 'Explain: Michelle Bu — Stripe\u2019s payments APIs: The first 10 years
  | Stripe Dot Dev Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 424
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:29:54-05:00'
sources: []
---

**Situation:**  
While working on the fraud‑prevention team at a fintech startup, our monthly charge‑back rate had risen from 2% to 4.8% after a recent surge in online payments. The company’s core product was built on Stripe’s payment APIs, and we needed an immediate solution that wouldn’t disrupt existing integrations.

**Task:**  
Build a real‑time machine‑learning model that flags suspicious transactions before they hit the settlement engine, reducing charge‑backs by at least 30% while keeping false positives below 1%.

**Action:**  
I orchestrated a three‑phase approach:  
1. Extracted historical transaction data (≈ 3 M rows) from our PostgreSQL warehouse and enriched it with Stripe event payloads via the API’s webhooks, normalizing fields like `risk_score`, `device_fingerprint`, and `geolocation`.  
2. Trained a LightGBM classifier in Python, tuning hyperparameters with Optuna; used cross‑validation to guard against overfitting. Integrated the model into our microservice using FastAPI, deploying it on AWS Lambda behind an API Gateway for low latency (< 50 ms).  
3. Set up A/B testing by routing 20% of live traffic through the new endpoint and logged predictions back to a DynamoDB table for continuous monitoring.

**Result:**  
Within two weeks, the fraud‑prevention rate dropped from 4.8% to 2.9%, meeting our 30% target while maintaining a false‑positive rate of 0.7%. The project also reduced manual review effort by 40 hrs/month and taught us how to embed ML into existing Stripe workflows without needing a full rewrite.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
