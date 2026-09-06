---
qid: ing_d51ead6770__fp__local
question: 'Explain: AI Infrastructure Design — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 481
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:33:36-05:00'
sources: []
---

**AI Infrastructure Design – System‑Design Interview**

The *fundamental problem* is to move a trained ML model from a research notebook into a production service that can ingest data at scale, make predictions with bounded latency, and evolve safely as models and workloads change.

1. **Data ingestion → feature store**  
   A model is only as good as its input distribution. The design must guarantee *distribution drift detection* by storing raw features in a time‑stamped, versioned feature store. This solves the “unknown future data” problem: every request can be routed to the exact feature set that matched training.

2. **Model serving → stateless microservice + model registry**  
   Statelessness eliminates bottlenecks; a central registry tracks *model fingerprints* (hashes of weights, hyper‑params). The system can instantly roll back or promote models without redeploying code, satisfying the “zero‑downtime update” constraint.

3. **Scalability → autoscaling + sharding**  
   Predictions are bursty; autoscaling on request rate keeps cost in check. Sharding by *feature key* ensures that identical requests hit the same cache node, reducing duplicate inference costs—an often overlooked micro‑optimization.

4. **Observability → metrics + A/B test harness**  
   Every prediction emits a structured log (request ID, model hash, latency). Aggregated metrics feed an online A/B framework that compares new models against production in real time, turning performance evaluation from offline to continuous.

5. **Security & compliance**  
   Data pipelines must be *enforced by policy*—role‑based access and encryption at rest/transfer—because ML workloads often handle regulated data.

---

### Non‑obvious insight

Most designs treat inference latency as a single metric, but *latency is a function of feature retrieval cost*. By caching derived features at the edge (e.g., CDN or local cache) you can reduce overall latency dramatically. This “feature‑first” optimization often outperforms raw GPU scaling and is rarely mentioned in interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
