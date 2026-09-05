---
qid: vq_d5e7a7eacd__fp__local
question: What is a DML statements ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 350
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:25-05:00'
sources: []
---

**DML (Data Manipulation Language)** is the part of SQL that directly changes the contents of a relational database—its *state*.  
From a theoretical standpoint, a database is a set \(R\) of tuples over a schema. The *query* language (DDL + DQL) describes subsets of \(R\); DML describes functions \(f:R \rightarrow R'\) that transform one state into another.  

The three core operations are:

| Symbol | Operation | Effect on the relation |
|--------|-----------|------------------------|
| `INSERT` | Adds a new tuple | Extends the set by 1 (or more) elements |
| `UPDATE` | Replaces values of existing tuples | Modifies attributes while preserving cardinality |
| `DELETE` | Removes tuples | Shrinks the set |

Why must they be separate?  
1. **Atomicity & Isolation**: Transactions rely on clear, reversible actions; DML verbs map cleanly to log records that can be rolled back.  
2. **Optimization**: Query planners treat DML as state‑changing operators and use different indexes (e.g., for `WHERE` predicates) than pure selects.  

A subtle insight often missed is that *DML is essentially a constrained rewrite system*. Each statement defines a rule that rewrites the database graph while preserving invariants like foreign keys. This view explains why cascading deletes, triggers, and constraints can be seen as higher‑order rewrite rules that maintain consistency across the relational structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
