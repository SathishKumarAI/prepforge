---
qid: ing_18b7d40706__faang__local
question: 'Explain: Types of data replication — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 555
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:42:21-05:00'
sources: []
---

**Clarify**  
The interview asks for an explanation of *data replication* in distributed systems—what it is, the common replication strategies, illustrative examples, and typical use‑cases. I’ll assume we’re talking about database or file system level replication, not application‑level caching.

---

### Approach
1. **Define replication** (copying data across nodes).  
2. **List major types**: master–slave, multi‑master, quorum/consensus, synchronous vs asynchronous, and eventual consistency.  
3. **Give concrete examples** of each.  
4. **Tie each type to a use‑case scenario**.

---

### Depth
| Type | Mechanism | Example | Use‑Case |
|------|-----------|---------|----------|
| **Master–Slave (Primary‑Replica)** | One writable node, many read replicas; writes propagate asynchronously or synchronously. | MySQL Replication, PostgreSQL streaming. | High read throughput & geo‑distribution while keeping a single source of truth. |
| **Multi‑Master** | All nodes can accept writes; conflicts resolved by last‑write‑wins or application logic. | MongoDB replica set with writeable secondaries, Cassandra’s hinted handoff. | OLTP workloads where write latency must be minimal across regions. |
| **Quorum/Consensus (Paxos/Raft)** | Operations require agreement from a majority before committing. | Google Spanner, etcd, Raft‑based systems. | Strong consistency for financial or inventory services that cannot tolerate split‑brain. |
| **Synchronous vs Asynchronous** | Sync waits for acknowledgments; async continues without waiting. | HBase sync writes vs Kafka log replication. | Real‑time analytics (sync) vs batch ETL pipelines (async). |

---

### Edge Cases
* Network partitions → quorum systems avoid split brain, but master–slave may stall reads if the primary fails.  
* Write conflicts in multi‑master can lead to data loss without conflict resolution.  
* Async replication introduces *staleness*, problematic for time‑critical data.

---

### Optimize & Communicate
- **Performance trade‑off**: sync → higher latency, stronger consistency; async → lower latency, eventual consistency.  
- **Scalability**: Master–slave scales reads easily; multi‑master scales writes but increases conflict complexity.  
- **Narration**: “Choose the replication model based on your consistency vs latency requirements and failure domain.”  

This structured walk‑through covers definitions, mechanics, real systems, scenarios, pitfalls, and decision logic—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
