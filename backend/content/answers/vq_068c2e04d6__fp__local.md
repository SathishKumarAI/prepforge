---
qid: vq_068c2e04d6__fp__local
question: What are the differences between DELETE and TRUNCATE .?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 563
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:21:15-05:00'
sources: []
---

### DELETE vs. TRUNCATE – a principled comparison

Both commands remove rows from a table, but they differ in *how* the removal is expressed to the database engine, which drives their semantics, performance, and side‑effects.

| Aspect | `DELETE` | `TRUNCATE` |
|--------|----------|------------|
| **Transactional granularity** | One row per log record; each deletion can be rolled back individually. | A single statement that logs a “table drop” event; the whole operation is atomic. |
| **Logging & recovery** | Generates a delete log entry for every affected row, enabling point‑in‑time recovery but incurring heavy I/O. | Logs a minimal “truncate” marker; the data pages are simply deallocated or marked as empty, drastically reducing log space. |
| **Triggers / constraints** | Fires `DELETE` triggers and checks foreign‑key referential actions on each row. | Bypasses triggers; foreign‑keys with `ON DELETE CASCADE` are *not* invoked because no rows are processed individually. |
| **Identity columns** | Preserve the current identity seed unless explicitly reset. | Resets the identity seed to its initial value (unless `RESTART IDENTITY` is omitted in PostgreSQL). |
| **Permissions** | Requires `DELETE` privilege on the table. | Requires higher privileges (`DROP` or `ALTER TABLE`) because it essentially rewrites the storage structure. |

#### Why these differences matter

The engine’s choice reflects a trade‑off between *exactness* and *efficiency*.  
- `DELETE` is an **operational** command: each row is treated as a separate transaction, enabling fine‑grained auditing, trigger logic, and partial rollback.  
- `TRUNCATE` is an **structural** command: it treats the table as a single storage object to be reclaimed, thus offering O(1) performance but sacrificing per‑row semantics.

#### Non‑obvious insight

Because `TRUNCATE` deallocates pages rather than marking rows deleted, any *table‑level* indexes are dropped and rebuilt automatically. This means that after truncation the table’s physical layout is **fresh**; subsequent inserts will start from a clean slate, which can improve cache locality and reduce fragmentation—an effect invisible to developers who only think of “deleting all rows.”  

In short: use `DELETE` when you need per‑row logic or partial rollback; use `TRUNCATE` when you want a fast, wholesale wipe that also resets identity seeds and reclaims storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
