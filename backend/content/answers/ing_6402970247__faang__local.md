---
qid: ing_6402970247__faang__local
question: 'Explain: Message Service — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 517
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:37:00-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a “message service” similar to WhatsApp.  
Key points: *real‑time delivery*, *end‑to‑end encryption*, *offline support*, *scalability* (millions of users), and *low latency*. I’ll assume we need 99.9 % uptime, <200 ms end‑to‑end latency, and support for text/voice/video.  

**2️⃣ Approach**  
1. **Client → Edge → Service Layer**: mobile clients connect to a global CDN of edge servers (load balancer + TLS termination).  
2. **Message Routing**: each user has a unique ID mapped to an active device token via a *user‑session* store (Redis/Consul). The router pushes the message to that device or queues it if offline.  
3. **Persistence & Queueing**: use Kafka for durable ingestion; a write‑through cache (Cassandra) stores the last N messages per chat.  
4. **Offline Delivery**: when a device reconnects, the server queries Cassandra for unsent messages and streams them.  
5. **End‑to‑end Encryption**: clients generate session keys; the server only forwards ciphertext.  

**3️⃣ Depth (Complexity & Trade‑offs)**  
- *Latency*: edge servers + Kafka → ~50 ms network + 10 ms DB read = <200 ms.  
- *Throughput*: Kafka partitions per user group allow horizontal scaling; Cassandra writes are O(1).  
- *Consistency*: eventual consistency for message order is acceptable; we enforce local ordering via sequence numbers.  
- *Security*: no plaintext on servers; keys stored only client‑side.  

**4️⃣ Edge Cases**  
- User switches devices mid‑chat → session key rotation & replay protection.  
- Network partition → message loss mitigated by idempotent writes in Kafka.  
- High churn (e.g., a bot spamming) → rate limiting per user ID.  

**5️⃣ Optimize & Communicate**  
- Add *push notifications* via APNs/FCM for offline alerts.  
- Use *CDN caching* for static media.  
- Monitor latency with distributed tracing (OpenTelemetry).  
I’d explain each layer, justify technology choices, and walk through a sample message flow to show clarity and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
