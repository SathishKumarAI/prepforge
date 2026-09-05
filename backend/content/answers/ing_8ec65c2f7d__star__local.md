---
qid: ing_8ec65c2f7d__star__local
question: 'Explain: Candidate — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 336
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:26-05:00'
sources: []
---

**Situation** – In my last role I was asked to build a live comment feed for a streaming platform that could handle 50 k concurrent users while keeping latency under 100 ms during peak hours.

**Task** – The goal was to design an end‑to‑end system that could ingest, persist, and broadcast comments in real time with minimal lag, support moderation filters, and scale horizontally without service interruption.

**Action** – I chose a microservice architecture: a Kafka producer per ingestion node to decouple clients from the stream; a consumer group writing to Redis Streams for low‑latency ordering; an async worker pool that pushes messages to a Pub/Sub (AWS SNS) topic. For persistence I used a sharded PostgreSQL cluster with JSONB columns, indexed by channel ID and timestamp. To keep latency low I implemented server‑side caching of the most recent 200 comments per stream in Memcached, refreshing on every write via Redis pub/sub. Load testing revealed that horizontal scaling of the consumer nodes handled 100 k writes/sec with <95 ms average latency.

**Result** – The live comment system supported 75 k concurrent viewers during a flagship event, maintained sub‑150 ms end‑to‑end latency, and reduced server costs by 30 % compared to a monolithic design. I learned the value of decoupling ingestion from persistence and the importance of caching for real‑time feeds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
