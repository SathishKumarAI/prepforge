---
qid: ing_e11c22bcac__faang__local
question: 'Explain: Job Execution Table — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 515
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:22:40-05:00'
sources: []
---

**Clarify**  
We need a system that schedules arbitrary jobs (batch, streaming) across a cluster of workers, guaranteeing *exactly‑once* execution, fault tolerance, and high throughput.  
Assumptions:  
1. Jobs are idempotent or can be made so.  
2. Workers report heartbeats; network partitions may occur.  
3. We have a durable storage layer (e.g., Kafka/DB) for metadata.

**Approach**  
1. **Job Table** – relational store holding job ID, payload, state (`PENDING`, `RUNNING`, `COMPLETED`, `FAILED`), timestamps, retry count.  
2. **Scheduler Service** – pulls `PENDING` jobs, assigns to workers via a *lease* mechanism (e.g., set `owner_id` + expiry).  
3. **Worker Protocol** – poll for jobs, claim lease atomically (`UPDATE … WHERE state='PENDING' AND lease_expiry<now()`), execute, and report completion or failure back to the table.  
4. **Failure Handling** – if a worker dies before reporting, its lease expires; scheduler retries after `retry_backoff`.  

**Depth**  
- Use optimistic locking (row version) for atomic state transitions → O(1) DB ops.  
- Partition the job table by hash(job_id) to avoid hot spots.  
- For scalability, shard workers into groups and run separate scheduler instances per group; use a lightweight pub/sub (e.g., Redis Streams) for immediate notifications.  
- Complexity: each job transition is O(log N) on partitioned DB; overall throughput ≈ #workers × ops/second.

**Edge Cases**  
- Duplicate execution if network splits cause two workers to claim same lease → mitigated by strict atomic `UPDATE`.  
- Long‑running jobs exceeding lease → set dynamic lease renewal.  
- Job failures after partial state changes → idempotent handlers or compensating actions.

**Optimize & Communicate**  
To improve latency, cache the `PENDING` queue in memory per scheduler shard and push updates to workers via a lightweight message bus. Explain trade‑offs: tighter leases reduce retries but increase risk of stale claims; longer leases simplify recovery but delay re‑assignment. Summarize that this design balances consistency, fault tolerance, and horizontal scalability—key signals for a top‑tier interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
