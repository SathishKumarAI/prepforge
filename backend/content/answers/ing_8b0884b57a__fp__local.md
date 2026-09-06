---
qid: ing_8b0884b57a__fp__local
question: 'Explain: Read/Write Load — How to Benchmark PostgreSQL Performance Using
  Sysbench | Severalnines'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 485
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:00:27-05:00'
sources: []
---

**Why benchmark a DB with *read/write* loads?**  
A relational system’s goal is to satisfy user transactions while keeping latency low and throughput high. In practice, workloads mix reads (SELECT) and writes (INSERT/UPDATE/DELETE). The *work‑load* determines how the planner chooses indexes, how the buffer pool behaves, and whether write‑ahead logging can keep up. Thus a benchmark must emulate the real ratio of reads to writes, otherwise you’ll only see one side of the performance story.

**Sysbench’s approach from first principles**  
1. **Generate deterministic SQL** – Sysbench creates a parameterised set of statements (e.g., `INSERT INTO t VALUES (...)` or `SELECT * FROM t WHERE id = ?`).  
2. **Control concurrency with threads** – Each thread issues queries in a loop, mirroring parallel user sessions.  
3. **Measure latency and throughput** – Sysbench records per‑query time; aggregating gives average latency and total ops/sec.  
4. **Mix ratios explicitly** – By setting `--db-test=oltp_read_write` and specifying `--read-only` or `--write-only` fractions, you sculpt the read/write mix.  

The benchmark’s *workload equation* is:  
\[
T_{\text{ops}} = \frac{\#\text{threads}\times\text{iterations}}{\Delta t}
\]
where \( \Delta t \) is the measured duration. This directly ties to PostgreSQL’s internal cost model: more writes increase WAL traffic, while more reads stress the buffer cache.

**Non‑obvious insight**  
Many people tweak only `max_connections` or `shared_buffers`, overlooking *commit latency*. In a mixed read/write test, the **write commit interval** (controlled by `synchronous_commit`) becomes the bottleneck: every write forces a disk sync. Sysbench lets you vary this with `--db-driver=postgres --pg-opts="synchronous_commit=off"` to expose how much of the throughput is bound by disk vs. CPU. Understanding and tuning this single flag can yield 2–3× performance gains on write‑heavy workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
