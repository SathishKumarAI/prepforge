---
qid: ing_cedb9a02c4__faang__local
question: 'Explain: Review the high-level architecture of Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 536
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:41:30-05:00'
sources: []
---

**Clarify**  
*Problem:* Describe the end‑to‑end flow of Amazon Kinesis Data Streams (KDS) and its core components.  
*Assumptions to confirm:* we’re focusing on ingestion & real‑time analytics, not Kinesis Firehose or Data Analytics; the audience knows basic AWS concepts but may not know KDS internals.

**Approach**  
1. Outline the **producer → shard → consumer** pipeline.  
2. Detail key services: *Shards*, *Records*, *Retention*, *Consumer Groups*.  
3. Highlight failure handling and scaling knobs.  

**Depth**  
- **Producer side:** Applications write JSON/BSON bytes to a stream via PutRecord/PutRecords. Each record carries a partition key; KDS hashes this key to assign the record to one of the stream’s shards.  
- **Shards:** The smallest unit of parallelism, each shard is an ordered log with 1 MiB/s write and 2 MiB/s read throughput. Shard IDs are immutable; splitting/merging adjusts capacity.  
- **Retention & storage:** Data is kept for a configurable period (default 24 h, max 365 d) in SSD‑backed storage.  
- **Consumer side:** Applications use the Kinesis Client Library (KCL), Enhanced Fan-Out (EFO), or raw GetRecords API to read records. KCL handles checkpointing via DynamoDB, ensuring at‑least‑once delivery and fault tolerance across consumer instances. EFO gives dedicated 2 MiB/s per consumer, eliminating fan‑in bottlenecks.  
- **Scaling:** Auto‑scaling can trigger shard splits/merges based on metrics; CloudWatch alarms feed into Lambda for dynamic reconfiguration.  

**Edge Cases**  
- *Backpressure:* If consumers lag behind writes, shards become full → `ProvisionedThroughputExceededException`.  
- *Shard key collision:* Poor hash distribution leads to hot shards.  
- *Consumer failure:* KCL automatically rebalances; EFO requires manual shutdown handling.  

**Optimize & Communicate**  
Explain trade‑offs: higher shard count → more cost, but better parallelism; EFO vs. shared endpoint depends on consumer concurrency. Emphasize monitoring (CloudWatch metrics like `GetRecords.IteratorAgeMilliseconds`) and alerting to preempt throttling. Conclude with a succinct diagram reference or AWS console screenshot for clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
