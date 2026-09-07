---
qid: ing_7ceb677e23__faang__local
question: What is a data architecture? — What Is a Data Architecture? | IBM
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 525
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:34:34-05:00'
sources: []
---

**Clarify**

> *“What is a data architecture?”*  
> I’ll interpret it as the set of design principles and components that define how an organization stores, moves, processes, and protects its data to support analytics and ML workloads.  
> **Assumptions to confirm:**  
> 1. The goal is to enable reproducible ML pipelines (ETL → feature store → model training).  
> 2. We’re working with a cloud‑native stack (data lake + warehouse).  

**Approach**

1. Outline the layers: ingestion, storage, processing, governance, and consumption.  
2. Map each layer to concrete services/technologies (Kafka, S3, Snowflake, dbt, Lake Formation).  
3. Highlight how these components interact in a typical ML lifecycle.

**Depth**

A data architecture is a blueprint that defines:

| Layer | Purpose | Typical Tech |
|-------|---------|--------------|
| **Ingestion** | Capture raw streams or batch files with minimal latency | Kafka, AWS Kinesis |
| **Raw Lake** | Immutable storage of all source data | S3/Glacier, ADLS |
| **Cleansed Tier** | Structured, query‑ready tables | Iceberg, Delta Lake |
| **Processing** | Batch & streaming transformations | Spark, Flink, dbt |
| **Feature Store** | Centralized feature repository for training/inference | Feast, Tecton |
| **Governance** | Metadata, lineage, security | Atlas, Ranger, IAM |
| **Consumption** | BI dashboards and ML pipelines | Snowflake, BigQuery, SageMaker |

The architecture ensures *data quality*, *auditability*, and *scalability* while minimizing duplication.

**Edge Cases**

- Sudden spike in streaming volume → need auto‑scaling partitions.  
- Regulatory changes (GDPR) → enforce data masking at lake level.  
- Model drift → versioned features and rollback paths.

**Optimize & Communicate**

To improve, introduce *schema evolution* via Confluent Schema Registry, automate lineage with Airflow DAGs, and apply cost‑based partitioning in the warehouse. I’d narrate this by walking interviewers through a “data pipeline sprint” from ingestion to model inference, emphasizing how each architectural decision reduces latency or increases compliance. This demonstrates structured thinking, deep technical grasp, and clear communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
