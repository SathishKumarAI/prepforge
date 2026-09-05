---
qid: ing_01f7247673__star__local
question: 'Explain: Real-Time Live Commenting Platform — Live Comment System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 390
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:18-05:00'
sources: []
---

**Situation** – While working at a streaming‑video startup, our viewership spiked to 1 M concurrent users during the launch of a live sports event. The existing comment feed was throttled by a single Redis pub/sub channel and a monolithic Node.js server; latency hit 800 ms and we lost about 30 % of comments due to message loss.

**Task** – Redesign the real‑time commenting system so that it could ingest >500 k messages per second, keep end‑to‑end latency under 200 ms, support graceful degradation, and allow later analytics without affecting live throughput.

**Action** – I architected a micro‑service pipeline: (1) front‑ends push comments to an HTTP API backed by a Kafka producer; (2) a stateless consumer group writes to a sharded Cassandra table for persistence and streams to a Redis Streams cluster; (3) WebSocket workers read from the stream, batch emit 50 ms ticks, and use a CDN edge cache with Lua scripts to enforce per‑user rate limits. I introduced a retry layer using exponential backoff and used Prometheus/Grafana dashboards for latency KPIs. For analytics, a separate Flink job consumes the same Kafka topic.

**Result** – Latency dropped from 800 ms to 140 ms on average; message loss fell below 0.01 %. The system handled 750 k msg/s during peak and scaled horizontally with zero downtime. I learned that decoupling ingestion, persistence, and delivery via a stream‑first approach is key for high‑volume real‑time features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
