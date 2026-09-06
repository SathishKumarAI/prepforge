---
qid: vq_8d749fe3db__think__local
question: WHAT IS A UNIQUE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 420
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:01:13-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
   - Assume we’re talking about relational databases (e.g., MySQL, PostgreSQL).  
   - “Unique index” usually means an index that enforces uniqueness on one or more columns.

**2️⃣ Mental model / framework**  
   - Think of an *index* as a lookup table that speeds queries.  
   - A *unique* constraint is a rule that no two rows can have the same value(s) in the indexed column(s).  
   - In many DBMSs, a unique index implements this rule automatically.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the columns you want to enforce uniqueness on.  
   2. Create an index over those columns with the `UNIQUE` keyword (e.g., `CREATE UNIQUE INDEX idx ON table(col);`).  
   3. The DB engine will check each INSERT/UPDATE; if a duplicate value exists, it rejects the operation.  
   4. Because the same data structure is used for both lookup and enforcement, you get performance benefits *and* data integrity.

**4️⃣ Common traps to avoid**  
   - Confusing “unique index” with a primary key: they’re similar but not identical (a table can have many unique indexes).  
   - Forgetting that NULLs may be treated as distinct in some engines; thus multiple NULLs might still be allowed.  
   - Assuming the index is automatically created when you declare a UNIQUE constraint—though most DBMSs do create an internal unique index, it’s good to verify.

**5️⃣ Sanity‑check & communicate**  
   - Verify that an attempt to insert a duplicate value fails with a “duplicate key” error.  
   - Explain clearly: “A unique index is both a performance structure and a data integrity guard; it guarantees that the indexed column(s) contain only distinct values across all rows.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
