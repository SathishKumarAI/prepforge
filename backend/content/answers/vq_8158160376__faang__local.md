---
qid: vq_8158160376__faang__local
question: How do you manage schema drift in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 548
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:19:40-05:00'
sources: []
---

**Clarify**  
You’re asking how Azure Data Factory (ADF) can keep pipelines running when source/target schemas change—i.e., *schema drift*.  
Assumptions:  
1. Pipelines use **Copy Activity** or **Data Flow** with schema‑based mapping.  
2. The target is a relational store (SQL, Synapse).  
3. You want minimal downtime and auditability.

**Approach**  
1. Detect drift at ingestion time.  
2. Store the *canonical* schema in a catalog (e.g., Azure Purview or a dedicated metadata table).  
3. Auto‑generate/adjust mappings on the fly, or fallback to “add new columns” strategy.  
4. Log every change and trigger alerts.

**Depth**  
- **Schema registry**: Create an Azure SQL table `SchemaMeta` with columns `(TableName, ColumnName, DataType, LastUpdated)`. On pipeline run, query the source (e.g., via a *Get Metadata* activity) to pull current schema. Compare against `SchemaMeta`.  
- **Diff logic**: If new columns appear, add them to target via an ALTER TABLE statement (using Azure‑SQL REST API or T-SQL in a Stored Procedure). If data types change, flag the row for manual review; you can also cast safely if possible.  
- **ADF Data Flow**: Enable *Dynamic Schema* by using a schema-less source (e.g., `AzureBlobStorage` with `DelimitedText`) and mapping to a sink that allows auto‑add columns (`AutoGenerateSchema = true`).  
- **Error handling**: Use the *On Error* event to write drift details to an Event Hub or Log Analytics workspace for audit.

**Edge Cases**  
- Dropped columns: decide whether to keep history (soft delete) or purge.  
- Data type incompatibilities that cause runtime failures—need a validation step before load.  
- High‑velocity sources where schema changes per batch; throttling may be required.

**Optimize & Communicate**  
1. **Batch drift resolution** every 24 h to avoid continuous ALTERs.  
2. Use *Azure Data Catalog* for lineage, improving traceability.  
3. Document the policy: “new columns are appended automatically; type changes trigger alerts.”  
4. Share the drift‑report dashboard with stakeholders so they know when manual intervention is needed.

This strategy keeps pipelines resilient while preserving audit trails and minimizing operational overhead—exactly what FAANG interviewers expect for a robust data‑engineering solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
