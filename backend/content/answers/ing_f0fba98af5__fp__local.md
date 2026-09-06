---
qid: ing_f0fba98af5__fp__local
question: 'Explain: Data lakes — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 443
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:31:27-05:00'
sources: []
---

**Why a data lake is needed**

In modern ML pipelines, raw signals arrive from sensors, logs, APIs, and legacy systems at *unstructured* rates and formats. The goal of the ML team is to discover patterns, not to pre‑engineer every feature. If we force all incoming data into a schema‑first warehouse, we lose velocity and risk costly re‑ingestion whenever a new source appears.

**Fundamental design principle**

A data lake is built on *schema‑on‑read* rather than *schema‑on‑write*. It stores everything in its native form (Parquet, JSON, Avro, etc.) and defers interpretation until the analytics layer. This separation of concerns lets ingestion be linear and idempotent—simply copy bytes to a distributed file system—and allows any downstream consumer to apply its own schema.

**Core components**

1. **Ingestion layer** – connectors (Kafka, S3, HDFS) that stream or batch raw files into the lake.
2. **Storage tier** – object store with lifecycle policies; data is immutable and versioned.
3. **Metadata catalog** – a central registry (e.g., Glue, Hive Metastore) that records schema, lineage, access control, and data quality metrics.
4. **Processing layer** – compute engines (Spark, Flink, Presto) that read from the lake, apply transformations, and write back to the lake or downstream warehouses.
5. **Governance & security** – fine‑grained IAM, encryption, and audit logs ensuring compliance without hampering exploration.

**Non‑obvious insight**

Because data remains unstructured until read, *feature stores* can be built on top of the same lake: each feature is a view that materializes only when an ML model needs it. This eliminates duplication and ensures every model sees the most recent raw observations, improving reproducibility and reducing feature drift.

In short, a data lake’s architecture trades upfront normalization for downstream flexibility, enabling rapid experimentation while preserving auditability and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
