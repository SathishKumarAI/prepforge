---
qid: vq_c9b96ecc9b__local
question: What is a Rollback ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 219
output_tokens: 411
total_tokens: 630
web_searches: 0
cost_usd: 0.0
sources: []
---

**Rollback** – the atomic undo of all changes made by a transaction or batch operation so that the system returns to its pre‑operation state.

In practice I’ve seen rollbacks everywhere: from PostgreSQL’s `ROLLBACK` command, to Kafka consumer offset rewinds, to distributed systems using two‑phase commit (2PC) or more modern OCC with version vectors. The core idea is to treat a series of writes as an indivisible unit; if any part fails or violates invariants, you revert everything.

**Nuance**

- **Durability vs. Performance** – In a write‑ahead log, every change is persisted before being applied. A rollback then just truncates the tail of that log. If you skip logging for speed (e.g., in an in‑memory cache), you must keep a copy or use checkpoints; otherwise you can’t roll back.
- **Granularity** – In microservices, a “transaction” might span multiple databases and message queues. A saga pattern rolls back by emitting compensating events rather than true atomic undo, trading consistency for availability.
- **Failure modes** – I’ve seen deadlocks in 2PC where the coordinator never receives a commit vote; the result is a forced rollback that can cascade to dependent services if not isolated. Also, partial failures during a saga can leave orphaned state unless you implement idempotent compensations.
- **Metrics** – Track `txn_duration`, `rollback_rate`, and `compensation_latency`. A sudden spike in rollbacks often precedes data corruption or infrastructure issues.

In production, I’ve relied on PostgreSQL’s built‑in rollback for OLTP workloads and a custom log‑based checkpoint system for real‑time analytics pipelines. The key is to design the “undo” path as fast and deterministic as the forward path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
