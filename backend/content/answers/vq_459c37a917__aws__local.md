---
qid: vq_459c37a917__aws__local
question: What are the characteristics of SP?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 483
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:48:51-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a data‑engineering team tasked with migrating the company’s nightly batch analytics from on‑prem Hadoop to an AWS‑native solution. The key requirement was that the new pipeline could process ~3 TB of log data in under 30 minutes while providing real‑time dashboards for product managers.

**Action – Design & Implementation**  
I chose **Apache Spark (SP)** running on **Amazon EMR** with **Spark SQL + Structured Streaming**.  
* **Scalability:** Auto‑scaling EMR clusters (3–10 m5.xlarge nodes) and partitioned Parquet tables in S3 allowed us to hit a 30 minute SLA even when data volume spiked by 150 %.  
* **Availability:** EMR’s spot‑instanced fallback + checkpointing in S3 guaranteed <1 % downtime during node failures.  
* **Cost:** Spot pricing saved ~55 % compared with on‑demand, and the use of serverless Glue for metadata cataloging eliminated the need to run a separate Hive metastore.  
* **Simplification:** I wrapped Spark jobs behind an API Gateway + Lambda orchestrator so downstream teams could trigger transforms without managing EMR directly.

**Result**  
The new pipeline reduced nightly processing time from 90 minutes to **24 minutes** (a 73 % improvement), cut operational costs by **$18k/month**, and increased data freshness for dashboards from 12 hours to near real‑time.  

**Reflection & Learning**  
I owned the migration end‑to‑end, diving deep into Spark’s lazy evaluation to identify bottlenecks early. A key failure was an initial mis‑tuned shuffle buffer that caused OOM errors; I fixed it by tuning `spark.sql.shuffle.partitions` and adding dynamic allocation—learning that profiling is as important as architecture.  

**Leadership Principles Highlighted**  
* **Ownership** – Took full responsibility for the migration and post‑launch monitoring.  
* **Dive Deep** – Conducted granular performance analysis to tune Spark and EMR settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
