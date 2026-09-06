---
qid: ing_b246a52b48__think__local
question: 'Explain: Durability and Replay — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 460
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:45:37-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Durability*: persistence of messages (storage guarantees).  
- *Replay*: ability to re‑consume past events.  
- Assume a high‑throughput cloud‑native Pub/Sub system (e.g., Kafka, Pulsar, Cloud Pub/Sub) and that we’re designing or evaluating its durability/replay features for downstream consumers.

**2️⃣ Adopt a mental model**  
Treat the Pub/Sub system as a *log* abstraction: append‑only streams of records with offsets/IDs. Durability is about how long the log lives; replay is about exposing those old offsets to new or recovering consumers.

**3️⃣ Reason step‑by‑step**  
1. **Write path** – message → broker → persistent store (disk/SSD).  
2. **Replication strategy** – primary + N followers, quorum for writes (e.g., majority ACK).  
3. **Retention policy** – time‑based vs size‑based; eviction after TTL or when disk is full.  
4. **Consumer state** – each consumer group tracks the last committed offset.  
5. **Replay mechanism** – expose an API to read from a specific offset, rewind, or fetch “earliest”/“latest”.  
6. **Failure handling** – on crash, replay from last stable commit; use checksums or transaction logs for integrity.

**4️⃣ Common traps**  
- Assuming *durability* = *instant replication*: latency can hurt throughput if every write waits for all replicas.  
- Ignoring *backpressure*: fast producers can overwhelm storage before consumers catch up.  
- Forgetting to expose **exact‑once semantics**; replay can cause duplicates unless idempotent processing is in place.

**5️⃣ Sanity‑check & communicate**  
- Verify that retention guarantees match SLAs (e.g., “messages live for 30 days”).  
- Show the consumer’s offset lifecycle diagram.  
- Explain how replay interacts with compaction or log truncation.  

By walking through this framework, you can articulate durability and replay in any Pub/Sub design discussion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
