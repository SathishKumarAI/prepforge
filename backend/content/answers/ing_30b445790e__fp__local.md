---
qid: ing_30b445790e__fp__local
question: 'Explain: Read-Only Load — How to Benchmark PostgreSQL Performance Using
  Sysbench | Severalnines'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 429
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:48:27-05:00'
sources: []
---

**Why a “read‑only” benchmark matters**

In many production workloads—analytics dashboards, reporting, or caching layers—the database is *write‑light*. The performance bottleneck is not transaction durability but the ability to pull data fast enough for downstream consumers. A read‑only load test isolates this by eliminating WAL commits, locking contention, and transaction overhead that would otherwise swamp I/O throughput.

**How Sysbench simulates it**

Sysbench creates a synthetic workload from a SQL template:

```sql
SELECT * FROM orders WHERE order_id = :id;
```

The driver replaces `:id` with random keys, issues many concurrent statements, and measures latency/throughput. For PostgreSQL the key steps are:

1. **Connection pool** – each worker thread keeps an open session; no connection churn.
2. **Prepared statements** – the same query is parsed once, then executed repeatedly, mimicking real‑world use of prepared plans.
3. **No `COMMIT`** – each statement runs in autocommit mode, so the planner can use *read‑only* execution paths (no WAL flushes).

Because PostgreSQL’s buffer manager serves most rows from shared buffers, the benchmark reveals how well the database scales with increasing I/O pressure and CPU parallelism.

**Deep insight**

People often assume that a higher “rows‑per‑second” figure automatically means better scalability. In read‑only tests, however, **latency dominates**: a single stalled page fetch can raise average latency even if throughput stays constant. Sysbench’s per‑transaction timing exposes this subtle trade‑off and lets you tune work_mem, effective_cache_size, or even switch to *materialized views* when latency is critical.

By deriving the benchmark from first principles—isolating read paths, eliminating write overhead, and measuring fine‑grained latency—you get a clear, actionable view of PostgreSQL’s true read performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
