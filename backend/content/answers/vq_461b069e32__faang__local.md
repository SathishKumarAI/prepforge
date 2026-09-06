---
qid: vq_461b069e32__faang__local
question: How to implement incremental load in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 456
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:08:02-05:00'
sources: []
---

**Clarify**  
The question asks how to perform an **incremental data load** using Azure Data Factory (ADF).  
Assumptions:  

* Source is a relational table or blob with a monotonically increasing key/ timestamp.  
* Destination can be a lakehouse, SQL DW, or another blob.  
* The goal is to copy only new or changed rows since the last run.

**Approach**  
1. **Capture Last Run State** – store the max value of the incremental column in a control table or Azure Table Storage.  
2. **Source Dataset with Filter** – use an `Expression` that reads the stored value and filters the source query (`WHERE ts > @lastRun`).  
3. **Copy Activity** – run the copy using this filtered dataset.  
4. **Update State** – after successful copy, write the new max timestamp back to the control store.

**Depth**  
* Use a **Lookup** activity (or Azure Function) to read the last value.  
* Pass it as a pipeline parameter to the Copy activity’s source query: `SELECT * FROM dbo.Table WHERE ts > @lastRun`.  
* If using Delta Lake, enable “Merge” with an upsert strategy; otherwise use **Sink overwrite** for fresh partitions.  
* Complexity is O(N) where N = rows added since last run; no full scan.

**Edge Cases**  
* Time‑zone mismatches → store UTC timestamps.  
* Back‑fills / data re‑ingestion → include a “last modified” column and use `MAX(lastModified)` instead of primary key.  
* Failures mid‑run → ensure state update is idempotent (e.g., write after commit).

**Optimize & Communicate**  
Explain that this pattern scales to millions of rows, keeps ADF lightweight, and can be automated with a **Trigger** or **Event Grid** for real‑time ingestion. Mention potential use of **ADF’s Incremental Load Template** as a starter, then customize the filter logic. This showcases structured thinking, clear communication, and depth in design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
