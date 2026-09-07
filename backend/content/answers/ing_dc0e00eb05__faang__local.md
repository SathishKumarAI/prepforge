---
qid: ing_dc0e00eb05__faang__local
question: 'Explain: Kinesis Data Stream — Amazon Kinesis Data Streams Terminology
  and concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 699
total_tokens: 944
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:10:09-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise overview of the key terms used when working with **Amazon Kinesis Data Streams (KDS)**—the building blocks that let you ingest, process, and analyze real‑time data at scale.

**Approach**  
I’ll:  
1. List each core concept.  
2. Define it in plain language.  
3. Show how the pieces fit together (producer → shard → consumer).  
4. Note any limits or common pitfalls.

**Depth**

| Term | What it is | Why it matters |
|------|------------|----------------|
| **Stream** | A logical container for a sequence of data records. | Your “bucket” that holds all incoming events. |
| **Shard** | The basic throughput unit; a single, ordered partition of a stream. Each shard supports up to 1 MB/s write + 2 MB/s read (or 1000 records/sec). | Determines parallelism and capacity; you scale by adding shards. |
| **Record** | A payload (JSON, binary, etc.) plus metadata (partition key, sequence number). | The smallest unit of data that flows through KDS. |
| **Partition Key** | User‑supplied value used to hash a record into a shard. | Guarantees ordering per key and balances load across shards. |
| **Sequence Number** | Immutable identifier assigned by KDS; monotonically increasing within a shard. | Enables precise checkpointing and replay of data. |
| **Consumer (Application)** | Any process that reads from the stream (Kinesis Client Library, Firehose, Lambda). | Consumes records for downstream processing or storage. |
| **Checkpoint** | The sequence number last successfully processed by a consumer. | Allows fault‑tolerant reprocessing after failures. |
| **Retention Period** | How long KDS keeps data before automatic deletion (default 24 h, max 365 days). | Controls cost and compliance; longer retention requires higher throughput. |
| **Enhanced Fan-Out (EFO)** | Dedicated consumer endpoints that give each consumer up to 2 MB/s read without sharing shards. | Eliminates “shard contention” for high‑volume consumers. |

**Edge Cases**  
- *Shard split/merge*: Changing shard count can lead to rebalancing and temporary duplication if not handled carefully.  
- *Record size >1 MB*: Must be broken into multiple records; otherwise ingestion fails.  
- *High write bursts*: Exceeding per‑shard limits causes throttling unless you add shards or use EFO.  

**Optimize & Communicate**  
When designing a KDS architecture:  
1. **Start with throughput estimates** → compute required shard count.  
2. **Choose partition keys** that distribute load evenly (e.g., hashed user ID).  
3. **Decide on retention** based on analytics window and cost.  
4. **Select consumer model** (KCL for stateful processing, Lambda for stateless event‑driven logic, or EFO if many consumers need low latency).  

Explain these decisions to stakeholders by mapping them back to business goals: “We’ll add 10 shards to support 50 k events/sec and enable EFO so each downstream service can process data independently without contention.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
