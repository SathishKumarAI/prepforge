---
qid: ing_988d8f78dc__fp__local
question: 'Explain: System API Design — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 748
total_tokens: 923
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:30:20-05:00'
sources: []
---

**The Core Problem**

A *distributed job scheduler* must decide **which worker node runs which task at what time**, while guaranteeing that every submitted job eventually completes, even if nodes crash or network partitions occur.  
At first glance it looks like a simple “queue + dispatcher” problem, but the real challenge is to reconcile three orthogonal goals:

| Goal | Why it matters | How it forces design |
|------|----------------|---------------------|
| **Correctness** (no duplicate or lost jobs) | Guarantees business SLAs | Requires durable metadata and atomic state transitions |
| **Scalability** (millions of jobs, thousands of workers) | Handles peak load | Demands sharding and local queues to avoid a single bottleneck |
| **Fault‑tolerance** (nodes fail arbitrarily) | System must keep running | Necessitates consensus or leader election for global state |

These goals are mutually exclusive in the CAP sense: you can’t have *all* of consistency, availability, and partition tolerance simultaneously. The scheduler therefore splits responsibilities.

---

### 1. **Metadata Service (Consistent & Durable)**

- **Use a distributed log** (e.g., Raft‑based) to append every job submission atomically.
- Each entry is the *canonical source of truth*; it contains job ID, payload, priority, and desired start time.

> **Insight:** The log’s order becomes an implicit global clock. Workers can safely read jobs in order without a separate timestamp service, eliminating drift and simplifying “first‑come‑first‑served” semantics.

### 2. **Shard‑Aware Dispatch Layer**

- Partition the job space by hash(jobID) → *shard*.
- Each shard owns its own *ready queue* (e.g., Redis list or local disk).
- Workers register with a single shard and pull jobs from it, ensuring locality.

> **Insight:** Sharding decouples metadata durability from dispatch throughput; the heavy I/O of the log is isolated from the fast in‑memory queues that workers consume.

### 3. **Worker Health & Lease Mechanism**

- Workers acquire a *lease* on a job (timestamp + TTL) via a lightweight key‑value store.
- If a worker dies before completing, its lease expires; the job re‑enters the queue.

> **Insight:** Leases act as a *soft lock*, avoiding expensive distributed locks while still guaranteeing at‑least‑once execution. The expiration time can be tuned per job type to balance latency vs. reliability.

### 4. **Rebalancing & Scaling**

- A controller monitors shard load and redistributes shards across new workers.
- Because each worker only sees its shard, rebalancing is a local operation (move queue contents) without global coordination.

---

**Why It Works**

The log guarantees *strong consistency* for job creation; sharding gives *linear scalability* by partitioning the dispatch workload; leases provide *fault tolerance* with minimal overhead. This architecture satisfies CAP’s trade‑offs: it is **available** during partitions, but consistency is maintained through the Raft log; partition tolerance is achieved by local queues.

> **Non‑obvious takeaway:** The distributed log’s order can replace a dedicated scheduler clock, simplifying time‑based job ordering and ensuring that even after network splits, all nodes agree on *which* job should run next without extra coordination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
