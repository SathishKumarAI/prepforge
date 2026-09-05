---
qid: ing_427d7dd5f0__star__local
question: 'Explain: Type of Data Store — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 367
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:42-05:00'
sources: []
---

**Situation** – I was tasked with building a real‑time comment platform for a streaming service that served 2 M concurrent users during peak events. The existing log‑based store was too slow to surface comments within 150 ms, and it couldn’t handle the write bursts when a new episode dropped.

**Task** – Design a data store that supports sub‑200 ms read latency for live comment feeds, scales to millions of writes per second, and guarantees eventual consistency across distributed replicas while keeping storage costs under $1.5 M annually.

**Action** – I chose a hybrid architecture: a Redis Cluster for hot key caching (latest 10k comments per channel) with write‑through persistence to a sharded Apache Cassandra column family (comment_id → payload). The Redis cache was partitioned by channel ID, TTL set to 2 h, and read replicas handled 80 % of traffic. Writes first hit an HTTP API that appended the comment to a Kafka topic; a consumer stream updated both Redis and Cassandra asynchronously. To reduce latency, I implemented an “early‑push” mechanism: upon receiving a write, the API broadcasted the comment via WebSocket to all active subscribers before persisting it, ensuring users saw their comments instantly.

**Result** – Read latency dropped from 350 ms to <120 ms under peak load; write throughput exceeded 5 M ops/s without failures. Storage cost stayed below budget by compressing Cassandra column values and archiving inactive channels nightly. I learned the importance of a cache‑first strategy for real‑time feeds and how asynchronous persistence can decouple latency from durability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
