---
qid: ing_031eb9e4fc__star__local
question: 'Explain: it um you can see I''ve stuck — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 328
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:29-05:00'
sources: []
---

**Situation:** In my last role as a data engineer at a fintech startup, our batch‑processing pipeline was hitting a throughput bottleneck during peak trading hours—latency spiked to over 5 seconds, breaking the SLA for real‑time risk calculations.

**Task:** I needed to redesign the ingestion and processing flow so that events from market feeds could be handled asynchronously, ensuring sub‑second latency while still guaranteeing eventual consistency across our analytics services.

**Action:** I introduced an event‑driven architecture using Kafka as a durable broker. Each trade tick was published to a “trades” topic; consumers (risk engine, portfolio reconciler) subscribed and processed events in parallel. I added a lightweight schema registry with Avro to enforce data contracts, and employed Kafka Streams for stateful aggregations, eliminating the need for an external cache. To manage backpressure, I implemented rate‑limiting partitions and used consumer groups to scale horizontally. Finally, I wrote integration tests that simulated 10k events per second to validate throughput.

**Result:** The new pipeline cut processing latency from 5 seconds to under 200 ms during peak loads, increasing our risk calculation capacity by 4×. We also reduced operational costs by eliminating the old batch scheduler and achieved 99.9% data consistency across services. I learned that a well‑designed event bus not only solves scalability issues but also provides a clean contract for evolving downstream consumers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
