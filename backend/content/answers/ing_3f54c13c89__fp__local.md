---
qid: ing_3f54c13c89__fp__local
question: 'Explain: Heartbeat — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 519
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:19:06-05:00'
sources: []
---

## Why a “heartbeat” system must exist

When an app needs to know *who* is online, it has to turn the **temporal visibility** problem into a **distributed state machine**: every client emits a *pulse* that says “I am alive”.  
The fundamental constraints are:

1. **Freshness vs. cost** – we want presence within milliseconds but cannot flood the network with packets.
2. **Fault‑tolerance** – a single node failure must not erase all knowledge of who is online.
3. **Scalability** – millions of clients, each sending dozens of pings per minute.

These constraints force a two‑layer design: a **fast, local gossip layer** for low‑latency updates and a **persistent, replicated store** for durability.

### Layer 1 – Gossip + Sliding Window

Each client sends a heartbeat (e.g. every 5 s).  
A node receives heartbeats, stores the timestamp in an **LRU window** of size *k* per user.  
If no new pulse arrives within `timeout = k × interval`, that user is marked offline.

Why gossip?  
Because it guarantees eventual consistency with sub‑second latency and tolerates churn: nodes only talk to a handful of peers, reducing traffic from \(O(N^2)\) to \(O(N \log N)\).

### Layer 2 – Eventual Persistence

Heartbeats are batched and written to a **distributed log** (Kafka or Pulsar).  
A secondary service consumes the stream, updates a **compact key‑value store** (e.g. Redis Cluster, Cassandra) with *lastSeen* timestamps.

This two‑tier approach gives:

- **Fast reads**: presence is a single GET on the cache.
- **Durability**: if all gossip nodes die, the log can replay and rebuild state.
- **Elasticity**: new shards can be added without stopping the system.

### Non‑obvious Insight

Most designs treat heartbeats as *data* only; they ignore that the heartbeat itself is a *protocol* for synchronizing clocks. By embedding a small vector clock (e.g., Lamport timestamp) in each pulse, we can detect and resolve **stale** or **reordered** messages without extra traffic—something most systems overlook but dramatically improves accuracy under network jitter.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
