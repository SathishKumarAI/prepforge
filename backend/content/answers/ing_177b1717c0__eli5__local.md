---
qid: ing_177b1717c0__eli5__local
question: 'Explain: When to choose sharded clusters — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 216
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:12:54-05:00'
sources: []
---

Imagine your data is a huge library that keeps growing faster than any single shelf can hold.  
A **sharded cluster** is like splitting the library into many smaller sections (shards), each on its own shelf, but still letting you search the whole collection as if it were one book.

Use sharding when:

* The total size of your data exceeds what a single server’s disk or memory can comfortably hold.  
* You need to keep read and write speeds high even as the database grows.  
* Your queries touch many different records, so spreading them across shelves reduces the load on any one node.

A shard is just a regular MongoDB server that stores part of the data; a **cluster** is the collection of those shards plus a router (mongos) that directs client requests to the right shard. Sharding adds complexity, so keep it only when your application truly needs horizontal scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
