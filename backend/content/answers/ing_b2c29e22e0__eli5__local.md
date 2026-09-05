---
qid: ing_b2c29e22e0__eli5__local
question: 'Explain: Partition Key — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 234
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:20:21-05:00'
sources: []
---

Think of a Kinesis stream as a long, busy highway that carries cars (data records) to a toll booth for processing.  
The **partition key** is like the license plate you write on each car’s sticker. When a record enters the stream, Kinesis reads its partition key and decides which “lane” (shard) the car will go into. All cars with the same license‑plate value stay in the same lane, so they’re handled together by the same set of servers. This keeps related data close and lets each shard work independently, much like a toll booth can process all cars from one lane without mixing them with another.

*Shard*: A fixed‑size segment of the stream that processes records sequentially.  
*Record*: A single piece of data (e.g., a sensor reading or log line).  

Choosing a good partition key—such as a customer ID or device ID—ensures balanced traffic and preserves order for related events, just like grouping cars by region keeps toll lines efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
