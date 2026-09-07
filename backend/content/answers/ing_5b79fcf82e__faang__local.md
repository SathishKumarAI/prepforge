---
qid: ing_5b79fcf82e__faang__local
question: 'Explain: At-most once — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 471
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:56-05:00'
sources: []
---

**Clarify**  
The interview asks for *at‑most‑once delivery semantics* in ML pipelines—i.e., guarantees that a data record is processed **no more than once**, but may be lost. Confirm assumptions: we’re dealing with distributed ingestion/processing (e.g., Kafka → Spark), not just single‑node execution; persistence and idempotency are key.

**Approach**  
1. Identify sources of duplication (network retries, broker replays).  
2. Store a unique identifier per record in durable storage.  
3. Use an *exactly‑once* or *at‑least‑once* processing framework that can de‑duplicate via the stored IDs.  
4. Accept that some records may never be processed if lost.

**Depth**  
- **Deduplication table**: a key–value store (e.g., RocksDB, Redis) mapping record ID → processed flag.  
- On ingestion, check the table; skip if present.  
- For idempotent operations (e.g., writes to HDFS), repeat‑safe actions avoid side effects.  
- In frameworks like Kafka Streams or Flink, enable *checkpointing* and *stateful operators* so that after a failure the state (dedup table) is restored exactly as before.  
- Complexity: O(1) lookup per record; storage cost proportional to unique IDs.  

**Edge Cases**  
- **Clock skew**: ensure IDs are stable, not timestamp‑based.  
- **State corruption**: implement periodic snapshots or use ACID databases.  
- **High cardinality**: consider Bloom filters for approximate deduplication with false positives (acceptable if loss tolerable).  

**Optimize & Communicate**  
- Trade‑off: stronger guarantees (exactly‑once) require more expensive stateful processing; at‑most‑once trades off occasional reprocessing for simplicity.  
- Explain that in ML, losing a few training examples is often acceptable, so at‑most‑once gives lower latency and higher throughput while keeping correctness intact.  
- Communicate this balance clearly to stakeholders: *We’ll never double‑count, but we might drop a minority of samples.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
