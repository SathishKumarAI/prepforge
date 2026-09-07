---
qid: ing_ea0161f55e__faang__local
question: 'Explain: Shard key — What is Database Sharding? - Shard DB Explained -
  AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 542
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:44:04-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *shard key* and *database sharding* as used in distributed databases (e.g., Amazon DynamoDB, MongoDB). Key assumptions:  
- The audience knows basic relational concepts but not necessarily distributed systems.  
- We should focus on why a shard key is chosen and how it partitions data.

**Approach**  
1. Define sharding.  
2. Explain the role of a shard key in partitioning.  
3. Walk through an example (e.g., user‑id → shards).  
4. Discuss trade‑offs: read/write patterns, hot spots, rebalancing.  

**Depth**  
- *Sharding* splits a large dataset into smaller, horizontally partitioned segments called **shards**, each stored on a different node or cluster.  
- A **shard key** (or partition key) is the column/field whose value determines which shard holds a row/document.  
  - In DynamoDB: `PartitionKey` + optional `SortKey`.  
  - In MongoDB: `_id` by default, or a custom field.  
- The hash of the shard key (or range‑based partitioning) maps to a specific node.  
- Example: Users table with `user_id`. Hash(`user_id`) % N → shard i. All queries filtering on `user_id` hit one shard; range queries across many users require cross‑shard traffic.  

**Edge Cases**  
- **Hot key**: A frequently accessed key can overload a single shard. Mitigate by adding a salt or using composite keys.  
- **Uneven distribution**: Poorly chosen keys lead to data skew. Use analytics to pick high cardinality, evenly distributed fields.  
- **Re‑sharding**: Adding/removing nodes requires rebalancing; systems like DynamoDB handle this automatically, but custom sharding needs migration scripts.

**Optimize & Communicate**  
- Choose a shard key that is (1) highly selective, (2) frequently queried, and (3) evenly distributed.  
- Use range or hash partitioning based on access patterns: hash for point‑lookups, range for sequential scans.  
- Communicate the trade‑off: tighter sharding reduces cross‑node traffic but increases complexity of rebalancing.  

By framing the answer this way—clarifying assumptions, outlining the strategy, diving into technical details, anticipating pitfalls, and summarizing optimizations—we demonstrate structured thinking and depth, exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
