---
qid: ing_d51adfea67__fp__local
question: 'Explain: Amazon Kinesis Data Streams Terminology and concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 464
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:33:32-05:00'
sources: []
---

**Why a streaming service needs its own language**

A *data stream* is a continuous, unbounded sequence of records that arrive in real‑time order.  
To process such a stream you must guarantee **exact‑once ordering per key**, while still
scaling to millions of records per second.  
Kinesis Data Streams solves this by partitioning the stream into *shards*, each an ordered buffer with a fixed throughput budget. The terminology is therefore a direct reflection of these constraints.

| Term | First‑principle rationale |
|------|---------------------------|
| **Stream** | A logical pipe that ingests and holds records; its identity is the only thing you need to reference when writing or reading. |
| **Shard** | An atomic unit of parallelism: it provides a single, ordered sequence of records plus a *shard‑level* capacity (write/read limits). Think of it as a “log file” that can be read by one consumer group at a time. |
| **Partition key** | The hash input that deterministically maps a record to a shard; ensures all related records stay in order within the same shard. |
| **Sequence number** | A monotonically increasing identifier assigned by Kinesis when the record lands in a shard. It is the stream’s “time stamp” and the only way to guarantee *exact‑once* processing. |
| **Consumer group** | A logical set of consumers that share the work of reading from shards. Each consumer reads a *shard iterator* pointing at a specific sequence number. |

**Non‑obvious insight**

Because each shard’s capacity is fixed, scaling isn’t about adding more servers but about **splitting a shard**. When a shard exceeds its write limit you *split* it into two new shards with contiguous hash ranges; this keeps the partition key mapping intact while doubling throughput. Conversely, if load drops, you can *merge* two adjacent shards back together. This split/merge operation is the only way Kinesis preserves ordering guarantees across dynamic scaling—a subtlety that most tutorials gloss over.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
