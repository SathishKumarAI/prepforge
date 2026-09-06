---
qid: ing_93f0dab15e__fp__local
question: 'Explain: Functional Requirements — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 444
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:19:53-05:00'
sources: []
---

**Functional requirements for a live‑comment system**

*Fundamental problem*: we must deliver user‑generated text to all viewers with **sub‑second latency**, while guaranteeing **consistency** (no lost or duplicated messages) and **scalability** (tens of thousands of concurrent users).  
1. **Real‑time ingestion** – each POST is assigned a monotonically increasing sequence ID by a lightweight leader so that every subscriber can order comments deterministically.  
2. **Broadcast delivery** – the system must push each comment to all active WebSocket connections; at scale this requires a fan‑out mechanism (e.g., publish/subscribe queues) that preserves ordering per stream but tolerates out‑of‑order arrival across shards.  
3. **Back‑pressure handling** – if a consumer lags, the producer must buffer up to a configurable window and drop or throttle older messages once the buffer overflows.  
4. **Fault tolerance** – comments are persisted in an append‑only log (e.g., Kafka) so that any node can recover state; replay guarantees “at least once” delivery with idempotent de‑duplication on the client side.  
5. **Security & moderation** – content is scanned for profanity or spam before publication; user identities and rate limits are enforced to prevent abuse.

*Why this works*: The linear ordering from a single leader turns an inherently distributed broadcast problem into a tractable “log‑based” protocol, aligning with the principle of *causal consistency*. A non‑obvious insight: **treating comments as immutable log entries allows you to reuse proven stream processing pipelines (e.g., Flink, Beam) for real‑time analytics without sacrificing latency**. This bridges the gap between a simple chat UI and sophisticated downstream ML tasks like sentiment or toxicity detection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
