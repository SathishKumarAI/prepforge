---
qid: ing_2cac8f9b9a__fp__local
question: 'Explain: Active-Active Geo Distribution — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 414
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:30-05:00'
sources: []
---

**Why do we need active‑active geo‑distribution?**  
In a global service the *latency budget* is not just “fast” – it must be fast for every user, regardless of location. If a single data centre is the source of truth, all writes must travel to it first; that introduces a hard latency wall and creates a single point of failure. An active‑active architecture turns every site into a *writeable primary*, so each user can read and write locally while still seeing a consistent global state.

**How does replication work?**  
1. **Strong consistency (e.g., 2‑phase commit, Paxos/RAFT)** – all sites agree on the order of updates before they become visible. This guarantees no divergence but costs latency and throughput.  
2. **Eventual consistency (CRDTs, vector clocks)** – updates are propagated asynchronously; conflicts are resolved by deterministic merge rules. Latency is low, but users may see stale or temporary divergent data.

**Examples & use cases**  

| Use case | Preferred model |
|----------|-----------------|
| Banking, e‑commerce carts | Strong consistency (money can’t be double spent) |
| Social media feeds, collaborative docs | Eventual consistency with CRDTs (fast, tolerant of network partitions) |
| Global gaming leaderboards | Hybrid: strong for critical actions, eventual for bulk state sync |

**Non‑obvious insight:**  
The *choice of conflict resolution* is often dictated by the *entropy* of the data model. Highly mutable, fine‑grained objects (e.g., per‑user counters) lend themselves to CRDTs because their merge functions have low entropy—merging is cheap and deterministic. In contrast, high‑entropy structures (complex relational graphs) require strong protocols; otherwise, reconciliation becomes intractable. Thus, a deep understanding of data entropy guides the replication strategy more than latency alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
