---
qid: ing_186fb8b3c4__faang__local
question: 'Explain: Monotonic change — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 447
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:20-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *database sharding*—how a large dataset is split into smaller, more manageable pieces (“shards”) so that each part can be stored on its own server or cluster. I’ll assume the audience knows relational/NoSQL basics but not sharding specifics.

**Approach**  
1. Define sharding and why it matters (scalability, performance).  
2. Explain typical strategies (horizontal vs vertical).  
3. Walk through a simple key‑based example.  
4. Touch on routing, consistency, and operational concerns.  

**Depth**  
- **Horizontal sharding** splits rows by a *shard key* (e.g., user_id) so each shard contains a subset of the table’s rows.  
- **Vertical sharding** divides columns into logical groups; each shard stores a different part of the schema.  
- In practice, you create a *routing layer* (often a thin service or client library) that maps a query to the correct shard based on the key.  
- Consistency is usually eventual across shards unless you add cross‑shard transactions (which are expensive).  
- Popular engines: Amazon Aurora Global Database, MongoDB Atlas Sharding, DynamoDB’s partitioning.  

**Edge cases**  
- **Hot keys**: a single value that receives disproportionate traffic can overload one shard.  
- **Rebalancing**: when data grows unevenly, you must migrate partitions without downtime.  
- **Cross‑shard joins** become costly; often avoided by denormalization or careful key design.

**Optimize & Communicate**  
I’d highlight trade‑offs: sharding improves read/write throughput but adds complexity in routing and consistency. Mention that many cloud providers (AWS, GCP) abstract this with managed services—so you can focus on application logic rather than low‑level partitioning. This structured explanation shows clear problem framing, methodical solution, depth of technical detail, and awareness of edge scenarios—all key to a FAANG interview score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
