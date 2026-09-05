---
qid: ing_14cdefdcd1__fp__local
question: 'Explain: dynamo streams we''ll just touch on this — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 443
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:49:30-05:00'
sources: []
---

**Why Dynamo Streams Exist**

A distributed key‑value store must keep every replica in sync while tolerating network partitions and failures.  In DynamoDB the *commit log* is an append‑only stream of changes—each write becomes a record with a monotonically increasing sequence number (LSN).  The stream is not a “copy” of the data; it’s the *causal trace* that guarantees eventual consistency: any replica can replay the same LSNs to reconstruct its state, and any downstream consumer can process updates in order.

**How It Works**

1. **Append‑only logs per partition key** – each item’s history is a linked list of log entries; the head points to the latest value.
2. **Global sequence numbers (GSI)** – a single counter per table that orders all events across partitions, enabling *global ordering* for consumers.
3. **Sharding and replication** – logs are stored on the same nodes that hold the data, reducing read‑write latency; replicas maintain their own local streams but share the global GSN via gossip.

Consumers (e.g., Lambda, Kinesis) pull records in shards, receiving *NewImage* or *OldImage* snapshots.  The stream guarantees at‑least‑once delivery and preserves order within a shard, which is sufficient for idempotent processing.

**Deeper Principle**

The stream embodies the *causality* axiom of distributed systems: every write is causally linked to its predecessor.  By exposing this causal chain as an external API, DynamoDB turns internal consistency guarantees into a public contract, enabling real‑time analytics, backups, and cross‑region replication without compromising throughput.

**Non‑obvious Insight**

Because each stream record contains the *exact* LSN it was appended with, consumers can detect *stale* updates even if they read from a lagging replica.  This allows applications to implement *eventual consistency checks* locally, reducing unnecessary retries and improving perceived latency—something most users overlook when designing stream‑driven architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
