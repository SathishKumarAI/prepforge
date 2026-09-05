---
qid: vq_84d1898e40__fp__local
question: How do you copy just the structure of a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 454
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:44:12-05:00'
sources: []
---

### Why “copy only the structure” is useful  
When you want a *template*—a new table that will later be populated with data—you don’t need the rows, just the column definitions and constraints. Copying only the schema keeps storage costs low, preserves indexes for fast inserts, and avoids accidental data leakage.

### Fundamental principle: **Schema‑only replication is an instance of *metadata cloning***  
A relational table’s definition (its “metadata”) is a set of declarative statements (`CREATE TABLE …`). Cloning that metadata without data is simply executing the same `CREATE` logic on another target, but we must suppress row copying. This aligns with the SQL abstraction that **DDL** (Data Definition Language) is separate from DML (Data Manipulation Language).

### Practical recipe (ANSI‑SQL compliant)

```sql
-- 1. Generate a CREATE statement for the source table
CREATE TABLE new_table AS
SELECT *
FROM old_table
WHERE 1 = 0;          -- no rows selected

-- 2. Drop unwanted constraints or indexes if needed
ALTER TABLE new_table DROP CONSTRAINT IF EXISTS pk_old;
```

- `SELECT * FROM old_table WHERE 1 = 0` forces the optimizer to read only metadata, returning zero rows.
- The resulting table inherits all column types, default values, and NOT‑NULL constraints.
- Primary keys, foreign keys, and indexes are **not** copied automatically; you must recreate them explicitly if required.

### One non‑obvious insight  
Many DBMSs (e.g., PostgreSQL) *do* copy indexes when using `CREATE TABLE AS`. If you truly want a clean slate—no indexes, no triggers—you must first drop them after creation. Conversely, if you need the indexes for bulk loads, keep them; they can dramatically speed up subsequent inserts.

> **Bottom line:** Treat schema copying as “DDL cloning” executed with an empty result set. It’s fast, portable, and preserves all structural details while keeping storage minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
