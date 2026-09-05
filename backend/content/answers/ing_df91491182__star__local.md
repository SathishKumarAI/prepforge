---
qid: ing_df91491182__star__local
question: 'Explain: Events That Carry State — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 371
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:56-05:00'
sources: []
---

**Situation:**  
When we migrated the fraud‑detection pipeline from a monolithic batch job to a real‑time microservices architecture, our data engineering team noticed that the event stream was losing crucial context—each transaction event only carried the ID and amount, but downstream services needed user profile info to compute risk scores.

**Task:**  
Design an event‑driven solution that preserves state across services without duplicating data or creating tight coupling, while keeping latency under 50 ms for high‑volume traffic (≈200k events/s).

**Action:**  
I introduced “stateful events” by embedding a lightweight JSON payload with the user’s risk attributes (e.g., account age, last login) into each Kafka message. To keep the payload small, we used Protocol Buffers and compressed the fields with Snappy. I added an in‑memory cache layer (Redis) that held the latest state for each user; if a stale event arrived, the consumer would fetch fresh data from Redis before processing. We also implemented a version stamp so downstream services could detect when their cached state was out of date. Finally, we used Kafka Streams to materialize a global state store that automatically updated on every event.

**Result:**  
Latency dropped from 120 ms to 35 ms, and the fraud‑detection accuracy improved by 12% due to richer context. The system now scales horizontally without state duplication, and our team reduced operational overhead by eliminating manual cache refresh scripts. I learned that embedding minimal, versioned state in events can dramatically improve real‑time processing while keeping the architecture loosely coupled.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
