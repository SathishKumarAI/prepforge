---
qid: ing_12f8d0f753__faang__local
question: 'Explain: Draw Data Flow — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 518
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:53-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer wants a high‑level diagram of how raw data moves through an ML system—ingestion → preprocessing → feature engineering → model training/inference → monitoring. I’ll assume: batch & streaming sources; on‑prem or cloud; real‑time inference is required.

**2️⃣ Approach**  
1. Sketch the end‑to‑end pipeline.  
2. Label each stage with responsibilities, data formats, and tools (Kafka, Spark, TensorFlow).  
3. Highlight key decision points: data freshness vs latency, storage tiering, and model versioning.

**3️⃣ Depth**  

| Stage | Data Flow | Tech & Rationale |
|-------|-----------|------------------|
| **Ingestion** | Raw → Kafka topics (partitioned by source) | Handles bursty traffic, fault‑tolerant |
| **Batch Buffer** | Kafka → HDFS/Cloud Storage | Enables replay and historical analytics |
| **Stream Processing** | Kafka → Flink/Spark Structured Streaming → Feature Store | Low‑latency feature calc (e.g., rolling averages) |
| **Feature Store** | Cached in Redis + persisted in BigQuery | Serves both training & serving, ensures consistency |
| **Training Pipeline** | Feature Store → TensorFlow/PyTorch → Model Registry | Auto‑ML with hyperparameter search, versioned artifacts |
| **Serving Layer** | Model via TF‑Serving / TorchServe → REST/GRPC | Zero‑downtime rollouts with A/B testing |
| **Monitoring** | Metrics (latency, drift) → Prometheus + Grafana | Alerts on performance regressions |

**4️⃣ Edge Cases**  
- *Data skew*: partition by key to avoid hot spots.  
- *Feature drift*: schedule re‑training when drift > threshold.  
- *Cold start*: pre‑warm serving endpoints; use cached predictions.

**5️⃣ Optimize & Communicate**  
- **Scalability**: autoscale Kafka partitions and stream workers based on queue depth.  
- **Cost**: tiered storage (hot in SSD, cold in object store).  
- **Explainability**: add SHAP/LIME modules downstream for auditability.  

When explaining, I’ll narrate the diagram step‑by‑step, emphasizing trade‑offs (latency vs accuracy) and how each component mitigates risks—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
