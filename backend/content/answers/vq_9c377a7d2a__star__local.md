---
qid: vq_9c377a7d2a__star__local
question: How can you trigger pipeline based on file arrival in ADLS ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 365
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:11:38-05:00'
sources: []
---

**Situation** – In my last role at a fintech firm we had a nightly ingestion pipeline that processed raw transaction logs from Azure Data Lake Storage (ADLS) into our Snowflake warehouse. The logs were produced by a third‑party system and arrived as compressed CSVs on a shared container, but the volume fluctuated wildly—sometimes a single file, sometimes dozens. If the pipeline ran regardless of arrival, we’d waste compute and risk reprocessing stale data.

**Task** – I needed to create an event‑driven trigger so that the Azure Data Factory (ADF) pipeline would start automatically whenever a new file landed in ADLS, without manual intervention or polling loops.

**Action** – I set up an Azure Event Grid subscription on the ADLS account, filtering for `Microsoft.Storage.BlobCreated` events under our “raw‑transactions” container. In ADF I built a lightweight trigger that listens to Event Grid and passes the blob URL as a pipeline parameter. The pipeline itself uses a Copy Activity with a wildcard dataset to read all new blobs, then runs a Databricks notebook that cleans, aggregates, and writes to Snowflake via JDBC. I also added retry logic in case of transient failures and logged event IDs for auditability.

**Result** – After deployment, the ingestion latency dropped from 3 hours (scheduled) to under 10 minutes on average, with a 40% reduction in compute costs. The team could focus on data quality rather than scheduling, and I learned how to combine Event Grid, ADF triggers, and Databricks for low‑latency, cost‑effective lakehouse pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
