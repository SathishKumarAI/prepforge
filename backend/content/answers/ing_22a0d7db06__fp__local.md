---
qid: ing_22a0d7db06__fp__local
question: 'Explain: In-Progress Jobs — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 524
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:19:16-05:00'
sources: []
---

**Why we need an “in‑progress” view**

A distributed batch system must guarantee *exactly‑once* execution and *fair resource allocation*.  
If a worker crashes after pulling a job but before reporting completion, the master would either:  

1. **Retry blindly** → duplicate work, violating idempotence; or  
2. **Hold it forever** → starve other jobs.

Thus we need an invariant: *a job is in one of three mutually exclusive states*—queued, running, finished—and every state transition must be observable by all nodes. This mirrors the classic *two‑phase commit* pattern but with a lightweight “heartbeat” instead of locks.

---

### Core design

| Component | Role | Key properties |
|-----------|------|----------------|
| **Job Queue** (Kafka/Redis) | Persistent FIFO | Exactly‑once delivery, replay support |
| **Scheduler Service** | Orchestrates workers | Uses leader election (Raft/ZooKeeper) to avoid split‑brain |
| **Worker Registry** | Tracks active nodes | Heartbeat → TTL; if missing → job reassignment |
| **In‑Progress Table** (e.g., DynamoDB with conditional writes) | Stores `(job_id, worker_id, start_ts)` | Conditional put ensures only one worker can claim a job; delete on success |

1. Scheduler polls the queue and issues `claim(job_id)` to a worker.  
2. Worker performs an *optimistic lock*: `INSERT IF NOT EXISTS (job_id)`. If it fails, another worker already owns it.  
3. On crash, the in‑progress entry times out; scheduler requeues the job.

---

### Non‑obvious insight

The **heartbeat TTL** can be tuned to the *expected* execution time of a job class rather than a one‑size‑fits‑all value. By estimating `E[T]` from historical runs and setting TTL ≈ `k·E[T]`, we reduce false positives (requeueing still‑running jobs) while keeping recovery fast for long‑lived tasks.

---

**Bottom line:**  
Design the scheduler as a *state machine* with atomic transitions, backed by a distributed lock table. The heartbeat+TTL mechanism is the mathematical guarantee that “in‑progress” truly reflects real progress, not just a stale claim.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
