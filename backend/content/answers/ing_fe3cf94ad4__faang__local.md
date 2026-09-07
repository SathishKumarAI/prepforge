---
qid: ing_fe3cf94ad4__faang__local
question: 'Explain: Chat Servers — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 754
total_tokens: 993
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:31:21-05:00'
sources: []
---

**Clarify**

We’re asked to design a chat server *like WhatsApp*: support real‑time messaging, group chats, media, offline delivery, high throughput, and strong consistency for message order.  
Assumptions to confirm:  
- Max concurrent users ≈ 1 B, peak traffic ~10 k msgs/s per user.  
- Message size ≤ 256 KB (text + metadata).  
- Delivery guarantee: at‑least‑once with eventual ordering within a conversation.  
- Minimal latency (<200 ms) for online users.

**Approach**

1. **Client ↔️ Edge Gateway** – TLS/TCP/WebSocket or gRPC, region‑aware.  
2. **Load Balancer → Session Router** – route by user ID to the same server (sticky session).  
3. **Message Broker** – publish/subscribe per conversation (Kafka/RabbitMQ).  
4. **Persistence Layer** – sharded NoSQL (Cassandra) for chat history, RDBMS for relational data (users, contacts).  
5. **Offline Store & Push** – FCM/APNs queue, push tokens stored in a cache (Redis).  
6. **Media Service** – CDN + object storage (S3).  
7. **Monitoring / Chaos Engineering** – metrics, tracing.

**Depth**

- *Routing*: Each user is assigned to a “shard” using consistent hashing on UID → `ShardId`. All messages for that user hit the same shard, preserving order locally.  
- *Ordering*: Within a conversation we use Kafka partitions per chat ID; producers write with monotonically increasing offsets. Consumers (chat servers) read sequentially and forward to clients.  
- *Offline delivery*: When a message arrives, it’s stored in Cassandra and immediately forwarded to all online recipients via the broker. For offline users, we enqueue a push notification containing a short payload + a “sync” token; on next app launch they pull the full history from the shard.  
- *Scalability*: Sharding decouples storage from compute; each chat server handles ~10k concurrent sockets. The broker can scale horizontally; partitions can be reassigned during rebalancing.  
- *Consistency*: Eventual consistency for message order across users; strong consistency only needed within a single conversation (handled by partition ordering).  

**Edge Cases**

- **Network partition**: Clients reconnect to nearest region; messages are buffered locally until acked, then replayed.  
- **Message duplication**: Use idempotent writes keyed by client‑generated UUIDs.  
- **Large media**: Chunk uploads directly to CDN; metadata stored in chat record.  
- **User deactivation**: Soft delete user data; purge after retention period.

**Optimize & Communicate**

- *Latency*: Keep the broker’s round‑trip <30 ms by colocating producers/consumers within the same region.  
- *Throughput*: Use batched writes to Cassandra (e.g., 128 msg batches) and async push notifications.  
- *Cost*: Autoscale shards based on traffic; use spot instances for non‑critical batch jobs.  

Explain trade‑offs: we favor **eventual ordering** over strict global order to keep latency low, which is acceptable for chat apps. Also, using a managed broker (Kafka) reduces operational overhead but introduces slight message lag compared to in‑memory queues.  

Overall, this architecture scales linearly with users, guarantees reliable offline delivery, and maintains user‑centric ordering—all key for a WhatsApp‑style service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
