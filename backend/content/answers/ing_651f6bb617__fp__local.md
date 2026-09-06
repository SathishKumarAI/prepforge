---
qid: ing_651f6bb617__fp__local
question: 'Explain: Wang: Um, um, let me-- let me — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 361
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:50-05:00'
sources: []
---

**Google Wave: the distributed “live‑document” engine**

At its core, Wave solves a *real‑time collaborative editing* problem: many users must simultaneously modify a shared data structure (a document, an inbox, a map) while keeping all replicas consistent and responsive.  
The solution starts from the **principle of conflict‑free replicated data types (CRDTs)**—operations are designed so that any order of application yields the same final state. Wave’s *document model* is essentially a CRDT: each edit is an operation that can be applied locally, then propagated as an “event” to peers; because events are commutative and idempotent, they converge automatically.

Under the hood, Wave builds on **Google’s distributed data store (BigTable) + Paxos‑based consistency**. A *Wavelet* (a sub‑document) is stored in BigTable rows, keyed by a unique wavelet ID. Clients maintain an **incremental log of operations** and use *vector clocks* to detect causality gaps. When a client disconnects, it replays the missing events from the server; this guarantees *eventual consistency* without heavy locking.

The non‑obvious insight is that Wave treats *communication as data*: every message (an “edit” or a “presence update”) is itself an operation in the same CRDT. Thus the system can be scaled by simply adding more replicas and letting clients gossip operations, rather than orchestrating complex lock protocols. This design turns the entire network into a large, self‑synchronizing document store that feels instantaneous to users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
