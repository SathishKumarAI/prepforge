---
qid: ing_0d27233bed__fp__local
question: 'Explain: User Online Status Indicator — Real Time Presence Platform System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 484
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:33:49-05:00'
sources: []
---

**Why a “user‑online” indicator matters**

In any social or collaborative system the *instantaneous* knowledge that “Alice is online now” drives UI decisions (chat bubbles, typing indicators, call invites).  
The problem is two‑fold:

1. **Detection** – we must translate a user’s TCP/HTTP session into a Boolean state with minimal delay and no false positives.
2. **Distribution** – every client that cares about Alice has to be notified within milliseconds when the state flips.

**Fundamental design principle**

Treat presence as an *event stream* on a distributed key‑value store where each key is `user_id → status`.  
Updates are *idempotent* (set `online` or `offline`) and carry a monotonically increasing **timestamp**.  
Consistency is relaxed to *eventual* because a single missed notification only leaves the UI momentarily stale, but we enforce *at‑least‑once delivery* via back‑pressure queues.

**Key components**

| Layer | Role |
|-------|------|
| **Client heartbeat** | Periodic ping (≈5 s) or WebSocket close detection. Generates `online` event. |
| **Presence service** | Stateless microservice that writes to a Redis cluster (`SETEX user_id 30 online`). TTL auto‑expires to guard against dropped heartbeats. |
| **Pub/Sub broker** | Kafka topic “presence” where each write is published with the timestamp. |
| **Subscriber gateway** | Clients subscribe via WebSocket; gateway consumes from Kafka and pushes delta events. Back‑pressure guarantees no message loss even under bursty traffic. |

**Non‑obvious insight**

The *TTL* on Redis acts as a built‑in *stale‑data detector*: if the heartbeat stops, the key simply expires instead of requiring an explicit `offline` event. This removes a whole class of race conditions (e.g., network partitions) and lets the system scale to millions of users with O(1) memory per user.

**Result**

A linear‑time, horizontally scalable presence platform that guarantees sub‑second updates, graceful degradation, and minimal operational complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
