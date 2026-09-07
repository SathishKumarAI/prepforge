---
qid: ing_bdfb9a576e__faang__local
question: 'Explain: Change data capture (CDC) — Open sourcing Brooklin: Near real-time
  data streaming at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 497
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:04:18-05:00'
sources: []
---

**Clarify**  
You’re asking how *Change Data Capture* (CDC) works and why the open‑source project **Brooklin** was created for near‑real‑time streaming at scale. I’ll assume you want an overview of CDC concepts, Brooklin’s architecture, and its benefits versus other solutions.

**Approach**  
1. Define CDC fundamentals.  
2. Explain Brooklin’s core components (source connectors, stream processors, sinks).  
3. Highlight scaling & fault‑tolerance strategies.  
4. Contrast with alternatives like Kafka Connect or Debezium.  

**Depth**  
CDC captures row‑level changes in a database by reading transaction logs (binlogs for MySQL/PostgreSQL, redo logs for Oracle) and emitting change events (`INSERT`, `UPDATE`, `DELETE`) as structured records. Brooklin, built on Apache Flink, provides:  
- **Source connectors** that tail the log, deserialize to Avro/JSON, and publish to a distributed topic.  
- A **streaming engine** that guarantees at‑least‑once semantics, performs schema evolution, and can apply transformations.  
- **Sink connectors** that write to Kafka, HDFS, or other targets with exactly‑once delivery via transactional writes.  
Scalability comes from Flink’s parallelism: each task slot processes a subset of partitions, allowing horizontal scaling across a cluster. Fault tolerance is achieved by checkpointing state in distributed storage (e.g., GCS) and replaying from the last offset on failure.

**Edge cases**  
- **Schema changes**: Brooklin supports automatic schema registry updates but may need manual intervention for incompatible alterations.  
- **Back‑pressure**: If sinks lag, source connectors pause; you must tune buffer sizes to avoid overflow.  
- **Latency spikes**: Large transaction batches can increase per‑event latency—monitor and adjust windowing.

**Optimize & Communicate**  
To improve throughput, enable compression on the source connector and use key partitioning that aligns with downstream query patterns. I’d explain this trade‑off: higher compression reduces network load but adds CPU overhead. In a FAANG interview, I’d finish by summarizing how Brooklin blends CDC’s low latency with Flink’s elastic scaling, making it a compelling choice for mission‑critical data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
