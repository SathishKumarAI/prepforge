---
qid: vq_9d13c49c5f__think__local
question: How do you handle incremental data loads in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 514
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:06:19-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Confirm what “incremental” means for the client (new rows, updated rows, deletes).  
   - Identify the source system (e.g., relational DB, Kafka stream) and its change‑data capture (CDC) capabilities.  
   - Assume Azure Data Lake Storage Gen2 (ADLS Gen2) is already in place and that we can use Azure services like Databricks, Synapse or Data Factory.

**2️⃣ Adopt a layered mental model**  
   1. **Change detection** – how do we know what changed?  
   2. **Data extraction & staging** – pull changes into a temporary zone.  
   3. **Transformation & enrichment** – convert to the target format (Parquet, Delta Lake).  
   4. **Target write strategy** – overwrite, merge or upsert into ADLS.

**3️⃣ Step‑by‑step reasoning**  
   - *Detect changes*: use CDC tables, timestamp columns, or Kafka topics.  
   - *Pull incrementally*: in Data Factory create a “Last‑Run” parameter; filter source by last modified > param.  
   - *Stage the data*: write to a raw zone (e.g., `/raw/<source>/YYYYMMDD/`).  
   - *Transform & merge*: in Databricks, read staged files and perform a `merge` into a Delta Lake table stored under ADLS (`/silver/<table>`).  
   - *Maintain lineage*: store metadata (run ID, timestamps) in a catalog.  

**4️⃣ Common pitfalls to avoid**  
   - Forgetting idempotency: re‑processing the same batch can duplicate rows.  
   - Skipping schema evolution handling; Delta Lake handles it but raw files may break downstream jobs.  
   - Overlooking latency requirements—real‑time vs batched incremental loads.  

**5️⃣ Sanity check & verbalize**  
   - Ask: “Will this approach honor deletes?” – if not, add a tombstone column or use `MERGE … WHEN NOT MATCHED BY SOURCE`.  
   - Verify that the last‑run timestamp updates correctly after each pipeline run.  
   - Communicate clearly: “We’ll pull only rows with `last_modified > @LastRun`, stage them, then merge into our Delta Lake table to keep ADLS up to date.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
