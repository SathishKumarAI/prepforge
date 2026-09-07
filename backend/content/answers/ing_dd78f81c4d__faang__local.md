---
qid: ing_dd78f81c4d__faang__local
question: 'Explain: Durability — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 461
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:13:35-05:00'
sources: []
---

**Durability – ACID & System‑Design Perspective**

| **Step** | **What I do** |
|---|---|
| **Clarify** | Durability guarantees that once a transaction commits, its changes survive crashes or failures. Confirm: we’re talking about *write‑through* persistence (e.g., disk, replicated log), not in‑memory caching; and the system tolerates node restarts, power loss, network partitions. |
| **Approach** | 1️⃣ Log the intent (`BEGIN`, `COMMIT`). 2️⃣ Persist each write to a durable store before acknowledging commit. 3️⃣ Use *write‑ahead logs* (WAL) + checkpoints or *copy‑on‑write* snapshots. 4️⃣ Replicate the log to secondary nodes via synchronous replication or quorum writes. |
| **Depth** | • **Write‑Ahead Log**: Append‑only, sequential I/O → high throughput; on crash, replay from last checkpoint. <br>• **Checkpointing**: Periodic snapshot of DB state + truncate log to reduce recovery time. <br>• **Replication**: Raft/Two‑Phase Commit (2PC) for distributed ACID; quorum commit ensures at least one replica has the data before ACK. <br>• **Complexity**: Log write O(1), checkpoint O(N); recovery O(log N + k). |
| **Edge Cases** | • Power loss during log flush → use fsync or hardware battery‑backed cache.<br>• Network partition causing split‑brain; resolve with leader election. <br>• Corrupted log entries: checksum validation, fallback to snapshot. |
| **Optimize & Communicate** | • Batch multiple commits into one fsync to amortize I/O overhead. <br>• Use *Raft*’s log compaction to keep size bounded. <br>Explain trade‑offs: synchronous replication = lower latency vs higher write cost; asynchronous gives better performance but weaker durability guarantees. Present this narrative clearly, highlighting how each design choice upholds durability while balancing availability and consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
