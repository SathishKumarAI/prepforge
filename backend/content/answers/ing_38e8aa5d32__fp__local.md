---
qid: ing_38e8aa5d32__fp__local
question: 'Explain: Protecting a resource with a lock — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 441
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:05:45-05:00'
sources: []
---

**Distributed locking from first principles**

A lock guarantees *mutual exclusion*: at most one process may hold it at any time.  
In a single‑machine system this is trivial—just guard a flag with a mutex.  
Across machines, the flag itself must be replicated; otherwise two nodes could
simultaneously set it to “held”. The core problem becomes **agreement**: all replicas
must agree on the same value of the lock state at every instant.

The minimal abstraction that solves agreement is a *consensus* protocol (Paxos,
Raft, etc.).  A lock can be seen as a very small state machine whose only
legal transitions are “grant” → “release”.  Consensus guarantees that all
replicas apply these transitions in the same order, preserving safety.

A practical implementation often uses **leases**: the lock holder requests a
lease from an elected leader; the leader grants it with an expiry timestamp.
Other nodes can refuse to grant the lease if one already exists and the
timestamp is still valid.  The lease’s expiration turns the lock into a *time‑bounded*
resource, allowing automatic recovery when a node crashes.

**Non‑obvious insight:**  
A distributed lock is essentially a *single‑item atomic broadcast* problem.
You can drop heavy consensus machinery if you already have an atomic broadcast
layer (e.g., Kafka’s log or Raft’s append entries).  By broadcasting “lock‑acquire”
and “lock‑release” messages, all nodes see the same sequence of state changes,
eliminating the need for explicit leader election or lease management.  This
simplifies implementation while preserving safety and liveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
