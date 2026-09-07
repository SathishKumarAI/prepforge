---
qid: vq_d5e7a7eacd__faang__local
question: What is a DML statements ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 419
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:36:51-05:00'
sources: []
---

**Clarify**

The interviewer asks for the definition of *DML statements* in the context of relational databases.  
Assumptions: we’re talking about SQL‑based systems (Oracle, MySQL, PostgreSQL, etc.) and not procedural or DDL commands.

---

**Approach**

1. State what “Data Manipulation Language” means.  
2. Enumerate the core DML verbs.  
3. Explain their purpose and how they differ from DDL/DDL‑like operations.  
4. Touch on transaction semantics briefly.

---

**Depth**

DML (Data Manipulation Language) comprises SQL statements that **manipulate data stored in tables**, as opposed to altering the schema itself. The four canonical verbs are:

| Verb | Purpose |
|------|---------|
| `SELECT` | Retrieve rows – read‑only operation. |
| `INSERT` | Add new rows into a table. |
| `UPDATE` | Modify existing row values, optionally filtered by a `WHERE` clause. |
| `DELETE` | Remove rows that match a condition. |

All four can be part of a transaction; they are logged for rollback and concurrency control (e.g., MVCC). DML is *state‑changing* but does **not** create or drop objects—those belong to DDL (`CREATE`, `ALTER`, `DROP`).

---

**Edge Cases**

- A `SELECT … FOR UPDATE` locks rows for later updates.  
- Bulk operations (`INSERT … SELECT`) can trigger triggers and impact performance.  
- Missing `WHERE` in `UPDATE`/`DELETE` affects every row—common bug.

---

**Optimize & Communicate**

Highlight that while DML is straightforward, indexing, batch processing, and proper use of constraints (e.g., foreign keys) are critical for scalability. Convey the answer clearly, using the table to make the distinction immediate, and finish with a quick note on transaction safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
