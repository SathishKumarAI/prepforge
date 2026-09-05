---
qid: ing_0468d518aa__star__local
question: 'Explain: Capacity Planning — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 349
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:36-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the live‑comment feed for a streaming platform that had just hit 3 million concurrent viewers during peak events. The existing monolith could only serve about 10 k comments per second before latency spiked.

**Task** – I needed to build a horizontally scalable, low‑latency comment pipeline that could handle 200 k comments per second while keeping end‑to‑end latency under 150 ms and guaranteeing eventual consistency across CDN edge caches.

**Action** – I split the system into three layers: ingestion (Kafka topics partitioned by stream ID), processing (Spark Structured Streaming with a rolling window for moderation), and delivery (Redis Streams feeding WebSocket servers behind an autoscaling group). I introduced rate‑limiting per user, TTLs on Redis keys, and used CloudWatch alarms to trigger horizontal scaling. Load tests in Gatling simulated 250 k RPS; we added a second Kafka broker cluster and increased Redis node count by 30% before launch.

**Result** – The new architecture sustained 220 k comments/sec with <120 ms latency during the next live event, reducing dropped messages from 4.5 % to <0.1 %. I learned that careful partitioning, real‑time metrics, and automated scaling are key to capacity planning for high‑velocity user interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
