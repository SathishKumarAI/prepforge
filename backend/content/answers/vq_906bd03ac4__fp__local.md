---
qid: vq_906bd03ac4__fp__local
question: Can we use tables in GetMetadata activity ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 262
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:46:18-05:00'
sources: []
---

In ADF’s **GetMetadata** activity you’re querying *metadata* from a dataset—not the data itself.  
The engine resolves the dataset to an underlying storage location (Blob, ADLS, SQL, etc.).  
If the dataset points to a file system object (e.g., a CSV or Parquet), GetMetadata can ask for **child items** or **size**, but it cannot treat that file as a relational table because the activity has no query engine.  

When the dataset is a *SQL* source, you can request **schema** or **table count**—but the “table” must already exist in the database; GetMetadata simply reads the system catalog via T‑SQL `INFORMATION_SCHEMA`.  
You cannot point it to an arbitrary CSV and say “treat this as table X”; that would require a schema‑aware engine (e.g., PolyBase, Spark).  

**Key insight:** GetMetadata is *metadata‑only*; it never scans data rows. Thus it can’t create or infer tables from flat files—those must be materialised first in a relational store or processed by a compute activity that understands tabular structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
