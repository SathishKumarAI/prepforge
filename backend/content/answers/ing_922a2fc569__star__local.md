---
qid: ing_922a2fc569__star__local
question: 'Explain: Read Replica vs Cache — Readreplicavscache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 376
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:18-05:00'
sources: []
---

**Situation:**  
At a SaaS analytics firm we were serving real‑time dashboards for 120k concurrent users. The PostgreSQL cluster’s read throughput was hitting 3 k QPS, and latency spikes began to exceed the 200 ms SLA during peak hours.

**Task:**  
I needed to design a scalable solution that could keep query latency under 150 ms while still delivering up-to-date metrics for dashboards and ad‑hoc reports.

**Action:**  
I evaluated two options: a read replica and an in‑memory cache. I set up a standby PostgreSQL replica with streaming replication; queries were routed via PgBouncer to the replica, reducing write contention on the master. For highly volatile data (click counts), I deployed Redis as a cache layer using `GET`/`SET` with TTL 30 s and Pub/Sub for invalidation from the master. We instrumented Prometheus metrics: replica lag stayed below 0.5 s; Redis hit 95 % cache hit rate, cutting query time from 200 ms to ~70 ms for cached keys. The combined approach let us keep consistency on the replica while offloading hot data to Redis.

**Result:**  
Overall read latency dropped to an average of 80 ms, meeting our SLA with a 40 % reduction in CPU usage on the master. I learned that read replicas are ideal for scaling read traffic and maintaining ACID guarantees, whereas caches excel at handling bursty, highly repetitive queries—using both in tandem gives the best trade‑off between freshness and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
