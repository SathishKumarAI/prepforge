---
qid: ing_9c4cbe8777__faang__local
question: 'Explain: Session Service — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 536
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:47:18-05:00'
sources: []
---

**1️⃣ Clarify**  
WhatsApp’s *Session Service* must keep an encrypted, authenticated channel alive between a client and the server, supporting up‑to‑date keys, replay protection, and minimal latency for millions of users.  
Assumptions: • We’re dealing with end‑to‑end encryption (E2EE). • Clients reconnect frequently (mobile network churn). • Throughput ≈ 10⁶+ concurrent sessions.

**2️⃣ Approach**  
1. **Session State Store** – a distributed key/value store (e.g., Cassandra/Redis) keyed by `(userID, deviceID)` holding `sessionKey`, `seqNo`, and last‑heartbeat timestamp.  
2. **Heartbeat & Keep‑Alive** – lightweight ping/pong over the encrypted channel; server updates `lastSeen`. If timeout > 30 s, mark session stale.  
3. **Key Rotation** – on every message or after a fixed interval (e.g., 24 h), generate a fresh key and push it via an out‑of‑band “key‑update” packet.  
4. **Replay Protection** – use monotonically increasing sequence numbers; reject any packet with `seqNo <= lastSeen`.  

**3️⃣ Depth**  
- **Latency**: O(1) read/write to the session store, plus a single network hop for ping/pong → < 10 ms end‑to‑end.  
- **Consistency**: Strong consistency on writes (e.g., using Paxos/RAFT in Redis Cluster) ensures no two servers see divergent keys.  
- **Scalability**: Shard by userID; each shard handles ~10⁵ sessions, keeping hot‑spotting minimal.  
- **Security**: All stored session data is encrypted at rest; communication uses TLS + E2EE.

**4️⃣ Edge Cases**  
- Device loss → revoke session via admin API.  
- Network partitions → stale session detection and graceful fallback to push notifications.  
- Replay attacks → sequence‑number check + cryptographic nonce in key‑update packets.

**5️⃣ Optimize & Communicate**  
Future improvements: batch heartbeat acknowledgments, use a CDN edge cache for static key material, and implement per‑region latency monitoring. I’d present the trade‑offs—strong consistency vs. write latency—and justify the chosen architecture by showing how it meets WhatsApp’s scale, security, and real‑time requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
