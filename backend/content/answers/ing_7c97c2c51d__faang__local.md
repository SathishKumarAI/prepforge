---
qid: ing_7c97c2c51d__faang__local
question: 'Explain: Strongly consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 532
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:33:39-05:00'
sources: []
---

**Strongly Consistent Indexes – how LedgerStore scales to trillions**

| Step | What I’ll cover |
|------|----------------|
| **Clarify** | We need a system that keeps *every* query on Uber’s data correct at all times, even while millions of writes happen per second. Assume we’re dealing with immutable logs (the “ledger”) and a read‑heavy workload. |
| **Approach** | 1️⃣ Partition the ledger by time & key; <br>2️⃣ Build an *append‑only* index stream that mirrors every write; <br>3️⃣ Use a distributed, consensus‑based storage (Raft/Quorum) to persist the index metadata; <br>4️⃣ Serve reads from a replicated read‑side cluster that can be updated in lockstep with writes. |
| **Depth** | • **Append‑only log**: each write appends a record and an *index entry* pointing to its offset. Because writes are never modified, the index is trivially consistent. <br>• **Distributed commit**: every index update goes through a Raft group; once committed it’s visible everywhere. <br>• **Compaction & pruning**: old partitions roll into cold storage while maintaining pointers for fast lookups. <br>• **Complexity**: O(1) append, O(log N) read (tree or hash‑based lookup), with replication overhead ≈ k× writes where k is the quorum size. |
| **Edge Cases** | • Network partitions → Raft prevents split‑brain; readers see stale data until majority re‑establishes.<br>• Hot keys → shard them across multiple index replicas.<br>• Backpressure if write traffic spikes: use back‑pressure queues to keep Raft logs from filling. |
| **Optimize & Communicate** | • **Batching**: group writes into micro‑batches before persisting to reduce I/O. <br>• **Hot‑index caching**: keep the most frequently accessed index entries in an LRU cache to cut read latency.<br>• **Narration**: “By treating every write as an immutable ledger entry and propagating its index through a consensus protocol, we guarantee that any reader will see a fully up‑to‑date view—no eventual consistency lag.” |

*Result*: LedgerStore can expose trillions of strongly consistent indexes with linear scalability while keeping latency in the tens of milliseconds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
