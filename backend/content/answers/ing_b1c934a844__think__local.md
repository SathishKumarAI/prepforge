---
qid: ing_b1c934a844__think__local
question: 'Explain: Shard — Amazon Kinesis Data Streams Terminology and concepts -
  Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 468
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:43:58-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify that “shard” refers specifically to *Amazon Kinesis Data Streams* (not Firehose or other services).  
- Assume the audience has basic AWS knowledge but may be new to streaming concepts.  
- Decide whether to explain only the term itself or also its role in throughput and partitioning.

**2️⃣ Adopt a mental model**  
Think of a shard as a *partitioned buffer*—a logical unit that guarantees order for records written to it, much like a Kafka topic‑partition.  Map this to:  
- **Capacity** (read/write limits) → “shard capacity”  
- **Ordering guarantee** within the shard  
- **Scalability** via adding/removing shards

**3️⃣ Step‑by‑step reasoning**  
1. Define what Kinesis Data Streams are.  
2. Explain that a stream is composed of one or more shards.  
3. Describe the two key attributes of a shard: 64 MiB/s read + 128 KiB per second write (or the updated limits).  
4. Show how each shard gets a unique hash‑key range, so records are distributed across shards by partition key.  
5. Explain that consumers use *shard iterators* to read sequentially from a shard.  
6. Mention scaling: split/merge operations change the number of shards and thus throughput.

**4️⃣ Avoid common pitfalls**  
- Don’t mix “shard” with “partition key”; they’re related but distinct.  
- Don’t assume shards are physical servers; they’re logical abstractions.  
- Don’t overlook that each shard’s capacity is *per second*—exceeding it causes throttling.

**5️⃣ Sanity‑check & communicate**  
- Re‑phrase the definition in plain language: “A shard is a unit of storage and throughput that guarantees record order for a subset of your data.”  
- Verify limits against current AWS docs (they can change).  
- If explaining verbally, ask if the audience has questions about scaling or ordering to confirm understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
