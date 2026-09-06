---
qid: ing_7ba5e67b72__fp__local
question: 'Explain: acks=all - example — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 406
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:28:03-05:00'
sources: []
---

### Why `acks=all` matters in Kafka

When a producer writes a record, it must decide **when** that write is considered “successful.”  
Kafka stores each partition on a leader and keeps *replicas* on followers for durability.  
The fundamental problem is to guarantee that a message survives a broker failure while keeping latency low.

1. **Replication as redundancy:**  
   Each replica holds the same byte stream. If one node dies, another can continue serving consumers.  
2. **Acknowledgment semantics:**  
   - `acks=0` – producer never waits; it may lose data if the leader crashes.  
   - `acks=1` – leader acknowledges as soon as it writes to its log. A follower could still be lagging.  
   - `acks=all` – the leader delays acknowledgment until **every ISR (in‑Sync Replica) has flushed** the record.

Thus, *all* replicas that are guaranteed to stay in sync must commit before the write is confirmed. This guarantees **exactly‑once** semantics for consumers that read from the same topic, because no follower can be out of date when a leader fails.

#### Non‑obvious insight  
`acks=all` does not mean *every* replica, only those in the ISR set. If a follower falls behind long enough to drop out of ISR, the producer will still succeed even though that node has stale data. Hence, to truly eliminate data loss you must also enforce **ISR stability** (e.g., by tuning `replica.lag.time.max.ms`), otherwise a broker can crash with only a subset of replicas holding the record.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
