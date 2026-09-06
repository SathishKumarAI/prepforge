---
qid: ing_a232c0587d__fp__local
question: 'Explain: Job Store — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 439
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:50:30-05:00'
sources: []
---

**Job Store – the heart of a distributed scheduler**

A distributed job scheduler must guarantee *exactly‑once* execution of tasks that may arrive from any node and survive crashes or network partitions.  
The fundamental problem is **coordination under uncertainty**: we need to keep a global, durable view of “what jobs are ready, what are running, and who owns them” while allowing many workers to read/write concurrently.

1. **Immutable event log (write‑once)** – each job is first written as an immutable record in a replicated append‑only store (e.g., Raft or Kafka). This gives us strong durability and auditability; once committed, the record cannot be corrupted by concurrent writes.

2. **Derived state via projection** – workers read from the log and maintain a *sharded* materialized view (a key–value table per shard) that holds the current status of each job. Sharding keeps the index small for each worker, yet the global consistency is preserved because all updates are serialized through the log.

3. **Lease‑based ownership** – to avoid duplicate execution, a worker obtains a lease on a ready job by writing an “acquire” record in the log. The lease expires after a timeout; if it isn’t renewed (because the worker crashed), another node can acquire it. This is essentially optimistic concurrency control at the application level.

4. **Exactly‑once semantics** – the combination of immutable logs and leases guarantees that even under churn, each job’s “run” record appears once in the log, so replaying the log will never double‑execute.

**Non‑obvious insight:**  
Treat the *log* as the single source of truth and let workers be **projections**, not primary writers. This flips the usual read–write balance: most traffic is reads from a compact index, while writes are cheap append‑only operations that naturally serialize conflicts without locks. The result is a horizontally scalable scheduler with linear performance and strong consistency guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
