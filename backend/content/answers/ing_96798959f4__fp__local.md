---
qid: ing_96798959f4__fp__local
question: 'Explain: LastInsertId — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 456
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:22-05:00'
sources: []
---

**Why `LastInsertId` matters**

When an application inserts a row into a PostgreSQL table that has an auto‑generated primary key (e.g., `SERIAL`, `BIGSERIAL`, or a sequence), the caller often needs the new identifier immediately—perhaps to link other records or return it via an API.  
The SQL standard provides `RETURNING id` for this purpose, but Go’s `database/sql` interface historically exposes a single method, `ExecContext(...).LastInsertId()`. The `pq` driver implements that contract by capturing the value emitted by PostgreSQL’s `INSERT … RETURNING` clause behind the scenes.

**How it works in `pq`**

1. **Intercept the query** – When `sql.DB.ExecContext(ctx, stmt)` is called with a statement that contains an `INSERT`, `pq` rewrites it to append `RETURNING ctid`.  
2. **Execute and fetch** – PostgreSQL returns the *ctid* of the inserted row (a unique physical identifier).  
3. **Map to sequence value** – If the table uses a serial column, PostgreSQL automatically generates the next sequence number *before* insertion. The driver captures that same value from the `RETURNING` result set and stores it in the `Result` struct.  
4. **Expose via `LastInsertId()`** – The method simply returns the stored integer.

**Non‑obvious insight**

The driver must use `ctid` instead of directly querying the sequence because a table can have multiple serial columns or none at all; `RETURNING ctid` is guaranteed to succeed for every insert. Once the row exists, PostgreSQL guarantees that its physical identifier (`ctid`) is unique and stable within that transaction, allowing the driver to safely infer the logical primary key without an extra round‑trip.

Thus, `LastInsertId` is a thin abstraction over PostgreSQL’s native “return the inserted row” semantics, ensuring Go code can retrieve generated keys in a database‑agnostic way while preserving efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
