---
qid: ing_3621838703__star__local
question: 'Explain: Event-Sourcing — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 311
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:33-05:00'
sources: []
---

**Situation** – At my last role, we were building a recommendation engine that had to adapt in real time to user interactions on an e‑commerce platform. The existing batch pipeline was too slow; new purchases or clicks weren’t reflected until the next nightly job, causing stale recommendations and a drop in conversion rates.

**Task** – I needed to redesign the data ingestion layer so that every user action could immediately trigger model updates without breaking the overall system performance.

**Action** – I introduced an event‑driven architecture using Kafka as the message bus. Each click, add‑to‑cart, or purchase emitted a lightweight JSON event with user ID, item ID, timestamp, and context metadata. A dedicated “feature extractor” microservice consumed these events, updated a Redis cache of user embeddings, and pushed them to an online inference endpoint. I also implemented idempotency keys to handle duplicate events and leveraged Kafka Streams for real‑time aggregation, ensuring that the model only re‑trained on statistically significant drifts.

**Result** – The latency from click to recommendation update dropped from 4 hours to under 200 ms. Conversion rates rose by 12 % within two weeks, and we reduced the nightly batch job footprint by 70 %. I learned that coupling domain events with lightweight processing pipelines can turn a static ML workflow into an elastic, real‑time system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
