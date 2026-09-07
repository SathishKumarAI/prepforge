---
qid: ing_f37e98139f__faang__local
question: 'Explain: Introduction — Systemdesigntips'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 510
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:05:34-05:00'
sources: []
---

**Clarify**  
You’re asking for *system‑design* best practices when building ML pipelines (data ingestion → training → serving). I’ll assume we need a scalable, maintainable architecture that can handle large volumes of data and low‑latency inference.

**Approach**  
1. **Data Layer** – ingest, store, version.  
2. **Feature Store** – reusable features for training & serving.  
3. **Training Pipeline** – distributed training, hyper‑parameter tuning.  
4. **Model Registry / Governance** – track experiments, rollouts, rollback.  
5. **Serving Layer** – low‑latency inference (REST/GRPC + caching).  
6. **Monitoring & Alerting** – data drift, performance, resource usage.

**Depth**  

| Component | Key Choices | Complexity |
|-----------|-------------|------------|
| Ingestion | Kafka / Pub/Sub → Snowflake or BigQuery | O(1) per event |
| Storage | Delta Lake / Parquet on S3/GCS | O(log n) for time‑travel |
| Feature Store | Feast / Tecton | O(k) feature lookup |
| Training | Horovod/PyTorch Lightning + GPU clusters | O(num_gpus × epochs) |
| Registry | MLflow, DVC | Linear in number of artifacts |
| Serving | TensorFlow Serving / TorchServe with gRPC; use Envoy for routing | Latency < 10 ms |
| Monitoring | Prometheus + Grafana, EDA dashboards | Continuous |

**Edge Cases**  
- **Data skew** → shard by key to avoid hot spots.  
- **Model drift** → periodic re‑training triggers.  
- **Cold starts** in serving → prewarm containers or use serverless with keep‑alive.  
- **Security** → IAM roles, encryption at rest and transit.

**Optimize & Communicate**  
Explain trade‑offs: e.g., choosing a managed feature store reduces ops but adds vendor lock; using raw S3 + Spark gives flexibility but more engineering effort. Highlight how metrics (latency, throughput, A/B test success) guide decisions. Conclude with a quick sketch diagram and note that iterative refinement—adding cache layers, auto‑scaling—is essential for production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
