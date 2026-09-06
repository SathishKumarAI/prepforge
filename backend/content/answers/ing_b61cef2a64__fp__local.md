---
qid: ing_b61cef2a64__fp__local
question: 'Explain: Partitions and data distribution — AWS-Services/1_Databases/AmazonDynamoDB/Partioning.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 414
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:31:21-05:00'
sources: []
---

**Why DynamoDB must partition**

A key‑value store that promises *single‑digit millisecond* reads and writes at any scale faces a hard limit: the amount of data an individual server can hold or process is finite (memory, I/O, network).  
If all items were kept on one machine, the throughput would be bounded by that machine’s capacity.  To keep *throughput linear in size*, DynamoDB splits its logical table into many **partitions** (physical shards) and spreads them across servers.

**How partitions are chosen**

The partition key is hashed to a 128‑bit value.  
That hash is then mapped onto the current set of *partition ranges*; each range owns a contiguous interval of hash space.  
When the table grows, DynamoDB splits a range that exceeds a configurable size (≈10 GB) into two new ranges, redistributing data and load.

**Why hashing works**

Hashing guarantees **uniformity**: every key has an equal probability of falling anywhere in the space.  This makes the expected load per partition proportional to the number of items, preventing hot spots unless keys are correlated with access patterns (which DynamoDB mitigates by allowing a *sort key* and composite indexes).

**Hidden insight**

Because partitions are defined on hash values, *read/write amplification* is bounded: any single operation touches only one partition.  Even if a client requests an item that spans many logical items (e.g., a range query), DynamoDB can still keep the cost low by routing the request to the relevant partition(s) and returning results in order without shuffling data across servers.  
This separation of *physical* locality from *logical* ordering is what lets DynamoDB scale horizontally while preserving ACID‑like semantics for single‑item operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
