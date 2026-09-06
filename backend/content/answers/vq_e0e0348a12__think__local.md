---
qid: vq_e0e0348a12__think__local
question: WHAT ARE PRIMARY AND FOREIGN KEYS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 414
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:33:20-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Confirm whether the context is relational databases (SQL) or a more general data‑structure perspective.  
   - Assume “primary” = unique identifier for a row; “foreign” = reference to another table’s primary key.

**2. Adopt a mental model of relational integrity**  
   - Think of tables as sets of tuples, keys as constraints that enforce uniqueness and referential relationships.  
   - Visualize the *Entity‑Relationship* diagram: an entity has a primary key; relationships use foreign keys.

**3. Step‑by‑step reasoning**  
   1. Define **Primary Key (PK)**: attribute(s) that uniquely identify each record, non‑NULL, immutable.  
   2. Explain why PKs are needed: to locate rows efficiently and enforce entity integrity.  
   3. Define **Foreign Key (FK)**: a field that points to a PK in another table; enforces referential integrity.  
   4. Illustrate with an example (`Orders.OrderID` → `Customers.CustomerID`).  
   5. Mention constraints like ON DELETE/UPDATE actions and cascading rules.

**4. Avoid common traps**  
   - Don’t conflate “unique key” with PK; a unique constraint can exist without being the PK.  
   - Remember that FK columns may be NULL unless defined NOT NULL.  
   - Beware of self‑referencing FKs (e.g., employee manager).

**5. Sanity‑check & communicate**  
   - Verify the example satisfies both uniqueness and referential rules.  
   - Summarize: “A PK guarantees a row’s identity; an FK links rows across tables, preserving data consistency.”  
   - Ask if the user needs deeper details (e.g., composite keys, surrogate vs natural keys).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
