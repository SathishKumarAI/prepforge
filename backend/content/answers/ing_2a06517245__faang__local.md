---
qid: ing_2a06517245__faang__local
question: 'Explain: Store: — Data Pipelines Overview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 421
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:20:55-05:00'
sources: []
---

**Clarify**  
You’re asking for a high‑level view of how a production ML system ingests, cleans, transforms, and delivers data to models (the “data pipeline”). I’ll assume we need: 1) real‑time ingestion from multiple sources, 2) batch‑style feature computation, and 3) a serving layer that feeds the model.  

**Approach**  
1. **Ingestion** – Kafka/Flink for streaming + S3/BigQuery for raw storage.  
2. **Processing** – Spark/Beam jobs for ETL; schema evolution with Delta Lake or Iceberg.  
3. **Feature Store** – Feast/feature‑registry, cache via Redis, versioned feature tables.  
4. **Model Serving** – TensorFlow Serving / TorchServe behind a load balancer, API gateway, and monitoring (Prometheus).  

**Depth**  
- *Batch vs Streaming*: use stream for low‑latency signals; batch for heavy transformations.  
- *Schema Management*: Avro/Parquet with schema registry to avoid breaking downstream.  
- *Feature Versioning*: store feature lineage; recompute historical features on demand.  
- *Scalability*: auto‑scaling Kafka partitions, Spark executors, and model replicas.  
- *Observability*: log ingestion lag, data quality metrics, model latency.  

**Edge Cases**  
- Missing or delayed source events → back‑pressure or dead‑letter queues.  
- Schema drift → automated validation tests before promotion.  
- Model drift → continuous evaluation with A/B testing and rollback.  

**Optimize & Communicate**  
Start with a minimal viable pipeline (Kafka + Spark + Feast), then add caching, schema evolution, and observability. Explain trade‑offs: batch jobs are simpler but higher latency; streaming is complex but near real‑time. Highlight how each component reduces risk and improves throughput for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
