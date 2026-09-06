---
qid: ing_9c4cbe8777__fp__local
question: 'Explain: Session Service — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 512
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:37:37-05:00'
sources: []
---

### Why a Session Service?

When a user logs into WhatsApp, the app must maintain a **continuous, authenticated channel** with the server so that messages arrive instantly and state (typing, read‑receipt) is reflected in real time.  
Without a dedicated session layer we would have to re‑authenticate every message or rely on unreliable UDP packets—both violate *security* and *user experience*.  

### Fundamental Design Principles

1. **Statelessness + Scalability** – The core protocol (WebSocket, MQTT, gRPC) is stateless; only the session service holds per‑user state (token, device list).  
2. **Consistency + Availability** – Session data must be *eventually consistent* across data centers but still allow a user to reconnect instantly.  
3. **Security** – Tokens are short‑lived, signed, and tied to device fingerprints; revocation is immediate.

### Architecture in One Layer

| Component | Responsibility |
|-----------|----------------|
| **Auth Gateway** | Issues JWTs after password/biometric check; embeds userID + nonce. |
| **Session Store (Redis + DB)** | Keeps a *hash* of `userID → {deviceID, token, lastSeen}`. Uses LRU eviction for inactive devices. |
| **Heartbeat Protocol** | Each client sends a lightweight ping every 30 s; server updates `lastSeen`. If missing > 2×interval, mark device offline and send a *session‑expired* event to the app. |
| **Revocation API** | On logout or security alert, invalidate all tokens in Redis (atomic delete) and push a revocation message via a pub/sub channel so all nodes terminate sockets immediately. |

### Non‑Obvious Insight

Most designs treat the session as a *single token* per user, but WhatsApp’s **device‑aware sessions** allow a user to be online from multiple phones simultaneously.  
The key trick is storing a *set of tokens per user* in a distributed hash; revocation then becomes an O(1) delete on that set, and reconnection is simply re‑authentication against the same store—no cross‑device conflict resolution needed.

This minimal yet principled design satisfies latency (< 50 ms reconnect), security (token rotation), and scalability (Redis can handle millions of concurrent sessions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
