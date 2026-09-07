---
qid: ing_8268c3bfaa__faang__local
question: 'Explain: Clarifying Requirements — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 522
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:06-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Build a scalable WhatsApp‑style messaging service (end‑to‑end).  
*Key questions:*  
- What user base? Peak traffic?  
- Feature set: text, media, group chats, read receipts, offline support?  
- Data residency / compliance?  
- Expected latency for send/receive and for read status updates.  

**2️⃣ Approach**  
1. **Client → Edge** (CDN + TLS) → **Load Balancer** → **API Layer**  
2. **Message Queue** (Kafka/RocketMQ) for decoupling producers/consumers.  
3. **Storage:**  
   - *Metadata* in a distributed NoSQL DB (Cassandra/DynamoDB).  
   - *Media* in object store (S3 + CDN cache).  
4. **Real‑time delivery** via WebSocket / gRPC streams; fallback to push notifications.  
5. **Consistency model:** eventual for read receipts, strong for message ordering per conversation.

**3️⃣ Depth**  
- *Message flow:* Client sends → API validates → persists metadata → publishes to Kafka → consumer writes to DB and pushes to recipients.  
- *Complexity:* O(1) write latency; reads O(log N) via partitioned keys (`userId:conversationId`).  
- *Scalability:* Partition by conversation ID, sharding media buckets, auto‑scaling consumers.  
- *Reliability:* Use idempotent writes, retry back‑off, dead‑letter queues.

**4️⃣ Edge Cases**  
- Network partitions → store locally and sync later.  
- Message duplication → deduplication via unique message IDs.  
- High churn in group chats → use membership cache with TTL.  
- Media size limits → chunked uploads, progressive delivery.

**5️⃣ Optimize & Communicate**  
- *Latency*: keep user‑session data in Redis for quick lookup; batch push notifications.  
- *Cost*: tiered storage (hot vs cold), compression of media.  
- *Monitoring*: metrics on queue depth, consumer lag, read receipt propagation time.  

Explain trade‑offs: strong consistency hurts latency; eventual ordering is acceptable for chats. Highlight how each component scales horizontally and meets SLAs. This structured narrative showcases problem‑solving, depth, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
