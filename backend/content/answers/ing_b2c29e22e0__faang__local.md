---
qid: ing_b2c29e22e0__faang__local
question: 'Explain: Partition Key — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 505
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:39:32-05:00'
sources: []
---

**Clarify**  
You’re asking about *partition keys* in **Amazon Kinesis Data Streams (KDS)**—the field that determines how records are distributed across shards. Confirm that the audience knows KDS basics: a stream is split into shards, each shard has 5 MiB/sec write and 2 MiB/sec read capacity, and you need to manage scaling and ordering.

**Approach**  
1. Define what a partition key is and why it matters.  
2. Explain the mechanics of hashing & routing.  
3. Discuss ordering guarantees per shard.  
4. Highlight operational trade‑offs (throughput vs. parallelism).  

**Depth**  
- **Definition**: A *partition key* is an application‑supplied string attached to each record. KDS hashes this key with SHA‑256, takes the first 128 bits, and uses that to map the record to a shard’s hash range.  
- **Routing**: All records sharing the same partition key always land in the same shard, preserving *ordering* for those keys. Different keys are spread across shards based on hash distribution.  
- **Throughput**: Each shard limits write (5 MiB/sec or 1,000 records/sec) and read (2 MiB/sec). Choosing a high‑cardinality key (e.g., UUID) maximizes parallelism; a low‑cardinality key can cause *hot shards* and throttling.  
- **Scaling**: When you split/merge shards, the hash ranges change; existing keys are rehashed accordingly, so data remains correctly routed.

**Edge Cases**  
- Hot shard due to poor key design → throttling.  
- Key collisions (unlikely with SHA‑256) but still possible if custom hashing is used.  
- Updating a stream’s retention period doesn’t affect routing.

**Optimize & Communicate**  
Recommend using *eventual consistent* or *user‑assigned* keys (e.g., device ID) for predictable ordering, and randomizing when high parallelism outweighs order. Explain that choosing the right key is as critical as shard count: “A balanced hash range yields linear scaling; a skewed one limits throughput.” Conclude with best practices: monitor `ThrottledRecords`, test with realistic workloads, and adjust keys or shard counts accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
