---
qid: ing_0c40341dd2__faang__local
question: 'How does data replication work? — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 466
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:12:27-05:00'
sources: []
---

**Clarify**  
You’re asking how a database or storage system keeps multiple copies of the same data across nodes so that reads are fast and writes stay consistent. I’ll assume we’re talking about *distributed* systems (e.g., Cassandra, DynamoDB) rather than local file‑system backups.

**Approach**  
1. Identify replication **strategy**: synchronous vs asynchronous.  
2. Explain **consistency models** (strong, eventual).  
3. Cover the two main patterns: **master‑less** and **primary‑secondary**.  
4. Show typical use cases (high availability, read scaling, disaster recovery).

**Depth**  

| Pattern | How it works | Consistency | Latency |
|---------|--------------|-------------|---------|
| **Primary‑Secondary** | One node receives writes; it propagates to replicas via log shipping or gossip. Replicas reply with *acks*. | Strong if all acks required (RAID‑like). Eventual if only majority needed. | Write latency = network hop + ack wait. |
| **Master‑less (e.g., Dynamo)** | Each node can accept writes; vector clocks track versions. Conflict resolution via last‑writer‑wins or application logic. | Usually eventual, unless using a quorum for reads/writes. | Lower write latency (no leader), higher read complexity if many replicas needed. |

**Edge cases**  
- **Network partitions**: primary‑secondary may lose the leader; master‑less keeps working but can diverge.  
- **Clock skew** in vector clocks → stale data served until reconciliation.  
- **Disk failures**: need *anti‑entropy* (Merkle trees) to sync missing blocks.

**Optimize & Communicate**  
To improve read speed, use *read repair* on the fly; for writes, batch replication messages. Explain trade‑offs clearly: strong consistency = higher latency vs eventual = risk of stale reads. Conclude with a quick example: Cassandra’s 3‑replica policy gives 99.999% availability for reads while keeping write latency modest.

---  
**Word count:** ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
