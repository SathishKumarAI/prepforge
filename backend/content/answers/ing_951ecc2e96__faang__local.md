---
qid: ing_951ecc2e96__faang__local
question: 'Explain: Full Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 525
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:30:51-05:00'
sources: []
---

**Full Replication – Data Replication in a DBMS**  
*(Answer framed for a FAANG interview)*  

| Step | What to say |
|------|-------------|
| **Clarify** | “You’re asking about full replication: copying every row of each table from one database (the master) to one or more replicas. I’ll assume we’re in a relational DBMS, that writes go to the master, and reads can hit any replica.” |
| **Approach** | 1. Capture write‑side changes at the source. <br>2. Propagate those changes to replicas (synchronously or asynchronously). <br>3. Resolve conflicts & maintain consistency. <br>4. Ensure durability of both master and replicas. |
| **Depth** | • **Change Capture** – log‑based CDC: read the transaction log, extract INSERT/UPDATE/DELETE tuples. <br>• **Transport** – use a message queue (Kafka) or streaming API to push change events. <br>• **Apply on Replica** – apply in order; for synchronous replication send ACKs back to master (high latency). For asynchronous, allow lag but handle rollback if needed. <br>• **Consistency Models** – *strong* (linearizable) requires two‑phase commit or Paxos; *eventual* allows read‑your‑writes with version vectors. <br>• **Complexity** – O(n) for initial sync; incremental replication is O(Δ) where Δ = number of changed rows. Overhead: log size + network bandwidth. |
| **Edge Cases** | • Network partition → replicas may diverge; need conflict resolution or rollback. <br>• Schema changes mid‑replication can corrupt data; use versioned schemas. <br>• Large batch updates cause lag; consider batching with checkpoints. |
| **Optimize & Communicate** | • Use *log shipping* for high throughput, *snapshot isolation* to avoid dirty reads. <br>• Compress change streams and apply delta‑encoding. <br>• Explain trade‑offs: synchronous = lower latency but higher write cost; asynchronous = cheaper writes but potential stale reads. <br>Conclude by summarizing that full replication is essential for scalability, high availability, and disaster recovery, and the key design decisions revolve around consistency guarantees versus performance.” |

*Word count ≈ 190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
