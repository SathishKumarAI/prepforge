---
qid: ing_ae3c1f6017__fp__local
question: 'Explain: Offline Message Handling — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 384
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:15:10-05:00'
sources: []
---

**Offline Message Handling – WhatsApp**

The core problem is *guaranteeing delivery* for a user who is offline without sacrificing scalability or latency.  
1. **State to preserve**: every message’s *content*, *timestamp*, and *delivery‑status* (sent, delivered, read).  
2. **Why persistence matters**: a distributed system can lose state on node failure; persisting each outgoing message to a write‑once log (e.g., Kafka/FS) ensures durability.  
3. **Decoupling sender from receiver**: the sender’s request is acknowledged after appending to the log, not waiting for the recipient. This satisfies *optimistic concurrency*—the system moves forward while deferring expensive operations.  
4. **Pull‑based delivery**: when a user comes online, the client queries the server for all messages whose `sent_at` > last_sync. The server reads from the log (or a compacted index) and streams them in order. This is an *eventual consistency* model: the receiver eventually sees every message that was persisted.  
5. **Push‑based fallback**: if bandwidth permits, a lightweight push notification can trigger the pull, reducing round‑trips.

**Non‑obvious insight:** Treat the log as both *storage* and *queue*. By idempotently replaying log entries on recovery, you avoid separate “undelivered” tables; every node can recover to the same state by reprocessing its portion of the log. This unifies durability with fault tolerance, keeping the design lean yet robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
