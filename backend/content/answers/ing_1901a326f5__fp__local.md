---
qid: ing_1901a326f5__fp__local
question: 'Explain: Conclusion — How to do distributed locking \u2014 Martin Kleppmann\u2019s
  blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 495
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:59:11-05:00'
sources: []
---

### From the problem to a principled solution

In a replicated system, **mutual exclusion** is required when several nodes must
update a shared resource (e.g., a counter or a lease).  
The fundamental constraints are:

1. **Consistency** – at most one holder at any instant.
2. **Availability** – the lock should be granted whenever possible.
3. **Partition tolerance** – the system must tolerate network splits.

These three form the *CAP* trade‑off: you cannot satisfy all simultaneously,
so we pick **CP** (consistency + partition tolerance) and accept temporary
unavailability during a split.  
The question becomes: *how do we guarantee that two nodes never see the lock as
free at the same time?*

#### Deriving the algorithm

- Each node obtains a unique identifier (`nodeID`) and a monotonically
  increasing sequence number (`seq`).
- A **lock record** in the replicated log contains `(owner, seq, expiry)`.
- To acquire:  
  *Read* the current record → if it is expired or missing, propose a new one
  with `seq+1`.  
  The proposal is written to the log and replicated using a consensus
  protocol (Raft/Paxos).  
  Because all replicas agree on the order of writes, only the first write
  that reaches a majority becomes visible; others are rejected.
- To release: write an “empty” record with a higher `seq`.  
  The same ordering guarantees that a stale release cannot overwrite a
  newer acquisition.

#### Non‑obvious insight

The *sequence number* is not just for ordering; it acts as a **versioning
token** that automatically invalidates any stale lock state.  
If a node crashes after acquiring the lock, its lease expires (`expiry`),
allowing others to acquire it later.  
Thus we avoid “sticky” locks without needing external timers or heartbeats,
and we keep the protocol lightweight: only one round‑trip for acquisition
and release in the common case.

**Conclusion:** Distributed locking is best implemented as a consensus‑based
write to a replicated log, using monotonically increasing sequence numbers
to enforce ordering and versioning, which guarantees mutual exclusion while
respecting CAP.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
