---
qid: ing_67dd084df8__faang__local
question: 'Explain: Single Source Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 508
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:45:29-05:00'
sources: []
---

**Single‑Source Replication (SSR)**  
*In the context of machine learning data pipelines, SSR is a database replication strategy where all writes are made to one “primary” source and subsequently replicated to read replicas.*

---

### 1️⃣ Clarify
- **Goal:** Provide high read throughput while keeping write consistency.  
- **Assumptions I’d confirm:**  
  - Only one node accepts writes (single master).  
  - Replication is asynchronous or semi‑synchronous.  
  - The workload is read‑heavy, typical for ML inference or feature serving.

### 2️⃣ Approach
1. Identify the primary DB that holds the authoritative data.  
2. Set up one‑way replication streams from this source to each replica.  
3. Ensure conflict resolution rules are trivial (no concurrent writes).  
4. Monitor lag and apply back‑pressure if replicas fall behind.

### 3️⃣ Depth
- **Consistency model:** *Eventual* (async) or *strong* (semi‑sync), depending on the replication protocol.  
- **Latency trade‑off:** Writes incur minimal delay; reads can hit any replica, reducing latency for ML inference jobs.  
- **Fault tolerance:** If the primary fails, a failover process promotes a replica to new master—requires coordination with an orchestrator (e.g., ZooKeeper).  
- **Complexity:** O(1) per write at primary; replication cost is linear in number of replicas.

### 4️⃣ Edge Cases
- *Network partitions:* replicas may become stale → need read‑your‑own-write guarantees.  
- *Schema changes:* must propagate schema updates atomically to all nodes.  
- *Large binary features (images, embeddings):* replication bandwidth becomes a bottleneck—consider sharding or separate object stores.

### 5️⃣ Optimize & Communicate
- **Batch replication** and compression reduce network load.  
- Use **change‑data capture (CDC)** tools (Debezium) to stream only deltas.  
- In my narrative, I’d emphasize how SSR aligns with ML pipelines: low write contention, high read throughput for feature stores, and the importance of monitoring replication lag to guarantee model accuracy.

> *Signal score:* Clear structure, concise technical depth, explicit trade‑offs, and a focus on real‑world ML deployment scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
