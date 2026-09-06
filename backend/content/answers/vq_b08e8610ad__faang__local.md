---
qid: vq_b08e8610ad__faang__local
question: How do you ensure data quality and validation in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 522
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:28:41-05:00'
sources: []
---

**Clarify**

You’re asking how to guarantee that the data landing in Azure Data Lake Storage (ADLS) is accurate, complete, and trustworthy before it feeds downstream pipelines.  
Assumptions:  
1. Ingest via Azure Data Factory (ADF) or Event‑Hub/IoT Hub.  
2. Data types include JSON, CSV, Parquet, etc.  
3. Downstream consumers expect schema‑validated, lineage‑tracked blobs.

**Approach**

1. **Schema enforcement at ingestion** – use ADF mapping data flows with *schema drift* disabled or custom schemas.  
2. **Data validation steps** – run lightweight Spark jobs that check nulls, ranges, and foreign key consistency.  
3. **Metadata & lineage** – store a catalog in Azure Purview; register each file with its checksum, size, and ingestion timestamp.  
4. **Alerting & rollback** – integrate with Azure Monitor to flag anomalies and trigger ADF “clean‑up” runs.

**Depth**

- *Schema validation*: ADF Data Flow can auto‑detect schema; set `validateSchema = true` so the flow fails if the source deviates, preventing corrupt blobs from entering ADLS.  
- *Integrity checks*: Spark UDFs compute MD5 hashes per record and compare against a master hash table; missing or mismatched rows trigger alerts.  
- *Quality metrics*: Maintain a Data Quality dashboard (Power BI) that shows % completeness, null rates, and drift over time. Complexity: O(N) for scans; cost mitigated by incremental checkpoints.

**Edge Cases**

- Streaming bursts causing partial writes → use ADLS “lease” mechanism to lock files until validation passes.  
- Schema evolution (new columns) → create a separate “staging” zone, run a schema‑merge job before promotion.  
- Large blobs (>5 GB) → split into smaller chunks for parallel validation.

**Optimize & Communicate**

- Cache column statistics in Azure Data Catalog to speed repeated checks.  
- Automate rollback via ADF’s *Delete* activity if validation fails.  
- Document the entire pipeline in Confluence; use “data‑as‑code” (ADF JSON) so changes are versioned and auditable.

By layering schema enforcement, runtime validation, lineage capture, and alerting, we ensure that only high‑quality data resides in ADLS, meeting enterprise compliance and downstream analytics reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
