---
qid: ing_08979e85fc__faang__local
question: 'Explain: Broker — Can Kafka Lose Messages?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 515
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:04:28-05:00'
sources: []
---

**Clarify**  
You’re asking whether a Kafka broker can lose messages that have been produced but not yet consumed. Key assumptions: (1) the broker is running on stable hardware, (2) replication factor > 1, (3) default durability settings (`acks=all`), and (4) no intentional deletion or compaction.

**Approach**  
Explain Kafka’s write‑path and persistence guarantees, then enumerate failure scenarios that could lead to loss. Highlight the role of replicas, acknowledgments, and disk flushes.

**Depth**  

| Scenario | What happens? | Can a message be lost? |
|----------|---------------|------------------------|
| **Broker crash before log flush** | Producer writes to in‑memory buffer; on crash data stays unflushed. | Yes, if `acks=1` or `acks=all` but no replica has flushed yet. |
| **Replica out‑of‑sync** | Leader replicates to followers asynchronously. If a follower crashes before receiving the record, it’s lost there. | No, as long as at least one follower remains. |
| **Network partition** | Leader continues accepting writes; followers can’t sync. If leader dies mid‑write, data may be lost if no follower had it. | Yes, with `acks=all` and insufficient replicas. |
| **Disk failure on all replicas** | All copies corrupt or deleted. | Yes, catastrophic hardware loss. |

Kafka guarantees *at least once* delivery when `acks=all`, `replication.factor>1`, and the broker is healthy. Loss can still occur only if all replicas fail before persisting.

**Edge Cases**  
- **Under‑replicated partitions**: after a crash, Kafka may mark the partition as under‑replicated; writes may be lost until replication catches up.  
- **Topic compaction**: older keys are dropped intentionally.  

Test by simulating broker failures and verifying that consumers still see all committed records.

**Optimize & Communicate**  
To eliminate loss: set `acks=all`, use a high replication factor, enable disk‑flush intervals (`min.insync.replicas`), and monitor under‑replicated partitions. Explain trade‑offs: higher durability → more latency. Conclude that Kafka brokers *can* lose messages only in extreme failure scenarios; proper configuration mitigates this risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
