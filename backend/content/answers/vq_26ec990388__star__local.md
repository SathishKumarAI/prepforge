---
qid: vq_26ec990388__star__local
question: How do you manage metadata in Azure Data Lake?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 348
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:21-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with migrating a legacy on‑prem data warehouse into Azure Data Lake Storage Gen2 for a quarterly reporting platform. The lake already held terabytes of semi‑structured logs, but there were no systematic ways to discover or version the schema, so downstream BI teams struggled to pull fresh data.

**Task** – I needed to implement an enterprise‑grade metadata catalog that could auto‑discover file schemas, track lineage, and expose this information via a REST API for other services, all while keeping ingestion pipelines cost‑effective.

**Action** – I set up Azure Purview as the central governance hub. Using Azure Data Factory (ADF) copy activities with “Schema Drift” enabled, each new dataset writes its schema to a dedicated “metadata folder” in ADLS. I wrote an ADF pipeline that triggers a Purview ingestion job whenever files land; the job populates the catalog and updates lineage. For cost control I leveraged Azure Data Lake’s tiered storage: hot for active logs, cool for archived ones, and applied lifecycle policies via Azure Blob Storage. Additionally, I exposed a lightweight API built on Azure Functions to query the catalog for downstream Power BI consumers.

**Result** – Metadata discovery time dropped from days to minutes, BI teams reported a 35 % reduction in ETL development effort, and we avoided accidental data duplication by enforcing schema version checks before loading. The exercise also taught me how Purview’s policy engine can enforce compliance while keeping pipelines lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
