---
qid: ing_5dca4f0c1c__star__local
question: 'Explain: Related patterns — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 349
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:51-05:00'
sources: []
---

**Situation:**  
At my previous company we built a recommendation engine that fed real‑time personalization data into a downstream analytics pipeline. Every user interaction (click, view, purchase) was stored in our PostgreSQL database and also published to Kafka for processing by the ML model. However, during peak traffic we saw Kafka lagging: some events were missing or duplicated because the database commit and message send weren’t atomic.

**Task:**  
I needed to guarantee that every user event was persisted once and only once while still delivering it to Kafka without blocking the write path, so our ML pipeline would receive a clean stream of data for training and inference.

**Action:**  
Implemented the transactional outbox pattern. For each user interaction I wrote two rows in an “outbox” table inside the same transaction that records the event payload and a status flag. A lightweight background worker reads unprocessed outbox rows, publishes them to Kafka, then updates the status atomically. This keeps the write latency low (a single DB round‑trip) while ensuring exactly‑once delivery via the database’s ACID guarantees. I also added idempotency keys in the message headers so downstream services can safely ignore duplicates if they ever occur.

**Result:**  
Kafka lag dropped from an average of 12 seconds to under 200 ms, and we eliminated duplicate events entirely. The ML model’s training data quality improved by 15%, reflected in a 4% lift in recommendation accuracy. I learned that coupling persistence with messaging through the outbox gives robust reliability without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
