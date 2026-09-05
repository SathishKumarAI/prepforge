---
qid: vq_0531416db5__fp__local
question: How can I discover what tables, columns, etc are there?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 404
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:21:04-05:00'
sources: []
---

**Discovering a database’s structure is an exercise in reading its *metadata*—the information that the system keeps to manage itself.**  
At the core, every relational engine stores catalog tables (or views) that describe user objects: tables, columns, indexes, constraints, and even privileges. In SQL‑standard systems you query **`information_schema`**, a virtual schema that normalizes these details across vendors:

```sql
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE table_schema = 'public';
```

For vendor‑specific nuances (e.g., PostgreSQL’s `pg_class`, Oracle’s `ALL_TAB_COLUMNS`) you query the native catalog. The principle here is *reflection*: the database exposes a programmatic view of itself so that tools, migrations, and users can reason about structure without hard‑coding names.

**Why it must work this way:**  
1. **Consistency** – All schema changes funnel through the same metadata store, guaranteeing accurate introspection.  
2. **Security** – Access to catalog objects is governed by privileges; a user sees only what they’re allowed to query.  
3. **Optimization** – Query planners read catalog entries (e.g., column statistics) to choose execution plans.

A non‑obvious insight: *indexes and constraints, though not columns, are part of the schema you must inspect*. A simple `SELECT * FROM information_schema.columns` will miss them, yet they influence query performance. Always include `information_schema.table_constraints` or vendor‑specific views (`pg_indexes`, `ALL_CONSTRAINTS`) to get a full picture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
