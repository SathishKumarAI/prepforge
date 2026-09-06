---
qid: ing_8d2621a063__fp__local
question: 'Explain: ‘acks=all’ — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 365
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:05:07-05:00'
sources: []
---

**Why `acks=all` matters**

When a producer writes a record, the *only* thing that guarantees it won’t vanish is that the broker holding the **leader replica** has safely written the log to disk.  
If the leader dies before that write commits, any follower that had only an in‑memory copy would lose the record—leading to data loss.

`acks=all` forces the producer to wait until *every* in‑sync replica (ISR) of the partition has acknowledged receipt and durable persistence.  
This is essentially a **consensus** step: the leader can commit the offset only when all participants have confirmed it, ensuring that no follower will be left behind if the leader fails.

**Derivation from fundamentals**

1. **Durability = Consensus + Persistence**  
   - *Consensus*: every replica in the ISR must agree (acknowledge).  
   - *Persistence*: each ack confirms the log has been flushed to disk.
2. The broker’s internal `SyncProducer` logic tracks a counter of acknowledgments; only when this counter equals the ISR size does it mark the message as committed.

**Non‑obvious insight**

Even with `acks=all`, if a follower falls out of the ISR (due to lag or failure) before the leader commits, the producer **does not wait** for that replica.  
Thus, `acks=all` guarantees *exactly‑once* semantics only within the current ISR; it does not protect against later re‑joining replicas that may miss messages they never saw. This subtlety is often overlooked when tuning reliability versus latency trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
