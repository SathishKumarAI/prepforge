---
qid: ing_775bb563c9__think__local
question: 'Explain: Unique, Primary, and Clustered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 571
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:58:19-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Audience*: Junior‑level engineers who know SQL basics but not index nuances.  
- *Goal*: Explain three index types (unique, primary, clustered) in terms of purpose, constraints, and physical layout, without diving into vendor‑specific syntax.  
- *Assumptions*: Relational DBMS (e.g., MySQL, PostgreSQL, SQL Server); ignore multi‑column or covering indexes unless they illustrate a point.

**2️⃣ Adopt a “data‑structure + rule” mental model**  
- Treat an index as a **sorted B‑tree** that maps key values to row locations.  
- Distinguish *semantic rules* (constraints) from *physical structure* (clustered vs non‑clustered).  
- Use analogies: unique = “no duplicates allowed”, primary = “unique + not null + identity of the table”, clustered = “table’s physical order follows index”.

**3️⃣ Step‑by‑step reasoning**  
1. **Unique Index** – enforce uniqueness; can be sparse (allows NULLs) or dense. Mention that it can be non‑clustered and still provide lookup speed.  
2. **Primary Key Index** – syntactic sugar: a unique, NOT NULL constraint automatically creates a unique index. Emphasize that it is the *canonical* key for table identity; most ORMs rely on it.  
3. **Clustered Index** – determines physical row order; only one per table (except in some engines). Explain how inserting records “fits” into this order, affecting I/O patterns and range scans. Contrast with non‑clustered indexes that store pointers to the clustered key or heap location.

**4️⃣ Common traps to avoid**  
- *Mixing up logical vs physical*: primary key is a constraint; its index may be non‑clustered unless you specify otherwise.  
- *Assuming all unique indexes are clustered*: they’re not; clustering is optional and controlled by the DDL.  
- *Overlooking NULL handling*: unique indexes can allow multiple NULLs, but NOT NULL in PK forbids it.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “If I create a PK on column A, does the engine automatically create a clustered index?” → depends on defaults.  
- Verify: “What happens to data layout if I drop the clustered index?” → table becomes a heap; performance of range scans degrades.  
- Communicate by summarizing each type in one sentence, then giving a quick example query that benefits from each.

This structured approach lets you recall the key distinctions and explain them clearly whenever the topic arises.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
