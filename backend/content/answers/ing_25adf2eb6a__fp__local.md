---
qid: ing_25adf2eb6a__fp__local
question: 'Explain: Relational Database — Distributed Counter System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 487
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:25:08-05:00'
sources: []
---

### Why a “distributed counter” needs a special design

A counter is **just an integer that must stay consistent under concurrent updates**.  
In a single node database we can use a `SERIALIZABLE` transaction: read‑modify‑write and lock the row.  
When the data sharded across many nodes, naïvely sending every increment to one “master” creates a bottleneck; 
sending it to a random shard risks **lost updates** because two replicas may write the same value before synchronizing.

#### First‑principles derivation

1. **Atomicity + Isolation → Conflict resolution**  
   Each replica must guarantee that *no* two increments overlap on the same logical counter value.  
2. **Availability + Partition Tolerance (CAP)** → we tolerate network splits, so replicas can accept writes locally.
3. **Consistency → eventual convergence**  

The classical solution is to give each node a **local delta** (`Δi`) and propagate it via an *anti‑entropy* protocol.  
The global counter `C = Σ Δi` once all deltas have been merged.

#### Why this works

- **Commutativity & Idempotence**: addition of integers commutes, so the order of applying deltas doesn’t matter; idempotence ensures re‑receiving a delta has no effect.
- **Bounded metadata**: only need to remember each node’s last sent sequence number, keeping overhead minimal.

#### Non‑obvious insight

A subtle pitfall is that *write‑skew* can still occur if two nodes increment simultaneously and then read the same stale total.  
The fix is to attach a monotonically increasing **epoch** or use vector clocks: each delta carries its epoch, and the counter’s value is defined as the maximum over epochs plus the sum of deltas within that epoch. This guarantees that every increment is counted exactly once even under concurrent, out‑of‑order deliveries.

In short, a distributed counter is essentially an **additive state‑based CRDT**; its correctness hinges on commutativity, idempotence, and a lightweight versioning scheme to prevent write‑skew.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
