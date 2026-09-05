---
qid: ing_e8c7315596__star__local
question: 'Explain: Inbox/Outbox pattern — Inboxoutbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 345
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:36-05:00'
sources: []
---

**Situation**  
When I was building a real‑time fraud detection system for a payments company, the data ingestion layer had to process millions of transaction events per day. A single Kafka consumer that wrote directly to our PostgreSQL model store caused data loss during spikes and made it hard to guarantee at‑least‑once delivery.

**Task**  
I needed to design a fault‑tolerant pipeline that ensured every event was processed exactly once, while keeping latency low enough for near‑real‑time scoring.

**Action**  
I implemented an Inbox/Outbox pattern using two tables in PostgreSQL. The consumer first writes each raw event into the `inbox` table with a status flag (`PENDING`). A lightweight background worker polls the inbox, transforms the payload (normalizes amounts, adds geolocation tags), and inserts the enriched record into the `outbox`. The outbox rows are then read by our model inference service via an efficient cursor. I added optimistic locking on the inbox rows to prevent duplicate processing, and used a retry loop with exponential back‑off for transient failures. All writes were wrapped in a single transaction so that either both tables updated or neither did.

**Result**  
The system achieved 99.9% delivery accuracy during peak loads, reduced duplicate model predictions by 95%, and cut end‑to‑end latency from 250 ms to 180 ms. I learned how coupling transactional guarantees with a decoupled processing queue can dramatically improve reliability in high‑throughput ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
