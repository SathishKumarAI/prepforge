---
qid: vq_906bd03ac4__think__local
question: Can we use tables in GetMetadata activity ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 408
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:02:08-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
   - Identify the tool (Azure Data Factory / Synapse Pipelines).  
   - Confirm what “GetMetadata” refers to – the built‑in activity that reads file or dataset properties.  
   - Decide whether we’re talking about a *table* as in a relational table, or a *metadata table*.

**2️⃣ Map the mental model**  
   - Think of GetMetadata as a reader: it takes a linked service + dataset and returns key/value pairs (e.g., row count, last modified).  
   - A “table” is a storage entity that holds data; it can be referenced by a dataset.  
   - The activity works on datasets, not arbitrary tables.

**3️⃣ Step‑by‑step reasoning**  
   1. Can we create a dataset that points to the table?  
   2. If yes, what properties does GetMetadata expose for that storage type (SQL, ADLS, etc.)?  
   3. Verify if row count or schema is retrievable via the activity’s “field list.”  

**4️⃣ Common traps**  
   - Assuming GetMetadata can read a relational table directly; it actually needs a dataset definition.  
   - Forgetting that certain metadata fields (e.g., column names) aren’t supported for all sinks.  
   - Mixing up *GetMetadata* with the “Lookup” activity.

**5️⃣ Sanity‑check & communicate**  
   - Test in ADF: create a linked service → dataset pointing to the table → use GetMetadata to fetch `rowCount`.  
   - If it fails, double‑check that the dataset type supports the requested field.  
   - Summarize: “Yes, but only if you expose the table via a dataset and request supported metadata fields.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
