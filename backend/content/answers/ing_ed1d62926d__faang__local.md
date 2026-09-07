---
qid: ing_ed1d62926d__faang__local
question: 'Explain: Messaging Flow — Designing a Chat Application'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 666
total_tokens: 898
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:51:42-05:00'
sources: []
---

**Clarify**

We’re asked to design the *messaging flow* for a chat app (think WhatsApp/Slack).  
Key assumptions to confirm with an interviewer:

1. **Scale** – number of users, peak concurrent chats, message volume per second.  
2. **Delivery guarantees** – at‑least‑once vs exactly‑once; ordering per conversation.  
3. **Latency budget** – end‑to‑end user‑visible delay (≤200 ms for real‑time).  
4. **Features** – group chats, read receipts, typing indicators, media attachments.  
5. **Platform mix** – mobile/web/desktop, offline support.

**Approach**

1. **Client → Server**: lightweight push over WebSocket / long polling; use STOMP or MQTT for framing.  
2. **In‑flight buffer**: per‑user queue in Redis (low‑latency) to hold pending messages.  
3. **Store**: write‑once to a distributed log (Kafka/ Pulsar) → durable persistence (Cassandra/Spanner).  
4. **Delivery**: consumer reads from log, routes to online users via push; updates read status in DB.  
5. **Background sync**: for offline clients, pull via REST + incremental sync tokens.

**Depth**

- **Message schema**: `msg_id`, `chat_id`, `sender_id`, `timestamp`, `payload_type`, `content_hash`.  
- **Ordering**: use per‑chat partition in Kafka; guarantees FIFO within a chat.  
- **Reliability**: idempotent writes (client includes `msg_id`), server acknowledges on receipt; clients retry on timeout.  
- **Scalability**: horizontal scaling of WebSocket servers behind a load balancer; Redis cluster for per‑user queues.  
- **Complexity**:  
  - *Read*: O(1) from Redis + eventual DB read.  
  - *Write*: O(log N) to Kafka + O(1) to Redis.  
  - *Storage* grows linearly with message volume; use compaction on Kafka and TTL in Redis.

**Edge Cases**

- Network partitions → client retries, server idempotence prevents duplicates.  
- Message duplication from app crashes → deduplication by `msg_id`.  
- High churn groups: throttle push notifications to avoid overload.  
- Media size > WebSocket limit → fallback to HTTP upload + link message.

**Optimize & Communicate**

1. **Batching**: aggregate small messages into a single WebSocket frame for lower overhead.  
2. **Compression**: gzip payloads for media-heavy chats.  
3. **Back‑pressure**: flow control on WebSocket to avoid client overload.  

When explaining, I’ll narrate the data path from user tap → WebSocket send → Kafka log → Redis queue → push to recipient, emphasizing guarantees (ordering, at‑least‑once), and trade‑offs (latency vs reliability). This structure aligns with FAANG interview signals: clear assumptions, systematic design, technical depth, edge‑case coverage, and thoughtful optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
