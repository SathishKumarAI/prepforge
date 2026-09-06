---
qid: ing_7c97c2c51d__fp__local
question: 'Explain: Strongly consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 468
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:30:16-05:00'
sources: []
---

**Strong consistency in a distributed index**

A *strongly‑consistent* index guarantees that once a write to the base table is acknowledged, every subsequent read of the index reflects that write without delay.  
Why must this be true? In a service like Uber, the *next‑pickup* query can’t return a driver who just became unavailable; otherwise riders would wait for an impossible match. The underlying principle is **causal ordering**: all operations are observed in the same total order by every node. This is enforced by a logical clock (e.g., Lamport timestamps) coupled with *quorum reads/writes* that intersect on at least one replica, ensuring the latest update propagates to all readers.

**LedgerStore’s trillion‑index solution**

1. **Append‑only ledgers per index key** – Each index entry is an immutable stream of `(timestamp, value)` pairs. Append‑only writes avoid coordination overhead; a single coordinator per shard serializes updates.
2. **Partitioned hash‑tree layout** – The ledger is sharded by the hash of the index key and then organized as a Merkle tree. Reads traverse only the relevant leaf branch, keeping I/O logarithmic even for trillions of keys.
3. **Multi‑level caching + tiered storage** – Hot entries live in an LRU cache; stale ones spill to SSDs and finally to cold object stores. Because every read must see the latest append, the system uses *time‑ordered* reads that skip older segments efficiently.
4. **Global consensus on checkpoints** – Periodic snapshots are agreed upon by a Raft cluster; this allows compaction without violating consistency.

**Non‑obvious insight**

The key to scalability is treating an index not as a table of “current values” but as a *time‑series ledger*. By shifting the consistency requirement from “latest value” to “most recent append”, LedgerStore sidesteps the classic read‑write conflict problem and turns every index into a cheap, append‑only log. This architectural choice lets Uber maintain trillions of indexes with only linear storage growth and bounded latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
