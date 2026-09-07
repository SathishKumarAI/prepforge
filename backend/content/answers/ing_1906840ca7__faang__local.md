---
qid: ing_1906840ca7__faang__local
question: 'Explain: Chat App — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 535
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:43:04-05:00'
sources: []
---

**Clarify**

> *Problem:* Build a chat application that can handle millions of users and support real‑time messaging, presence, typing indicators, read receipts, media, group chats, offline sync, and end‑to‑end encryption.  
> *Assumptions to confirm:* 1) Users are globally distributed; 2) Latency < 200 ms for message delivery; 3) Data privacy laws (GDPR, CCPA) apply; 4) We can use cloud services and open‑source stacks.

**Approach**

1. **Architecture:** Client → API Gateway → Auth Service → Messaging Service → Storage.  
2. **Messaging Engine:** Pub/Sub (Kafka/Redis Streams) for real‑time delivery; WebSocket/FCM for push.  
3. **Storage:** PostgreSQL + Redis for session metadata; S3 for media blobs.  
4. **Security:** End‑to‑end encryption on the client, secure key exchange (ECDH).  
5. **Scaling:** Horizontal autoscaling, sharding by user ID, CDN for media.

**Depth**

- *Message Flow:* Client signs request → Gateway authenticates via JWT → Messaging Service writes to Kafka → Consumer pushes to recipient’s WebSocket; if offline, store in Redis queue and deliver on reconnection.  
- *Presence & Typing:* Keep‑alive heartbeats update a Redis sorted set; broadcast updates to group members.  
- *Read Receipts:* Store per‑message read timestamps in PostgreSQL; push updates only when the recipient opens the chat.  
- *Complexity:* Write latency O(1) (Kafka + Redis). Read scaling via partitioned tables.  
- *Trade‑offs:* Kafka provides durability but adds 10–20 ms lag; WebSocket gives lower latency but requires server keep‑alive.

**Edge Cases**

- Network partitions → retry with exponential backoff.  
- Large media → chunking, resumable uploads.  
- GDPR “right to be forgotten” → purge user data from all caches and storage after confirmation.

**Optimize & Communicate**

1. **Batching:** Group typing indicators to reduce traffic.  
2. **Compression:** Gzip WebSocket frames for bulk messages.  
3. **Monitoring:** Prometheus + Grafana dashboards; alert on message lag > 200 ms.  

Narrate progress with “What we solved, how it meets constraints, and next steps,” ensuring the interviewer sees a clear, scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
