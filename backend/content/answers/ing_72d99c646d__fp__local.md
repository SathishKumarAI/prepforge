---
qid: ing_72d99c646d__fp__local
question: 'Explain: Coordinator — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 372
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:08:50-05:00'
sources: []
---

In a distributed job‑scheduler the *coordinator* is the component that guarantees **global consistency** while letting workers run jobs independently.  
Start with the fundamental problem: many machines must agree on which job runs where, when, and how to recover if a worker dies. Without a single source of truth, two workers could pick the same job or one could never finish a job that another thinks is still running.

The coordinator solves this by **centralizing state** (job metadata, worker status) and exposing a *linearizable* API:  
1. **Lease acquisition** – a worker asks for a lease on a job; the coordinator atomically marks it “in‑flight” and returns a timestamped token.  
2. **Heartbeat monitoring** – workers periodically renew their leases; if a heartbeat is missed, the coordinator reclaims the job.  

This design is an instance of *optimistic concurrency control*: most jobs run without contention, but the coordinator serializes conflicting updates. It also embodies the *CAP theorem* trade‑off: we sacrifice some availability (a single point that can fail) to gain consistency and partition tolerance.

**Non‑obvious insight:** The coordinator need not run on a dedicated node; it can be implemented as a replicated key‑value store (e.g., Raft). By treating leases as first‑class entries in the log, we obtain **exactly‑once execution guarantees** without extra coordination between workers. This subtle shift from “broker” to “log‑based lease manager” removes race conditions that plague naive lock‑file schedulers and scales naturally with the cluster size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
