---
qid: ing_e09ea73dcf__faang__local
question: What Is Cardinality in Data Modeling? — What Is Cardinality in a Database?
  - SolarWinds Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 506
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:21:32-05:00'
sources: []
---

**Clarify**  
The interviewer asks for *cardinality* in the context of database or data‑modeling – not cardinality as a statistical concept.  
Assumptions: we’re dealing with relational schemas (tables, keys, foreign keys), and the goal is to explain how many rows in one table relate to rows in another.

**Approach**  
1. Define “entity” and “relationship.”  
2. Explain the three classic cardinalities (one‑to‑one, one‑to‑many, many‑to‑many).  
3. Show how foreign keys enforce them.  
4. Mention NULLs/optional relationships as edge cases.

**Depth**  
- **One‑to‑One (1:1):** Each row in Table A maps to at most one row in Table B and vice versa. Implemented with a shared primary key or unique constraint on the foreign key.  
- **One‑to‑Many (1:N):** A single row in Table A can link to many rows in Table B, but each B row links back to only one A row. Typical example: `Customers` → `Orders`. Enforced by a non‑unique foreign key in Table B referencing A’s PK.  
- **Many‑to‑Many (M:N):** Rows in both tables can associate with many rows of the other table. Requires an associative (junction) table holding composite keys from A and B, often with additional attributes.  

Complexity: cardinality itself is a design decision; enforcing it costs O(1) per insert/update via foreign‑key checks, but M:N joins become O(n log n) or worse if not indexed.

**Edge Cases**  
- Optional relationships (NULL FK) effectively create “zero‑to‑many.”  
- Self‑referencing tables can produce 1:1 or 1:N depending on uniqueness constraints.  
- Circular dependencies need careful ordering of table creation.

**Optimize & Communicate**  
Explain that choosing the right cardinality improves query performance and data integrity. In a production interview, I’d illustrate with ER diagrams and discuss how indexes on FK columns reduce join cost, then summarize: “Cardinality tells us *how many* rows relate across tables; correctly modeling it keeps our schemas both correct and efficient.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
