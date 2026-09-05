---
qid: ing_00d7b3f78c__fp__local
question: 'Explain: Real-Time Presence Platform API — Real Time Presence Platform
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 621
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:10-05:00'
sources: []
---

**Real‑time Presence Platform (RPP) – the “who is online?” problem**

*Fundamental task*: for each user *u*, keep an instant estimate of `online(u)` that can be queried, updated, and broadcast in sub‑millisecond latency while scaling to millions of concurrent users.  
The core challenge is **state consistency under high churn**: a user may connect from many devices, disconnect abruptly, or fail silently.

---

### 1. Architecture from first principles

| Layer | Why it exists | Key invariant |
|-------|---------------|----------------|
| **Client SDK** | Pushes heartbeats (`ping`) and receives presence events | `last_seen(u) ≤ now ≤ last_seen(u)+Δ` (Δ≈5 s) |
| **Edge API Gateway** | Shards requests by user hash to reduce hot‑spots | Each gateway handles a disjoint set of users |
| **Presence Store** | Durable, low‑latency key/value (e.g., Redis + Postgres WAL) | `presence[u] = {state, last_update}` is ACID for the shard |
| **Event Bus** | Propagates state changes to interested parties (chat rooms, dashboards) | At‑least‑once delivery with idempotent handlers |
| **Health Monitor** | Detects silent disconnects via TTL expiration | If `now - last_seen(u) > T` → mark offline |

---

### 2. Deep insight

The system is essentially an *online stochastic process* (a Markov chain over “online/offline” states).  
To guarantee consistency, we treat each user as a **local finite state machine** whose transitions are driven by external heartbeats and internal timeouts. The invariant `last_seen ≤ now` ensures that any query sees the most recent transition that has already been processed—no speculative reads.

A non‑obvious trick: **use the heartbeat timestamp as both liveness probe and causal ordering token**. Because every update carries an increasing monotonic clock, downstream services can safely merge out‑of‑order events without a global lock, preserving eventual consistency while keeping latency minimal.

---

### 3. API surface (first‑principles)

```http
POST /presence/{user_id}
{ "state": "online", "device": "web" }   ← idempotent; updates last_seen

GET /presence/{user_id}                  ← O(1) read from cache

WebSocket /subscribe?room=chat123        ← streams {user, state} events
```

The design balances **strong local consistency** (per‑shard ACID store) with **horizontal scalability** (sharded gateways, event bus). By reducing the problem to a simple finite state machine per user and leveraging timestamps for ordering, we achieve sub‑millisecond updates while keeping the system robust against churn and network partitions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
