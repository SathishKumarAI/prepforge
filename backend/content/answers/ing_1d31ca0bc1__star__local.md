---
qid: ing_1d31ca0bc1__star__local
question: 'Explain: And clients when they actually wanted to'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 363
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:50-05:00'
sources: []
---

**Situation:**  
At a fintech startup we were building a fraud‑detection model for a new payment gateway integration. The product manager asked us to deliver a system that could flag fraudulent transactions in real time with less than 2 % false positives, while also providing a monthly risk score dashboard.

**Task:**  
I needed to design an end‑to‑end pipeline that met the latency requirement, maintained high precision, and produced actionable insights for compliance analysts.

**Action:**  
I started by profiling the data: we had 12 M transaction records with heavy class imbalance (0.5 % fraud). I engineered features using feature crosses in Spark and applied SMOTE to balance the training set. For modeling, I chose a LightGBM gradient‑boosted tree because of its low inference latency (<5 ms per record) and built a 2‑stage architecture: a fast rule‑based pre‑filter (precision >99%) followed by the GBM for ambiguous cases. I containerized the model with Docker, deployed it to AWS Lambda behind an API Gateway, and set up Prometheus metrics to monitor false‑positive rates in real time. Finally, I created a Tableau dashboard that refreshed every 15 minutes, aggregating risk scores per merchant.

**Result:**  
Within two weeks of deployment we achieved a 1.6 % false‑positive rate and reduced fraud losses by 18 % month over month. The dashboard cut compliance review time from 3 hours to 45 minutes per batch. I learned the importance of aligning model choice with operational constraints and continuously validating metrics against business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
