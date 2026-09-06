---
qid: ing_97f66e1dcb__fp__local
question: 'Explain: Redis Replication - Leader-follower technique'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 339
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:29:14-05:00'
sources: []
---

**Redis replication – the leader‑follower model**

The core issue is *how to keep many machines consistent while still serving traffic*.  
A single node (the **leader**) accepts writes; a set of **followers** receive those writes and can answer reads.  

1. **Write propagation**:  
   The leader logs every command that mutates state in an append‑only file (AOF) or binary log.  
   Followers run the same commands locally, guaranteeing *exactly‑once* semantics because each follower executes a deterministic replay of the leader’s log.  
2. **Consistency guarantee**:  
   By design, followers are only allowed to serve reads that reflect at least the last acknowledged write on the leader (read‑your‑writes).  
   This satisfies *causal consistency* for most workloads without requiring expensive locking or consensus protocols like Paxos.  
3. **Fault tolerance**:  
   If the leader fails, one follower can be promoted; the promotion is safe because all followers have replayed the same log up to that point.  

*A non‑obvious insight*: replication in Redis is *asynchronous by default* but still preserves strong consistency for reads from a single node because the follower’s state is always *strictly a prefix* of the leader’s command stream. This deterministic prefix property lets us treat each follower as an “exact copy” without coordination, enabling horizontal scaling of read traffic while keeping writes serialised on one machine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
