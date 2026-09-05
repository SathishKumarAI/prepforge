---
qid: vq_c6a9a0dd3a__star__local
question: How do you implement schema drift handling in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 359
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:18:59-05:00'
sources: []
---

**Situation:**  
At my previous company we migrated a nightly CDC pipeline from on‑prem SQL to Azure Data Factory. The source table in the Oracle database kept adding optional columns (e.g., new marketing flags) each quarter, and our downstream Synapse lake was failing every time the schema changed.

**Task:**  
I had to build a robust solution that automatically detected these changes, mapped them into our data lake without manual intervention, and preserved historical compatibility for downstream BI reports.

**Action:**  
I enabled “Allow Schema Drift” in a Mapping Data Flow and added an Auto‑Generate Columns step. Using dynamic content I referenced the source’s schema at runtime, then applied a column mapping expression to rename or drop any new columns that weren’t part of our canonical model. For downstream storage I used a Parquet sink with a self‑contained schema, so each file carried its own metadata. To keep data lineage, I logged drift events into an Azure Log Analytics workspace and triggered an Azure Function that updated the Synapse view definitions via T‑SQL scripts.

**Result:**  
The pipeline now runs 100 % of the time without manual re‑deployment; we saw a 40 % reduction in support tickets. I learned that combining schema drift with automated metadata management turns a fragile ETL into a self‑healing system, and that keeping the sink format self‑describing (Parquet) is key for downstream agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
