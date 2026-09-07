---
qid: ing_e7bb8f7126__faang__local
question: 'Explain: Collect: — Data Pipelines Overview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 497
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:56-05:00'
sources: []
---

**Clarify**  
You’re asking for a high‑level view of *data pipelines* in ML—how raw data moves from ingestion to model training, validation, and production. I’ll assume we’re dealing with batch & streaming sources, multiple formats (CSV, Parquet, JSON), and a target lakehouse or feature store.

**Approach**  
1. **Ingestion** – pull data via connectors (Kafka, S3, DB).  
2. **Staging** – raw zone in object storage; immutable copy for audit.  
3. **Processing** – ETL/ELT with Spark/Databricks or Airflow DAGs: cleansing, enrichment, feature engineering.  
4. **Feature Store / Feature Registry** – serve transformed features to training & serving layers.  
5. **Model Training** – run on GPU clusters; log metrics (MLflow).  
6. **Deployment** – containerized models in Kubernetes/TF‑Serving; versioned endpoints.  
7. **Monitoring** – data drift, latency, model performance; alerting via Prometheus/Grafana.

**Depth**  
- *Batch vs Streaming*: batch jobs use Spark with checkpointing; streaming uses Structured Streaming or Flink to guarantee at‑least‑once semantics.  
- *Schema Evolution*: Avro/Parquet schema registry; backward compatibility checks before writing.  
- *Feature Reuse*: feature store (e.g., Feast) stores both online/offline views, ensuring identical features in training and serving.  
- *Observability*: track lineage with tools like Dagster or Airbyte; log data quality metrics to a centralized dashboard.

**Edge Cases**  
- Missing/dirty records → fallback defaults or skip.  
- Schema mismatch on downstream consumption → fail fast with clear error messages.  
- Cold start for streaming pipelines → pre‑warm state stores.

**Optimize & Communicate**  
We can reduce latency by materializing incremental changes (CDC) and using columnar formats. For scalability, partition data by time/key to enable parallel reads. When explaining, I’d frame it as a “data‑to‑model” lifecycle diagram, highlight trade‑offs between batch freshness vs real‑time accuracy, and conclude with how observability turns the pipeline into a reliable ML service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
