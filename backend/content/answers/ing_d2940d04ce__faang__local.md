---
qid: ing_d2940d04ce__faang__local
question: 'Explain: Internal Monitoring & Alerting — Hitcounterdesigntwitter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 486
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:50:03-05:00'
sources: []
---

**Internal Monitoring & Alerting – Twitter‑style Hit Counter**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Goal:* Count page visits per tweet, expose a real‑time API, keep latency < 50 ms, 99.9% availability. Confirm: data freshness window (1 s), max concurrent users (~10M), retention period (30 days). |
| **Approach** | 1️⃣ Capture click events → Kafka topic “tweet_visits”.<br>2️⃣ Stream‑process with Flink/Beam to maintain per‑tweet counters in Redis (hot keys) and append to ClickHouse for long‑term analytics.<br>3️⃣ Expose counters via a gRPC service backed by the Redis cache. |
| **Depth** | • *Ingestion*: Kafka partitions on tweet_id → 1 kB event → ~10 MB/s throughput. <br>• *Processing*: Flink windowless operator updates counter atomically; latency ≈ 30 ms. <br>• *Storage*: Redis LRU policy, 4 GB RAM for hot keys; ClickHouse aggregates per‑day for reporting. <br>• *Alerting*: Prometheus scrapes hit‑rate metrics; alert on > 3× spike or counter drift > 1% from expected trend. |
| **Edge Cases** | • Bot traffic → apply rate‑limit per IP and bot‑user agent filtering.<br>• Duplicate events (replay) → dedupe via event_id + timestamp window.<br>• Cache miss → fallback to ClickHouse query (latency ↑). |
| **Optimize & Communicate** | • Batch writes to Redis every 200 ms to reduce network overhead. <br>• Use sharded Redis clusters for horizontal scaling; add read replicas for API bursts. <br>Explain trade‑offs: higher cache hit ratio vs. memory cost, and how Prometheus + Grafana give observability while alerting keeps the system healthy. |

*Result:* A low‑latency, highly available hit counter that scales with traffic spikes, automatically alerts on anomalies, and provides both real‑time and historical analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
