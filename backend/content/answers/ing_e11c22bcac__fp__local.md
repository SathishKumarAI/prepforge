---
qid: ing_e11c22bcac__fp__local
question: 'Explain: Job Execution Table — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 410
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:58:26-05:00'
sources: []
---

**Why we need a job‑execution table**

In a distributed scheduler every task is a *stateful* entity: it has a desired state (“ready”, “running”, “failed”) and a set of causal dependencies (e.g., *Task B* can start only after *Task A* finishes).  
The fundamental problem is to maintain **consistency** of this state while allowing many workers to read/write concurrently. A single source of truth— the job‑execution table— solves this by mapping each task ID → metadata (owner, priority, dependencies, timestamps, status).  

**Why a relational or key‑value store?**

*Relational* tables enforce ACID semantics: a `SELECT … FOR UPDATE` guarantees that two workers cannot claim the same “ready” job simultaneously.  
*A key‑value* store (e.g., Redis, DynamoDB) can provide low‑latency atomic increments for counters (retry counts) and conditional writes (`SETNX`) to avoid race conditions.

**Why a distributed lock or lease?**

Even with ACID, network partitions may split the cluster. A *lease* mechanism (e.g., etcd’s `watch` + `TTL`) guarantees that once a worker claims a job it owns it for a bounded time; if the worker dies, the lease expires and another can retry.

**Non‑obvious insight**

Treat **dependency resolution as a graph problem**: store adjacency lists in the table. When a task finishes, propagate an event that *topologically sorts* downstream tasks, allowing batch “unlock” rather than polling each dependent. This reduces contention and yields near‑constant latency even for deep DAGs.

---

In short, the job‑execution table is the scheduler’s memory; its consistency guarantees and efficient dependency propagation are what let a distributed system execute jobs correctly, scalably, and fault‑tolerantly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
