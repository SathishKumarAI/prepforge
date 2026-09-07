---
qid: ing_4d9076bd96__faang__local
question: 'Explain: Microservices design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 473
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:44:56-05:00'
sources: []
---

**Micro‑service Design for ML Pipelines**

| Step | What I’d do |
|------|-------------|
| **Clarify** | Restate: “We need a scalable, fault‑tolerant micro‑services architecture to train, serve and monitor ML models.”  Ask about data volume, latency constraints, model life‑cycle (A/B testing, drift), compliance, and team skillset. |
| **Approach** | 1️⃣ *Service decomposition* – split ingestion, feature store, training, inference, monitoring into independent services. <br>2️⃣ *API gateway & service mesh* for routing, authentication, rate‑limiting. <br>3️⃣ *Event‑driven communication* (Kafka/Cloud Pub/Sub) to decouple producers and consumers. <br>4️⃣ *Containerization & CI/CD* with Helm/Kubernetes for reproducibility. |
| **Depth** | • **Ingestion Service** streams raw logs → Kafka topic; runs Spark jobs for ETL.<br>• **Feature Store** exposes REST/GRPC to cache engineered features (Redis) and persist in Parquet.<br>• **Training Service** pulls data, launches GPU pods, uses MLflow for experiment tracking. <br>• **Inference Service** loads ONNX/TensorFlow models into FastAPI; autoscale on CPU/GPU metrics. <br>• **Monitoring Service** aggregates Prometheus metrics, alerts on drift via statistical tests. Complexity: O(1) request latency for inference; throughput limited by GPU pod count. |
| **Edge Cases** | • Sudden spike in traffic → auto‑scaling mis‑config.<br>• Model drift unnoticed → false positives/negatives.<br>• Data schema changes breaking downstream services – use versioned schemas. Test with chaos engineering and load tests. |
| **Optimize & Communicate** | Suggest using serverless inference (AWS SageMaker Endpoint) for low‑volume models, caching predictions to reduce GPU usage. Explain trade‑offs: tighter coupling vs. higher latency. Wrap up by highlighting how this design supports continuous delivery, observability, and regulatory compliance—key FAANG criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
