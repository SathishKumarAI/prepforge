---
qid: ing_b1c934a844__eli5__local
question: 'Explain: Shard — Amazon Kinesis Data Streams Terminology and concepts -
  Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 201
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:18:45-05:00'
sources: []
---

Think of a **shard** like a single lane on a busy highway that carries cars (data records) from many drivers (applications).  
In Amazon Kinesis Data Streams, every stream is split into one or more shards to let the traffic flow smoothly and keep the road (the stream) scalable.  

- **Shard**: a partition of the stream that holds a portion of all incoming records.  
- **Capacity**: each shard can handle up to 1 MB/s of data write and 2 MB/s read, plus 5 kRecords/s.  
- **Scaling**: if traffic grows, you add more lanes (shards); if it shrinks, you merge lanes.  

So, a shard is simply a lane that guarantees a guaranteed amount of throughput for the part of your data stream that passes through it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
