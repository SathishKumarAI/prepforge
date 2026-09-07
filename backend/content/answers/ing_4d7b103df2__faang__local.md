---
qid: ing_4d7b103df2__faang__local
question: 'What is data replication? — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 457
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:44:31-05:00'
sources: []
---

**What is Data Replication?**  
Data replication is the process of copying and maintaining multiple copies of data across different storage locations or systems to ensure availability, reliability, and performance.

| **Type** | **Definition** | **Typical Use‑Case** |
|----------|----------------|---------------------|
| *Synchronous* | Writes are committed on all replicas before returning success. | Financial transactions where consistency is critical (e.g., banking). |
| *Asynchronous* | Write propagates to replicas after acknowledgment. | Web services with high write throughput, tolerating eventual consistency. |
| *Master‑Slave (Primary‑Replica)* | One primary handles writes; replicas read only. | Read‑heavy OLTP databases. |
| *Multi‑Master* | All nodes can accept writes and sync changes. | Distributed key‑value stores like Cassandra or DynamoDB. |

### Why Replicate?

1. **Availability** – If one node fails, others continue serving requests (CAP theorem → choose consistency & partition tolerance).  
2. **Fault Tolerance** – Protects against data loss from disk corruption or network partitions.  
3. **Performance** – Read replicas can be geographically distributed to reduce latency for end users.  

### Real‑World Example

A global e‑commerce platform uses synchronous replication between its US and EU data centers for order processing (strong consistency). Asynchronous replication propagates inventory updates to read‑optimized caches worldwide, ensuring low‑latency product searches.

---

**Edge Cases & Testing**

- *Write conflicts* in multi‑master setups → resolve via last‑write-wins or application logic.  
- *Network partitions* → ensure graceful degradation (e.g., read‑only mode).  
- *Consistency gaps* → monitor lag metrics; trigger alerts if exceeds SLA.

---

**Optimizing & Communicating**

Start by clarifying business requirements: latency vs. consistency trade‑offs. Choose the replication model accordingly, and document failure scenarios. When presenting, use a concise diagram to illustrate data flow, then walk through how each edge case is handled—this demonstrates both depth and structured thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
