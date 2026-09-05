---
qid: ing_d22580b63a__star__local
question: 'Explain: Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 373
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:57-05:00'
sources: []
---

**Situation**  
I was tasked with redesigning our real‑time analytics pipeline for a fintech app that streams transaction events to millions of users worldwide. The existing Pub/Sub setup (Kafka) was flooding downstream services with every event, causing high latency and uneven load on the fraud‑detection microservice.

**Task**  
Create a filtering layer so only relevant transactions—those above $10,000 or flagged by risk rules—reached the fraud service, while still keeping overall throughput and fault tolerance intact.

**Action**  
I introduced an intermediate “filter” topic in Kafka. Using a lightweight consumer group that runs a streaming job (Apache Flink), I parsed each incoming event, applied our business‑rules engine, and routed passing events to dedicated sub‑topics (`high_value`, `flagged`). The job writes back to Kafka with exactly‑once semantics via idempotent sinks, ensuring no duplicate alerts. I also leveraged Kafka’s topic partitioning to keep high‑value streams isolated, allowing the fraud service to scale independently. For latency control, I set a short retention window (5 min) on the filter topic and enabled compacted logs for stateful filtering.

**Result**  
Post‑deployment, the fraud service saw a 70% reduction in message volume while its average processing time dropped from 350 ms to 120 ms. We also cut infrastructure costs by 35%. I learned that a well‑placed filter layer can dramatically improve system efficiency without sacrificing reliability or scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
