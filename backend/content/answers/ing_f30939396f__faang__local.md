---
qid: ing_f30939396f__faang__local
question: 'Explain: Sources — Databricks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 451
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:04:32-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an overview of *Sources* within the Databricks ecosystem—specifically how Databricks ingests and manages external data. I’ll assume they want a concise description of supported data stores, the abstraction layer (Delta Lake), and typical use cases.

**Approach**  
1. Define what “sources” means in this context.  
2. Enumerate major categories (cloud object stores, relational DBs, streaming platforms).  
3. Highlight Databricks’ connector mechanisms (Spark APIs, Auto Loader).  
4. Touch on governance: schema enforcement and lineage.

**Depth**  
Databricks sources are the entry points for data into a Unified Analytics Platform. They expose external systems—Amazon S3/Google Cloud Storage, Azure Blob, relational databases (PostgreSQL, Snowflake), streaming services (Kafka, Kinesis)—via Spark DataSource APIs or dedicated connectors. Auto Loader and Structured Streaming allow incremental ingestion with schema evolution, while Delta Lake provides ACID guarantees on top of these raw sources. Users write simple `spark.read.format(...).load(...)` commands; the engine optimizes reads using partition pruning and caching.

**Edge Cases**  
- **Schema drift**: Auto Loader can auto‑detect new columns but requires careful handling to avoid downstream failures.  
- **Network partitions**: Streaming sources may stall; back‑pressure logic must be tuned.  
- **Large blobs**: Direct read of huge Parquet files without partitioning can cause memory pressure.

**Optimize & Communicate**  
To improve performance, recommend using Delta Lake for all production workloads, enabling time travel and compaction. For real‑time pipelines, pre‑partition data on ingestion keys. I’d explain this by mapping the problem (slow queries) to a solution (Delta + partitioning), quantify expected speedups, and outline rollback plans if new schemas break downstream jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
