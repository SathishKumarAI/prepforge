---
qid: ing_636fe1fc95__faang__local
question: 'Explain: Replication — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 486
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:52-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how *replication* and *acknowledgements (acks)* work in Apache Kafka, focusing on the broker‑level replication flow and the `acks` setting that producers use to guarantee durability.

**Approach**  
1. Outline Kafka’s log‑based architecture and the role of replicas.  
2. Explain the `acks` options (`0`, `1`, `all`) and their guarantees.  
3. Map a write request through leader → followers → ack back to producer.  
4. Mention failure scenarios, ISR (in‑sync replica) list, and how ZooKeeper/Controller manage it.

**Depth**  
- Each topic partition is stored as an immutable log on the *leader* broker; up to N–1 *followers* keep a copy in sync by pulling the leader’s log via fetch requests.  
- The `acks` config tells Kafka when to consider a write successful:  
  - **0** – no response, best‑effort (no durability).  
  - **1** – only the leader must acknowledge; if the leader fails before replication, data can be lost.  
  - **all** (`-1`) – all *in‑sync replicas* (ISR) must ack; guarantees that once an ack is received, the message survives a broker crash as long as at least one ISR remains.  
- The ISR list is dynamically updated: followers falling behind are removed; new ones are added after they catch up. If the leader crashes, ZooKeeper elects a new leader from the ISR.  

**Edge Cases**  
- A follower lagging beyond `replication.factor` may be excluded from ISR → loss if leader dies before replication.  
- Network partitions can cause ISR shrinkage, affecting `acks=all`.  
- Producer retries with idempotence help avoid duplicates when `acks=1` or `0`.

**Optimize & Communicate**  
Highlight that choosing `acks=all` maximizes durability at the cost of latency and throughput; producers often tune `retries`, `linger.ms`, and `batch.size` to balance. Conclude by summarizing: replication + acks provide Kafka’s core durability guarantees, with ISR ensuring consistent state across brokers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
