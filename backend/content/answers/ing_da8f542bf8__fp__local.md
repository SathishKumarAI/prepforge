---
qid: ing_da8f542bf8__fp__local
question: 'Explain: ID and we''re gonna choose that customer — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 452
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:44:16-05:00'
sources: []
---

**Why every DynamoDB row needs a *unique* identifier**

When you design a distributed key‑value store, the **fundamental problem** is to map an arbitrary set of keys to a fixed number of partitions so that:

1. Reads and writes stay *constant‑time* (O(1)).
2. No single partition becomes a bottleneck.

The only way to guarantee constant‑time access in a sharded system is to use a **hash‑based routing**: the key is hashed, the hash value chooses a partition, and the data is stored there. If two items share the same key, they will collide in the same partition; if they differ, they go to potentially different partitions.

Hence an *item identifier* (the partition key) must be **unique per logical entity** so that:

- The hash function can map it to a single, deterministic location.
- Updates and deletes target exactly one item without scanning.

If you tried to use a non‑unique field (e.g., “customer name”) as the key, DynamoDB would need to maintain an index or perform a full scan—both violating the O(1) guarantee. Moreover, collisions would force *secondary indexes* that add write amplification and latency.

**Non‑obvious insight:**  
Uniqueness is not just about avoiding duplicates; it enforces **data locality**. By ensuring each logical customer has one deterministic hash bucket, DynamoDB can spread traffic evenly across nodes. Even if many customers share the same first name or address, their *IDs* break the symmetry, so a single hotspot (e.g., “John Smith”) never monopolizes any node.

In practice, Amazon uses *composite keys*:  
`PK = CustomerID | OrderID`, `SK = timestamp`.  
The `CustomerID` is the unique identifier that satisfies the hashing requirement; the secondary sort key (`SK`) lets you query a customer’s history without violating uniqueness. This design keeps reads/writes O(1) while supporting rich queries, which is why it’s the backbone of DynamoDB’s hyper‑scale architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
