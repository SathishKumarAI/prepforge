---
qid: ing_27a36e421f__fp__local
question: 'Explain: Caveat — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 360
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:29:39-05:00'
sources: []
---

### Why *acks* matter in Kafka

Kafka’s producers send messages to brokers that persist them on disk and replicate them across replicas.  
The **fundamental problem** is to guarantee *durability* without sacrificing throughput: a producer must know when its write has reached a safe state, yet waiting for every replica would cripple latency.

An **acknowledgement (ack)** is the broker’s reply that the message is safely stored on the required number of nodes.  
When a producer requests `acks=1`, it only waits for the leader to flush the log locally; the followers can lag behind or even fail.  
`acks=all` forces the leader to wait until *every* in‑sync replica has persisted the record, ensuring that no data is lost if any single broker dies.

The trade‑off follows a classic **consistency–latency** curve: higher acks → stronger durability and consistency; lower acks → lower latency but risk of message loss.  
Kafka’s design lets each topic decide its point on this curve, enabling flexible application guarantees.

#### Non‑obvious insight

Most people equate `acks=all` with “every replica must write the data.” In fact, it only requires that all **in‑sync replicas** acknowledge. A follower that lags beyond the *replication lag* threshold is excluded from the in‑sync set, so its failure does not downgrade durability. This subtlety allows Kafka to maintain high availability even when some followers are temporarily behind, a nuance often missed by those who think of replication as a rigid “all or nothing” process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
