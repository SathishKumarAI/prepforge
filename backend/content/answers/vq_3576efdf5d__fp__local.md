---
qid: vq_3576efdf5d__fp__local
question: Which is not part of the Data Definiton Language ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 338
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:30:46-05:00'
sources: []
---

**Answer:**  
`SELECT` (and its variants like `INSERT`, `UPDATE`, `DELETE`) is **not** part of the Data Definition Language (DDL).

---

### Why DDL is limited to schema‑manipulation

At the core of a relational database lies *structure*—tables, columns, indexes, constraints.  
The purpose of DDL is to **define and modify that structure**; it tells the engine *what* data may look like.  
Consequently, DDL commands (`CREATE`, `ALTER`, `DROP`, `TRUNCATE`) are declarative: they specify a desired schema state, not how to obtain or manipulate actual rows.

In contrast, Data Manipulation Language (DML) commands (`SELECT`, `INSERT`, `UPDATE`, `DELETE`) operate on *instances* of that structure. They query or change data values while the underlying schema remains unchanged. Mixing these would blur the clear separation between *definition* and *content*, which is essential for transaction isolation, metadata caching, and optimizer assumptions.

---

### Non‑obvious insight

A subtle fact: even though `TRUNCATE` appears to be a DML operation (it removes rows), it is treated as DDL because it **replaces** the table’s data store wholesale, bypassing row‑by‑row triggers and logging. Hence its classification reinforces that *DDL is defined by how it interacts with storage*, not merely by whether it touches rows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
