---
qid: vq_c6a9a0dd3a__faang__local
question: How do you implement schema drift handling in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 436
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:51-05:00'
sources: []
---

**Clarify**  
The interviewer asks how to detect and react when the incoming data schema changes (new/removed columns, type changes) while using Azure Data Factory (ADF).  
Assumptions:  
* Data is streamed into a Synapse or SQL‑DW table via ADF pipelines.  
* We want minimal manual intervention and automated lineage.

**Approach**  
1. **Schema snapshot** – store the current target schema in a control table (`tbl_schema_snapshot`).  
2. **Comparison step** – before each run, pull the source schema (via `INFORMATION_SCHEMA.COLUMNS` or a stored procedure) and diff it against the snapshot.  
3. **Automated action** – if differences exist:  
   * *Add columns*: use `ALTER TABLE ADD COLUMN …`.  
   * *Drop/rename columns*: flag for review or generate dynamic SQL to drop/rename after archiving data.  
4. **ADF Integration** – embed the diff logic in a stored procedure activity, and set its output as a pipeline variable that gates downstream activities (e.g., skip load if drift is not approved).  

**Depth**  
*Diff logic* runs in O(n) over columns; negligible cost relative to data movement.  
*Transactional safety*: wrap schema changes in a transaction; use `TRY…CATCH` to rollback on failure.  
*Versioning*: maintain a history table for drift events.

**Edge Cases**  
*Type mismatches that require data conversion – need custom mapping.*  
*Large schema changes causing downtime – schedule during maintenance windows.*  
*Nullable vs NOT NULL conflicts – default to nullable to avoid load errors.*

**Optimize & Communicate**  
Explain that this pattern decouples schema evolution from pipeline logic, reduces manual S3‑like “schema drift” failures, and gives auditability. Mention that you could further use ADF’s *Schema Drift* feature in Copy activity for simple column additions, but the above approach handles complex changes robustly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
