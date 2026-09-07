---
qid: ing_3bdf38559a__faang__local
question: 'Explain: 2.7 System Design: Design a 1-on-1 Chat System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 479
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:03:42-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *one‑to‑one* chat system (like WhatsApp or Messenger).  
Key assumptions:  
- Real‑time messaging with minimal latency (< 200 ms).  
- Users can be online/offline; messages must persist.  
- Scale: millions of users, billions of messages/day.  
- No group chats, no media streaming—focus on text only.

**Approach**  
1. **API layer** – REST for registration/login, WebSocket for live messaging.  
2. **Persistence** – Sharded relational DB (PostgreSQL) for user metadata; NoSQL (Cassandra/Firestore) for message store with *user‑id + timestamp* key.  
3. **Delivery & Ordering** – Sequence numbers per conversation, “last read” pointers.  
4. **Presence** – Redis Pub/Sub to broadcast online status.  
5. **Scalability** – Horizontal scaling of WebSocket servers behind a load balancer; use sticky sessions or token‑based routing.

**Depth**  
- *Message flow*: Client → WebSocket → Gateway → Router → Store + Push (if offline).  
- *Ordering*: Each message gets a monotonically increasing ID per conversation.  
- *Read receipts*: Update “last read” timestamp in DB; notify peer via WebSocket.  
- *Fault tolerance*: Retry queues (Kafka) for transient failures; backups of NoSQL data nightly.

**Edge Cases**  
- Duplicate messages → idempotency keys.  
- Out‑of‑order delivery → client reorders by sequence number.  
- Network partitions → eventual consistency guarantees.  
- High churn → rate limiting on message send.

**Optimize & Communicate**  
- Cache recent conversation metadata in Redis to reduce DB hits.  
- Use a CDN‑like edge cache for static assets (avatars).  
- Profile latency: aim < 100 ms for online peers, < 1 s for offline delivery.  
- Explain trade‑offs: NoSQL gives speed but weaker consistency; we mitigate with explicit sequencing.  

This design balances low latency, durability, and horizontal scalability—key signals for a FAANG system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
