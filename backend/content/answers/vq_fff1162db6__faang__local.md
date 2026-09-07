---
qid: vq_fff1162db6__faang__local
question: How do you handle schema evolution in Azure Data Lake?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 442
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:15-05:00'
sources: []
---

**Clarify**  
You’re asking how to keep data pipelines robust when the underlying schema of files in an Azure Data Lake changes—add/remove columns, change types, etc. I’ll assume we’re dealing with semi‑structured formats (Parquet/Avro) and that downstream services (Synapse, Power BI, Databricks) need consistent views.

**Approach**  
1. Version the schema: store each evolution in a registry (Azure Purview or custom JSON).  
2. Use *schema‑on‑read* engines (Spark, Azure Synapse) with auto‑merge or explicit fallback columns.  
3. Maintain a “canonical” view via a Delta Lake table that materializes the latest schema and tracks lineage.

**Depth**  
- **Schema registry**: each file upload tags its version; consumers query the registry to get the expected struct.  
- **Auto‑merge**: Spark’s `spark.sql.parquet.mergeSchema=true` scans all partitions, builds a unioned schema, and casts missing fields to null.  
- **Delta Lake**: writes in `append` mode with `mergeSchema=true`; the transaction log preserves every change so queries always hit the latest stable schema.  
Complexity: merge is *O(n files)* for each job; Delta reduces this by caching the merged schema per table. Trade‑off: auto‑merge can silently drop incompatible types—explicit validation mitigates that.

**Edge Cases**  
- Backward compatibility: dropping columns that downstream jobs still read → add a `dropColumn` flag in the registry.  
- Breaking changes (type change): enforce a “semantic version” bump and require downstream code to recompile.  
- Large partitions: schema inference can be expensive; use sampling or pre‑defined templates.

**Optimize & Communicate**  
Explain that by decoupling data storage from schema logic, we avoid pipeline failures, enable rapid iteration, and keep compliance through lineage tracking. Highlight that this pattern scales to millions of files and supports real‑time analytics in Azure Synapse or Databricks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
