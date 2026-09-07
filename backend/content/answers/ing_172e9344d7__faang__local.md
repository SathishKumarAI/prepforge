---
qid: ing_172e9344d7__faang__local
question: 'Explain: Sharding — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 420
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:38:34-05:00'
sources: []
---

**Clarify**  
You want to scale a relational database horizontally by *sharding*—splitting data across multiple nodes so each handles a subset of the workload.  
Assumptions I’d confirm: (1) write/read patterns, (2) query locality (most queries touch one shard), (3) consistency requirements (strong vs eventual), and (4) whether the application can tolerate a single point of failure.

**Approach**  
1. Pick a sharding key that distributes rows evenly (e.g., user‑id hash).  
2. Create *shard routers* that map keys to physical DB instances.  
3. Replicate each shard for high availability (primary/secondaries).  
4. Handle cross‑shard joins via application‑side aggregation or a distributed query engine.

**Depth**  
- **Routing**: a lightweight lookup table (or consistent hashing) gives O(1) routing.  
- **Replication**: asynchronous replication keeps secondary replicas up‑to‑date; write latency is the primary’s commit time.  
- **Transactions**: two‑phase commits or distributed transaction managers are costly; often we sacrifice ACID for scalability, using eventual consistency and compensating actions.  
- **Failover**: automated failover promotes a replica to primary; clients reconnect via router.

**Edge Cases**  
- Hot shards (uneven load) → rehash or add split‑shard logic.  
- Schema changes across shards → versioned migrations.  
- Cross‑shard reads → performance hit; avoid if possible.  

**Optimize & Communicate**  
Explain trade‑offs: sharding reduces single‑node limits but increases operational complexity. Highlight monitoring (latency, replica lag), automated sharding rebalancing, and fallback to read replicas for heavy analytics. Conclude with a diagram of router → shards + replication, summarizing key metrics: throughput ∝ #shards, latency ≈ primary commit + routing overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
