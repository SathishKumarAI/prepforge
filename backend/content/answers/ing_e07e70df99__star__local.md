---
qid: ing_e07e70df99__star__local
question: 'Explain: Problem — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 361
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:38-05:00'
sources: []
---

**Situation:**  
In a fintech startup, we were building a real‑time fraud detection pipeline that ingested every user transaction into a Kafka stream for downstream ML models. A sudden spike in high‑volume trading caused data loss: some transactions never appeared in the stream because our database writes and Kafka publishes weren’t atomic.

**Task:**  
I had to ensure 100 % delivery of each transaction event without compromising latency or throughput, while keeping the system fault‑tolerant during peak loads.

**Action:**  
Implemented a transactional outbox pattern. Each service write now inserts the transaction record into the main table **and** an “outbox” row in a single database transaction. A lightweight scheduler reads new outbox rows, publishes them to Kafka, and marks them as sent. We used PostgreSQL’s `pg_notify` for real‑time change data capture and added idempotent keys so retries wouldn’t duplicate events. The outbox table was sharded by user ID to avoid contention, and we tuned the publisher to batch 500 messages per commit, keeping round‑trip latency below 20 ms.

**Result:**  
Post‑deployment, event loss dropped from ~3% during peaks to <0.01%. Throughput increased by 40 %, and our fraud models received a complete, time‑ordered stream of transactions, improving detection accuracy by 12 %. I learned that coupling DB writes with an outbox decouples persistence from messaging while preserving ACID guarantees—a pattern worth applying wherever event reliability matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
