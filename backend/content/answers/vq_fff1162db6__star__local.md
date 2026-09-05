---
qid: vq_fff1162db6__star__local
question: How do you handle schema evolution in Azure Data Lake?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 300
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:32-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating a legacy transactional system into an Azure Data Lake Gen2 for analytics. The source tables had frequent schema changes: new columns, data type tweaks, and occasional renames. **Task** – Build a robust ingestion pipeline that could adapt to these changes without breaking downstream Power BI dashboards or Spark jobs, while preserving historical data integrity. **Action** – I introduced an *ad‑hoc schema registry* using Azure Table Storage keyed by table name and version. Each ETL run (Azure Data Factory) first fetched the current source schema via JDBC metadata, compared it against the stored schema, and auto‑generated a delta SQL script to alter the Parquet file format in ADLS. I wrapped this logic in an Azure Function that emitted a “schema change” event to Event Grid; downstream Spark jobs subscribed to these events and refreshed their catalog metadata. For backward compatibility, I used Parquet’s column pruning feature and maintained versioned folder paths (`/raw/{table}/{version}/`). **Result** – The pipeline handled 12 schema changes in the first month with zero downtime for analytics consumers, reduced manual intervention by 80%, and kept query performance above 95th percentile. I learned that treating schema as an event stream and leveraging Azure’s serverless components can turn a fragile ingestion process into a resilient, self‑healing system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
