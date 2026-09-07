---
qid: ing_212ea1fddc__faang__local
question: What are the expectations in a System Design Interview?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 593
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:00-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* “What should I expect during a machine‑learning system‑design interview?”  
*Assumptions I’d confirm:*  
- The interviewer is looking for end‑to‑end design (data ingestion → model training → inference).  
- They care about scalability, latency, data quality, and ML lifecycle.  
- You’re expected to discuss both ML specifics and generic distributed‑systems concerns.

**2️⃣ Approach**  
1. **Scope the system** – define functional requirements, key metrics (throughput, latency), and constraints.  
2. **Layered architecture** – separate data pipelines, feature store, training engine, serving layer, monitoring.  
3. **Trade‑offs & choices** – batch vs streaming, on‑prem vs cloud, open‑source vs managed services.  
4. **Resilience & observability** – fault tolerance, versioning, A/B testing, rollback.

**3️⃣ Depth** (Core answer)  
- *Data ingestion:* Kafka/Cloud Pub/Sub → Spark/Flink for ETL; use schema registry to guard against drift.  
- *Feature store:* Persist features in a low‑latency DB (Redis) and batch storage (S3/Hudi). Versioning via feature IDs.  
- *Training:* GPU clusters on Kubernetes with Ray or Kubeflow; automated hyper‑parameter search (Optuna). Store models in MLflow Registry.  
- *Serving:* TensorFlow Serving / TorchServe behind a CDN; latency < 50 ms, autoscale based on request rate.  
- *Monitoring:* Drift detection (KS‑test), error dashboards (Grafana), retraining triggers.  
- Complexity: Training O(N log N) for tree ensembles, inference O(1). Trade‑off between model size vs latency.

**4️⃣ Edge Cases**  
- Sudden data spike → auto‑scale Kafka partitions & Spark executors.  
- Feature schema change → backward compatibility or feature flagging.  
- Model degradation → cold start retraining vs online learning.  
- Security: encrypt data at rest (KMS) and in transit; role‑based access to registry.

**5️⃣ Optimize & Communicate**  
- Highlight cost‑saving by reusing existing managed services (e.g., SageMaker).  
- Emphasize “ML ops” discipline—CI/CD for models, automated rollback.  
- Narrate reasoning: “We choose Kafka because it guarantees at‑least‑once delivery and integrates with Spark; we pick Redis for feature lookup to meet sub‑10 ms latency.”  

*Wrap‑up:* Reiterate that the interviewer expects a holistic view—data, compute, storage, ops—and clear trade‑off justification. This structure showcases problem solving, depth, and communication skills.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
