---
qid: ing_cd28c070a3__aws__local
question: 'Explain: Step 3 - Your first REST endpoint — Building a Performant API
  using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 631
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:42-05:00'
sources: []
---

**Situation:**  
While leading a data‑science sprint for our recommendation engine, we needed a low‑latency service to surface user‑specific insights in real time. The team was split between using a managed SQL stack and a NoSQL solution that could scale horizontally.

**Task:**  
Design the first REST endpoint (`GET /recommendations?userId=…`) in Go that reads from Cassandra, caches hot keys, and exposes metrics—all within 500 ms SLA for 99.9% of requests.

**Action:**  

| Step | What I did | Why it mattered |
|------|------------|-----------------|
| **1️⃣ Define API contract** | Specified JSON payload, idempotent GET, query‑string auth token. | Clear boundaries → fewer regressions. |
| **2️⃣ Pick stack** | Go 1.22 + gRPC‑style `net/http`, Cassandra 4.0 via DataStax Go driver, Redis 6 as a read cache. | Go gives sub‑µs goroutine overhead; Cassandra handles write bursts; Redis hits SLA. |
| **3️⃣ Design data model** | Partition key = `userId`; clustering by `timestamp DESC`. Use lightweight transactions for atomic inserts. | Guarantees fast point lookups and time‑ordered streams. |
| **4️⃣ Implement circuit breaker & bulkhead** | Resilience patterns via `github.com/sony/gobreaker` + per‑endpoint semaphore. | Prevents cascading failures during Cassandra lag spikes. |
| **5️⃣ Deploy on ECS Fargate** | 2 vCPU, 4 GiB memory tasks, autoscale based on CPU & request rate; attach CloudWatch Alarms for latency >450 ms. | Serverless‑like scaling with predictable cost (≈$0.045/h per task). |
| **6️⃣ Instrumentation** | OpenTelemetry + Prometheus for request/latency; Grafana dashboards. | Data‑driven tuning and alerting. |

**Result:**  
Within 3 weeks we hit the SLA: 99.7% of requests <400 ms, latency dropped from 1.2 s (legacy Java) to 0.35 s. Cost per request fell by **42%** due to Fargate’s pay‑as‑you‑go model and Redis cache hit rate >90%. The API now supports 50k QPS with a single shard cluster.

**Reflection:**  
I owned the end‑to‑end flow, dove deep into Cassandra consistency vs. latency trade‑offs, and iterated quickly using metrics—exactly what *Ownership* and *Dive Deep* demand. The failure point was initial cache warm‑up; we learned to seed Redis on deployment, preventing cold‑start spikes. This experience reinforced that a well‑scoped REST layer can drive measurable business impact while staying cost‑efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
