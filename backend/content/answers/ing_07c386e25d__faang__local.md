---
qid: ing_07c386e25d__faang__local
question: 'Explain: Data Warehousing — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 476
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:02:14-05:00'
sources: []
---

**Clarify**  
We’re asked how a data warehouse can ingest incremental changes from operational sources—Change Data Capture (CDC). Key assumptions:  
1) The source system exposes change events (log‑based or trigger‑driven).  
2) Latency tolerance is low (minutes to seconds).  
3) The warehouse must support both full loads and streaming updates.

**Approach**  
1. **Capture** – read the source’s transaction log or use database triggers to emit a stream of change records (insert, update, delete).  
2. **Transport** – push these events into a fault‑tolerant queue (Kafka, Pulsar) with topic partitioning per table.  
3. **Transform & Load** – a streaming job (Flink/Beam) consumes the queue, applies schema evolution rules, and writes to a staging area (S3, HDFS).  
4. **Materialization** – incremental MERGE or UPSERT into the warehouse tables (Snowflake, BigQuery, Redshift Spectrum).  

**Depth**  
- Use **CDC connectors** (Debezium) for log‑based capture; they provide idempotent offsets and schema change handling.  
- The streaming job must be exactly‑once to avoid duplicate rows; leverage Kafka’s transactional APIs or use checkpointing in Flink.  
- For deletes, store a tombstone marker or a “deleted” flag so downstream analytics see the correct state.  
- Complexity: O(1) per event for capture, O(log N) for merge depending on index.

**Edge Cases**  
- Schema evolution (new columns) → versioned Avro/Parquet schema registry.  
- Back‑out scenarios where a batch of events must be rolled back; use transactional writes.  
- Network partitions causing duplicate messages; idempotent upserts handle this.

**Optimize & Communicate**  
Explain trade‑offs: log‑based CDC gives low latency but requires storage for the log; trigger‑based is simpler but can overload OLTP. Stress that a well‑designed pipeline keeps data fresh while preserving analytics consistency, and highlight monitoring (offset lag, error rates) as key to operational reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
