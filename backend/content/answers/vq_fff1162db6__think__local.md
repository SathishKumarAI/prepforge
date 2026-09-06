---
qid: vq_fff1162db6__think__local
question: How do you handle schema evolution in Azure Data Lake?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 408
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:44:50-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   - Confirm which Azure services are involved (ADLS Gen2, Databricks, Synapse, etc.).  
   - Determine whether the schema change is additive, destructive, or involves type changes.  
   - Assume we’re dealing with semi‑structured data (JSON/Parquet) that can evolve over time.

**2. Adopt a mental model**  
   - Treat the lake as a *source of truth* and use **schema-on-read** when possible.  
   - Separate *raw* ingestion from *curated* layers; raw keeps everything, curated enforces a stable contract.

**3. Step‑by‑step reasoning**  
   1. Capture the current schema (e.g., via Data Catalog or Glue metastore).  
   2. When a change is detected, decide if it’s backward compatible: new columns → fine; removed columns → may break consumers.  
   3. For additive changes, add defaults in downstream processing.  
   4. If destructive, version the dataset and maintain the old schema for legacy jobs.  
   5. Use a *schema registry* (e.g., Azure Purview) to publish both versions and enforce validation during ingestion.

**4. Common traps**  
   - Blindly overwriting raw data; lose traceability.  
   - Assuming all consumers can handle nullable columns—some pipelines may fail.  
   - Forgetting to update downstream ETL jobs or dashboards that expect the old schema.

**5. Sanity‑check & communicate**  
   - Verify that test queries succeed on both old and new schemas.  
   - Document the change in a release note linked to the dataset version.  
   - Run a quick “canary” job to confirm downstream systems still work before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
