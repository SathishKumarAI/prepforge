---
qid: ing_b1c934a844__faang__local
question: 'Explain: Shard — Amazon Kinesis Data Streams Terminology and concepts -
  Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 693
total_tokens: 936
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:37:18-05:00'
sources: []
---

**Clarify**  
We need to explain *sharding* in the context of **Amazon Kinesis Data Streams (KDS)** – i.e., how data is partitioned into shards, why it matters, and what properties each shard guarantees. I’ll assume the audience knows basic stream‑processing concepts but not KDS internals.

**Approach**  
1. Define a *shard* as the smallest unit of parallelism in KDS.  
2. Explain how shards are created/removed (scaling).  
3. Detail the guarantees each shard provides (ordering, throughput).  
4. Show how consumer apps interact with shards via iterators.

**Depth**  

| Concept | What it is | Why it matters |
|---------|------------|----------------|
| **Shard** | A logical container that stores a subset of stream records. Each shard has: 1 MiB/s write capacity and 2 MiB/s read capacity (max). | Enables horizontal scaling; multiple consumers can process shards in parallel. |
| **Partition key** | User‑supplied key used to hash records into shards. KDS maps the hash value to a specific shard range. | Guarantees that all records with the same key stay in order within a shard. |
| **Sharding key (partition key)** | The actual field chosen by the producer. | Determines data locality; bad choice can cause “hot” shards. |
| **Shard iterator** | Token that points to a position in a shard’s event stream (TRIM_HORIZON, AT_TIMESTAMP, etc.). | Consumers use it to read sequentially; iterators are immutable once created. |
| **Scaling** | `CreateStream`, `IncreaseStreamRetentionPeriod`, and `UpdateShardCount` allow adding/removing shards at runtime. | Adjust throughput without downtime. |
| **Ordering guarantee** | Within a shard, records are strictly ordered by arrival time. Across shards, no ordering is guaranteed. | Important for stateful processing; design must tolerate out‑of‑order events across shards. |

**Edge cases**  
- *Hot shard*: If many producers use the same partition key, one shard can hit its 1 MiB/s limit → throttling. Test by sending burst traffic with identical keys.  
- *Shard iterator expiration*: Iterators expire after 5 minutes; long‑running consumers must refresh.  
- *Scaling race conditions*: Simultaneous `UpdateShardCount` calls may conflict; KDS rejects overlapping operations.

**Optimize & communicate**  
To avoid bottlenecks, recommend distributing partition keys (e.g., hash of a composite key) and monitoring shard utilization via CloudWatch metrics (`IncomingBytes`, `OutgoingBytes`). If any shard approaches its limits, trigger an auto‑scaling policy. Explain that the trade‑off is between cardinality (more shards → higher parallelism but more management overhead) and cost.

**Summary**  
A *shard* in Kinesis Data Streams is a fixed‑size, ordered container with bounded read/write throughput. Producers hash partition keys to route records to shards; consumers use shard iterators to read sequentially. Scaling adds/removes shards while preserving ordering guarantees within each shard. Proper key design and monitoring prevent hot shards and ensure efficient, fault‑tolerant stream processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
