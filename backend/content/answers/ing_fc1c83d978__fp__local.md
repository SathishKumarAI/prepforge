---
qid: ing_fc1c83d978__fp__local
question: 'Explain: Terminology — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 463
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:55:47-05:00'
sources: []
---

**Real‑time Presence Platform – System‑Design Fundamentals**

At its core, a *presence* service answers the question: “Which users are online now?” The **problem** is to maintain an up‑to‑date set of active endpoints with minimal latency and high throughput while scaling to millions of concurrent clients.

1. **State vs. Event** – Presence is fundamentally a *stateful* view derived from a stream of events (login, heartbeat, logout). Instead of polling every client, we treat the event stream as a source of truth: `state = fold(state, event)`. This transforms a combinatorial problem into a linear‑time update.

2. **Consistency vs. Availability** – The *CAP* trade‑off is inverted: we need strong *eventual consistency* for presence (a user who just logged in must be visible within 100 ms), but can tolerate stale reads on the order of seconds. Hence, a hybrid approach: a fast in‑memory cache (Redis) for hot users and an eventual‑consistent store (Cassandra) for durability.

3. **Partitioning Strategy** – Presence data is *hot* only for active users; we shard by **user‑hash** to keep per‑node load bounded, while also replicating the most recent 10 k users across nodes to handle bursts.

4. **Push vs. Pull** – Clients subscribe via WebSocket or long polling. The server pushes presence updates, but a *reverse index* (topic → user list) lets us multicast efficiently.

5. **Non‑obvious Insight** – Treating the presence cache as a *probabilistic bloom filter* for “offline” users dramatically reduces memory: we only store a compact bitmap of active IDs and query it before hitting Redis, yielding 90 % hit reduction with <1 % false positives.

In sum, real‑time presence is an optimization problem: keep a live state cheaply, propagate changes fast, and balance consistency against scalability using stream‑to‑state folding, hybrid storage, and probabilistic indexing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
