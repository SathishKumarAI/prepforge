---
qid: vq_b08e8610ad__star__local
question: How do you ensure data quality and validation in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 412
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:15:07-05:00'
sources: []
---

**Situation:**  
At my last role I was responsible for ingesting daily telemetry from IoT devices into an ADLS Gen2 lake for downstream analytics. The raw data had a 12 % error rate—missing fields, malformed JSON, and duplicate records—causing downstream dashboards to show misleading KPIs.

**Task:**  
I needed to build a robust validation pipeline that would catch these issues before the data landed in the lake, reduce processing costs, and provide actionable alerts for the ops team.

**Action:**  
1. Created an Azure Data Factory (ADF) pipeline with a “Validate” activity that runs a Spark job on Databricks.  
2. The Spark job reads the raw blob files, applies schema‑drift checks using `StructType` definitions stored in Azure Purview catalog. It flags rows violating required fields or type mismatches.  
3. Duplicate detection uses a rolling window hash (MD5 of key columns) persisted to Delta Lake tables; duplicates are written to an “exceptions” folder and counted in an Azure Monitor metric.  
4. If validation fails, the pipeline triggers an Azure Logic App that posts a Slack alert with summary statistics and a link to the exception blob.  
5. Successful batches are moved to a secured “gold” container with immutable retention policies.

**Result:**  
Validation reduced downstream data errors by 97 %, cutting ad‑hoc debugging time from days to hours. The cost of storing raw, unvalidated data dropped by 18 % due to fewer re‑processes. I learned that coupling schema governance (Purview) with real‑time Spark validation and automated alerting creates a self‑healing lake architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
