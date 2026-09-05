---
qid: ing_eb3eae1805__star__local
question: 'Explain: Interviewer — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 383
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:18:56-05:00'
sources: []
---

**Situation** – In my last role I was asked to build a live comment feed for a sports streaming app that already handled 50 k concurrent users during major events. The existing backend could push messages but suffered from latency spikes and bursty traffic.

**Task** – My goal was to design an end‑to‑end system that kept message latency under 200 ms, scaled to millions of viewers, and provided real‑time moderation without blocking user experience.

**Action** – I chose a pub/sub architecture using Kafka for ingestion and Redis Streams for low‑latency delivery. Each comment went through a lightweight Go service that applied regex filters and sent flagged content to an ML moderation model hosted on TensorFlow Serving. To prevent backpressure, I implemented a token bucket per user stream in Redis, dropping excess messages with a “slow‑mode” flag. For global ordering, I partitioned Kafka topics by event ID and used consumer groups to balance load. Monitoring was set up with Prometheus/ Grafana; I added circuit breakers for the ML endpoint so if it lagged, the system would serve cached “moderation in progress” placeholders.

**Result** – The new pipeline reduced average end‑to‑end latency from 350 ms to 120 ms and handled a 3× traffic spike during the championship final with no outages. Moderation accuracy improved by 15% over the legacy rule‑based approach, and we cut infrastructure costs by 20% thanks to efficient Kafka compaction and Redis eviction policies. I learned that combining stream processing with edge‑caching and graceful degradation is key for real‑time user engagement systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
