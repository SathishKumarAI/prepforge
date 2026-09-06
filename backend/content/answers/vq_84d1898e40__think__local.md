---
qid: vq_84d1898e40__think__local
question: How do you copy just the structure of a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 478
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:58:57-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
   - *Goal*: Duplicate only the schema (column names, types, constraints) of an existing table, not its data.  
   - *Assumptions*: You’re working in a relational database that supports “CREATE TABLE … LIKE” or similar syntax (MySQL, PostgreSQL, Oracle, etc.). If using a data‑engineering platform (Snowflake, BigQuery), check its specific DDL features.

**2. Choose the right mental model / framework**  
   - Treat the operation as **DDL transformation**: source table → target table definition.  
   - Map the source schema components (columns, types, defaults, indexes, constraints) to a new CREATE statement.  

**3. Step‑by‑step reasoning**  
   1. Identify the database system and its syntax for copying structure (`CREATE TABLE new LIKE old`, `SELECT * FROM old WHERE 0`, etc.).  
   2. If needed, drop any existing target table to avoid conflicts.  
   3. Execute the appropriate DDL command:  
      - MySQL: `CREATE TABLE new_table LIKE old_table;`  
      - PostgreSQL: `CREATE TABLE new_table (LIKE old_table INCLUDING ALL);`  
      - Snowflake: `CREATE TABLE new_table LIKE old_table;` (or use `SHOW CREATE TABLE`).  
   4. Verify that the new table has no rows (`SELECT COUNT(*) FROM new_table;`).

**4. Common traps to avoid**  
   - Forgetting that some systems copy only columns, not indexes or constraints.  
   - Using a SELECT‑into‑table approach that might inadvertently insert data if the WHERE clause is wrong.  
   - Overlooking database privileges: you must have CREATE rights on the target schema.

**5. Sanity check & communicate**  
   - After creation, run `DESCRIBE new_table;` or equivalent to compare with the source.  
   - Explain that this method preserves the structure but not data, and note any system‑specific caveats (e.g., MySQL’s `LIKE` copies indexes only if `INCLUDE INDEXES` is specified).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
