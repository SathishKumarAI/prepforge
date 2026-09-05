---
qid: vq_ab54d1d43d__star__local
question: Azure Data Factory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 297
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:13-05:00'
sources: []
---

**Situation:** In my last role at a retail analytics firm, we had to migrate our nightly data pipeline from on‑premises SQL Server to the cloud. The existing batch jobs were hitting SLA limits and the data quality team flagged inconsistencies in incremental loads.

**Task:** I was tasked with designing a scalable Azure Data Factory (ADF) solution that would ingest 5 TB of transactional logs daily, transform them into a fact table, and load them into Synapse Analytics while ensuring idempotent processing and minimal downtime.

**Action:** First, I built an ADF pipeline using Copy Activity with “Delta Lake” support to capture only changed rows. I implemented Azure Key Vault for credential rotation and used Data Flow for schema mapping, including dynamic partitioning by date. To handle failures, I added a retry policy and wrote a custom activity that sent alerts to Teams via Logic Apps. For monitoring, I leveraged ADF’s built‑in metrics and set up an Azure Monitor alert for pipeline duration > 90 min.

**Result:** The new pipeline processed 5 TB in under 45 minutes each night, a 60% reduction in run time, and eliminated the data quality issues. I learned how to balance performance with reliability by leveraging ADF’s incremental load patterns and robust monitoring capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
