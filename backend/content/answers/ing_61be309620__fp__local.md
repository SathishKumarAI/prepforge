---
qid: ing_61be309620__fp__local
question: 'Explain: Best practices for using sort keys to organize data in DynamoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 475
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:33:11-05:00'
sources: []
---

## Why a *sort key* matters

In DynamoDB a table’s **primary key** is a pair:  
`partitionKey | sortKey`.  
The partition key selects the hash bucket; the sort key orders all items that share that bucket. The ordering is *lexicographic*, so queries such as “first N”, “between A and B”, or “greater than X” can be answered in‑place without a full scan.

### Deriving the best practice

1. **Define the query pattern first**  
   - If you’ll often read *all* items for a user, use `userId` as partition key and `timestamp` (or composite of timestamp + event type) as sort key.  
   - If you need “most recent N” per user, order by descending timestamp or store negative epoch values to keep natural ascending order.

2. **Make the sort key *composite* when needed**  
   A single scalar value limits cardinality. Combine fields (`date#type`) so that each bucket contains a manageable number of items and still supports range queries on sub‑components.

3. **Keep it *monotonic* to avoid hot partitions**  
   If many writes target the same sort key suffix (e.g., all events for “2024-01”), DynamoDB may throttle. Spread writes by adding a hash prefix or using a time‑based sharding scheme (`shard#timestamp`).

4. **Store only what you’ll query on**  
   The sort key is part of the index; its size counts toward provisioned throughput and storage. Avoid embedding large blobs.

### Non‑obvious insight

> **The sort key can act as a *secondary hash* to mitigate hot spots.**  
> By prefixing the natural ordering with a small random shard (`shard#timestamp`), you preserve range queries while distributing writes across multiple partitions. DynamoDB will transparently merge the shards during scans, so you get both performance and correctness without changing your application logic.

Follow these guidelines, and your data model will naturally support efficient reads, balanced write throughput, and clear evolution as access patterns change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
