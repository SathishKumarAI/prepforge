---
qid: ing_6032ce984f__faang__local
question: 'Explain: Summary — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 484
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:27:48-05:00'
sources: []
---

**Clarify**  
The client‑server ML system must ingest raw data from multiple sources (IoT, logs), train models centrally, and serve predictions to end‑users with low latency. I’ll assume:  

* Data volume ≈ 1 TB/day, model size < 200 MB.  
* Predictive latency target ≤ 50 ms per request.  
* Fault tolerance and horizontal scalability required.

**Approach**  
1. **Data layer** – Kafka → Spark/Databricks for batch training; Flink for real‑time feature pipelines.  
2. **Model layer** – Model Registry (MLflow) + Kubernetes‑managed GPU workers; versioning via Git‑like tags.  
3. **Serving layer** – TensorFlow Serving or TorchServe behind an API Gateway, auto‑scaling on request spikes.  
4. **Observability** – Prometheus/Grafana for metrics, MLflow tracking for drift.  

**Depth**  
*Batch training*: Spark jobs write to Delta Lake; every 6 h retrain → store model artifacts in S3.  
*Serving*: Deploy a stateless pod per model shard; use gRPC for < 10 µs serialization overhead.  
*Latency*: Use edge caching (CDN) for frequent predictions; keep warm pools of inference containers to avoid cold starts.  
*Complexity*: Training O(n log n), serving O(1) per request; autoscaling keeps cost ≈ $0.03/req.

**Edge Cases**  
*Data skew or bursty traffic → add back‑pressure in Kafka, queue‑based scaling.*  
*Model drift → monitor prediction error; trigger retraining automatically.*  
*Security breach → enforce mTLS between services and encrypt data at rest.*

**Optimize & Communicate**  
- Reduce cold starts by pre‑warming containers during low load periods.  
- Use model quantization (INT8) to cut inference time 2× without loss.  
- Present trade‑offs: heavier caching reduces cost but may serve stale predictions; balance freshness vs latency with TTL tuning.

By structuring the architecture this way, we meet scalability, reliability, and performance goals while keeping operational overhead manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
