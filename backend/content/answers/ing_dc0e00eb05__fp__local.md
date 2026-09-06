---
qid: ing_dc0e00eb05__fp__local
question: 'Explain: Kinesis Data Stream — Amazon Kinesis Data Streams Terminology
  and concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 407
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:47:06-05:00'
sources: []
---

**Why Kinesis needs “shards”**

A stream is a *partitioned* log.  
If every record were written to one big buffer the throughput would be bounded by
a single write path and a single consumer would become a bottleneck.  
Sharding solves this: each shard is an ordered, immutable sequence of records,
and the system can parallelise writes and reads across shards.  
The total capacity = Σ (shard‑write‑capacity × number of shards).  

**Sequence numbers and ordering**

Every record receives a monotonically increasing *sequence number* within its shard.
Because shards are independent, the global order of records is *not* defined; only
within a shard can you guarantee “record A came before B”.  
This matches the design principle that distributed logs provide **at‑least‑once**
delivery without global ordering—an optimization trade‑off between consistency
and throughput.

**Consumer groups (application shards)**

A consumer group is a logical set of consumers that share the work of reading from
the stream. Each consumer reads one or more shard iterators; the group ensures
that each record is processed by exactly one consumer in the group, achieving
horizontal scaling while preserving *exactly‑once* semantics.

**Non‑obvious insight**

The *iterator type* (`TRIM_HORIZON`, `LATEST`, `AT_SEQUENCE_NUMBER`,
`AFTER_SEQUENCE_NUMBER`) lets you control the *time horizon* of a read.  
Because Kinesis keeps records for 24–168 hours, iterators are not merely cursors
but *temporal windows*. This means that consumers can “rewind” to re‑process data
for debugging or back‑fill, which is essential in event‑driven architectures but
often overlooked when comparing to simpler queue systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
