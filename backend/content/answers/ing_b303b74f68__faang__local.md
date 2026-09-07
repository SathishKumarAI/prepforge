---
qid: ing_b303b74f68__faang__local
question: 'Explain: Traffic — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 498
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:39:58-05:00'
sources: []
---

**Traffic – Live Comment System Design**

| Step | What to cover |
|------|---------------|
| **Clarify** | “We need a real‑time comment feed for high‑traffic events (e.g., live streams).  Assumptions: <br>• Comments must appear within ~200 ms. <br>• Peak concurrency ≈ 10 k users per event, 100 k comments/sec. <br>• Comments are immutable once posted; read‑heavy with occasional moderation. |
| **Approach** | 1️⃣ **Front‑end**: WebSocket/Server‑Sent Events to push new comments.<br>2️⃣ **Back‑end**: Microservice “Comment Ingest” (HTTP + queue).<br>3️⃣ **Storage**: Partitioned NoSQL (Cassandra) by event ID; hot partition for latest N comments. <br>4️⃣ **Cache**: Redis streams per event for low‑latency reads.<br>5️⃣ **Pub/Sub**: Kafka to fan‑out new comments to caches and moderation workers. |
| **Depth** | *Ingest*: HTTP → validate → write to Cassandra (replication factor 3) + publish to Kafka. <br>*Read*: WebSocket client requests “last N” → fetch from Redis; if miss, query Cassandra. <br>Complexity: Write O(1), read O(log N) for DB, O(1) cache hit. <br>Durability via Kafka compaction + Cassandra backups. |
| **Edge Cases** | • Hot event causing single‑node overload → horizontal scale Redis shards.<br>• Comment flood (spam) → rate‑limit per IP/user; push to moderation queue.<br>• Node failure → use leader election for WebSocket gateway, read replicas for Cassandra. |
| **Optimize & Communicate** | • Batch writes to reduce network chatter. <br>• Use Bloom filters in Redis to quickly reject non‑existent event IDs. <br>Explain trade‑offs: higher cache hit rate vs memory cost; Kafka ensures ordering but adds latency. Highlight that this design meets 200 ms SLA while scaling linearly with traffic. |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
