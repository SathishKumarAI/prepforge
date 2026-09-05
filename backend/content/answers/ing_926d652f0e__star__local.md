---
qid: ing_926d652f0e__star__local
question: 'Explain: Push — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 349
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:46-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the real‑time analytics pipeline for a mobile gaming company that had been using a pull‑based Kafka consumer to aggregate player events. The queue grew to over 20 M messages per day, and latency hit 4–5 seconds, which broke the live leaderboard feature.

**Task** – I needed to shift from polling to a push‑based Pub/Sub model so that event consumers received data within 200 ms, while still guaranteeing at‑least‑once delivery and graceful handling of burst traffic during seasonal events.

**Action** – I evaluated Google Cloud Pub/Sub and AWS SNS/SQS. Choosing Pub/Sub for its low‑latency streaming and built‑in dead‑letter support, I designed a topic hierarchy: `game-events`, with subtopics per game mode. I implemented a lightweight Go worker that subscribes via long‑polling, uses protobufs to serialize events, and pushes them into a Redis cache before the downstream analytics service consumes them. To handle spikes I set up auto‑scaling for the subscriber pool and used Flow Control to back‑pressure publishers when the backlog exceeded 500 k messages.

**Result** – The new push architecture cut event latency from 4.2 s to 180 ms on average, increased throughput by 3×, and reduced the failure rate of leaderboard updates to <0.01%. I learned that choosing the right messaging pattern and tuning flow control are critical for scaling real‑time analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
