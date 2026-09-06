---
qid: ing_c88debd2e0__think__local
question: 'Explain: Primary and Unique Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 444
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:11:52-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Confirm that “primary” means a table’s primary key (unique + NOT NULL).  
   - Assume we’re dealing with relational DBMSs that support both primary‑key and unique indexes.  
   - Note whether the question targets design decisions or performance implications.

**2. Adopt a mental model of index types**  
   - Treat an index as a data structure (B‑tree, hash, etc.) mapping key values to row pointers.  
   - Distinguish *primary* (system‑generated, mandatory) vs *unique* (user‑defined, optional).  
   - Remember the enforcement guarantees: primary ensures uniqueness + non‑null; unique only ensures uniqueness.

**3. Step through reasoning**  
   1. Start with a table definition and identify the PK column(s).  
   2. Explain how the DB automatically creates an index on those columns.  
   3. Show that a separate UNIQUE constraint can be added to other columns, which also triggers an index.  
   4. Compare storage: primary key indexes often are clustered; unique ones may be non‑clustered unless specified.  
   5. Discuss query patterns: PK lookups via equality are fastest; unique constraints help range or join queries on those columns.

**4. Avoid common traps**  
   - Don’t conflate “unique index” with “primary key”; they’re distinct but both enforce uniqueness.  
   - Beware of assuming all DBMSs cluster primary keys automatically (some allow explicit clustering).  
   - Remember that a unique constraint can be nullable; the DB treats NULLs specially.

**5. Sanity‑check & communicate**  
   - Re‑state: “Primary key → mandatory, non‑null, system index; Unique → optional, only uniqueness.”  
   - Verify with examples (e.g., `CREATE TABLE t(id INT PRIMARY KEY, email VARCHAR UNIQUE);`).  
   - Conclude by summarizing impact on design: choice of clustering, index size, and query performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
