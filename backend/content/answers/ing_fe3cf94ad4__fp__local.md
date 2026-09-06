---
qid: ing_fe3cf94ad4__fp__local
question: 'Explain: Chat Servers — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 486
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:00:32-05:00'
sources: []
---

**Why a chat server needs a *state‑driven* architecture**

The core problem is: *deliver every message exactly once to the intended recipients, even when devices are offline or network partitions occur.*  
If we model each user as a state machine that can be in “online”, “offline” or “buffering” states, the system becomes an **event‑driven state transition graph**.  

1. **Events = messages + presence updates**  
   Each event is immutable and timestamped (Lamport clocks). The server must maintain a causal order without re‑ordering user traffic—this guarantees that every client can reconstruct the same conversation history.

2. **Event sourcing + CQRS**  
   Persist all events in an append‑only log (`write‑once`). Query side builds materialized views (user’s inbox, read receipts) on demand. This separates write scalability from read latency and aligns with the *optimality* principle: writes are cheap, reads can be served by a pre‑computed projection.

3. **Presence shards + gossip**  
   Presence information is short‑lived; we store it in an in‑memory sharded store (Redis). A lightweight gossip protocol keeps replicas consistent, avoiding costly consensus for transient data—this respects the *probabilistic consistency* trade‑off.

4. **Offline delivery queue**  
   For each user, a bounded FIFO per conversation holds pending messages. When the device reconnects, the server streams only the tail of this queue, guaranteeing at‑most‑once semantics while keeping storage linear in active users (not total message volume).

**Non‑obvious insight:**  
Treat *read receipts* as *acknowledgement events* that feed back into the same event log. This eliminates a separate “ACK service” and lets read state be recovered by replaying events, ensuring perfect auditability even after catastrophic failures.

Overall, a chat server is an **immutable event stream** with bounded per‑user queues, sharded presence, and CQRS projections—an elegant solution grounded in information theory (entropy minimization) and distributed systems principles (eventual consistency + bounded staleness).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
