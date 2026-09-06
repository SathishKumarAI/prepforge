---
qid: ing_6d22912687__fp__local
question: What is a partition key? — Choosing the Right DynamoDB Partition Key | AWS
  Database Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 428
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:56:32-05:00'
sources: []
---

### The “Partition Key” – a data‑locality contract

When you store an item in DynamoDB, the service must decide **where** on its distributed cluster that item will live.  
The *partition key* is the contract you give to DynamoDB:  

> *“I promise each value of this attribute uniquely identifies a bucket; put all items with the same value into the same bucket.”*

Because DynamoDB partitions data by hashing the partition‑key value, every query that supplies the key can be resolved in **O(1)** time – no full‑table scan is required. The choice of key therefore controls two fundamental properties:

| Property | What it means | Why it matters |
|----------|---------------|----------------|
| **Locality** | Items with the same key hash to the same physical node. | Enables efficient point reads and range queries on a single node. |
| **Skew mitigation** | Even distribution of keys spreads load across nodes. | Prevents hot partitions that throttle throughput. |
| **Capacity scaling** | The number of distinct keys determines how many nodes can be used in parallel. | Determines the maximum achievable read/write capacity. |

#### Non‑obvious insight

A common mistake is to think any attribute will do. In reality, a good partition key must have **high cardinality and low correlation with query patterns**. If you choose a key that changes often (e.g., a timestamp) but only query by user ID, DynamoDB will still hash every distinct timestamp into separate partitions, creating unnecessary fragmentation. Instead, use an *entity‑type* prefix plus a stable identifier (e.g., `User#12345`) so that all of a user’s data stays together while the prefixes ensure enough buckets for parallelism.

In short, the partition key is DynamoDB’s way of turning your dataset into a hash‑table spread over many machines; pick it wisely to keep the table balanced and queries fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
