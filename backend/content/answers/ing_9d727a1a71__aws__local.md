---
qid: ing_9d727a1a71__aws__local
question: 'Explain: Is this working yet? >> Yes. >> — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 384
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:01-05:00'
sources: []
---

**Situation / Task**  
I was hired as a ML Engineer for an e‑commerce platform that needed to detect fraudulent orders in real time. The business required *“Is this working yet?”* checks from the Ops team every minute, so I had to build a live anomaly detector with instant feedback and auditability.

**Action**  
1. **Model & Architecture** – Trained a lightweight Isolation‑Forest on per‑user transaction features (amount, velocity, device fingerprint) in SageMaker Pipelines.  
2. **Explainability** – Integrated SHAP values via the *sagemaker-explainable* SDK and exposed them through an API Gateway endpoint for Ops dashboards.  
3. **Deployment** – Deployed the model as a Lambda@Edge function behind CloudFront to keep latency < 10 ms, using DynamoDB TTL to store recent predictions.  
4. **Observability** – Sent anomaly scores to CloudWatch Metrics; set up an SNS alarm that triggers the Ops “Is this working yet?” query and logs every 60‑second check in Athena for audit.

**Result**  
- Detected 87 % of frauds within 2 seconds, reducing chargebacks by **32 %** (≈$1.4M annually).  
- Latency < 10 ms kept the customer experience unchanged.  
- Cost per prediction: $0.00005, below the target budget of $0.00008.

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into feature importance to improve explainability, and delivered measurable business results—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
