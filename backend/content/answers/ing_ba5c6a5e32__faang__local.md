---
qid: ing_ba5c6a5e32__faang__local
question: 'Explain: System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 495
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:56:13-05:00'
sources: []
---

**Clarify**  
The interviewer asks what *resources* a machine‑learning system needs (compute, data, storage, networking, monitoring) and how we would architect them for scale and reliability. I’d confirm whether the focus is on model training, serving, or both, and ask about latency/throughput targets.

**Approach**  
1. **Data Layer** – ingest pipelines (Kafka/S3), feature stores (Redis/GCS), versioned datasets (Delta Lake).  
2. **Compute Layer** – distributed training (TensorFlow‑On‑K8s, Horovod) and inference (GPU/TPU pods or serverless containers).  
3. **Storage & Caching** – model artefacts in object storage; hot features in memory stores.  
4. **Orchestration** – Airflow/Argo for ETL, Kubeflow Pipelines for training jobs.  
5. **Observability** – Prometheus/Grafana for metrics, OpenTelemetry traces, ML‑specific dashboards (model drift, A/B test stats).  
6. **Security & Governance** – IAM roles, data encryption at rest/ in transit, lineage tracking.

**Depth**  
- *Compute*: Use autoscaling groups; spot instances for cost‑efficiency during training, preemptible GPUs with checkpointing.  
- *Storage*: Tiered—hot (SSD), warm (S3), cold (Glacier) for older checkpoints.  
- *Serving*: Model server behind a load balancer, model version routing via request headers.  
- *Observability*: Continuous evaluation of latency, error rates; retraining triggers when drift > threshold.

**Edge Cases**  
- Data skew → shard by feature hash.  
- GPU memory limits → model parallelism.  
- Network partitions → graceful degradation of inference (fallback to last‑good model).  
- Security breach → automatic revocation of credentials and rollback of models.

**Optimize & Communicate**  
Explain trade‑offs: spot vs on‑demand cost, batch vs streaming latency. Use a diagram in whiteboard mode to show data flow from ingestion to serving. End with “Given these resources, we can achieve X % throughput with Y % cost.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
