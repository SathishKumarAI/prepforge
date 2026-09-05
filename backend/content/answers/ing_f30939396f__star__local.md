---
qid: ing_f30939396f__star__local
question: 'Explain: Sources — Databricks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 368
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:07-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a recommendation engine for an e‑commerce client who had millions of clickstream logs, product metadata, and customer profiles stored across multiple cloud services (S3, Azure Blob, and a legacy on‑prem MySQL database). The data team needed a unified view in Databricks to train models in real time.

**Task** – I had to ingest these heterogeneous sources into a single Delta Lake table while preserving lineage, ensuring incremental updates, and keeping latency under five minutes for nightly refreshes.

**Action** – First, I set up a multi‑cluster architecture: a dedicated ingestion cluster and a compute cluster for ML. Using Databricks Autoloader with Structured Streaming, I pulled new files from S3 and Azure Blob in micro‑batches, applying schema evolution automatically. For the MySQL data, I used the JDBC connector with a partitioned read (by date) to avoid full table scans. All streams were written to Delta Lake tables with ACID guarantees, leveraging Delta’s time travel for rollback. I added a metadata catalog via Unity Catalog to centralize access control and auditing. Finally, I orchestrated the pipelines in Databricks Jobs with dependency checks and alerting.

**Result** – The unified dataset now supports 200+ concurrent model training jobs with less than a 3‑minute refresh cycle. Accuracy of recommendations improved by 12% (measured via AUC), and data freshness dropped from 24 hours to under five minutes, cutting manual intervention by 80%. I learned how Databricks’ streaming and Delta Lake features can turn disparate sources into a reliable foundation for AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
