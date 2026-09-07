---
qid: ing_624d833ec8__aws__local
question: 'Explain: Similarly you could be potentially building a'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 447
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:49-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I was asked to build an end‑to‑end fraud detection model for a fintech platform that processes ~3 M transactions/day. The goal: reduce false positives by 30% while keeping latency <100 ms per prediction.

**Action (A)**  
I *took ownership* of the entire pipeline, from data ingestion to production serving.  
1️⃣ **Data layer** – Ingested raw logs via Kinesis Data Streams into a Lake Formation catalog on S3, partitioned by day and merchant.  
2️⃣ **Feature store** – Built a SageMaker Feature Store; every feature had 99.9 % availability, auto‑scaling with Spot Instances to keep costs <$1k/month.  
3️⃣ **Model training** – Trained an XGBoost model in SageMaker, using Hyperparameter Tuning on 10 GB of historical data (30 days). The tuned model achieved AUC‑ROC = 0.98, a 12% lift over the baseline Logistic Regression.  
4️⃣ **Serving** – Deployed with SageMaker Endpoint behind an Application Load Balancer; auto‑scaling ensured <100 ms latency for 99th percentile requests.  
5️⃣ **Monitoring & Feedback loop** – Integrated CloudWatch metrics and Lambda to retrain nightly if drift >2%.

**Result (R)**  
- False positives dropped from 8% to 5.6% (≈30% reduction).  
- Transaction throughput handled 3 M/day with <0.02 s average latency.  
- Operational cost stayed under $4k/month, a 25% savings vs legacy batch‑processing.

**Reflection**  
I *dive deep* into feature engineering to surface the most predictive signals (merchant history, device fingerprint). I learned that incremental model updates via Lambda were cheaper and more reliable than full retraining. This experience reinforced my bias for action and ownership—critical Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
