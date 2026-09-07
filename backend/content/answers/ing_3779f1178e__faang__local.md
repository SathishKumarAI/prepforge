---
qid: ing_3779f1178e__faang__local
question: 'Explain: Data architecture components — What Is a Data Architecture? |
  IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 673
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:52:59-05:00'
sources: []
---

**Clarify**

The interviewer wants an overview of *data architecture* and its key building blocks, especially as framed by IBM’s “Data Architecture Components” taxonomy.  
Assumptions I’d confirm:  
- Audience has basic ML/DB knowledge but not deep on enterprise data‑platform design.  
- Focus on components that influence model training pipelines (storage, ingestion, processing, governance).  

**Approach**

1. List the core layers IBM describes: *Data Sources → Ingestion → Storage → Processing → Governance → Consumption*.  
2. For each layer, mention representative technologies and why they matter for ML workloads.  
3. Highlight inter‑layer interactions that affect data quality, latency, and reproducibility of models.  

**Depth**

| Layer | Typical Components | Why It Matters for ML |
|-------|--------------------|----------------------|
| **Data Sources** | Databases (RDBMS, NoSQL), APIs, IoT streams, logs | Provide raw signals; schema heterogeneity drives downstream cleaning. |
| **Ingestion** | Batch tools (Kafka Connect, Sqoop), Streaming engines (Kafka Streams, Flink) | Ensures timely arrival and decouples source from storage; streaming feeds real‑time feature stores. |
| **Storage** | Data lakes (S3/HDFS), Data warehouses (Snowflake, BigQuery), Delta Lake | Holds raw & curated data; partitioning & format choice (Parquet/ORC) affect read performance for training jobs. |
| **Processing** | ETL pipelines (Airflow, dbt), Spark/Beam jobs, ML‑specific frameworks (TensorFlow Extended) | Transforms to feature tables; handles scaling, fault tolerance, and lineage tracking. |
| **Governance** | Catalogs (DataHub, Amundsen), Metadata management, Security & compliance tools | Guarantees data quality, discoverability, and auditability—critical for reproducible ML experiments. |
| **Consumption** | Feature stores, Model serving APIs, BI dashboards | Exposes clean features to training pipelines or inference services; controls versioning and access. |

**Edge Cases**

- *Schema drift*: Ingestion must detect changes and trigger re‑processing or feature recomputation.  
- *Latency vs batch trade‑off*: Real‑time inference needs low‑latency ingestion but may sacrifice data volume compared to batch training.  
- *Data sovereignty*: Storage location constraints can force multi‑region architectures, impacting pipeline complexity.

**Optimize & Communicate**

To improve the architecture:
1. Adopt a unified metadata layer to auto‑propagate schema changes downstream.  
2. Use lineage graphs to automatically regenerate affected feature tables when source data updates.  
3. Leverage managed services (e.g., Snowflake’s warehouse scaling) to avoid over‑provisioning compute for sporadic training jobs.

When presenting, I’d narrate the flow from raw source → ingestion queue → lake/warehouse → transformation job → governed catalog → feature store → model pipeline, stressing how each component reduces friction in ML lifecycle and ensures data quality. This structured explanation aligns with FAANG interview expectations: clear framing, systematic breakdown, depth on implementation choices, edge‑case awareness, and optimization insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
