---
qid: vq_17a4f02437__local
question: WHAT IS AN EXPLICIT TRANSACTION?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 221
output_tokens: 329
total_tokens: 550
web_searches: 0
cost_usd: 0.0
sources: []
---

**Explicit transaction:** a block of database operations that you start, commit or roll back yourself—usually via `BEGIN/COMMIT/ROLLBACK` statements or the equivalent API calls in your ORM.

In production I’ve wrapped multi‑step updates (e.g., moving inventory from one warehouse to another) in explicit transactions so that either *all* rows update or none do. In PostgreSQL, a typical pattern is:

```sql
BEGIN;
UPDATE orders SET status='shipped' WHERE id=$1;
INSERT INTO audit_log(action, order_id) VALUES ('ship', $1);
COMMIT;
```

If the second statement fails, I issue `ROLLBACK` and the first update never persists. This guarantees **atomicity**. It also gives me control over isolation: I can set `SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;` to avoid phantom reads in a high‑concurrency order‑processing system.

Trade‑offs surface when you nest transactions or use savepoints. A deadlock on one table can block the whole transaction, and long running explicit blocks increase lock contention. In practice I keep them under a few milliseconds, monitor `pg_stat_activity` for “waiting” rows, and tune indexes to keep row locks short.

So an explicit transaction is simply a developer‑initiated wrapper that enforces ACID guarantees across multiple statements, giving you deterministic failure handling at the cost of careful lock management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
