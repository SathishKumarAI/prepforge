---
qid: ing_32c69f165f__aws__local
question: 'Explain: Capture and Settlement Flow — How VISA Works When Swiping a Credit
  Card'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 455
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:10-05:00'
sources: []
---

**Situation / Task**

I was hired as an ML Ops engineer at a fintech startup to build a real‑time fraud detection model for the *Capture & Settlement* flow of VISA transactions (≈ 2 M swipes/day). The goal: reduce false positives by 30 % while keeping latency under 50 ms.

**Action**

1. **Data pipeline** – Ingested transaction events from Kafka into a Kinesis Data Stream, then processed in Lambda to enrich with merchant‑risk scores and customer profile vectors.  
2. **Feature store** – Persisted features in DynamoDB (partition key: `txn_id`) for low‑latency read by the inference service.  
3. **Model serving** – Deployed a SageMaker RealTime endpoint behind an Application Load Balancer with auto‑scaling; used a 2‑stage ensemble (XGBoost + LightGBM) to capture non‑linear patterns.  
4. **Feedback loop** – Used CloudWatch metrics and EventBridge to trigger retraining on drift (every 24 h) using SageMaker Pipelines, storing models in S3 with version tags.

**Result**

- False positives dropped from 12 % to 8.4 % (+30 %), saving the bank ≈ $1.2 M annually in authorized‑but‑unnecessary refunds.  
- End‑to‑end latency averaged 38 ms, meeting VISA’s SLA.  
- Operational cost reduced by 18 % through spot instances for training and Lambda concurrency throttling.

**Reflection**

I took *Ownership* of the entire ML lifecycle, *Dived Deep* into data drift signals, and applied a *Bias for Action* mindset to iterate quickly. After an initial failure where latency spiked due to cold starts, I introduced Lambda provisioned concurrency, learning that pre-warming is critical for low‑latency services. This cycle of rapid experimentation and metric‑driven validation aligns with Amazon’s Leadership Principles and the bar‑raiser expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
