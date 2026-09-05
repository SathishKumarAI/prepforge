---
qid: ing_40028c181a__fp__local
question: 'Explain: When the message is sent — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 395
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:20:29-05:00'
sources: []
---

**When does a WhatsApp‑style system actually deliver a message?**

1. **Client → Server** – The sender’s app writes the payload to its local “outbox” and pushes it over an encrypted TCP/TLS channel (or WebSocket) to a regional edge server.  
2. **Edge → Core** – The edge forwards the packet to the nearest core router that owns the recipient’s user record. If the recipient is online, the message is routed immediately; if offline, the core stores it in a “pending‑queue” partitioned by *recipient ID*.  
3. **Core → Recipient** – When the recipient’s device reconnects (or the server receives a push notification), the core pulls the queued packet from the appropriate partition and pushes it to that edge, which then delivers it to the client.

Why this sequence?  
* **Optimisation of latency vs. cost:** By keeping most traffic local (edge → edge) we avoid long‑haul links; only “cross‑region” hops hit expensive backbone links.  
* **Consistency & fault tolerance:** Partitioning queues by user ID gives strong ordering guarantees and allows replicas to hand off a queue without race conditions.  
* **Scalability:** Each core router handles ~10⁶ users, with per‑user queues sharded across many machines; the system can add more routers linearly.

**Non‑obvious insight:** The “offline” buffer is *not* just a passive store; it’s an active scheduler. When a user comes online, the edge queries its local “delivery queue” for that user and triggers a batched push of all pending messages in a single HTTP/2 stream. This batching amortises per‑message overhead (TLS handshakes, TCP congestion windows) and dramatically reduces total latency compared to sending each message individually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
