---
qid: ing_83372733ed__faang__local
question: 'Explain: 🎓 For Interview Prep — Ai System Design Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 453
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:50:02-05:00'
sources: []
---

**Clarify**  
We’re asked to outline a high‑level design for an AI system that can ingest diverse data, train models, and serve predictions in production.  
Assumptions:  
1️⃣ Data sources are streaming + batch (e.g., logs, user actions).  
2️⃣ Models are supervised ML with periodic retraining.  
3️⃣ Latency requirement < 50 ms for inference, throughput > 10k RPS.  

**Approach**  
1. **Data ingestion layer** – Kafka/Flink streams + S3/Parquet for batch.  
2. **Feature store** – Redis‑Cache + Delta Lake to serve real‑time and historical features.  
3. **Model training pipeline** – Airflow orchestrated, Spark on EMR or GCP DataProc; use MLflow for experiment tracking.  
4. **Serving layer** – TensorFlow Serving / TorchServe behind Envoy gRPC; autoscale via Kubernetes HPA.  
5. **Monitoring & governance** – Prometheus + Grafana dashboards; model drift alerts, A/B test framework.

**Depth**  
- *Throughput*: Kafka partitions ≈ 10× RPS; feature store latency <1 ms.  
- *Latency*: Inference endpoint ~15 ms on a 4‑GPU pod; fallback CPU pool for cold starts.  
- *Scalability*: Horizontal scaling of both training and serving clusters; data sharding by user segment.  
- *Fault tolerance*: Kafka’s exactly‑once semantics; replay logs to recover state.

**Edge Cases**  
- Data spikes → auto‑spin‑up new ingestion workers.  
- Model rollback if validation metrics degrade.  
- Feature drift → automatic retrain triggers every 24 h or when error > threshold.

**Optimize & Communicate**  
- Use model compression (quantization) to reduce inference latency.  
- Cache frequent predictions in Redis for sub‑millisecond access.  
- Present the architecture diagram and trade‑off matrix during interview, highlighting cost vs. performance decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
