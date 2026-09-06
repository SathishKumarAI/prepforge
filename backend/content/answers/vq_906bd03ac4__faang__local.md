---
qid: vq_906bd03ac4__faang__local
question: Can we use tables in GetMetadata activity ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 378
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:35-05:00'
sources: []
---

**Clarify**  
You’re asking whether the *GetMetadata* activity (in Azure Data Factory/ Synapse pipelines) can read metadata from a **table** rather than just files or blobs.  
Assumptions:  
1. “Table” means an RDBMS table (SQL Server, PostgreSQL, etc.).  
2. You want column names, row counts, schema details, not the data itself.

**Approach**  
Explain that GetMetadata is designed for file‑based datasets; to query a relational table you use *Lookup* or *Stored Procedure* activities instead.  
Outline steps:  
- Create a dataset pointing to the table (linked service → SQL).  
- Use *GetMetadata* only on file datasets.  
- For table metadata, run a query like `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS…` via Lookup.

**Depth**  
- GetMetadata supports properties such as `childItems`, `lastModified`, `size`.  
- It cannot return column definitions for tables; those are schema objects, not file items.  
- Lookup returns the result set of a SQL query; you can parse it to get column names or counts.  
Complexity: O(1) metadata fetch vs. O(n) rows if you used Copy.

**Edge Cases**  
- If the table is huge, a full `SELECT *` in Lookup will time out—use COUNT(*) instead.  
- Permissions: the linked service must have SELECT rights on the schema.  

**Optimize & Communicate**  
Mention that for large catalogs, consider using Azure Data Catalog or Synapse’s data lake catalog. Summarize: “No, GetMetadata is file‑centric; use Lookup/Stored Procedure for table metadata.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
