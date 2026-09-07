---
qid: ing_2328b28fd1__faang__local
question: 'Explain: System Design 101'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 526
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:06:02-05:00'
sources: []
---

**Clarify**  
The interview asks for a *high‑level* system design around machine‑learning pipelines—data ingestion, feature engineering, model training/serving, and monitoring.  
Assumptions to confirm:  
1. Scale (millions of samples/day).  
2. Latency requirement (real‑time inference vs batch).  
3. Budget constraints for storage & compute.  

**Approach**  
1. **Data layer** – ingest → store → version.  
2. **Feature service** – compute on‑demand or pre‑compute.  
3. **Model training** – pipeline, hyper‑parameter search, reproducibility.  
4. **Serving** – low‑latency API with model registry.  
5. **Observability** – metrics, drift detection, A/B testing.

**Depth**  

| Layer | Tech choices | Rationale |
|-------|--------------|-----------|
| Ingestion | Kafka → Spark Structured Streaming | Guarantees order & at-least-once delivery. |
| Storage | Delta Lake on S3 (or GCS) | ACID, schema evolution, time‑travel for versioning. |
| Feature store | Feast or custom Redis+Parquet cache | Centralized, reusable features; reduces recomputation. |
| Training | MLflow + Kubeflow Pipelines on Kubernetes | Track experiments, reproducible builds, GPU autoscaling. |
| Serving | TorchServe / TensorFlow Serving + Envoy | 1‑ms inference, can scale horizontally. |
| Observability | Prometheus + Grafana; Drift detection via statistical tests; Model Card registry | Continuous health checks & governance. |

**Edge Cases**  
- Data spikes → Kafka partitions auto‑scale.  
- Schema changes → Delta Lake schema evolution or feature store versioning.  
- Model drift → alert on CI/CD pipeline, trigger retraining.  
- Security: encrypt data at rest (KMS) and in transit (TLS).

**Optimize & Communicate**  
- Use **caching layers** for cold‑start inference.  
- Implement **canary deployments** to minimize risk.  
- Document every step; keep a *model registry* with metadata (accuracy, drift metrics).  
- Narrate trade‑offs: e.g., batch training reduces cost but increases latency vs online learning.

This design balances scalability, reliability, and maintainability—core criteria for any FAANG ML platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
