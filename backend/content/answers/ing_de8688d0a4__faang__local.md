---
qid: ing_de8688d0a4__faang__local
question: 'Explain: Data Replication — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 479
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:16:34-05:00'
sources: []
---

**Clarify**  
We’re asked how *data replication* improves **reliability** in a distributed ML system (e.g., model training or serving). I’ll assume: *replication factor ≥2*, *nodes can fail independently*, and *latency constraints are moderate*.  

**Approach**  
1. Define reliability metrics (MTTR, MTBF).  
2. Explain replication strategies: master–slave, quorum, erasure coding.  
3. Map each strategy to ML workloads (training data sharding vs inference serving).  
4. Quantify impact on availability and consistency.  

**Depth**  
- **Master‑Slave**: One primary holds the latest model; replicas stay sync via async writes. 99.9% uptime with 2 slaves, but a master failure incurs <1 s failover.  
- **Quorum (Paxos/Raft)**: Requires ≥(N/2)+1 nodes to commit. Guarantees linearizability; MTTR ≈ one network round‑trip + new leader election (~200 ms). Suitable for online serving where stale predictions are unacceptable.  
- **Erasure Coding**: Stores k data blocks + m parity on N=k+m nodes. Reduces storage overhead by ~30% while tolerating any m node failures—ideal for massive training datasets that are read‑heavy but can tolerate reconstruction latency.  

Reliability improves because the system can continue operation as long as a quorum (or enough erasure blocks) remains available, reducing MTTR from minutes to seconds.

**Edge Cases**  
- *Network partitions*: Quorum protocols may block writes; consider eventual consistency with master‑slave for training jobs.  
- *Simultaneous multi‑node failures*: Erasure coding tolerates up to m failures but degrades read performance.  
- *Data skew*: Replication can exacerbate hot spots; use consistent hashing.

**Optimize & Communicate**  
Highlight trade‑offs: higher replication → better availability but increased storage and write latency. Recommend a hybrid: use quorum for inference serving, erasure coding for training data shards, and monitor MTTR to adjust replication factor dynamically. Conclude with a concise diagram (optional) linking replication type ↔ reliability metric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
