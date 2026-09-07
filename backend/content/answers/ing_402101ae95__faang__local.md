---
qid: ing_402101ae95__faang__local
question: 'Explain: Connect With Me — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 520
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:12:58-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Build “Connect With Me” – a real‑time friend‑request/notification service that lets users discover, send, accept or reject connection requests across millions of users.  
*Assumptions to confirm:*  
- Max 10M active users, 100K concurrent connections.  
- Latency ≤ 200 ms for request/accept flows.  
- Persistent storage must support eventual consistency for friend lists.

**2️⃣ Approach**  
1. **API Gateway → Load Balancer → Service Layer** (request handling).  
2. **Request Service**: validates, writes to a *Connection* table & publishes events.  
3. **Notification Service**: consumes events, pushes via WebSocket/FCM.  
4. **Query Service**: serves friend lists, pending requests.  
5. **Data Layer**: NoSQL (Cassandra) for high write throughput + Redis cache for hot data.

**3️⃣ Depth**  
- *Connection Table* columns: `user_id`, `friend_id`, `status`(PENDING/ACCEPTED/REJECTED), `timestamp`.  
- Write path: `PUT /connect/{target}` → upsert row, publish to Kafka topic “connections”.  
- Read path: `GET /friends?user={id}` → scan secondary index on `friend_id`.  
- *Complexity*: Write O(1) (single partition), read O(log N) for scanning.  
- *Trade‑offs*: Eventual consistency vs strong consistency; we favor eventual with background reconciliation.

**4️⃣ Edge Cases**  
- Duplicate requests: idempotent put using a composite key.  
- Network partitions: use Kafka’s at‑least‑once delivery + deduplication.  
- Privacy: enforce ACLs on read service, mask sensitive data.

**5️⃣ Optimize & Communicate**  
- **Batching**: aggregate notifications per user to reduce bandwidth.  
- **Backpressure**: use token bucket in WebSocket server.  
- **Monitoring**: latency histograms, error rates; alert on > 50 % 4xx/5xx.  
Explain design decisions clearly, ask clarifying questions, and iterate based on feedback—exactly what a FAANG interview expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
