---
qid: ing_5548d894f6__faang__local
question: 'Explain: Summary — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 483
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:02:26-05:00'
sources: []
---

**Clarify**  
You’re asked to sketch a “back‑of‑the‑envelope” design for an ML system—think a production pipeline that ingests data, trains models, and serves predictions at scale. Key assumptions:  
1. Data volume ≈ 10⁹ rows/day, 100 GB per day.  
2. Latency requirement for inference < 50 ms.  
3. Models are retrained weekly; no online learning.

**Approach**  
1. **Data ingestion & storage** – Kafka → HDFS/S3 → Spark batch jobs.  
2. **Feature store** – Delta Lake or Feast to materialize features in a key‑value cache (Redis).  
3. **Training** – Spark MLlib on EMR/EKS; hyper‑parameter tuning via Hyperopt; model checkpointing to S3.  
4. **Model registry & promotion** – MLflow tracking, versioned artifacts, automated A/B test gating.  
5. **Serving** – TensorFlow Serving behind a Kubernetes Ingress, autoscaling to meet 50 ms SLA.  
6. **Observability** – Prometheus/Grafana for latency; S3 logs for drift.

**Depth**  
- Storage: partitioned by date → O(1) read for training slices.  
- Feature cache: TTL 24h; read‑through fallback to feature store if miss.  
- Training parallelism: 8 k cores, ~30 min per job.  
- Serving: 2 replicas per pod, 200 req/s each → total 400 req/s, latency < 50 ms with 99th percentile.

**Edge Cases**  
- Data spikes → Kafka back‑pressure, auto‑scaling EMR.  
- Feature drift → monitor distribution shifts; retrain trigger.  
- Model failure → canary rollout and rollback via MLflow.

**Optimize & Communicate**  
Explain trade‑offs: batch vs stream for features (latency vs freshness), using Delta Lake for ACID guarantees, cost vs performance of Redis cache. Summarize with a high‑level diagram and key metrics to satisfy the interviewer’s focus on structured reasoning and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
