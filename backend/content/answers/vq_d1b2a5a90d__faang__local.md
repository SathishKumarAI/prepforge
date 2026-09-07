---
qid: vq_d1b2a5a90d__faang__local
question: While sqooping some data loss. how to handle that?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 422
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:35:03-05:00'
sources: []
---

**Clarify**  
You’re ingesting streaming data and occasionally see records drop (e.g., network hiccups, back‑pressure). I’ll assume: *1) the source is a Kafka/IoT stream;* *2) you have downstream sinks that require exactly‑once semantics;* *3) loss tolerance isn’t zero – we can afford bounded retries.*  

**Approach**  
1. **Detect**: enable metrics (Kafka consumer lag, retry counts).  
2. **Recover**: use idempotent writes or transaction logs to replay missing tuples.  
3. **Persist**: buffer unacknowledged records in a durable store (e.g., RocksDB, S3).  
4. **Alert**: surface anomalies to ops via PagerDuty.

**Depth**  
- *Consumer* reads with `enable.auto.commit=false` and manually commits after successful sink writes.  
- On failure, retry up to N times; if still failing, write the record to a “dead‑letter” queue (DLQ) for later inspection.  
- Use Kafka’s **exactly‑once** semantics (`transactional.id`) or Spark Structured Streaming’s checkpointing to avoid duplicates.  
- Complexity: O(1) per message for buffering; overall latency increases by retry window.

**Edge Cases**  
- **Duplicate** records if consumer replays after a crash → idempotent sink or deduplication layer.  
- **Back‑pressure** causing buffer overflow → apply back‑pressure to upstream producers.  
- **DLQ saturation** → periodic batch job to analyze and replay.

**Optimize & Communicate**  
Explain that we trade a tiny retry window for eventual consistency, keeping operational overhead low while guaranteeing no data loss beyond the DLQ threshold. Share this plan in a diagram: source → consumer (manual commit) → sink (transactional) → DLQ. This shows clear responsibilities and failure paths, aligning with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
