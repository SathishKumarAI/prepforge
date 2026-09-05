---
qid: ing_b2c29e22e0__star__local
question: 'Explain: Partition Key — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 315
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:24-05:00'
sources: []
---

**Situation:**  
When I was building a real‑time fraud detection pipeline for a payment processor, we had to ingest millions of transaction events per second into Amazon Kinesis Data Streams and keep the order of events from the same merchant intact.

**Task:**  
I needed to design the stream so that each merchant’s events stayed on the same shard, ensuring correct ordering while maximizing parallelism and throughput without hitting the 2 MB/second limit per shard.

**Action:**  
I chose the merchant ID as the partition key. In Kinesis, the partition key is hashed by the service to determine which shard an event lands in. By using a deterministic key (merchant ID), all events from that merchant map to the same hash bucket and therefore the same shard. I also implemented adaptive sharding: monitoring shard utilization and automatically splitting shards when a merchant’s traffic exceeded 1 MB/s, while merging under‑used shards during low periods. The stream was set up with 20 initial shards; we added or removed shards via CloudWatch alarms and AWS Lambda functions.

**Result:**  
Throughput rose from 5 MB/s to over 50 MB/s without data loss, and the per‑merchant ordering guarantee allowed our downstream fraud engine to compute accurate rolling windows. I learned that selecting a stable, low‑cardinality partition key is critical for both performance and correctness in Kinesis streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
