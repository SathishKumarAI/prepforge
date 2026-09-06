---
qid: ing_da7c21de7f__fp__local
question: 'Explain: Transactions — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 392
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:44:04-05:00'
sources: []
---

**Transactions in Cloud Spanner**

The core problem is *global, consistent state* across a horizontally‑scalable datastore. A client wants to atomically read or write several rows that may reside on different nodes, yet the system must tolerate network partitions and server failures.

Spanner solves this with **serializable isolation + TrueTime**.  
1. Each node runs a Paxos group that replicates data; writes are first *committed* in a two‑phase protocol (prepare → commit) inside that group.  
2. To order transactions globally, Spanner uses Google’s distributed clock, *TrueTime*, which gives each transaction a **time interval** \([earliest,\ latest]\). A write is stamped with the earliest time it could have occurred; reads use the latest bound to see all prior writes.

Because every replica accepts only timestamps that are later than its current wall‑clock, Spanner guarantees that if two transactions overlap, their timestamp intervals cannot be reordered without violating causality. Thus any serial order consistent with those intervals is valid, and no rollback is required.

**Non‑obvious insight:**  
Spanner’s use of *intervals* rather than a single timestamp lets it tolerate clock skew while still achieving global ordering. The “latest” bound can be pushed forward by a tiny amount (microseconds) to absorb network delays, so the system never stalls for perfect synchrony—yet it retains strict serializability. This subtle design turns an inherently probabilistic clock into a deterministic transaction orderer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
