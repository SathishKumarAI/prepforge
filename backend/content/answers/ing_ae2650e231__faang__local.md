---
qid: ing_ae2650e231__faang__local
question: 'Explain: Frequency — What is Database Sharding? - Shard DB Explained -
  AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 500
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:28:33-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *database sharding*—the technique of partitioning data across multiple database instances to improve performance and scalability. I’ll assume we’re talking about horizontal sharding (rows split by key) on cloud platforms like AWS.

**Approach**  
1. Define sharding and its purpose.  
2. Explain how data is divided (shard key, hash or range).  
3. Mention the role of a shard map manager or routing layer.  
4. Highlight benefits: parallelism, reduced contention, easier scaling.  
5. Note downsides and typical use‑cases.

**Depth**  
Sharding partitions a table’s rows into *shards* stored on separate database servers. A **shard key** (e.g., user ID) determines which shard holds a row; common strategies are:
- *Hash sharding*: `hash(key) % N` → distributes evenly but makes range queries hard.  
- *Range sharding*: split by value ranges → efficient for range scans but can lead to hotspots.

AWS offers services like **Amazon Aurora Global Database** and **DynamoDB Global Tables**, which automate shard placement, replication, and routing via a *shard map* stored in DynamoDB or Route 53. The application queries a routing layer that translates logical keys into physical endpoints, keeping the client oblivious to shards.

Benefits: linear throughput scaling (more shards → more parallelism), localized failures, easier backups per shard. Trade‑offs include cross‑shard joins being expensive, increased operational complexity, and potential data skew.

**Edge Cases**  
- **Hot key**: one user generating most traffic can overload a single shard; mitigate with key hashing or “hotspot” detection.  
- **Rebalancing**: adding/removing shards requires migrating rows without downtime—use online migration tools.  
- **Consistency**: distributed transactions become harder; choose eventual consistency or use two‑phase commit if strict ACID is needed.

**Optimize & Communicate**  
I’d suggest starting with a hash shard on a key like `user_id`, using AWS Aurora Global Database for managed sharding, and monitoring shard load to detect hotspots. If range queries dominate, consider range sharding with careful partition boundaries. I’d finish by summarizing the trade‑offs and how to plan for future growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
