---
qid: ing_da7c21de7f__faang__local
question: 'Explain: Transactions — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 524
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:06:40-05:00'
sources: []
---

**Clarify**  
You’re asking how Cloud Spanner guarantees ACID semantics for multi‑row, multi‑table updates across a globally distributed database. I’ll assume we’re talking about *transaction* primitives (begin/commit/abort), not just read‑only snapshots.

**Approach**  
1. Explain Spanner’s architecture: replicas, Paxos consensus per row group, TrueTime.  
2. Show how a transaction is built: client sends ops → server builds a directed acyclic graph (DAG).  
3. Detail the two phases: *pre‑commit* (prepare) and *commit*.  
4. Mention conflict detection via version numbers and optimistic concurrency.

**Depth**  
- **TrueTime** gives bounded timestamp uncertainty; commit timestamps are chosen using `CommitTimestamp = max(read_ts, write_ts)` plus a small safety margin.  
- In the **pre‑commit** phase, each replica runs Paxos to agree on the transaction’s intent (a “prepare” record). If any replica votes NO, the whole txn aborts.  
- On success, Spanner writes the commit record with the chosen timestamp, then applies all updates atomically.  
- The system guarantees *serializability* because the commit timestamp is higher than any conflicting read or write seen by the transaction, and no two commits can have the same timestamp for overlapping rows.

**Edge Cases**  
- **Clock skew**: if TrueTime uncertainty grows (e.g., GPS failure), Spanner may delay commits to maintain consistency.  
- **Hotspots**: heavy contention on a single row group leads to repeated aborts; sharding or retry logic is needed.  
- **Network partitions**: Paxos tolerates up to 50% replica loss, but if the majority can’t be reached, the txn aborts.

**Optimize & Communicate**  
For high‑throughput workloads, batch multiple small transactions into a single commit record (multi‑row write) and use *timestamp oracle* to reduce coordination. When explaining this, start with an analogy (e.g., “Spanner’s TrueTime is like a globally synchronized clock that guarantees everyone sees the same order”), then walk through the two‑phase commit diagram, highlighting where Paxos and timestamps intervene. This shows clear problem decomposition, technical depth, and awareness of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
