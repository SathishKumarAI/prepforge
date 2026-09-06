---
qid: vq_8d749fe3db__faang__local
question: WHAT IS A UNIQUE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 436
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:02-05:00'
sources: []
---

**Clarify**  
A *unique index* is a database structure that guarantees all values in the indexed column(s) are distinct—no two rows can share the same value.  
Assumptions: we’re talking about relational DBMSs (MySQL, PostgreSQL, SQL Server), not NoSQL.

**Approach**  
1. Explain what an index does (speed look‑ups).  
2. Contrast a normal (non‑unique) index with a unique one.  
3. Highlight enforcement vs. performance.  
4. Show syntax examples and where it’s used (primary keys, alternate keys).

**Depth**  
- **Definition:** A unique index is built on one or more columns; the DBMS creates an internal B‑Tree (or similar) that prevents duplicate key values.  
- **Enforcement:** On INSERT/UPDATE, the engine checks the tree for a matching key and rejects the operation if it already exists.  
- **Performance:** Same read speed as a regular index, plus write overhead of checking uniqueness.  
- **Syntax example:**
  ```sql
  CREATE UNIQUE INDEX idx_email ON users(email);
  ```
  Or as part of a primary key:
  ```sql
  ALTER TABLE orders ADD CONSTRAINT pk_orders PRIMARY KEY (order_id);
  ```

**Edge Cases**  
- NULLs: most DBMS allow multiple NULLs unless the index is declared `UNIQUE NOT NULL`.  
- Composite keys: uniqueness applies to the tuple, not individual columns.  
- Race conditions in high‑concurrency environments—requires transaction isolation or lock escalation.

**Optimize & Communicate**  
Use a unique index when you need data integrity (e.g., usernames) and fast lookups. If you only need uniqueness but no query speed benefit, consider a `UNIQUE` constraint without an explicit index; the engine will create one implicitly. Explain trade‑offs: extra disk space vs. guaranteed correctness. Always test with bulk inserts to ensure performance remains acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
