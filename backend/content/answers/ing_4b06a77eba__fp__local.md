---
qid: ing_4b06a77eba__fp__local
question: 'Explain: Cassandra vs. MongoDB: ACID Transactions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 545
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:44:47-05:00'
sources: []
---

### Why the difference matters

A distributed database must decide how to guarantee that a set of writes either all succeed or none do.  
The **ACID** guarantees (Atomicity, Consistency, Isolation, Durability) formalize this contract.  
In practice, the trade‑off is between *latency* and *concurrency*.  

---

### Cassandra: Tunable consistency over strict ACID

- **Underlying model:** wide‑column store with eventual replication.  
- **Atomicity & Isolation:** only at the *single‑row* level (via lightweight transactions). A batch of rows can be committed atomically, but cross‑row or multi‑table “transaction” support is limited.  
- **Consistency:** clients choose a consistency level per read/write (`ONE`, `QUORUM`, etc.). The system guarantees that all replicas see the same value *once* the chosen quorum acknowledges it, but this is not an ACID transaction in the relational sense.  
- **Why this works:** Cassandra’s linearizable model would force every write to lock all replicas, killing throughput. By relaxing isolation to per‑row and letting clients opt into stronger guarantees when needed, it keeps latency low while still offering strong consistency where required.

---

### MongoDB: Multi‑document ACID via the WiredTiger engine

- **Underlying model:** document store with a log‑structured storage engine (WiredTiger).  
- **Atomicity & Isolation:** since 4.0, *multi‑document transactions* are supported using two‑phase commit and write‑ahead logging. The transaction is committed only when all replicas have written the commit record, ensuring serializable isolation.  
- **Consistency & Durability:** writes are flushed to disk before acknowledging success; replication ensures durability across nodes.  
- **Why this works:** MongoDB trades some read/write latency for full ACID by maintaining a global lock per transaction and using optimistic concurrency checks. The cost is acceptable because typical workloads involve fewer cross‑document operations compared to Cassandra’s wide‑row use cases.

---

### Non‑obvious insight

Both systems *opt out of the classic ACID blanket* in favor of **contextual consistency**:  
- **Cassandra** offers per‑operation guarantees that scale horizontally.  
- **MongoDB** provides full ACID at the expense of higher coordination costs, but only when explicitly requested by the application.

Thus, choosing between them is less about “ACID vs. non‑ACID” and more about *which level of consistency your workload actually needs*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
