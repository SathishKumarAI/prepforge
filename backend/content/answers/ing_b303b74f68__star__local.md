---
qid: ing_b303b74f68__star__local
question: 'Explain: Traffic — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 370
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:46-05:00'
sources: []
---

**Situation** – At my last company we launched a live traffic dashboard that streamed real‑time road incident reports from over 50 cities. The comments section had to handle thousands of users posting and reacting in milliseconds while keeping the page load under 200 ms.

**Task** – Design an end‑to‑end architecture for the comment system: ingest, store, deliver, and scale it so that latency stayed <150 ms at peak traffic (≈20k comments per second) and we could support eventual consistency across regions.

**Action** – I chose a microservice pattern with a Go‑based API gateway. For ingestion I used Kafka topics partitioned by city to guarantee order; a consumer pool wrote to a Redis‑cached write‑through layer, then asynchronously persisted to PostgreSQL for audit. For delivery I implemented WebSocket hubs per city, backed by NATS Streaming for pub/sub, and used a CDN edge cache to serve static comment threads. I added a rate‑limit middleware (10 req/s per IP) and sharded the Redis cache across 4 nodes. Monitoring with Prometheus + Grafana surfaced latency spikes; we auto‑scaled consumer groups based on queue depth.

**Result** – The system handled 35k comments/second during peak festivals, keeping average end‑to‑end latency at 120 ms. User engagement rose 27% due to faster feedback loops. I learned that coupling a lightweight message bus with cache‑first writes dramatically reduces perceived latency, and that sharding by logical partition (city) keeps the system elastic without cross‑region traffic penalties.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
