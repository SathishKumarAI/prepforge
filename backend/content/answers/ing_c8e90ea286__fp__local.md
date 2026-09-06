---
qid: ing_c8e90ea286__fp__local
question: 'Explain: Transactions & Their Types — 11 System Design Concepts Explained,
  Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 524
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:08:11-05:00'
sources: []
---

**Transactions & Their Types – A First‑Principles View**

At its core a transaction is a *commitment* that a set of operations either all succeed or none do.  
Why? Because many systems treat data as an *atomic* resource: if one part fails, the whole system would be in an inconsistent state (think of money transfer).  
The four canonical guarantees—**Atomicity, Consistency, Isolation, Durability (ACID)**—are not arbitrary; they emerge from the need to preserve *information integrity* under concurrent access.  

| Type | What it does | When to use |
|------|--------------|-------------|
| **Single‑phase commit** | One DB writes → commit. | Simple, low latency, no cross‑node ops. |
| **Two‑phase commit (2PC)** | Prepare → Commit/Abort. | Distributed writes that must stay in sync. |
| **Three‑phase commit (3PC)** | Adds a “can‑commit” vote to avoid blocking. | Systems where network partitions are frequent. |
| **Sagas** | Sequence of compensating actions. | Long‑running business processes, microservices. |
| **Optimistic concurrency control** | Assume no conflict → validate at commit. | High read throughput with rare conflicts. |
| **Pessimistic locking** | Lock rows/objects until end. | Workloads with frequent write conflicts. |
| **Eventual consistency (BASE)** | Accept temporary divergence, reconcile later. | Large‑scale distributed caches, CDN. |
| **Strong consistency** | Immediate visibility of writes. | Banking, real‑time analytics. |
| **Idempotent operations** | Repeatable without side effects. | Network retries, webhook handling. |
| **Two‑phase locking (2PL)** | Acquire all locks before any release. | Guarantees serializability. |
| **Timestamp ordering** | Order by logical timestamps. | Multi-version concurrency control (MVCC). |

### One non‑obvious insight
> **Transactions are fundamentally a *probabilistic* safety net, not a deterministic lock.**  
> In practice, many systems trade strict ACID for “good enough” guarantees (BASE, eventual consistency) because the probability of conflict is low and the cost of full locking would cripple performance. Recognizing this probabilistic nature lets architects choose the right trade‑off rather than blindly enforce 2PC everywhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
