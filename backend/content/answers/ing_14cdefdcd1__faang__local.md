---
qid: ing_14cdefdcd1__faang__local
question: 'Explain: dynamo streams we''ll just touch on this — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 505
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:31:33-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of **DynamoDB Streams**, its purpose, how it works under the hood, and why it matters for building a hyper‑scale database. Assume we’re speaking to someone who knows basic DynamoDB operations but not the stream internals.

**Approach**  
1. Define what streams are (an append‑only log of table changes).  
2. Explain record structure and delivery semantics.  
3. Highlight integration points (Lambda, Kinesis, custom consumers).  
4. Touch on performance implications (throughput, latency).  

**Depth**  
- **How it works:** When a table is enabled for streams, each write operation (PutItem, UpdateItem, DeleteItem) generates a record containing the new and/or old image of the item, along with metadata (event ID, timestamp, sequence number). These records are written to a *shard* that preserves order per partition key.  
- **Retrieval:** Consumers read from shards via `GetShardIterator`, pulling batches in chronological order. The API guarantees at‑least‑once delivery; consumers must idempotently process events.  
- **Integration:** AWS Lambda can be triggered automatically on stream changes, allowing real‑time analytics or replication. Alternatively, developers can consume streams through Kinesis Data Streams or custom clients for batch processing.  
- **Scalability & Latency:** DynamoDB Streams scales with the table’s write throughput (up to 10 MB/s per shard). Because records are stored in a dedicated stream table, read operations on the primary table aren’t affected.  

**Edge Cases**  
- Deleting or expiring items leaves tombstone records; consumers must handle them.  
- High‑frequency writes to the same partition can saturate a single shard, causing backpressure.  
- Streams are eventually consistent; very recent changes may not appear immediately.

**Optimize & Communicate**  
Explain that streams enable *event‑driven architectures* without impacting OLTP performance—essential for microservices, real‑time analytics, and cross‑region replication. Mention trade‑offs: extra storage cost (~5 % of table size) and the need to design idempotent consumers. Conclude by noting how DynamoDB’s stream implementation underpins many hyper‑scale patterns discussed in the 2018 AWS re:Invent talk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
