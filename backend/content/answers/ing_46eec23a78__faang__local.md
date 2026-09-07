---
qid: ing_46eec23a78__faang__local
question: 'Explain: 3.1 CP: Consistency + Partition Tolerance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 434
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:29:06-05:00'
sources: []
---

**Clarify**  
You’re asking about the *Consistency–Partition tolerance* (CP) corner of the CAP theorem in distributed ML systems.  
Assumptions I’d confirm: we have a replicated model or data store, we can tolerate network partitions but must still return consistent predictions/updates.

---

### Approach
1. **Define Consistency** – every read sees the latest write.  
2. **Define Partition Tolerance** – the system keeps operating when links fail.  
3. **Explain CP trade‑off** – we sacrifice availability: if a partition occurs, some nodes refuse to serve requests until consistency is restored.

---

### Depth
- In an ML pipeline, *consistency* means every inference node uses the same model parameters and data shard.  
- When a network split happens, a CP system will block new training updates or serve stale predictions from the “leader” only.  
- Implementation patterns: **Paxos/ Raft** for parameter synchronization; **two‑phase commit** for distributed training jobs.  
- Complexity: *O(log N)* message rounds for leader election and log replication, but guarantees linearizability.

---

### Edge Cases
- **Slow partitions**: clients experience high latency or timeouts.  
- **Data skew**: if a partition contains the majority of data, other nodes may be blocked indefinitely.  
- **Recovery lag**: after reconnection, re‑synchronizing large weight tensors can take minutes.

---

### Optimize & Communicate
- Use *gossip* to quickly detect partitions; fallback to *read‑only replicas* for low‑stakes inference while blocking training updates.  
- Clearly state that in ML workloads where stale predictions are unacceptable (e.g., fraud detection), CP is preferred despite lower availability.  

This structured explanation shows I understand CAP, can map it to ML, and communicate trade‑offs succinctly—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
