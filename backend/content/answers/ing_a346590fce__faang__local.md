---
qid: ing_a346590fce__faang__local
question: 'Explain: The Interview Question — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 482
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:04:09-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to design a fraud‑detection system for an online payment platform.  
Key assumptions to confirm:  
1. What volume of transactions per day? (e.g., millions)  
2. Real‑time vs batch detection requirement?  
3. Label availability – supervised data or only unsupervised anomalies?  
4. Latency budget and false‑positive tolerance.

**Approach**  
1. **Feature extraction** – user profile, device fingerprint, geolocation, time patterns, transaction amount.  
2. **Modeling** – start with a lightweight rule engine for obvious fraud (e.g., impossible travel).  
3. **Machine learning pipeline** – train a supervised classifier (XGBoost/LightGBM) on labeled data; augment with unsupervised anomaly scores (Isolation Forest).  
4. **Real‑time inference** – deploy the model as a stateless microservice behind a message queue, cache recent user context in Redis for low latency.  
5. **Feedback loop** – flagging interface to analysts, retrain weekly on newly labeled cases.

**Depth**  
- Feature engineering: one‑hot encode categorical vars; bucket transaction amounts; compute rolling statistics per user.  
- Model complexity: XGBoost with depth 6 → ~0.3 ms inference on a single CPU core.  
- Evaluation: ROC‑AUC >0.97, precision‑recall trade‑off tuned to keep FP <1%.  
- Data pipeline: Kafka → Spark Structured Streaming for feature enrichment; MLflow for model versioning.

**Edge Cases**  
- Cold start users with no history – fall back to rule engine.  
- Distributed denial of service (DDoS) spikes – auto‑scale inference tier.  
- Regulatory constraints on data retention – purge raw logs after 30 days.

**Optimize & Communicate**  
- Incrementally add explainability (SHAP values) so analysts understand why a transaction was flagged, improving trust and reducing manual reviews.  
- Use model distillation to shrink the tree ensemble for edge devices if needed.  
- Narrate by showing a flow diagram: ingestion → feature store → inference → alerting → analyst feedback loop, emphasizing latency targets and retraining cadence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
