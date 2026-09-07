---
qid: ing_fde39db774__aws__local
question: 'Explain: in your application earlier Hoover used to'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 434
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:12-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a fraud‑detection microservice for a fintech platform that processed ~10 M transactions/day. The business required a real‑time model to flag suspicious activity without delaying settlement.

**Action (Technical)**  
1. **Data pipeline** – Ingested raw logs into Amazon Kinesis Data Streams → AWS Glue jobs for ETL → stored in Redshift for feature engineering.  
2. **Model training** – Built an XGBoost ensemble on SageMaker, using 30 engineered features (transaction amount, velocity, device fingerprint). Trained weekly with new labeled data; deployed via SageMaker Endpoint with autoscaling based on CPU utilization.  
3. **Inference** – Lambda functions triggered by Kinesis records routed to the endpoint; results returned to a DynamoDB table for downstream workflows.  
4. **Monitoring** – CloudWatch metrics + SageMaker Model Monitor tracked drift and AUC degradation.

**Result (Quantified)**  
- Reduced false positives from 12 % to 3 % → saved ~$1.2M/year in unnecessary chargebacks.  
- Latency <15 ms per prediction, keeping settlement times unchanged.  
- Cost of the ML pipeline was <$4K/month, a 30 % reduction vs. previous on‑prem GPU cluster.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered instant fraud alerts while preserving user experience.  
- **Ownership & Dive Deep** – Took full responsibility for data quality, model fidelity, and operational stability; performed root‑cause analysis on drift incidents.

**Bar‑raiser cues I heard**  
- Clear ownership of end‑to‑end pipeline.  
- Depth: explained feature choices, hyperparameter tuning, and monitoring strategy.  
- Quantified impact with real financial metrics.  
- Learning loop: after a model drift event we added a nightly retraining step, reducing future degradation by 40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
