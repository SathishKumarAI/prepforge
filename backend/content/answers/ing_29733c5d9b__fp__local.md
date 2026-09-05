---
qid: ing_29733c5d9b__fp__local
question: 'Explain: Pattern 2: Database Replication with Automatic Failover'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 429
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:33:26-05:00'
sources: []
---

**Pattern 2 – Database Replication with Automatic Failover**

*Why it exists.*  
A database is a *stateful* service that must be **available** (no downtime) and **consistent** (all clients see the same data). In practice, hardware or software failures happen. If every transaction had to wait for a single node, any failure would block all users—violating the *high‑availability* requirement.

*How it works.*  
We split the database into a **primary** (master) that accepts writes and one or more **replicas** (slaves) that copy its state. Replication can be synchronous (write waits until replicas acknowledge) or asynchronous (writes are forwarded but not awaited). The key insight is that *read* traffic, which dominates most workloads, can safely hit any replica; only *writes* need a single source of truth.

Automatic failover turns this into an **optimization problem**: minimize the expected downtime while maintaining consistency. We monitor replicas for liveness (heartbeat or log position). If the primary fails, the system elects a new primary from the most up‑to‑date replica—ensuring *strong* consistency (no split‑brain) at the cost of a brief switchover. The algorithm is essentially a distributed consensus protocol (e.g., Raft) but often simplified because only one node needs to be authoritative for writes.

*Non‑obvious insight.*  
Replication itself does not guarantee availability; it’s the **timing** of replica promotion that matters. If replicas lag too far behind, promoting them may expose clients to *stale reads*, violating eventual consistency guarantees. Thus, many systems enforce a *lag threshold*: only replicas whose replication delay is below a configurable bound are eligible for failover. This subtle coupling between *latency* and *consistency* turns a simple copy‑and‑switch into a principled, tunable trade‑off that balances user experience against data freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
