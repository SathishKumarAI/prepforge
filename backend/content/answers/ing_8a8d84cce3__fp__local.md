---
qid: ing_8a8d84cce3__fp__local
question: 'Explain: Capacity Mode — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 421
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:59:09-05:00'
sources: []
---

**Capacity Mode – the “budget” of a Kinesis stream**

A Kinesis stream is nothing more than a set of *shards*.  
Each shard has a fixed I/O budget: it can ingest **1 MiB/s** (or 1000 records/s) and deliver the same amount downstream.  
When you create a stream you choose how many shards you need – that is your *capacity mode*.

---

### Why this design?

Kinesis is built for *real‑time ingestion*.  
If every shard could grow on demand, the system would have to keep redistributing data in‑flight, breaking the guarantees of order and latency.  
By fixing each shard’s throughput you obtain a **deterministic resource allocation** that can be met by the underlying storage layer without dynamic scaling.

---

### Deeper principle: *linear scalability as a compositional law*

Each shard is an independent “processor” with linear capacity.  
The total stream capacity is simply the sum of its shards’ capacities:

\[
C_{\text{total}} = \sum_{i=1}^{n} C_{\text{shard}}
\]

This additive property lets you reason about costs, performance and fault‑tolerance by treating shards as building blocks—exactly how you would compose parallel processors in a distributed system.

---

### Non‑obvious insight

The *capacity mode* is not just a cost or throughput knob; it also dictates **data ordering guarantees**.  
Within a shard records are strictly ordered, but across shards they are not.  
Thus the number of shards (i.e., capacity) directly limits how many distinct partitions of your data can be processed in parallel while preserving order per key.  
Choosing the right mode is therefore a trade‑off between *throughput* and *order granularity*, a subtlety that often gets overlooked when people focus only on cost or speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
