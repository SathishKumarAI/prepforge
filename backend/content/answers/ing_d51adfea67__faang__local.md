---
qid: ing_d51adfea67__faang__local
question: 'Explain: Amazon Kinesis Data Streams Terminology and concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 525
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:55:08-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise yet thorough explanation of the key terms used in Amazon Kinesis Data Streams (KDS). I’ll assume the audience is familiar with stream processing but not with KDS specifics.

**Approach**  
I will: 1) list the core entities, 2) define each term, 3) show their relationships, and 4) highlight operational implications. This keeps the answer organized and easy to follow.

**Depth**  

| Term | Definition |
|------|------------|
| **Stream** | A logical container that stores records in order; created by the user. |
| **Shard** | The smallest unit of capacity in a stream, providing 1 MiB/sec input & 2 MiB/sec output throughput. Each shard has its own sequence number space. |
| **Record** | An individual data payload (≤1 MB) written to a shard; carries a partition key and optional timestamp. |
| **Partition Key** | Hash‑key used by KDS to route records to shards, ensuring ordered delivery within the same key. |
| **Sequence Number** | Monotonically increasing identifier assigned per record per shard, enabling precise read positioning. |
| **Consumer (Application)** | Client that reads from a stream; can be an on‑premises app or AWS Lambda/Kinesis Data Analytics job. |
| **Sharding Strategy** | The algorithm (hash or explicit) that maps partition keys to shards. |
| **Retention Period** | Time (default 24 h, up to 365 days) records remain in the stream before purging. |
| **Extended Retention & Snapshotting** | Optional features for long‑term storage and point‑in‑time recovery. |

**Edge Cases**  
- *Shard Overload*: If writes exceed shard limits, KDS throttles; need to increase shards or use enhanced fan‑out.  
- *Sequence Number Gaps*: Due to network delays; consumers must handle missing sequence numbers gracefully.  
- *Consumer Lag*: High read latency can cause lag; monitoring CloudWatch metrics is essential.

**Optimize & Communicate**  
Explain that understanding these terms lets architects design scalable, fault‑tolerant pipelines: choose shard count based on throughput, use partition keys to balance load, and set retention per business need. Conclude by noting that mastering KDS terminology is the foundation for building reliable real‑time data workflows in AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
