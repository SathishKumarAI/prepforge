---
qid: ing_e1daa9c95e__fp__local
question: 'Explain: Multi-Master Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 396
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:00:07-05:00'
sources: []
---

**Why a database needs many masters**

When an application scales horizontally, every node must answer read/write requests without becoming a bottleneck. A single master forces all writes through one point, creating latency and a single point of failure. The fundamental problem is *concurrency*—multiple clients must update the same data set simultaneously while keeping it consistent.

**How multi‑master solves it**

1. **Local autonomy** – Each node accepts writes locally, avoiding network hops.  
2. **Conflict detection & resolution** – Updates are tagged with a *vector clock* (or Lamport timestamp). When replicas exchange logs, any pair of updates that touch the same row but have diverging clocks is flagged as a conflict. The system then applies a deterministic rule (last‑write‑wins, merge function, or application‑defined policy) to reconcile them.  
3. **Eventual consistency** – Replicas asynchronously propagate their logs to one another. Given reliable communication, all nodes converge to the same state.

**Deeper principle**

This is an instance of *distributed consensus* under weaker guarantees: we trade strict serializability for higher availability (the CAP theorem). The vector clock mechanism embodies a minimal information‑theoretic representation of causality—each node stores only what it needs to detect divergence, not the full history.

**Non‑obvious insight**

Most designs assume *conflict resolution* is a costly, application‑specific burden. In practice, if you structure your schema so that each row’s primary key is globally unique and updates are idempotent (e.g., using “upsert” semantics), conflicts almost never occur. Thus, the replication overhead reduces to simple log shipping, turning multi‑master into near‑linear scalability with minimal application effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
