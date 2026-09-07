---
qid: ing_88e5b3cbdf__faang__local
question: 'Explain: Range-based sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 497
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:02:34-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *database sharding*—the practice of partitioning data across multiple database instances—and how *range‑based sharding* works, especially in the context of AWS services.

**Approach**  
1. Define sharding and its motivations.  
2. Describe the range‑based strategy (key ranges → shards).  
3. Map to AWS: Amazon RDS Aurora Serverless v2, DynamoDB global tables, or a custom solution on EC2/EKS.  
4. Highlight key trade‑offs.

**Depth**  
- **Sharding** splits a large table into smaller, independent “shards” stored on separate hosts, improving horizontal scalability and reducing contention.  
- **Range‑based sharding** assigns each row to a shard based on a monotonically increasing key (e.g., `user_id`). A range map (`[0–1M] → shardA`, `[1M+1–2M] → shardB`) is maintained in the application or a lightweight lookup service.  
- **AWS‑specific**:  
  - *DynamoDB* automatically shards on partition keys; you can design ranges by choosing a hash or range key.  
  - *Aurora Serverless v2* supports auto‑scaling but doesn’t expose manual sharding—use multiple Aurora clusters with a routing layer (e.g., ALB + Lambda).  
  - *RDS+EC2* gives full control: create separate RDS instances per shard, route queries via an application‑level router or AWS App Mesh.  

**Edge Cases**  
- Skewed data → uneven shard sizes; mitigate with rebalancing logic.  
- Hot keys → range splits or secondary indexes.  
- Cross‑shard joins become expensive; design for minimal cross‑shard traffic.

**Optimize & Communicate**  
Explain that range sharding keeps the routing simple but requires careful planning of key distribution and migration paths. Use a versioned shard map stored in DynamoDB to enable smooth rollouts, and monitor latency per shard to trigger automatic splits or merges. Conclude by summarizing the trade‑offs: simplicity vs. potential hot‑spot risk, and how AWS services can either automate (DynamoDB) or provide the infrastructure needed for custom sharding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
