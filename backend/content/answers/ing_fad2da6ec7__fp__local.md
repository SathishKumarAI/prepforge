---
qid: ing_fad2da6ec7__fp__local
question: What is WhatsApp? — Design WhatsApp | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 371
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:53:10-05:00'
sources: []
---

**WhatsApp: a distributed, low‑latency, end‑to‑end encrypted messaging system**

At its core, WhatsApp solves *“how to reliably transport small text/audio/video blobs between millions of mobile devices over an unreliable network”*.  
The first principle is **state consistency with minimal coordination**. Each user’s device holds the *latest* local copy of their chat history; any change (send/receive) must be reflected on all replicas without a single bottleneck. This leads to a **peer‑to‑peer, client‑side quorum** model: every message is first stored locally and then pushed to the cloud only for backup, while real‑time delivery uses a *push* channel (e.g., XMPP over TLS).  

The system must be **scalable**. By sharding users by phone number hash across dozens of regional data centers, each server handles ~10 k concurrent connections, keeping per‑node memory and CPU bounded.  
For **low latency**, WhatsApp uses a *short‑lived TCP connection* with keep‑alive heartbeats; if the network drops, the client immediately reconnects using an exponential back‑off, ensuring at most one second of delay.

**Non‑obvious insight:** The *“last‑seen” timestamp is not just UI fluff—it’s a lightweight consensus proxy*. When two devices receive the same message out of order, the one with the later timestamp wins, eliminating the need for complex causal ordering protocols while preserving user expectations.  

Thus, WhatsApp is essentially an **eventual consistency system** built on top of persistent local state, opportunistic cloud replication, and a lightweight conflict‑resolution heuristic driven by timestamps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
