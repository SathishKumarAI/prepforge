---
qid: ing_255d5757c0__star__local
question: 'Explain: 🔄 Asynchronous Communication — Awesome System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 349
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:19-05:00'
sources: []
---

**Situation** – At my previous company we had a micro‑services architecture that shipped nightly reports. Every day the “report” service would pull data from dozens of upstream services via REST calls, and the response time was drifting from 3 s to 10 s during peak hours, causing SLA breaches.

**Task** – I was asked to redesign the pipeline so it could handle a 50% increase in traffic without blocking downstream consumers, while keeping the same data freshness guarantee (≤5 min).

**Action** – I introduced an asynchronous event bus using Apache Kafka. Each upstream service now publishes a “data‑updated” event to a dedicated topic; the report service consumes these events via a lightweight consumer group. I added a Redis cache layer for idempotent processing and used Avro schemas with schema registry to enforce contract evolution. To avoid backpressure, I tuned producer `linger.ms` to 10 ms and set consumer `max.poll.records` to 200, which reduced CPU usage by ~30%. I also implemented dead‑letter queues for malformed messages.

**Result** – The new design cut the average report generation time from 9 s to 2.5 s under peak load, keeping data freshness within 3 min. Throughput increased by 70%, and we eliminated SLA violations. I learned that decoupling with a well‑tuned message bus not only solves latency but also makes the system far more resilient to changes in upstream services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
