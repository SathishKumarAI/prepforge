---
qid: ing_cc4242d1df__faang__local
question: 'Explain: Wish lists revisited — Use vertical partitioning to scale data
  efficiently in Amazon DynamoDB | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 412
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:34:14-05:00'
sources: []
---

**Clarify**

The article describes how to use *vertical partitioning* in DynamoDB to keep a large “wish‑list” table efficient when the number of attributes per item grows.  
Assumptions: we already have a single‑table design with a composite primary key (`UserId#WishListItemId`), many optional attributes, and read/write traffic that is skewed by user.

**Approach**

1. Identify “hot” vs. “cold” columns.  
2. Create two tables (or two GSI partitions):  
   * **ActiveTable** – contains only the frequently accessed attributes.  
   * **ArchiveTable** – stores the rest of the attributes, keyed by the same partition key.  
3. Use a lightweight proxy or Lambda to merge reads and writes across both tables.

**Depth**

- The primary key remains unchanged so existing queries stay valid.  
- Writes update both tables; reads that need all columns trigger a conditional read from **ArchiveTable** only when a missing attribute is requested.  
- This reduces per‑item size, lowers provisioned throughput costs, and keeps latency low for the hot path.  
- Complexity: O(1) for each table operation; overall cost ≈ 2× write traffic but with lower per‑write payload.

**Edge Cases**

- Users who rarely access “cold” attributes may experience stale data if writes to **ArchiveTable** lag.  
- If the attribute distribution changes, we must rebalance tables.  
- Backup/restore must stitch both tables together.

**Optimize & Communicate**

Future improvements: automate partitioning with DynamoDB Streams to move items between tables based on access patterns; add TTLs for rarely used attributes. I’d explain this flow in a diagram and emphasize that vertical partitioning trades a modest increase in write cost for significant savings in read latency and storage, aligning with Amazon’s scalability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
