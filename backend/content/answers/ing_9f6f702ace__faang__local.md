---
qid: ing_9f6f702ace__faang__local
question: 'Explain: Data Record — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 514
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:54:46-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise explanation of the core *data record* concepts in **Amazon Kinesis Data Streams (KDS)**—i.e., what constitutes a record, its fields, and how it flows through shards. I’ll assume the audience knows KDS basics but not the low‑level record schema.

**Approach**  
1. Define the *record* as the atomic unit of ingestion.  
2. List mandatory metadata: partition key, data blob, sequence number, approximate arrival timestamp.  
3. Explain how these tie to shards and consumer APIs (GetRecords).  
4. Highlight size limits and ordering guarantees.

**Depth**  
- **Record structure** – each record is a JSON‑like object with:
  - `PartitionKey` (string): determines shard placement via hash.
  - `Data` (binary blob, up to 1 MiB): the payload.
  - `SequenceNumber` (opaque string): monotonically increasing per shard; used for exact‑once processing and checkpointing.
  - `ApproximateArrivalTimestamp` (timestamp): when KDS received the record; useful for time‑based analytics.
- **Ordering** – records with the same partition key are strictly ordered by sequence number within a shard. Across shards, ordering is not guaranteed.
- **Shard interaction** – producers send to a stream; KDS hashes the partition key to route to one of N shards (each up to 2 MiB/s write). Consumers read sequentially from shards using `GetRecords`, iterating by sequence number or checkpointing via DynamoDB/Consumer Groups.

**Edge Cases**  
- *Large payloads*: split into multiple records; each >1 MiB fails.  
- *High throughput*: sharding must scale to handle burst traffic.  
- *Late‑arriving data*: approximate timestamp may be skewed, but ordering per shard remains intact.

**Optimize & Communicate**  
I’d emphasize that the record’s metadata (partition key + sequence number) is what gives KDS its scalability and consistency guarantees. In practice, choosing a high‑cardinality partition key distributes load evenly; using sequence numbers for checkpointing yields exactly‑once semantics in consumer applications. This structured view aligns with FAANG expectations of clear problem framing, precise technical depth, and awareness of operational edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
