---
qid: ing_93f0dab15e__star__local
question: 'Explain: Functional Requirements — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 380
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:50-05:00'
sources: []
---

**Situation** – While leading a product team at a media startup, we launched a new video platform that needed real‑time comments during streaming. The existing comment API was batch‑based and lagged by 5–10 seconds, which broke user engagement metrics (average session length fell from 12 min to 8 min).

**Task** – Design a live comment system that could ingest thousands of messages per second, deliver them with sub‑200 ms latency, scale horizontally for peak traffic, and support moderation without stalling the stream.

**Action** – I chose a publish/subscribe architecture using Apache Kafka as the ingestion layer and Redis Streams for low‑latency queuing. Each comment was validated against an NLP moderation model running in a container pool on Kubernetes. We used WebSocket connections from the frontend to a stateless Go microservice that pulled from Redis, aggregated by user ID, and broadcasted to all subscribers. To keep memory usage down, we capped each channel’s buffer at 200 messages and rotated older ones into an S3 archive. For scaling, we deployed Kafka brokers across two availability zones and set up auto‑scaling groups for the Go service based on CPU/memory thresholds.

**Result** – The new system handled 50k comments per minute during a live event with <180 ms end‑to‑end latency, boosting user engagement by 35% (session length 12.5 min) and reducing moderation queue time from 3 s to 0.4 s. I learned that coupling Kafka’s durability with Redis’s speed can meet stringent real‑time requirements while keeping infrastructure cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
