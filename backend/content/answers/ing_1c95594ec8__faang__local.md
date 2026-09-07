---
qid: ing_1c95594ec8__faang__local
question: 'Explain: Real-Time Presence Platform High-Level Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 504
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:51:29-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch a high‑level architecture for a *real‑time presence* service (e.g., “online/offline/typing” status for millions of users). Key assumptions:  
1. Users can be on many devices, each sending heartbeats.  
2. Presence changes must propagate with sub‑second latency.  
3. System must handle 10⁶+ concurrent users and 10⁹ events/day.  

**Approach**  
1. **Ingestion layer** – lightweight HTTP/WebSocket endpoints that accept heartbeat/presence updates.  
2. **State store** – a distributed, low‑latency KV store (Redis Cluster / DynamoDB with TTL) keyed by `(user_id, device_id)` holding the latest status + expiry timestamp.  
3. **Event bus** – publish presence changes to Kafka/Apache Pulsar for downstream services (notifications, analytics).  
4. **Push layer** – a scalable WebSocket server cluster that subscribes to the event stream and pushes updates to connected clients.  

**Depth**  
- *Ingestion* uses connection pooling and request throttling; heartbeats are idempotent and de‑duplicated by timestamp.  
- *State store* TTL automatically clears stale sessions, keeping memory bounded.  
- *Event bus* guarantees at‑least‑once delivery; consumer offsets enable replay for new subscribers.  
- *Push layer* maintains per‑user connection metadata (e.g., device tokens) to route updates efficiently.  

**Edge Cases**  
- Network partitions: fallback to eventual consistency via retry and stale‑reading from store.  
- Device churn: ensure removal of orphaned entries when a device disconnects unexpectedly.  
- Security: authenticate all updates with JWTs; rate‑limit per IP to mitigate DoS.

**Optimize & Communicate**  
Future improvements:  
- Use a *time‑series* DB for historical presence analytics.  
- Cache hot users in a memcached layer to reduce store lookups.  
- Implement “presence shadowing” (group presence) for chat rooms, aggregating individual statuses.  

I’d narrate this as a layered system where ingestion → state → bus → push, each component optimized for low latency and horizontal scalability. This structure satisfies FAANG’s emphasis on clarity, depth, and real‑world trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
