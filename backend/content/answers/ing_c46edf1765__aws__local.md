---
qid: ing_c46edf1765__aws__local
question: 'Explain: Hawk — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 579
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:03-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the “Hawk‑METR” project: building an anomaly detector for real‑time traffic flow on a metropolitan transit network. The goal was to reduce false positives by 30 % while keeping latency under 200 ms so that operators could act instantly.

**Action**  
* **Ownership & Bias for Action:** I scoped the solution, defined data ingestion (Kafka → Kinesis Data Streams), and drafted an end‑to‑end architecture.  
* **Dive Deep – Design:**  
  * **Feature Store**: Amazon SageMaker Feature Store for engineered traffic features (speed, volume, time‑of‑day).  
  * **Model Training**: AutoML with SageMaker Pipelines to compare Isolation Forest, LSTM‑Autoencoder, and XGBoost. We used 90 % of the historical dataset (≈2 M records) and performed 5‑fold cross‑validation. The LSTM‑Autoencoder achieved a ROC‑AUC of **0.97** vs 0.93 for Isolation Forest.  
  * **Inference**: Deployed the model as a SageMaker endpoint behind an Application Load Balancer, auto‑scaling on CloudWatch metrics (CPU >70 %). End‑to‑end latency measured at **180 ms**.  
  * **Observability**: Integrated Amazon CloudWatch Logs + X-Ray for request tracing; set up anomaly alerts in SNS when false‑positive rate >5 %.  
* **Deliver Results:** After deployment, we saw a **32 % drop in false positives** and reduced operator alert fatigue by 18 %, directly improving incident response times. Costs stayed below $12K/month vs the $18K baseline for legacy rule‑based system.

**Result / Learning**  
The project earned me the “Customer Obsession” badge from AWS, as we built a solution that *actually* mattered to transit operators. I learned that continuous monitoring and automated retraining pipelines (SageMaker Pipelines + EventBridge) are critical for maintaining model quality in a streaming environment.

---

> **Bar‑raiser check:**  
> • Ownership: I drove the entire lifecycle from data ingestion to production deployment.  
> • Dive Deep: Detailed feature engineering, model comparison, latency profiling.  
> • Quantified Impact: 32 % reduction in false positives, $6K/month savings.  
> • Learning from Failure: Early prototype mis‑estimated latency; we added CloudWatch metrics and re‑architected the inference endpoint to meet SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
