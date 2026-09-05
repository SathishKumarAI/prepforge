---
qid: ing_6c9078162b__star__local
question: 'Explain: Redis Streams — Redisstreams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 367
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:02-05:00'
sources: []
---

**Situation**  
In my last role I was building a fraud‑detection pipeline for a fintech app that processed ~3 M transaction events per day. The existing Kafka setup had high latency and our on‑prem hardware cost was ballooning.

**Task**  
I needed to replace the message broker with something lightweight, reduce end‑to‑end latency below 200 ms, and keep the architecture horizontally scalable without a big capital outlay.

**Action**  
I evaluated Redis Streams as an in‑memory log. I set up a master Redis cluster (cluster mode, 6 shards) and created a stream called `tx-events`. Producers push JSON blobs using `XADD tx-events * payload`. Consumers run in Docker containers and use `XREADGROUP` to join consumer groups (`fraud-detector`, `audit-logger`). To guarantee at‑least‑once delivery I used the ID returned by `XACK` and a TTL of 5 min on pending entries. For backpressure, I implemented `XPENDING` checks and paused producers when pending > 10k. The pipeline also uses Redis Lua scripts to atomically update user risk scores.

**Result**  
Latency dropped from ~650 ms to 120 ms average; throughput stayed above 3 M events/day with zero out‑of‑order messages. Operational cost fell by 35% because we moved from a dedicated Kafka cluster to a single Redis cluster on the same servers. I learned that Redis Streams can be a drop‑in replacement for lightweight event streams when data volume is moderate and low latency is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
