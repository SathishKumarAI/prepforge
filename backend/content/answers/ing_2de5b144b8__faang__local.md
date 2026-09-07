---
qid: ing_2de5b144b8__faang__local
question: 'Explain: Consistency — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 445
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:30:09-05:00'
sources: []
---

**Clarify**  
The question asks how *consistency* in a database (one of the ACID properties) relates to machine‑learning workloads and what system‑design choices help maintain it. I’ll assume we’re dealing with a distributed ML pipeline that stores model parameters, training logs, or inference results.

**Approach**  
1. Define consistency vs. availability/partition tolerance.  
2. Map typical ML data patterns (batch ingestion, streaming updates).  
3. Show how ACID guarantees are enforced in practice: locking, two‑phase commit, consensus protocols.  
4. Discuss trade‑offs with horizontal scaling and eventual consistency.

**Depth**  
- **Consistency** means every read sees the latest committed write; for ML this ensures reproducible training (same parameters) and correct inference (no stale weights).  
- In a distributed store, we use *paxos/raft* or *2PC* to coordinate updates across replicas.  
- For parameter servers, sharded locks or optimistic concurrency (vector clocks) keep consistency while allowing parallel gradient pushes.  
- Batch ETL jobs run in *strongly consistent* mode; streaming pipelines may tolerate *eventual* consistency but must reconcile conflicts via conflict‑free replicated data types (CRDTs).  
- Complexity: 2PC is **O(1)** per commit but adds latency; raft gives linear‑time log replication.  
- Trade‑off: stronger consistency → lower throughput, higher fault tolerance.

**Edge Cases**  
- Network partitions → rollback or stale reads.  
- Hot spots (high‑frequency parameter updates) can cause lock contention.  
- Mixed workloads (training + inference) may need separate consistency tiers.

**Optimize & Communicate**  
Explain that choosing *strong* consistency for training but *eventual* for serving balances correctness and latency. Mention monitoring of write conflicts, using version vectors to detect divergence, and how we would present these metrics in a dashboard. This shows structured reasoning, technical depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
