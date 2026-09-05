---
qid: ing_177b4d5c93__fp__local
question: 'Explain: Design WhatsApp — Grokking System Design Interview: Patterns &
  Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 464
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:55:41-05:00'
sources: []
---

### Why we *must* model WhatsApp the way we do

The core problem is **low‑latency, reliable messaging at scale** with minimal bandwidth.  
From first principles this translates into:

1. **Unidirectional data flow** – a client pushes an event (send message) to a server; the server distributes it to recipients.  
2. **Eventual consistency + idempotence** – duplicates are inevitable in distributed systems, so every message gets a globally unique ID and a de‑duplication table at each node.  
3. **Horizontal scalability** – all state must be sharded by user or conversation; otherwise any single point becomes a bottleneck.

These constraints immediately suggest the *Publish/Subscribe* pattern: a broker (Kafka) ingests events, shards them via consistent hashing, and pushes to consumer groups per chat room.  

The **CAP trade‑off** is solved by designing an *eventual consistency* store for message metadata (Cassandra), while a fast in‑memory cache (Redis) holds the latest read receipt state for quick UI updates.

### Interview‑ready patterns

| Pattern | Why it fits WhatsApp |
|---------|---------------------|
| **CQRS** | Commands (send, delete) and queries (load chat history) are decoupled, enabling separate scaling. |
| **Micro‑services** | Separate services for presence, media storage, group management keep the system modular. |
| **Circuit Breaker + Bulkhead** | Prevent a failing media service from cascading to messaging. |

### Non‑obvious insight

Most candidates overlook that *message ordering is local*, not global. By assigning a monotonically increasing sequence per conversation and only guaranteeing order within that shard, we avoid the heavy cost of global sequencing while still delivering the user‑expected linear history.

---

**Mock interview tip:** ask how you would handle **offline delivery**. The answer should reveal an *acknowledgement* layer (delivery receipts) plus a **retry strategy** that respects back‑off and maximum attempts, highlighting your grasp of reliability versus throughput trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
