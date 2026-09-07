---
qid: ing_dbfb3b2527__faang__local
question: 'Explain: Sharding — 7 Must-Know Strategies to Scale Your Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 570
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:09:50-05:00'
sources: []
---

**Clarify**  
The interview asks how sharding can scale a database and what practical strategies exist. I’ll assume we’re dealing with large‑scale OLTP/analytics workloads on relational or NoSQL stores, where horizontal partitioning is needed to distribute load across nodes.

**Approach**  
1. Identify the key sharding dimensions (range, hash, directory).  
2. Evaluate data access patterns and choose a strategy that keeps most queries local.  
3. Design routing logic, consistency guarantees, and failure handling.  
4. Iterate with monitoring and re‑shard as needed.

**Depth – 7 Must‑Know Strategies**

| # | Strategy | When to Use | Key Trade‑offs |
|---|----------|-------------|----------------|
|1| **Hash Sharding** | Uniform writes/reads, no hot spots. | Hard to range query; requires rehash on rebalance. |
|2| **Range Sharding** | Geospatial or time‑series data (e.g., logs). | Can create hot ranges; need split logic. |
|3| **Directory / Consistent Hashing** | Dynamic node addition/removal. | Slight lookup overhead; handles churn well. |
|4| **Feature/Attribute Sharding** | Partition by user ID, tenant ID, or product type. | Keeps related data together; may skew if feature distribution uneven. |
|5| **Hybrid (Hash + Range)** | Balances uniformity and range queries. | More complex routing logic. |
|6| **Vertical Sharding (Schema‑level)** | Separate tables/collections for rarely‑joined columns. | Reduces row size but adds join cost. |
|7| **Geographic Sharding** | Latency‑sensitive regions; data residency laws. | Requires cross‑region consistency controls. |

For each, discuss routing (e.g., proxy layer), handling of joins across shards, and replication strategy.

**Edge Cases**  
- Hot spots after user growth or promotions.  
- Schema evolution breaking shard key assumptions.  
- Cross‑shard transactions: use two‑phase commit or eventual consistency.  
- Data rebalancing delays causing temporary unavailability.

**Optimize & Communicate**  
I’d emphasize monitoring shard load, automated split/merge triggers, and a fallback “global” replica for failover. When explaining, I’d walk through an example (e.g., sharding a user table by ID hash) to illustrate routing, rebalancing, and failure handling, ensuring interviewers see clear problem‑solving flow, depth in trade‑offs, and readiness to iterate—exactly what FAANG teams value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
