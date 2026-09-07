---
qid: ing_46e093d26f__faang__local
question: 'Explain: New Components for Offline Handling — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 471
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:28:57-05:00'
sources: []
---

**Clarify**  
We’re asked to design the *offline handling* subsystem of WhatsApp—i.e., how messages are queued, stored, and delivered when a user is offline or reconnects. Key assumptions:  

1. Messages must be delivered in order per conversation.  
2. Delivery confirmation (read receipts) should reflect real‑time state once the device comes online.  
3. The system scales to billions of users, each with many concurrent chats.

**Approach**  
1. **Ingress layer** – client → edge proxy → message broker.  
2. **Persistence tier** – sharded NoSQL (Cassandra) storing per‑user, per‑chat queues.  
3. **Delivery coordinator** – a lightweight service that pulls pending messages and pushes to the next available device.  
4. **State machine** – tracks `sent`, `delivered`, `read` flags per message.

**Depth**  
- Each user’s queue is partitioned by chat ID, allowing O(1) read/write on the broker.  
- Messages are stored with a monotonically increasing sequence number to preserve order.  
- When a device reconnects, it fetches the next N messages from its shard; the coordinator updates status atomically via CAS operations.  
- Complexity: O(log n) for Cassandra writes/reads; overall latency < 200 ms under 10k concurrent users.  
- Trade‑off: Using a single broker per region reduces cross‑region traffic but can become a bottleneck—mitigate with sharding.

**Edge Cases**  
- *Network partition*: duplicate delivery avoided by idempotent keys.  
- *Device loss*: after TTL (e.g., 30 days) purge undelivered messages to free space.  
- *Clock skew*: use Lamport timestamps instead of wall‑clock time.

**Optimize & Communicate**  
Future improvements:  
- Employ a priority queue for urgent system messages.  
- Cache the most recent 100 messages in Redis per user to speed up reconnection.  
I’d explain this flow, show the data model diagram, and walk through a sample message lifecycle, highlighting how each component guarantees order, durability, and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
