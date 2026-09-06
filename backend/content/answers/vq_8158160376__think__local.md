---
qid: vq_8158160376__think__local
question: How do you manage schema drift in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 468
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:56:55-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- *What is “schema drift” for this context?* (e.g., column additions/removals, type changes in source tables).  
- *Which Azure services are involved?* Focus on Azure Data Factory (ADF) pipelines that ingest data into ADLS or Synapse.  
- *Assume a typical ETL pattern:* Copy activity → mapping → sink (parquet/Delta Lake).  

**2️⃣ Adopt the “detect‑adapt‑notify” mental model**  
1. **Detect** changes in source schema automatically.  
2. **Adapt** pipeline mappings and data lake formats to accommodate new structure.  
3. **Notify / audit** stakeholders or downstream jobs about the change.  

**3️⃣ Step‑by‑step reasoning**  
- *Detection:* Use ADF’s “Get metadata” activity or the Data Flow schema inference feature to pull current column list and types. Compare with a stored baseline (e.g., in a control table).  
- *Adaptation:* If columns are added, update Copy Activity mapping or use dynamic content to let it auto‑map new fields. For removed columns, ensure sink can ignore them (e.g., using “Allow schema drift” flag in Data Flow). For type changes, trigger a re‑run of the pipeline with updated schema definitions.  
- *Notification:* Log differences to an Azure Table/Blob or send an email via Logic App/Power Automate.  

**4️⃣ Common traps to avoid**  
- Forgetting that “Allow schema drift” only works for Data Flows, not Copy activities.  
- Over‑aggressive adaptation: blindly adding columns can bloat storage; use validation checks first.  
- Ignoring downstream dependencies (e.g., BI reports) that may break when schema changes.  

**5️⃣ Sanity‑check & communicate**  
- Verify the baseline and diff logic with a unit test or sample run.  
- Explain to stakeholders: “We’ll detect new columns, auto‑map them if safe, and notify you before any downstream impact.”  
- Document the process in your pipeline’s README for future maintainers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
