---
qid: ing_bc3acc78d9__faang__local
question: 'Explain: Common Use Cases — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 447
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:00:30-05:00'
sources: []
---

**Clarify**  
You’re asking how CDC fits into ML pipelines and what system‑design patterns support it. I’ll assume we need near‑real‑time ingestion of relational data, transformation for feature stores, and fault‑tolerant replay.

**Approach**  
1. Capture changes at source (DB logs or triggers).  
2. Stream them to a message broker (Kafka/Kinesis).  
3. Consume into an ingest service that normalizes and writes to a feature store (e.g., Feast, Delta Lake).  
4. ML models consume the feature store; updates propagate downstream.

**Depth**  
- **Capture**: Use binlog readers for MySQL/PostgreSQL or CDC APIs for NoSQL. Ensure idempotence via transaction IDs.  
- **Transport**: Partition by entity key to preserve ordering; use exactly‑once semantics (Kafka 0.11+).  
- **Ingest**: Stateless workers apply schema evolution, enrich with static data, and batch writes to the store. Complexity O(n) per record, latency < 200 ms.  
- **Feature Store**: Persist snapshots + delta tables; expose REST/GRPC APIs for feature lookup. Cache hot features in Redis to reduce read latency.  
- **Fault Tolerance**: Retain offsets in a durable store; replay on consumer failure; use checkpointing.

**Edge Cases**  
- Schema changes mid‑stream → trigger re‑schema migration.  
- Duplicate records due to retries → dedupe with unique keys.  
- Backpressure when downstream is slow → apply back‑pressure or buffering queues.

**Optimize & Communicate**  
- Batch commits every 100 k records to reduce I/O, yet keep a watermark for freshness.  
- Use vectorized processing (Spark Structured Streaming) if volume spikes.  
- Explain trade‑offs: higher throughput vs. increased latency; strict consistency vs. availability in distributed brokers.  

This design scales from millions of daily changes to real‑time model updates while keeping the pipeline robust and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
