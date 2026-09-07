---
qid: ing_5c6aa9e2de__faang__local
question: 'Explain: Worker Table — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 469
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:18:08-05:00'
sources: []
---

**Clarify**

We’re asked to design a *distributed job scheduler* that pulls work from a “Worker Table” (think of it as a queue or database table holding jobs).  
Assumptions I’d confirm:  

- Job volume (thousands per second vs millions) and latency requirement.  
- Whether workers are stateless or maintain session state.  
- Failure semantics (at‑least once, exactly once).  
- Scale of worker pool (do we need auto‑scaling?).  

**Approach**

1. **Persisted job store** – a sharded key‑value store (e.g., Cassandra/Redis‑Cluster) keyed by partition ID.  
2. **Scheduler service** – stateless microservice that polls its shard, pushes jobs to an in‑memory priority queue per worker, and exposes a pull API.  
3. **Worker nodes** – long‑running services that poll the scheduler for work; each worker holds a local lock (e.g., Redis SETNX) on the job ID to avoid duplicates.  
4. **Heartbeat/lease** – workers renew a lease; if it expires, the job re‑enters the queue.  

**Depth**

- *Complexity*: O(1) enqueue/dequeue in cache; eventual consistency guarantees at most one active worker per job.  
- *Trade‑offs*: Using Redis gives low latency but limited durability; Cassandra offers persistence but higher read cost.  
- *Exactly‑once*: add a de‑duplication token and idempotent execution on workers.  

**Edge Cases**

- Network partitions causing duplicate leases → use two‑phase commit or “best effort” retry.  
- Burst traffic → back‑pressure via rate limiting in scheduler.  
- Worker crash → lease expiry triggers requeue.  

**Optimize & Communicate**

Explain that sharding by hash of job ID keeps work localized, reduces contention, and scales horizontally. Highlight monitoring: metrics on queue depth, worker health, retry counts. Conclude with a diagram (omitted here) to show data flow from Worker Table → Scheduler → Workers, ensuring the interviewers see clear reasoning and trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
