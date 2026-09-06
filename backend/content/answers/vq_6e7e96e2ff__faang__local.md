---
qid: vq_6e7e96e2ff__faang__local
question: how do you do that ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 499
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:15:38-05:00'
sources: []
---

**Clarify**

> *“How do you do data engineering?”*  
> I’ll assume you’re asking about building a reliable, scalable pipeline from source to analytics/ML. Key assumptions: data volumes (TB‑scale), velocity (real‑time streams), schema evolution, and business need for near‑zero downtime.

**Approach**

1. **Ingest** – batch via Kafka/S3 + stream via Kinesis/Flink.  
2. **Store** – choose a lakehouse architecture (Delta Lake/Parquet on S3 or ADLS).  
3. **Transform** – orchestrate with Airflow/Dagster, using Spark/Databricks for heavy jobs; lightweight ETL in Flink for low‑latency paths.  
4. **Govern & Catalog** – Glue/Data Catalog + ACID tables (Delta) to track lineage and schema changes.  
5. **Serve** – expose as read‑optimized views via Athena or a BI layer (Looker/Redshift).  

**Depth**

- *Ingestion*: Kafka topics partitioned by key, consumer groups for parallelism; use Exactly‑Once semantics.  
- *Storage*: Parquet + Zstd compression → 2–3× size reduction; Delta Lake adds transaction log for ACID guarantees.  
- *Transformation*: Spark jobs are idempotent; we use watermarking in Flink to handle late data. Complexity: O(n) per job, but distributed reduces wall‑time.  
- *Governance*: Schema registry + JSON schema validation prevents breaking downstream consumers.

**Edge Cases**

- Out‑of‑order events → watermarks.  
- Schema drift → automated migration scripts.  
- Backpressure in streams → adaptive scaling of consumer groups.  
- Data quality failures → automated alerts & retries.

**Optimize & Communicate**

- **Performance**: Partition by date + bucketing on high‑selectivity keys; cache hot tables with Snowflake/BigQuery.  
- **Cost**: Spot instances for Spark, reserved capacity for critical jobs.  
- **Observability**: Centralized logs (CloudWatch) + metrics dashboards.  

I’d present this roadmap in a slide deck, then walk through a live demo of a sample pipeline, emphasizing monitoring and rollback strategies—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
