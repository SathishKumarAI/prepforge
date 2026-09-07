---
qid: ing_1c40a002e5__faang__local
question: 'Explain: Ordering — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 484
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:50:38-05:00'
sources: []
---

**Clarify**  
The interview asks how you would design a system that ingests *Change‑Data‑Capture* (CDC) events and then produces an **ordered stream** of those changes for downstream consumers.  
Key assumptions to confirm:  
- Source systems emit CDC as inserts/updates/deletes with primary keys and timestamps.  
- Ordering must be deterministic per key and globally across keys if required.  
- Latency tolerance, throughput, fault‑tolerance, and durability are business constraints.

**Approach**  
1. **Ingestion Layer** – use a Kafka or Pulsar topic for raw CDC events; each record contains `{key, payload, ts}`.  
2. **Partitioning & Keying** – partition by hash(key) to preserve per‑key order within a partition.  
3. **Ordering Service** – a stateless worker consumes from partitions, buffers out‑of‑order messages using a min‑heap keyed by timestamp, and emits only when the next expected sequence is available or after a configurable delay (to handle late arrivals).  
4. **State Store** – use RocksDB/Redis to persist the last emitted offset per key for recovery.  
5. **Sink Layer** – publish ordered events to downstream systems via Kafka topics or REST APIs.

**Depth**  
- *Complexity*: O(log N) per event for heap operations; throughput limited by partition count.  
- *Fault‑tolerance*: Kafka’s replication + checkpointing of offsets ensures no data loss; the worker can resume from persisted state.  
- *Trade‑offs*: Larger buffers improve ordering guarantees but increase latency; tighter buffer limits reduce latency at risk of reordering.

**Edge Cases**  
- Duplicate CDC records → dedupe via key+timestamp in the state store.  
- Clock skew → use logical timestamps or vector clocks if multiple sources.  
- Partition churn → rebalance with graceful handover to avoid duplicate ordering.

**Optimize & Communicate**  
Explain that scaling is achieved by increasing partitions and workers; adding a Bloom filter can reduce memory for known keys. Emphasize that the design balances **ordering guarantees**, **latency**, and **throughput**, which are critical for real‑time analytics or transactional systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
