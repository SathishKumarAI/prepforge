---
qid: ing_12c8f6dedd__faang__local
question: 'Explain: Sharding & Partitioning — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 482
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:15-05:00'
sources: []
---

**Clarify**  
We’re building a notification service that must push millions of events (email, SMS, push) to users in real‑time. Key constraints: low latency (<200 ms), high throughput (10⁶ msgs/s), eventual consistency, and graceful scaling across data centers. I’ll assume we have user profiles, device tokens, and an event stream; storage is a mix of relational (users/devices) and NoSQL (event logs).  

**Approach**  
1. **Partitioning strategy** – hash on `user_id` to shard the *routing table* (device list + preferences).  
2. **Sharding the message queue** – use Kafka topics partitioned by the same hash; each broker handles a subset of users, guaranteeing order per user.  
3. **Worker pool per shard** – workers consume from their assigned partitions, apply rate‑limiting and retry logic, then push to external providers via dedicated adapters.  
4. **Cache tier** – Redis cluster for hot device lists (TTL 5 min) to avoid hitting DB on every notification.  

**Depth**  
- *Complexity*: O(1) lookup in cache; Kafka ensures log‑based durability and at‑least‑once delivery.  
- *Scalability*: Adding a shard is just adding a broker and rebalancing partitions (≈10 % overhead).  
- *Fault tolerance*: Each worker has local retry queue; dead‑letter topic captures failures after 3 attempts.  

**Edge Cases**  
- Users with many devices → split their routing table into micro‑shards to avoid hot keys.  
- Sudden traffic spikes → pre‑provision extra workers per shard and use back‑pressure on Kafka.  
- Cross‑region latency → replicate partitions locally; fall back to global queue if local fails.  

**Optimize & Communicate**  
Start with a single shard for prototyping, then shard by hash of `user_id`. Document partition assignments in ZooKeeper (or K8s ConfigMap) so any node can discover its responsibility. Explain that sharding preserves user order while allowing horizontal scaling, and that the cache + Kafka combo gives low latency and durability—exactly what a FAANG‑style notification service needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
