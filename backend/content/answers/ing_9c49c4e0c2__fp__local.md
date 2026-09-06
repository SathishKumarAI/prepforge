---
qid: ing_9c49c4e0c2__fp__local
question: 'Explain: Remove a Table from the API — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 340
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:37:35-05:00'
sources: []
---

When you **delete a table** through Supabase’s GraphQL API, the system treats it as an *irreversible schema mutation*.  
At the core of this operation is the principle of **consistency in relational data**: every foreign‑key reference must remain valid after the change. The GraphQL engine therefore

1. **Validates dependencies** – before dropping a table it scans all schemas for `REFERENCES` clauses that point to it. If any exist, the mutation fails with a clear error, preventing orphaned rows and preserving referential integrity.

2. **Updates internal metadata** – Supabase stores the schema in Postgres’ catalog tables (`pg_class`, `pg_constraint`). The GraphQL mutation issues an equivalent `DROP TABLE` command, which automatically cascades to drop associated indexes, triggers, and permissions.

3. **Flushes cached introspection** – the GraphQL server maintains a schema cache for quick query planning. Once the table is removed, that cache entry is invalidated so subsequent queries see the new structure immediately.

### Non‑obvious insight  
Because Supabase’s GraphQL layer sits on top of Postgres, *schema changes are atomic at the database level*. Thus you can safely delete a table even while concurrent clients issue mutations or queries; Postgres guarantees that any in‑flight transaction either sees the old schema or fails if it conflicts with the drop. This means developers don’t need to lock tables manually when restructuring, simplifying migrations in production environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
