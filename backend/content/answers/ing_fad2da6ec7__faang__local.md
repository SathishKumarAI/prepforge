---
qid: ing_fad2da6ec7__faang__local
question: What is WhatsApp? — Design WhatsApp | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 456
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:23:23-05:00'
sources: []
---

**Clarify**

WhatsApp is a real‑time, end‑to‑end encrypted messaging app that supports text, media, voice/video calls and group chats for millions of users worldwide.  
Assumptions:  
* Global user base (~2 B), high write/read traffic, low latency (≤200 ms).  
* 99.999% availability, GDPR/CCPA compliance, optional offline messaging.

**Approach**

1. **Client‑Server Model** – lightweight mobile clients → backend servers via TLS.  
2. **Core Services** – Auth, Presence, Messaging, Media, Calls, Groups.  
3. **Scalable Architecture** – stateless front‑ends, sharded message queues, partitioned databases.  
4. **Data Stores** – NoSQL (Cassandra/Bigtable) for messages, key‑value store (Redis) for presence, object storage (S3) for media.  
5. **Security** – E2E encryption on device; only session keys stored server‑side.

**Depth**

*Message Flow*: Client → Auth Service → Message Queue → Storage + Push Service → Recipient(s).  
*Replication*: Multi‑region clusters with eventual consistency for messages, strong consistency for presence.  
*Media*: Upload to CDN edge, store hash in DB; lazy deletion after TTL.  
*Calls*: Use WebRTC; TURN/STUN servers behind load balancers.  
*Complexity*: O(1) read/write per message; sharding ensures horizontal scaling.

**Edge Cases**

- Offline users: queue messages, deliver on reconnection.  
- Network partitions: use vector clocks to merge divergent histories.  
- DoS attacks: rate limiting, CAPTCHA for new registrations.  
- Data retention laws: regional data deletion requests.

**Optimize & Communicate**

Future improvements: server‑side message compression, AI‑driven spam filtering, incremental key rotation. I’d narrate by first laying out the high‑level stack, then drilling into each service’s scaling and consistency guarantees, always tying back to user‑centric metrics (latency, availability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
