---
qid: ing_775bb563c9__faang__local
question: 'Explain: Unique, Primary, and Clustered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 511
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:21:21-05:00'
sources: []
---

**Clarify**  
You’re asking about the three common SQL index types in relational systems – *Unique*, *Primary*, and *Clustered* – and how they affect data layout, lookup speed, and constraints.

Assumptions I’d confirm:  
- We’re dealing with a row‑store engine (e.g., MySQL InnoDB).  
- The database is read‑heavy, with frequent range queries.  

**Approach**  
1. Define each index type.  
2. Explain how they differ in enforcement and physical storage.  
3. Show typical use‑cases and performance trade‑offs.

**Depth**  

| Index | Purpose & Constraints | Physical Layout |
|-------|----------------------|-----------------|
| **Unique** | Guarantees no duplicate key values (enforced by a unique constraint). | B‑Tree of keys + row pointers; duplicates prohibited. |
| **Primary** | Special case of Unique: one per table, cannot be NULL, used as the table’s *row identifier*. | InnoDB stores data in the leaf nodes of its clustered index (see below). |
| **Clustered** | Determines the physical order of rows on disk; only one per table. | The B‑Tree itself holds complete row records at the leaves; inner nodes contain key ranges. |

- *Primary* indexes are always clustered in InnoDB, so data is physically sorted by the PK.  
- A *Unique* index may be non‑clustered (separate B‑Tree) unless it’s also the PK.  
- Multiple *Non‑Clustered Unique* indexes can exist; each adds a lookup layer.

**Edge Cases**  
- Updating a clustered key rewrites entire pages → costly for large tables.  
- Composite keys: ordering matters; changing one component shifts many rows.  
- Nullable columns cannot be part of a PK but can appear in unique indexes if `NULL` is allowed only once per DBMS.

**Optimize & Communicate**  
When designing, pick the PK as the most frequently queried column and keep it immutable. Add non‑clustered unique indexes on alternate lookup keys (e.g., email). If range scans dominate, consider a composite clustered index that aligns with those ranges. Explain trade‑offs: more indexes → faster reads but slower writes and higher storage. Always benchmark with realistic workloads before finalizing the schema.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
