---
qid: ing_fa269de565__fp__local
question: 'Explain: VIII. Concurrency — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 345
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:51:28-05:00'
sources: []
---

**Concurrency in the 12‑Factor App: a first‑principles view**

The core problem is *scalable throughput*: we want an application to process more requests without growing resource usage linearly. In distributed systems, the only way to increase capacity is to add **processes or threads** that run concurrently on available CPUs.  
A 12‑factor app solves this by insisting that each process be **stateless and isolated**:

1. **Statelessness** → any instance can handle any request; requests do not depend on previous state. This removes the need for sticky sessions, reduces memory pressure, and lets a scheduler balance load across many workers.
2. **Isolation** → each process runs in its own container or VM, sharing only read‑only code and config. This guarantees that a failure in one worker does not cascade.

The deeper principle is *separation of concerns* between *compute* (stateless processes) and *state* (external services). By moving state to durable stores (databases, caches, queues), the application can scale horizontally: add more workers without coordinating shared memory or locks.  

**Non‑obvious insight:** Concurrency is not just about “more threads”; it’s a *design constraint* that forces the app to treat all side effects as external transactions. Consequently, every request path becomes a small, idempotent unit of work that can be retried safely, which dramatically improves resilience under load spikes and failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
