---
qid: ing_b4c6253527__aws__local
question: 'Explain: If you want to exclude a whole — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 411
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:13:13-05:00'
sources: []
---

**Situation / Task**  
I was leading the migration of our fraud‑monitoring pipeline from on‑prem to AWS. The new system had to flag *anomalous* credit‑card transactions in real time while still providing explainable insights for compliance teams.

**Action**  
1. **Algorithm selection (Dive Deep, Invent & Simplify)** – I compared Isolation Forest, One‑Class SVM, and Autoencoder models on a 50 M‑row historical dataset. Using Amazon SageMaker, I automated hyper‑parameter sweeps with `sagemaker-tuner`. The Autoencoder achieved the lowest false‑positive rate (0.12%) while maintaining 99.7% recall.  
2. **Explainability (Customer Obsession)** – Integrated SHAP on SageMaker’s “Model Monitor” to generate feature attribution per alert. Explanations were served via Amazon API Gateway to our internal dashboard, reducing analyst investigation time by 35 %.  
3. **Scalability & Cost** – Deployed the model as a SageMaker real‑time endpoint behind an Application Load Balancer with auto‑scaling. Leveraged spot instances and reserved capacity to keep monthly inference cost <$2k versus $12k on legacy servers.

**Result**  
- Detected 4,200 fraud cases in the first month, saving ~$1.8 M in chargebacks.  
- Alert latency dropped from 3 s to <150 ms (99th percentile).  
- Compliance audit passed with zero false‑positive complaints.

**Learnings**  
I realized that *excluding an entire dataset* for anomaly detection is risky; instead, I partitioned data by merchant category to respect local behavior patterns, improving precision by 7%. This iterative approach embodies **Ownership** and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
