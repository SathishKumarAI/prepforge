---
qid: ing_e1daa9c95e__faang__local
question: 'Explain: Multi-Master Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 470
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:24:35-05:00'
sources: []
---

**Clarify**  
*Question:* “Explain Multi‑Master replication – a data‑replication strategy used by DBMSs.”  
Assumptions: we’re talking about relational or NoSQL stores that support concurrent writes on multiple nodes; the focus is on consistency, conflict resolution, and use cases.

---

**Approach**  
1. Define what multi‑master means in contrast to single‑master.  
2. Describe how data flows between replicas (write propagation).  
3. Explain consistency models (strong vs eventual).  
4. Highlight conflict detection & resolution mechanisms.  
5. Touch on typical scenarios where it’s chosen.

---

**Depth**  
Multi‑master replication lets *any* node accept writes and propagate them to peers, enabling high availability and low latency in distributed systems. Writes are logged locally and asynchronously sent (or synchronously confirmed) to other masters. Consistency is usually *eventual*: replicas converge over time, but a short window of divergence can occur.

Conflict handling is critical:  
- **Timestamp/Vector clocks** detect concurrent updates.  
- **Last‑Write‑Wins (LWW)** or application‑defined merge functions resolve conflicts.  
- Some engines (e.g., CouchDB) expose *conflict documents* for manual reconciliation.

Protocols such as *Paxos* or *Raft* can be used to enforce a consensus layer, turning the system into a strongly consistent multi‑master cluster at higher latency cost.

---

**Edge Cases**  
- Network partitions: replicas may diverge indefinitely if not resolved.  
- Write storms on one node cause backlog on peers.  
- Binary data or large blobs are expensive to replicate; often stored in a shared object store instead.  
- Security: ensuring authenticated replication streams.

---

**Optimize & Communicate**  
For read‑heavy workloads, pair multi‑master with *read replicas* to offload traffic. Use *sharding* to limit the number of masters each piece of data touches, reducing conflict surface. When explaining to stakeholders, emphasize trade‑offs: higher availability vs possible stale reads and merge overhead; choose based on application tolerance for eventual consistency (e.g., social feeds vs banking).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
