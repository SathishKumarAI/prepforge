---
qid: ing_f3a1ac6f47__star__local
question: 'Explain: How to approach a system design interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 370
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:14-05:00'
sources: []
---

**Situation:**  
During my senior internship at FinTech Co., the product team asked me to build a real‑time fraud detection pipeline for credit card transactions. They needed a model that could score millions of events per day with sub‑second latency, while keeping false positives below 2%.

**Task:**  
I had to design an end‑to‑end system: ingest data, preprocess, train the model, deploy it, and monitor drift—all within the existing Kubernetes cluster and on AWS.

**Action:**  
1. **Data flow mapping:** I sketched a streaming architecture using Kafka for ingestion, Spark Structured Streaming for feature extraction, and Amazon S3 for raw logs.  
2. **Feature strategy:** Built incremental features (rolling 5‑minute transaction sums) in PySpark, then persisted them as Parquet tables for low‑latency lookups.  
3. **Model choice & training:** Ran a LightGBM ensemble on historical data, tuning with Optuna; achieved AUC 0.97. I wrapped the model in an ONNX runtime container and exposed it via gRPC for microservice calls.  
4. **Deployment & monitoring:** Deployed to EKS, added Prometheus alerts for latency spikes, and set up a drift detection job that retrains nightly if feature distribution shifts >5%.  

**Result:**  
The pipeline processed 3 M transactions/day with an average inference time of 120 ms, keeping false positives at 1.8%. Production incidents dropped by 40%, and the team adopted the design for all payment channels. I learned that a clear data‑flow diagram and modular microservices make complex ML systems maintainable under tight latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
