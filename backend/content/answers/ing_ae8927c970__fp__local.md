---
qid: ing_ae8927c970__fp__local
question: 'Explain: When User B comes back online — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 483
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:15:42-05:00'
sources: []
---

### Why “User B comes back online” matters

At the core, a messaging app must **guarantee eventual consistency of message delivery** while keeping latency low for the *active* user.  
When User B returns, we face two intertwined problems:

1. **Presence inference** – We need to know whether B is reachable (online) to decide if we should push or store messages locally.
2. **Back‑log delivery** – All messages sent during B’s offline window must be replayed in order, without duplication.

### From the problem to a solution

*Presence as an event stream*:  
Treat each “goes online/offline” transition as a timestamped event in a partitioned log (Kafka/Redis Streams). The *current state* of any user is the latest event. Querying this log is O(1) and scales horizontally.

*Offline message store*:  
When B is offline, every incoming message is appended to an immutable append‑only file per chat (or a key‑value bucket keyed by conversation ID). The offset of each entry serves as a logical clock; it guarantees order without extra metadata.

### Why this works

- **Idempotence**: Appending to the log and replaying offsets ensures that duplicate pushes (e.g., due to network retries) are harmless.
- **Scalability**: Both structures are append‑only; write throughput is linear with user count. Reads for online users hit a fast in‑memory cache; offline reads stream from disk.
- **Consistency**: The log guarantees that the “latest presence” seen by any node is eventually visible to all, satisfying causal consistency for message delivery.

### Non‑obvious insight

Most designs treat presence as a simple flag. In reality, *presence is itself an event that must be versioned*. By storing it in the same log that tracks messages, we unify two concerns—state and history—into one scalable abstraction, eliminating the need for separate “heartbeat” services or polling. This yields both lower latency (no extra round‑trips) and stronger guarantees (no race between presence update and message receipt).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
