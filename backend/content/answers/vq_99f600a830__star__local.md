---
qid: vq_99f600a830__star__local
question: What are Dataset, Linked Service and IR ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 348
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:11:09-05:00'
sources: []
---

**Situation** – In a recent migration project I was tasked with moving our on‑premises SQL Server data into Azure Synapse for a new analytics platform. The legacy database had over 50 tables and we needed to keep the ETL pipelines running while the move happened.

**Task** – My goal was to create reusable, scalable data assets in Synapse that could pull from the source system, transform it, and load it into our lakehouse without breaking existing downstream reports.

**Action** – I started by defining a **Dataset** for each table; these were JSON schema files that described column names, types, and row counts. Next, I set up a **Linked Service** pointing to the on‑prem SQL Server via an Azure Data Factory integration runtime (IR). The IR acted as a secure bridge: it handled the network traffic, credentials, and data movement between our on‑prem VNet and Azure. Using the linked service, I created copy activities that read from the dataset and wrote into Parquet files in ADLS Gen2. I also added a mapping to transform dates and normalize naming conventions during the copy.

**Result** – The migration completed 30 % faster than the original schedule, with zero downtime for reporting users. We reduced storage costs by 40 % thanks to columnar compression and gained near‑real‑time refresh rates. This exercise taught me how tightly coupled datasets, linked services, and IRs are in Azure Data Factory, and why treating them as first‑class objects is key to scalable data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
