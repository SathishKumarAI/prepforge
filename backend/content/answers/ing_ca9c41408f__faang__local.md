---
qid: ing_ca9c41408f__faang__local
question: 'Explain: Disadvantages — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 600
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:30:46-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks for the *disadvantages of data replication* when using a traditional relational DBMS, not NoSQL or cloud‑native systems.  
Key assumptions:  
- Replication is synchronous or asynchronous across multiple nodes.  
- The primary goal is high availability and read scalability.  

**2️⃣ Approach**  
1. List each disadvantage.  
2. Explain the underlying cause (e.g., consistency vs. performance).  
3. Quantify impact where possible.  
4. Conclude with a trade‑off summary.

**3️⃣ Depth**

| Disadvantage | Why it happens | Impact |
|--------------|----------------|--------|
| **Increased write latency** | Every update must propagate to all replicas (sync) or at least be queued for async replication. | Slower transaction commit, potential bottlenecks under heavy write load. |
| **Stale reads** | Asynchronous replication can leave replicas out‑of‑date. | Reads may return outdated data; consistency models break if strong guarantees are required. |
| **Higher storage cost** | Each node holds a full copy of the dataset. | Significant extra disk usage, especially for large tables. |
| **Complex conflict resolution** | Concurrent writes to different replicas can produce divergent states. | Requires merge logic or application‑level reconciliation, adding maintenance overhead. |
| **Network traffic & bandwidth** | Replication traffic consumes network resources. | Can saturate links and increase operational cost. |
| **Operational complexity** | Managing node health, failover, re‑synchronization, and monitoring becomes harder. | More skilled personnel and tooling needed; risk of human error. |
| **Potential for split‑brain** | In clustered setups without proper quorum protocols, two nodes may both think they’re primary. | Data loss or corruption if not handled correctly. |

**4️⃣ Edge Cases**

- *High write intensity*: sync replication will degrade performance to the slowest node.  
- *Large objects (LOBs)*: replication of binary data magnifies bandwidth and storage overhead.  
- *Geographically distributed deployments*: latency increases dramatically, making consistency guarantees harder.

**5️⃣ Optimize & Communicate**

*Improvements:*  
- Use **asynchronous or semi‑sync replication** for write‑heavy workloads to trade off a small amount of consistency for throughput.  
- Implement **partitioning/sharding** so replicas only store subsets of data, reducing storage and traffic.  
- Employ **conflict‑free replicated data types (CRDTs)** or version vectors to automate merge logic.

*Communication:*  
“While replication boosts read scalability and fault tolerance, it introduces latency, consistency challenges, and operational overhead. In practice, we balance these by choosing the right replication mode for each workload—sync for critical writes, async with eventual consistency for bulk analytics.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
