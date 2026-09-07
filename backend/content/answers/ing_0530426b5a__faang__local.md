---
qid: ing_0530426b5a__faang__local
question: 'Explain: Simple Coherency Model — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 472
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:56:31-05:00'
sources: []
---

**Simple Coherency Model – HDFS Architecture Guide**

| # | Step | What to do |
|---|------|------------|
| **1️⃣ Clarify** | *Restate:* “Explain the Simple Coherency Model in HDFS.” <br>*Assumptions to confirm:* 1) Interviewer wants a high‑level view, not code. 2) Focus on data consistency across replicas and client interactions. |
| **2️⃣ Approach** | Outline: <br>• Core components (NameNode, DataNodes). <br>• Replica placement & heartbeats. <br>• Client read/write flow. <br>• Consistency guarantees (write‑once, read‑after‑commit). |
| **3️⃣ Depth** | • **Write path:** client obtains block locations → writes to DataNode → acknowledges → NameNode updates metadata; replicas are created asynchronously. <br>• **Read path:** client requests file → NameNode gives list of live replicas → reads from any replica (load‑balanced). <br>• **Coherency rule:** once the last replica acknowledges, the block is considered committed; subsequent writes to that block overwrite it on all replicas via the same procedure. <br>• **Fault tolerance:** heartbeats keep track of node health; if a DataNode fails, NameNode re‑replicates missing blocks. |
| **4️⃣ Edge Cases** | • *Partial failure* during write → client retries; NameNode may mark block as corrupt. <br>*Concurrent writes* to same file are serialized by the client’s lease mechanism. <br>*Network partitions* cause temporary unavailability of replicas until re‑synchronization. |
| **5️⃣ Optimize & Communicate** | • Use *pipeline replication* to reduce round‑trips, improving write throughput. <br>• Explain trade‑off: strong consistency vs. high availability; HDFS opts for “write once, read many” to keep the system simple. <br>Conclude by summarizing that the Simple Coherency Model guarantees eventual consistency across replicas with minimal coordination overhead—ideal for big data workloads. |

**Word count:** ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
