---
qid: vq_8df15c3cd1__fp__local
question: How many no of columns can a RECORD GROUP have ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 408
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:45:50-05:00'
sources: []
---

In **DB2‑for‑i** a *record group* is just a user‑defined structure that the system treats like a table definition for purposes of file storage and access.  
The only hard limit on how many fields it can contain comes from the same internal counter that limits ordinary tables: **1 024 columns**.

### Why 1 024?

* **Storage layout** – The record group is stored in a row‑oriented format, so each column must be accounted for in the fixed header that precedes the data.  
* **Bit‑vector bookkeeping** – DB2 uses a bit‑vector to track nullability and other attributes per column. With 1 024 bits you can represent every column individually without overflow; any more would require a second vector or a more complex encoding, which the engine never implemented.  
* **Performance trade‑off** – Beyond ~1 000 columns the probability of efficient index usage drops sharply, so the design keeps the limit low enough that most practical schemas stay well within bounds.

### Non‑obvious insight

Because the bit‑vector is part of every row, a record group with 1 024 columns already consumes **128 bytes** just for null flags alone. That overhead can dominate storage space when many rows are sparse, so designers often split wide logical tables into smaller groups or use *row‑oriented* versus *columnar* storage to avoid this penalty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
