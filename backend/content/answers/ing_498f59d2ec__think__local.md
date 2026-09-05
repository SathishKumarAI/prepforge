---
qid: ing_498f59d2ec__think__local
question: 'Explain: Common Patterns — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 444
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:17:04-05:00'
sources: []
---

**1. Clarify the ask & assumptions**  
   - Confirm that “Common Patterns – Pub/Sub” refers to messaging patterns used in ML pipelines (e.g., data ingestion → feature store).  
   - Assume the audience knows basic system‑design terms but not necessarily ML‑specific usage.

**2. Choose a mental model**  
   - Treat the design as a *pipeline graph*: sources → processors → sinks.  
   - Map Pub/Sub onto this graph: publishers = producers, subscribers = consumers.  
   - Use the “decoupled producer–consumer” paradigm to highlight scalability and fault tolerance.

**3. Step‑by‑step reasoning**  
   1. **Identify data flows** (raw sensor → feature extraction → model inference).  
   2. **Decouple stages**: each stage publishes a topic; downstream stages subscribe.  
   3. **Select broker & QoS**: e.g., Kafka for high throughput, Pulsar for multi‑tenant isolation.  
   4. **Define message schema** (Avro/Protobuf) to enforce contract evolution.  
   5. **Add metadata** (timestamps, partition keys) to support ordering and replay.  
   6. **Plan scaling**: partitions → parallel consumers; topic replication for durability.

**4. Common traps to avoid**  
   - *Tight coupling*: don’t hard‑code schema changes into consumer logic.  
   - *Back‑pressure neglect*: ignore lag metrics, leading to message loss or latency spikes.  
   - *Over‑partitioning*: too many partitions increase overhead without throughput gains.

**5. Sanity‑check & verbalize**  
   - Run a mental “data‑flow audit”: every event must be produced, persisted, and consumed exactly once (or at least once) as required.  
   - Explain trade‑offs: durability vs latency, ordering guarantees vs horizontal scalability.  
   - Summarize with a diagram or pseudo‑code snippets to solidify the pattern in the listener’s mind.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
