---
qid: ing_5c6aa9e2de__star__local
question: 'Explain: Worker Table — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 356
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:16-05:00'
sources: []
---

**Situation** – At my previous company we had a batch‑processing pipeline that ran nightly analytics jobs on a Kubernetes cluster. The scheduler was a single microservice; when it crashed all jobs stalled and we lost our 4 % revenue target for the month.

**Task** – Build a fault‑tolerant, horizontally scalable distributed job scheduler with a “Worker Table” to track worker health, capacity, and task assignment, so that any node could recover queued work without data loss or duplication.

**Action** – I chose etcd as the coordination store for its strong consistency and watch APIs. Each worker registers itself in the Worker Table (worker_id, status, current_load, max_capacity). Jobs are persisted in a PostgreSQL queue table with a “locked_by” column. The scheduler runs on multiple replicas; each replica watches the Worker Table for newly healthy workers, pulls jobs using an optimistic lock (`UPDATE ... WHERE locked_by IS NULL`), and updates `locked_by`. If a worker dies (etcd lease expires) its queued job is automatically released back into the pool. I also implemented exponential back‑off retries and a dead‑letter queue for persistent failures.

**Result** – The new scheduler handled 10× the load, reduced job latency from 45 min to 12 min, and eliminated single‑point failures. We saw a 3.2 % lift in revenue during peak periods. I learned that designing with a lightweight coordination service like etcd and an explicit Worker Table can turn a fragile monolith into a resilient, scalable system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
