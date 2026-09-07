---
qid: ing_3aa6d9552d__faang__local
question: 'Explain: Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 411
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:00:48-05:00'
sources: []
---

**Webhooks in a ML‑Powered System**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You want to explain how webhooks fit into a machine‑learning platform that triggers model inference or retraining when external data changes.”  Ask: *Do we need real‑time alerts? How many events per second? Do we guarantee ordering?”|
| **Approach** | 1️⃣ Design an event bus (Kafka/Redis Streams). 2️⃣ Expose a REST endpoint to register callbacks. 3️⃣ Store subscriptions in a sharded DB. 4️⃣ On data change, publish a lightweight message; consumer pulls it and issues the HTTP POST. |
| **Depth** | *Scalability*: use partitioned topics so each worker handles a subset of webhooks—linear scaling. <br>*Reliability*: retry with exponential back‑off; dead‑letter queue for persistent failures. <br>*Security*: signed payloads (HMAC), TLS, IP whitelisting. <br>*Complexity*: O(1) lookup per subscription, O(n) per event if fan‑out naïvely – mitigate by batching or using a publish/subscribe broker. |
| **Edge Cases** |  • Duplicate events → idempotent handlers.<br>• Subscriber downtime → store pending callbacks.<br>• High cardinality of users → use caching for subscription lookups. |
| **Optimize & Communicate** | Highlight that moving the heavy lifting (model inference) to downstream services keeps the webhook service thin, enabling horizontal scaling. Explain how monitoring metrics (latency, failure rate) guide auto‑scaling. Conclude with a short code sketch of the callback logic and mention that this pattern decouples data ingestion from ML pipelines, a common FAANG design principle. |

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
