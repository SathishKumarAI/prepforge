---
qid: vq_84d1898e40__faang__local
question: How do you copy just the structure of a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 458
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:20:19-05:00'
sources: []
---

**Clarify**  
You want to duplicate only the schema (columns, types, constraints) of an existing table without copying any data. Confirm whether you need indexes, foreign keys, default values, or just the column list.

**Approach**  
1. **Generate DDL** – Use a database command that outputs the `CREATE TABLE` statement for the source table.  
2. **Modify the statement** – Remove the `INSERT … SELECT * FROM` part (if present) and any data‑definition clauses you don’t need.  
3. **Create new table** – Execute the modified DDL to create an empty table with identical structure.

**Depth**  
- In **PostgreSQL**, run `pg_dump -s -t source_table dbname | sed '/^--/d'` or use `CREATE TABLE new AS SELECT * FROM source_table WHERE false;`.  
- In **MySQL/MariaDB**, `SHOW CREATE TABLE source_table;`, then copy the statement and change the table name.  
- In **SQL Server**, `SELECT * INTO new_table FROM source_table WHERE 1 = 0;` or use `SCRIPT` in SSMS.  
- For **BigQuery**, `CREATE OR REPLACE TABLE dataset.new AS SELECT * FROM dataset.source LIMIT 0;`.  

Complexity is O(1) time and space relative to data size because no rows are processed.

**Edge Cases**  
- Views, materialized views, or tables with generated columns need special handling.  
- Permissions: ensure you have `CREATE` rights on the target schema.  
- Partitioned tables may require specifying partitioning clauses manually.

**Optimize & Communicate**  
Explain that this method is lightweight, preserves all metadata (indexes, constraints) if you copy the full DDL, and avoids data transfer overhead. If only column definitions are needed, a `SELECT * FROM source WHERE 0=1` is fastest; otherwise use the dump/DDL approach for fidelity. This shows clear reasoning, technical depth, and awareness of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
