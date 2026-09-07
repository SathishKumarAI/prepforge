---
qid: ing_0f909fe69f__faang__local
question: 'Explain: Master-Slave Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 556
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:19:43-05:00'
sources: []
---

**Master‑Slave (Primary‑Replica) Replication – Quick Overview**

| Layer | What it is | Why we use it |
|-------|------------|---------------|
| **Master** | One node accepts all writes and reads. | Central point of truth, simplifies consistency. |
| **Slaves** | Read‑only replicas that copy data from the master. | Offload read traffic, provide redundancy, enable geographic distribution. |

---

### 1️⃣ Clarify  
- *Problem:* How does a DBMS keep multiple copies of data in sync while handling concurrent reads/writes?  
- *Assumptions to confirm:*  
  - Single‑master architecture (no multi‑write conflicts).  
  - Replication is asynchronous unless otherwise specified.  
  - Network latency and failure scenarios are acceptable.

### 2️⃣ Approach  
1. **Write path** – All writes go to the master.  
2. **Log capture** – Master records changes in a transaction log or WAL (Write‑Ahead Log).  
3. **Replication stream** – Slaves pull the log entries, apply them locally.  
4. **Read routing** – Clients read from slaves; masters handle writes.

### 3️⃣ Depth  
- **Consistency model:** *Eventual*—slaves may lag behind master by replication delay.  
- **Failure handling:** If a slave fails, it can catch up via log replay or full snapshot.  
- **Scalability:** Adding more slaves is linear; read capacity grows with replicas.  
- **Complexity:** Write‑side O(1) (single node), read‑side O(log N) if load‑balancing across N slaves.

### 4️⃣ Edge Cases  
- *Write conflict* on two slaves → not allowed in single‑master mode.  
- *Network partition:* master continues, slaves become stale until reconnect.  
- *Large schema changes*: require coordinated downtime or online migration tools.

### 5️⃣ Optimize & Communicate  
- **Hybrid approaches** (e.g., semi‑synchronous replication) reduce lag at cost of write latency.  
- **Read‑write splitting** in application code keeps API simple: `SELECT → slave`, `INSERT/UPDATE → master`.  
- **Explain trade‑offs:** “We prioritize read throughput and availability; consistency is eventual, which aligns with our use case of analytics queries.”

> *Bottom line:* Master‑slave replication offers a clean separation between write-heavy workloads and read-intensive access patterns, enabling horizontal scaling while keeping the system simple to reason about.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
