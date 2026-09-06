---
qid: ing_5c6aa9e2de__fp__local
question: 'Explain: Worker Table — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 550
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:20:31-05:00'
sources: []
---

**Why we need it**

In a micro‑service ecosystem, long‑running jobs (ETL, analytics, video rendering) must be dispatched to many workers without overloading any node and while guaranteeing *exactly‑once* execution. The scheduler is the optimizer: it maps “work” → “machine” under constraints of capacity, priority, fault tolerance, and data locality.

**Core principle – resource‑aware queuing**

Treat each worker as a *resource slot* with a fixed capacity vector (CPU, memory, bandwidth). A job has an *affinity vector* (required resources + preferred node attributes). The scheduler’s objective is to maximize throughput while minimizing idle slots:

\[
\max_{\pi}\;\sum_{j}\bigl(\text{completion}(j)-\text{penalty}_{prio}(j)\bigr)
\]

subject to
\[
\forall t,\; \sum_{j\in W_t} a_j \le c_t,
\]
where \(W_t\) is the set of jobs assigned to worker \(t\). This is a *knapsack* problem in disguise, solvable online by a weighted‑fair queuing algorithm that respects SLAs.

**Design components**

1. **Registration & health** – Workers publish their capacities and heartbeat via gRPC; a central registry (etcd/Consul) keeps the live view.
2. **Job admission** – A REST API accepts jobs, assigns them to a *queue* per priority tier. The queue is backed by Kafka for durability.
3. **Allocation loop** – A scheduler worker polls the queue, pulls the next job, and runs a greedy fit: pick the first worker whose residual capacity ≥ job requirement. If none, re‑enqueue with backoff.
4. **Fault handling** – Workers acknowledge completion; missing ack triggers *retry* logic (exponential backoff) and eventual *dead‑letter* queue.

**Non‑obvious insight**

Most designs treat workers as identical slots, but *data locality* can be folded into the capacity vector: add a binary dimension “has data X”. Jobs that need data X get priority on workers with that flag. This subtle augmentation turns an otherwise NP‑hard scheduling problem into a series of linear constraints, dramatically reducing latency for data‑intensive workloads.

**Result**

A distributed scheduler that is *resource‑aware*, *fault tolerant*, and *policy‑driven*—built from the ground up by formulating job dispatch as an online constrained optimization problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
