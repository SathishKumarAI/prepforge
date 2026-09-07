---
qid: ing_ad671d70d6__faang__local
question: 'Explain: Database Events — Using the Publish-Subscribe Model for Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 417
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:26:41-05:00'
sources: []
---

**Clarify**  
We’re asked how a publish‑subscribe (pub/sub) pattern can be used to surface *database events*—changes like inserts, updates or deletes—to consuming applications. I’ll assume the database supports change data capture (CDC) and that we want real‑time notifications without polling.

**Approach**  
1. Capture changes at the source (e.g., logical decoding in PostgreSQL, CDC in MySQL).  
2. Publish each change record to a message broker (Kafka, Pulsar, etc.).  
3. Subscribe applications consume the stream, transform or react, and optionally write back to downstream stores.

**Depth**  
- **CDC Source**: The DB writes WAL entries; a capture process turns them into structured events (`{table, pk, operation, new_values, old_values}`).  
- **Broker**: Topics are partitioned by table or shard. Each event gets a key (primary key) to preserve ordering per row.  
- **Consumer**: Applications register as subscribers; the broker guarantees at‑least‑once delivery and can replay from checkpoints.  
- **Consistency**: Use idempotent writes on consumers, and leverage exactly‑once semantics if supported (e.g., Kafka transactional APIs).  
- **Latency & Throughput**: Typical end‑to‑end latency < 100 ms; throughput scales with partitions.

**Edge Cases**  
- Schema evolution → handle by emitting schema change events.  
- Large blobs or binary data → store in object store and publish a reference.  
- Backpressure if consumers lag → use consumer groups, offset commits, or buffer limits.

**Optimize & Communicate**  
To improve reliability I’d add a *dead‑letter* topic for malformed events and monitor lag metrics. When explaining to interviewers, emphasize that pub/sub decouples source and sink, scales horizontally, and provides auditability—key qualities for mission‑critical ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
