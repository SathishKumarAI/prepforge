---
qid: vq_e0e0348a12__faang__local
question: WHAT ARE PRIMARY AND FOREIGN KEYS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 428
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:39:28-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks for a concise explanation of *primary* and *foreign keys*.  
Assumptions: we’re speaking about relational databases (SQL), not NoSQL; the audience knows basic table concepts but may need definition of key terms.

**2️⃣ Approach**  
- Define “key” in a database.  
- Explain primary key characteristics.  
- Explain foreign key purpose and how it references a primary key.  
- Highlight enforcement, uniqueness, nullability, and referential integrity.  

**3️⃣ Depth** (core answer)  
A **primary key** is a column or set of columns that uniquely identifies each row in a table. It must be non‑NULL, unique, and immutable; indexes are automatically created for fast lookups.  
A **foreign key** is a column(s) that references the primary key (or unique key) of another table, establishing a parent–child relationship. The DBMS enforces referential integrity: you cannot insert a child row with an invalid reference, nor delete a parent row if dependent children exist unless cascade rules are set.

**4️⃣ Edge Cases**  
- Composite keys: both primary and foreign can span multiple columns.  
- Nullable foreign keys allow “no‑parent” relationships (e.g., top‑level categories).  
- Cascading actions (`ON DELETE CASCADE`, `ON UPDATE SET NULL`) alter default enforcement behavior.  
- Self‑referential tables (employees reporting to managers) use the same table for both sides.

**5️⃣ Optimize & Communicate**  
Mention that primary keys drive indexing, so they should be minimal and stable; foreign keys can be indexed separately to speed joins but are optional. Conclude by summarizing: *Primary key = unique row identifier; foreign key = enforced link to another table’s primary key.* This shows clear structure, depth, and awareness of edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
