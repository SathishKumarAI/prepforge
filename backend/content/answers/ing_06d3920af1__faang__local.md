---
qid: ing_06d3920af1__faang__local
question: 'Explain: Application complexity — What is Database Sharding? - Shard DB
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 469
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:19-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise explanation of *database sharding*—the practice of partitioning data across multiple database instances (shards) so that each handles a subset of the overall workload. I’ll assume they want an overview of why it’s used, how it works in AWS, and key trade‑offs.

**Approach**  
1. Define sharding and its goal (horizontal scaling).  
2. Explain typical shard key selection.  
3. Describe AWS services that enable sharding (RDS Aurora Serverless v2, DynamoDB, Amazon Neptune).  
4. Mention operational concerns: consistency, routing, failover.  

**Depth**  
Sharding splits a logical table into smaller partitions—each stored on its own DB instance or cluster—based on a *shard key* (e.g., user ID hash). Queries that target a specific key hit only the relevant shard, reducing latency and load per node. In AWS, you can:  

- **RDS Aurora Serverless v2** – automatically scales shards by adding/removing instances in an Aurora cluster.  
- **DynamoDB Global Tables** – provide multi‑region, sharded tables with automatic partitioning under the hood.  
- **Amazon Neptune** – uses logical partitions across multiple nodes for graph data.  

Sharding introduces *routing* (client or proxy must know which shard to hit), *cross‑shard joins* become expensive, and *data rebalancing* requires careful planning.

**Edge Cases**  
- Imbalanced shards if the key distribution is skewed → hot spots.  
- Transactions spanning multiple shards are hard; often avoided.  
- Migration from a monolith can break existing queries that expect global consistency.

**Optimize & Communicate**  
To mitigate hotspots, use composite or hash‑based shard keys and monitor shard sizes via CloudWatch metrics. For cross‑shard reads, consider materialized views or secondary indexes. In an interview I’d finish by noting that sharding is a trade‑off: you gain horizontal scalability at the cost of increased complexity in routing, consistency, and maintenance—something AWS services help abstract but never fully eliminate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
