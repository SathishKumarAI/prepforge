---
qid: vq_00f616ba81__faang__local
question: What data tools or frameworks do you have experience with?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 528
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:54:51-05:00'
sources: []
---

**Clarify**  
The interviewer wants to gauge the breadth of my tooling knowledge and how I decide what fits a given problem.  
Assumptions:  
- They’re looking for both batch & streaming tools.  
- Emphasis on real‑world production experience (not just hobby projects).  

**Approach**  
I’ll list the categories, give concrete examples, highlight key strengths/weaknesses, and tie each to a use case I’ve handled.  

**Depth**  

| Category | Tool / Framework | Typical Use | My Experience |
|----------|-----------------|-------------|---------------|
| **Batch ETL** | *Apache Spark* (PySpark & Scala) | Large‑scale data transformations on HDFS/S3 | 2+ yrs building nightly pipelines for a recommendation engine. |
| | *Airflow* | Orchestration, dependency graphs | Designed DAGs that trigger Spark jobs and push metrics to Grafana. |
| **Streaming** | *Kafka* (Confluent) | Event ingestion, pub/sub | Implemented topic‑level retention policies and schema registry integration for a fraud detection system. |
| | *Flink* | Low‑latency windowed analytics | Built real‑time click‑stream aggregation with stateful joins. |
| **Data Lake / Catalog** | *Delta Lake* on Databricks | ACID tables, versioning | Migrated legacy Parquet lake to Delta; cut query runtimes by 30%. |
| | *AWS Glue Data Catalog* | Metadata management | Used crawler + custom classifiers for semi‑structured logs. |
| **Storage & Query** | *Snowflake* | Enterprise data warehouse | Optimized clustering keys, reduced compute costs via auto‑suspend. |
| | *BigQuery* | Serverless analytics | Deployed UDFs in JavaScript to accelerate geospatial joins. |

**Edge Cases**  
- Spark memory tuning (executor vs driver).  
- Kafka topic compaction for idempotent consumers.  
- Delta Lake merge conflicts under concurrent writes.

**Optimize & Communicate**  
I’ll emphasize how I pick tools based on latency, scalability, and operational overhead. For example, choosing Flink over Spark Structured Streaming when sub‑second latency is critical, or using Airflow DAGs with retry policies to ensure idempotent ETL. Conclude by noting that my toolkit evolves: I stay current via community repos, internal workshops, and open‑source contributions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
