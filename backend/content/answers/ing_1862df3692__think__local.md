---
qid: ing_1862df3692__think__local
question: 'Explain: Interviewer — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 454
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:20:19-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
Ask whether “real‑time presence” means instant status updates (online/offline), typing indicators, or more advanced context (location, activity). Assume high availability, low latency (<50 ms), and millions of concurrent users.  

**2️⃣ Adopt a layered design framework**  
Use the classic *front‑end → API gateway → service layer → data layer* map. Add a *real‑time messaging* tier (WebSocket/Long Poll) and a *state persistence* tier (cache + durable store).  

**3️⃣ Reason step‑by‑step**  
- **Ingestion:** User connects via WebSocket; the server authenticates, registers the session in an in‑memory store (Redis), and broadcasts “online” to friends.  
- **State propagation:** Use a publish/subscribe bus (Kafka or Redis Pub/Sub) so all nodes see status changes instantly.  
- **Scalability:** Partition users by hash of user ID; each shard owns its own cache & Kafka topic.  
- **Durability:** Persist last known state in Cassandra or DynamoDB for recovery after node failure.  
- **Edge cases:** Handle disconnections, app backgrounding, and throttling to avoid flooding friends with updates.  

**4️⃣ Avoid common pitfalls**  
- Don’t let the WebSocket pool grow unbounded—use connection limits per user.  
- Beware of “sticky sessions” that break horizontal scaling; keep state in shared cache instead.  
- Don’t rely solely on a single message broker; add idempotence to avoid duplicate status events.  

**5️⃣ Sanity‑check & communicate clearly**  
Walk through a sample flow: Alice opens the app → her client sends a “connect” event → server updates Redis, publishes “Alice online”, friends’ clients receive it instantly. Summarize trade‑offs (latency vs consistency) and highlight monitoring hooks (latency metrics, failure rates). This structured narrative shows you can design an end‑to‑end real‑time presence system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
