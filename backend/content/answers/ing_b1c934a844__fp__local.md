---
qid: ing_b1c934a844__fp__local
question: 'Explain: Shard — Amazon Kinesis Data Streams Terminology and concepts -
  Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 445
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:07-05:00'
sources: []
---

**Shard – the elementary throughput unit of an Amazon Kinesis data stream**

*The problem it solves.*  
When a stream receives billions of records per second, all of them cannot be processed by a single consumer or even a single server. We need to split the traffic into *parallel lanes* that can each be read and written independently while preserving order within each lane.

*Why a shard works this way.*  
A **shard** is a contiguous range of hash‑key values (0–2^128−1). Each record is hashed, and its key determines which shard receives it. This deterministic assignment gives two guarantees:

1. **Ordered delivery** – all records that fall into the same shard arrive in the order of their sequence numbers, enabling stateful consumers.
2. **Scalable throughput** – each shard can handle up to 1 MiB/s write and 2 MiB/s read (plus a limited number of API calls). By adding shards we linearly increase capacity without rebalancing the whole stream.

*Deep principle.*  
The hash‑key partitioning is essentially a **hash table** on the data stream. It turns an unstructured input into a *distributed key–value store*, where the key is the record’s hash. This reduces contention to O(1) per shard and allows independent scaling, mirroring how sharding in databases distributes load.

*Non‑obvious insight.*  
Because shards are immutable once created (except when splitting or merging), **consumer groups can be added without re‑hashing** all data. New consumers simply attach to existing shards; the stream’s throughput does not change until you explicitly split a shard. This gives Kinesis an *elastic* property: you pay for exactly the capacity you need at any time, and you can increase it on demand by adding new shards.

In short, a shard is a hash‑partitioned, ordered buffer that lets Amazon Kinesis provide linear scalability while preserving local ordering—an elegant application of hashing to distributed streaming.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
