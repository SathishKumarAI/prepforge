---
qid: ing_199f8d710e__fp__local
question: 'Explain: In-Sync Replicas (ISR) — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 376
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:42-05:00'
sources: []
---

**In‑Sync Replicas (ISR)** is Kafka’s safety net for durability and consistency.  
At its core, a broker cluster must guarantee that every write made to a topic partition is *durably* stored before the producer can consider it committed. This requirement stems from the **CAP theorem**: in a distributed system we cannot simultaneously have perfect Consistency, Availability, and Partition‑Tolerance; Kafka chooses consistency over availability during writes.

When a leader broker receives a record, it appends it to its local log and then *asynchronously* replicates that entry to follower brokers. A follower is considered **in‑sync** only if the replica’s offset matches the leader’s current log end offset (within a configurable lag). The set of such followers forms the ISR. Only replicas in this set are eligible to become new leaders during a failure.

Why must it work this way?  
1. **Atomicity across replicas**: If a follower lags too far, promoting it as leader would expose consumers to stale data or partial writes—violating consistency.  
2. **Fault tolerance**: The ISR size dictates the minimum number of brokers that must remain operational for the partition to stay available. Kafka’s `min.insync.replicas` setting enforces this at write time.

A non‑obvious insight is that ISR is *not* merely a health check; it is an **implicit sliding window** over the log that guarantees that any commit acknowledged by producers is also present on all replicas that could serve future reads. This ensures *exactly‑once* semantics for consumer offsets when combined with idempotent producers, even though replication itself is asynchronous.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
