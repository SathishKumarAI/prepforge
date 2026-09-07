---
qid: ing_7ba5e67b72__faang__local
question: 'Explain: acks=all - example — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 475
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:31:45-05:00'
sources: []
---

**Clarify**  
The question asks how the *acks* setting works in Apache Kafka, specifically when it’s set to **`all`** (or `-1`). I’ll assume the context is a producer publishing messages to a topic with multiple partitions and replicas.

**Approach**  
1. Explain the role of acknowledgments in ensuring durability.  
2. Show how `acks=all` changes the broker‑producer handshake compared to `acks=1`.  
3. Illustrate with a simple partition/replica diagram and an example write cycle.  

**Depth**  
- **acks=0** – no wait, fastest but risk of loss.  
- **acks=1** – leader acknowledges; follower lag is possible.  
- **acks=all / -1** – the leader waits until *every* ISR (in‑sync replica) has written the record to its log before replying. If any ISR fails after acknowledgment, the message may be lost unless the producer retries with `max.in.flight.requests.per.connection`.  

In practice: Producer sends a batch → broker receives it → broker writes to its local log → broker forwards to all ISR replicas → once all replicas return success, broker replies “ACK”. If a follower falls out of sync, it’s removed from the ISR set and won’t be awaited on. This guarantees that any consumer reading from the leader or any in‑sync replica will see the message.

**Edge cases**  
- *ISR shrinkage*: a lagging replica leaves ISR; `acks=all` no longer waits for it.  
- *Broker crash before replication*: producer retries, may get duplicate records unless idempotence is enabled.  
- *Large batch size*: can increase latency under `acks=all`.  

**Optimize & communicate**  
To reduce latency while keeping strong durability, enable **idempotent producers** (`enable.idempotence=true`) and set a reasonable `max.in.flight.requests.per.connection` (≤5). This allows the producer to send more requests in parallel without risking out‑of‑order duplicates. I’d explain that this trade‑off keeps throughput high while still guaranteeing “all” replicas receive each record.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
