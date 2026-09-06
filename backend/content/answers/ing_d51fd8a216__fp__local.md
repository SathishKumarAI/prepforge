---
qid: ing_d51fd8a216__fp__local
question: 'Explain: Retention Period — Amazon Kinesis Data Streams Terminology and
  concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 457
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:33:36-05:00'
sources: []
---

**Retention period in Kinesis Data Streams**

A Kinesis stream is a distributed log: records are appended, never overwritten.  
The *retention period* is the duration that each record remains available for
any consumer to read from the point of ingestion.  

Why this matters:  
- **Stateful processing** – Many analytics jobs maintain state (e.g., aggregations,
  joins). If a consumer fails or needs to re‑process, it must be able to
  replay older records; otherwise its state becomes inconsistent.  
- **Cost–latency trade‑off** – Longer retention means more storage per shard
  and higher costs, but it eliminates the need for external checkpoints.
  Shorter retention keeps costs low but forces consumers to store checkpoints
  externally (e.g., DynamoDB) and limits reprocessing windows.

Retention is derived from the underlying log‑based architecture:
each shard stores a sequence of records in order; keeping them indefinitely would
grow unbounded. Kinesis imposes a *minimum* of 24 h, ensuring that at least one
day’s worth of data can be replayed without external storage.  
The maximum (365 days) is set by the service to balance durability with
resource limits.

**Non‑obvious insight:**  
Extending retention does **not** increase throughput or latency; it only
expands the window during which a consumer can recover from failures.
Thus, in practice, you tune retention based on *replay needs*, not on how
fast data arrives.  

In short: the retention period is a deliberate design choice that turns a
write‑once log into a durable, replayable stream while keeping storage costs
under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
