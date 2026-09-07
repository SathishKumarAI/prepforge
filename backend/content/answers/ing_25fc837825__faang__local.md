---
qid: ing_25fc837825__faang__local
question: 'Explain: The Components We Need — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 476
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:12:13-05:00'
sources: []
---

**Clarify**  
We’re asked to design the core backend for a messaging app like WhatsApp: real‑time chat, media handling, presence, and group support. I’d confirm constraints: max concurrent users (e.g., 2 B), message latency (<200 ms), data durability, GDPR compliance, and geographic spread.

**Approach**  
1. **Client → Edge**: Use a CDN/edge proxy to route messages to the nearest data center.  
2. **Load Balancer → Chat Service**: Stateless HTTP/HTTPS endpoints that accept send/receive requests.  
3. **Message Queue**: Kafka or Pulsar for ordering, replay, and eventual delivery guarantees.  
4. **Storage**:  
   * Metadata (users, groups) → distributed SQL (CockroachDB).  
   * Messages → append‑only log in a key‑value store (S3 + DynamoDB).  
5. **Presence & Delivery**: Real‑time WebSocket/QUIC connections managed by a presence service; use Redis pub/sub for “online” state.  
6. **Media**: Offload to object storage, generate signed URLs, and cache via CDN.

**Depth**  
- **Latency**: Edge + local data center keeps RTT <200 ms.  
- **Scalability**: Partition Kafka topics by user ID; horizontally scale chat workers.  
- **Reliability**: Replicate queues (3‑node cluster), use idempotent writes to avoid duplicates.  
- **Consistency**: Use eventual consistency for read‑heavy ops; strong consistency for delivery receipts.

**Edge Cases**  
- Offline users → store in Kafka until reachable.  
- Large group chats → shard by subgroup, use fan‑out with Bloom filters to reduce traffic.  
- Media size limits → chunked uploads, resumable sessions.

**Optimize & Communicate**  
I’d propose a staged rollout: start with single‑region, then add global replicas; monitor per‑message latency and adjust Kafka batch sizes. I’ll emphasize that this architecture balances low latency, high throughput, and strong durability—exactly what FAANG teams expect in a production‑grade messaging system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
