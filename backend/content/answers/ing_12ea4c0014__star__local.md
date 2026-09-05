---
qid: ing_12ea4c0014__star__local
question: 'Explain: Real-Time Gaming Leaderboard — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 365
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:24-05:00'
sources: []
---

**Situation** – In my last role at a mobile‑gaming studio, we launched a new battle‑royale title that was projected to hit 1 million concurrent players within the first week. The existing leaderboard backend (a single MySQL table with row locks) was choking on writes; latency spiked above 200 ms during peak hours, breaking the in‑game ranking display.

**Task** – I needed to design a real‑time leaderboard that could ingest >10k score updates per second, serve top‑100 queries under 50 ms, and support global distribution with eventual consistency across regions.

**Action** – I chose a hybrid architecture: a Redis Cluster (sharded by game‑zone) for hot reads/writes, backed by an Apache Kafka stream that persisted events to a time‑series database (InfluxDB). Scores were batched into micro‑tasks; each zone’s leaderboards were cached in Redis with a TTL of 5 s. I implemented optimistic concurrency on writes and used Lua scripts to atomically update ranks. For global aggregation, I ran nightly MapReduce jobs on the Kafka log to recompute worldwide top‑lists, publishing them to a CDN edge cache.

**Result** – Write latency dropped from 200 ms to <30 ms; read latency for top‑100 queries stayed under 15 ms even during peak bursts. We handled 25k concurrent updates with zero downtime and reduced server costs by 35 %. I learned that decoupling hot reads/writes from durable storage, and using event sourcing, is key for scalable real‑time leaderboards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
