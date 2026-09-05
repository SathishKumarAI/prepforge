---
qid: vq_906bd03ac4__star__local
question: Can we use tables in GetMetadata activity ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 354
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:39-05:00'
sources: []
---

**Situation:**  
During a migration project from on‑prem SQL Server to Azure Synapse, my team had to audit all source tables for compliance with the new data governance policy. The existing ETL pipeline used ADF pipelines that relied heavily on GetMetadata activities to pull schema and row counts.

**Task:**  
I needed to extend the pipeline so it could also fetch table-level lineage metadata (e.g., primary key columns, foreign keys) from Synapse without writing custom code for each table, while keeping the solution maintainable and cost‑efficient.

**Action:**  
I explored the GetMetadata activity’s “Table” dataset type. By creating a dynamic Linked Service pointing to Synapse and using a Table dataset with a wildcard (e.g., `dbo.*`), I configured GetMetadata to return the *tableName*, *schemaName*, *rowCount*, *columns* and *primaryKey* items via its output parameters. To avoid excessive calls, I wrapped the activity in a ForEach loop that iterated over the list of tables returned by a preceding Lookup activity (querying `INFORMATION_SCHEMA.TABLES`). I added an If Condition to skip system tables and used pipeline parameters to toggle lineage extraction on/off.

**Result:**  
The updated pipeline processed 1,200 tables in under 15 minutes, generating a JSON report with 98% accuracy compared to manual checks. This saved the data governance team 40 hours of manual effort per month and demonstrated that GetMetadata can indeed retrieve table metadata when configured with a wildcard Table dataset. I learned that leveraging built‑in metadata activities with dynamic expressions drastically reduces custom code and keeps pipelines scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
