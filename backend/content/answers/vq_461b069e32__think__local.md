---
qid: vq_461b069e32__think__local
question: How to implement incremental load in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 471
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:30:06-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- *What is “incremental load” for me?* (new/changed rows only)  
- *Where are the source & sink?* (SQL DB → Data Lake, etc.)  
- *Do we have timestamps or row‑version columns?* (required to detect changes)  
- *ADF version and tooling?* (Azure Synapse Studio vs. classic ADF)

**2️⃣ Adopt a mental model: “Delta detection + data copy”**  
- Detect the delta → use source query with `WHERE ModifiedDate > @lastRun` or CDC tables.  
- Copy only those rows to sink → incremental load.  
- Update control metadata (e.g., last run timestamp) for next cycle.

**3️⃣ Step‑by‑step reasoning**  
1. **Control table**: Create a tiny table with the last processed timestamp.  
2. **Pipeline parameters**: Read that value into a pipeline variable (`@lastRun`).  
3. **Source dataset**: Write a query that filters by `ModifiedDate > @lastRun`.  
4. **Copy activity**: Use this filtered source → sink (parquet, ADLS, etc.).  
5. **Post‑copy activity**: Update the control table with the current UTC timestamp.  
6. **Trigger/Orchestration**: Schedule or event‑driven to run periodically.

**4️⃣ Common traps to avoid**  
- Forgetting to refresh the last run value after a failed copy → leads to duplicate rows.  
- Using `TOP 1000` or pagination without preserving order → missing changes.  
- Relying on file names only when source files are overwritten → loss of incremental logic.

**5️⃣ Sanity‑check & communicate**  
- Run the pipeline once manually, inspect the control table and sink to confirm only new rows arrived.  
- Explain the flow: “We keep a timestamp in a tiny lookup table; each run pulls rows newer than that timestamp, copies them, then updates the timestamp.”  

This structured approach ensures you capture just the changed data while keeping the pipeline robust and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
