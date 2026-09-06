---
qid: ing_9f6f702ace__fp__local
question: 'Explain: Data Record — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 561
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:44:26-05:00'
sources: []
---

### Why a *data record* is the heart of Kinesis

When you stream raw events into a distributed system, you must decide **how to package them** so that:

1. **Durability** – every byte survives failures.
2. **Ordering** – consumers can read in the same sequence they were produced (within a shard).
3. **Scalability** – many producers and consumers can operate concurrently without contention.

A *data record* is Kinesis’s minimal unit that satisfies all three constraints:

| Property | Design choice |
|----------|---------------|
| Size ≤ 1 MiB | Keeps write throughput bounded; prevents a single huge blob from monopolizing a shard. |
| Key‑value payload (partition key + data) | The partition key is hashed to a shard, giving deterministic placement while still allowing arbitrary user data. |
| Optional *sequence number* | Assigned by Kinesis on ingestion, enabling precise checkpointing and replay. |

#### From the fundamental problem

The core challenge is **continuous, low‑latency ingestion** into a horizontally scalable store that preserves order per logical stream. A record must be small enough to be replicated across multiple nodes quickly, yet rich enough to carry context (e.g., timestamp, event type). By fixing the size ceiling and requiring a partition key, Kinesis turns an unstructured flow of bytes into a *partitioned* stream: each shard becomes a linear log that can be processed in parallel.

#### Connection to deeper principles

- **Information theory** – The record’s key is hashed; this is a deterministic, low‑entropy mapping that distributes load uniformly (hash‑based partitioning).  
- **Geometric view** – Think of shards as disjoint intervals on the unit circle; each record’s hash lands it in one interval.  
- **Optimization** – Bounded size + sequence numbers let Kinesis maintain *exactly‑once* semantics without global coordination, a classic trade‑off between consistency and throughput.

#### Non‑obvious insight

Most users focus on the 1 MiB limit, but the real constraint is **the *per‑shard* write rate**: each shard can ingest at most ~1000 records/sec or ~5 MiB/s. The record size directly determines how many shards you need for a given throughput. Therefore, when designing a schema, you should *group logically related events into the same partition key* so they stay in one shard, but also *split large payloads across multiple records* to avoid hitting per‑shard limits. This subtle balancing act often dictates whether your stream will scale linearly or hit a bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
