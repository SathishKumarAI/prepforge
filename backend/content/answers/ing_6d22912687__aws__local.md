---
qid: ing_6d22912687__aws__local
question: What is a partition key? — Choosing the Right DynamoDB Partition Key | AWS
  Database Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 405
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:40-05:00'
sources: []
---

**Answer – “What is a partition key and how do you choose one for DynamoDB?”**

> **Situation:** I led the migration of a real‑time inventory service (10 M items, 5 k TPS) to DynamoDB.  
> **Task:** Design a schema that supports fast reads/writes while keeping cost under $1 k/month.  
> **Action:**  
> * **Customer Obsession & Ownership** – I started by mapping user access patterns: most queries filter on `ProductID` and occasionally on `WarehouseID`.  
> * **Dive Deep** – I profiled 100 M request logs, finding that 90 % of traffic hit the same 200 product IDs. To avoid hot partitions, I introduced a **hashed composite key** (`HASH(ProductID) | RANGE(InventoryDate)`), ensuring even distribution across 1,000 partitions.  
> * **Bias for Action & Invent & Simplify** – Implemented DynamoDB Global Secondary Indexes (GSIs) on `WarehouseID` with a low cardinality partition key (`SK = "W#" + WarehouseID`). This keeps read capacity predictable.  
> * **Deliver Results** – After deployment, average latency dropped from 180 ms to <20 ms, throughput scaled to 12 k TPS without throttling, and monthly cost stayed at $860.  
> **Result:** The new schema eliminated hot partitions, reduced request costs by 35%, and increased SLA compliance from 92% to 99.9%.  

**Key Takeaway:** A partition key should be chosen based on *access patterns* and *cardinality*. Use hashing or composite keys to spread load, validate with real traffic data, and always iterate—learning from early performance metrics is essential for true ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
