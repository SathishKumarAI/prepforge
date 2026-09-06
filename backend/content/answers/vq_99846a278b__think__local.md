---
qid: vq_99846a278b__think__local
question: WHAT IS THE DIFFERENCE BETWEEN A PRIMARY KEY AND A UNIQUE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 475
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:04:43-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - The user asks for a *difference* between “primary key” and “unique key”.  
   - Assume they’re referring to relational‑database terminology (SQL Server, MySQL, PostgreSQL).  
   - Note that both are constraints on columns; the answer should compare properties, usage, and semantics.

**2️⃣ Adopt a mental model: constraint taxonomy**  
   - Treat keys as *constraints* with sub‑categories: **uniqueness**, **nullability**, **system role**.  
   - Build a quick table in mind:  
     | Feature | Primary Key | Unique Key |
     |---------|-------------|------------|

**3️⃣ Reason step‑by‑step through each attribute**  
   1. *Uniqueness*: both enforce one‑to‑one mapping on the column(s).  
   2. *Nullability*: PKs cannot be NULL; UNIQUE keys allow NULL (often one per table, depending on DBMS).  
   3. *Index creation*: most engines auto‑create a unique index for both; PK may get clustered index if chosen.  
   4. *Identity / surrogate role*: PK often used as the entity’s identity and referenced by foreign keys.  
   5. *Multiplicity*: a table can have only one PK but many UNIQUE constraints.

**4️⃣ Avoid common traps**  
   - Don’t conflate “unique index” with “unique key”; the latter is a declarative constraint, not just an index.  
   - Remember that some DBMS allow multiple NULLs in a UNIQUE column; others treat NULL as distinct values.  
   - Don’t assume PK implies clustering—depends on storage engine choice.

**5️⃣ Sanity‑check & communicate clearly**  
   - Re‑run the table mentally: do all rows match the differences?  
   - Present answer in bullet form, highlighting key distinctions.  
   - End with a concise summary sentence that captures the essence: “A primary key is a special unique key that cannot be NULL and uniquely identifies a row; a unique key merely guarantees uniqueness but may allow NULLs and can appear multiple times.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
