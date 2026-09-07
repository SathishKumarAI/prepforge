---
qid: ing_c88debd2e0__faang__local
question: 'Explain: Primary and Unique Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 610
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:31-05:00'
sources: []
---

**Clarify**  
We’re asked how *primary* and *unique* indexes work in a relational DB, why we use them, and what trade‑offs they bring. Assume the interviewer wants to hear about key definition, enforcement, storage layout, and impact on reads/writes.

---

**Approach**  
1. Define each index type.  
2. Explain how they’re stored (B‑tree, clustered vs non‑clustered).  
3. Discuss enforcement of uniqueness & primary‑key constraints.  
4. Talk about performance/space trade‑offs and typical use cases.

---

**Depth**  

| Index | Purpose | Storage | Enforcement |
|-------|---------|---------|-------------|
| **Primary Key** | Uniquely identifies a row; defines table’s *clustered* ordering (if clustered). | Usually a B‑tree; clustered index means data pages are ordered by PK. | DB guarantees no duplicate key values; if clustered, every leaf contains the actual row. |
| **Unique Index** | Guarantees uniqueness on one or more columns but doesn’t define row identity. | Non‑clustered B‑tree (unless specified). | DB checks that inserted/updated rows don’t duplicate existing index keys. |

*Read performance*:  
- PK lookup is O(log n) via the clustered tree; often fastest because data resides in leaf pages.  
- Unique indexes add an extra layer: a search on the unique key then a pointer to the PK (or row).  

*Write performance*:  
- Inserting a row requires updating all covering indexes, so more unique indexes mean slower writes.  
- Clustered PK updates can cause page splits if inserts are out‑of‑order.

*Space*:  
- Each index consumes ~0.5–1× the size of its key columns plus pointers.  

---

**Edge Cases**  
- **Nullable unique columns**: most RDBMS allow multiple NULLs, so uniqueness isn’t enforced on NULLs.  
- **Composite PK/Unique**: order matters; a different column ordering changes the physical layout and performance.  
- **Large datasets**: page splits can fragment clustered PK pages, hurting cache locality.

---

**Optimize & Communicate**  
To improve, keep only indexes that serve real query patterns; use covering indexes to avoid lookups. Consider *partial* or *filtered* unique indexes when constraints apply to a subset of rows. When explaining this in an interview, walk through a sample schema, show the B‑tree structure on paper, and quantify cost: e.g., “adding a unique index on `email` adds ~30 KB per million rows but saves 10× time for `SELECT … WHERE email = ?`.” This demonstrates clear reasoning, trade‑off awareness, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
