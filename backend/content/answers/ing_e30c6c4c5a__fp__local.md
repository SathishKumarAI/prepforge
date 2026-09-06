---
qid: ing_e30c6c4c5a__fp__local
question: 'Explain: Consumer — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 434
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:02:34-05:00'
sources: []
---

**Why we need a streaming backbone**

Modern e‑commerce sites produce millions of events (clicks, purchases, inventory changes) every minute. A consumer application must **receive each event once and in order**, while the data producer can burst at any rate. The problem is to buffer *high‑throughput, low‑latency* streams without a single point of failure.

**Kinesis Data Streams as an optimal solution**

1. **Partitioned log** – A stream is split into shards; each shard is an ordered sequence of records with a fixed write capacity (1 MB/s or 1000 records/s).  
   *Why this works:* It turns a global ordering problem into many independent, linear logs that can be processed in parallel. The shard size is the fundamental unit of scalability: adding shards increases throughput linearly.

2. **Exactly‑once semantics with sequence numbers** – Each record receives a monotonically increasing sequence number per shard. Consumers keep the last sequence number they processed.  
   *Why this works:* It eliminates duplicates by letting consumers resume from the precise point where they left off, regardless of failures or network glitches.

3. **Retention period (default 24 h, up to 365 days)** – Records are kept on disk for a configurable window.  
   *Why this works:* Consumers can be late or re‑process data without hitting the source again; the cost is proportional to storage, not compute.

**Non‑obvious insight**

The shard design mirrors *distributed hash tables* in that keys (partition keys) deterministically map to shards. However, unlike DHTs where a key’s location must stay fixed, Kinesis allows **shard rebalancing**—merging or splitting shards at runtime—without changing the consumer logic. This elasticity turns a static log into a *self‑scaling* stream, keeping throughput proportional to demand while preserving strict ordering per shard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
