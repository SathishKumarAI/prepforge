---
qid: ing_5f6a7fbd92__fp__local
question: 'Explain: timestamps — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 469
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:28:44-05:00'
sources: []
---

### Why `pq` Handles Timestamps the Way It Does

When a PostgreSQL row contains a column of type **timestamp** (either `TIMESTAMP WITH TIME ZONE` or `TIMESTAMP WITHOUT TIME ZONE`), the database stores it as a 64‑bit count of microseconds since an epoch. The Go `database/sql` interface, however, expects values to be represented by concrete Go types (`time.Time`, `int64`, etc.).  

The fundamental problem is *semantic mismatch*: PostgreSQL’s timestamp is an absolute point in time (possibly with zone) versus Go’s `time.Time`, which carries a location and an instant. To preserve round‑trip fidelity, the driver must:

1. **Read** – Convert the binary microsecond count into a Unix‑epoch integer.
2. **Interpret** – If the column is `WITH TIME ZONE`, apply the session time zone to obtain a UTC instant; if it’s *without* zone, treat it as local time per the connection’s `TimeZone` setting or default to UTC.
3. **Write** – When sending a `time.Time` back, strip the location (or convert to the session zone) and emit the microsecond count.

This mapping is an instance of **information‑preserving bijection**: every PostgreSQL timestamp corresponds uniquely to one Go `time.Time`, and vice versa, provided the same time‑zone context. The driver therefore stores a *hidden* timezone offset (the connection’s `TimeZone`) as metadata so that subsequent scans can reconstruct the original instant.

> **Non‑obvious insight:**  
> For `TIMESTAMP WITHOUT TIME ZONE` columns, the driver *does not* assume “naive” time. It interprets them in the session’s zone, which means two identical strings (`'2024-01-01 12:00'`) can map to different `time.Time`s if the connection’s `TimeZone` differs. This subtlety explains why a query that works on one client fails on another unless you explicitly set `SET TIME ZONE 'UTC';`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
