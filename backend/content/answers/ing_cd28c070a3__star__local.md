---
qid: ing_cd28c070a3__star__local
question: 'Explain: Step 3 - Your first REST endpoint — Building a Performant API
  using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 369
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:19:09-05:00'
sources: []
---

**Situation** – In a micro‑services project for a real‑time inventory platform, our data team discovered that the existing Python Flask endpoint was throttling under 10k concurrent requests during flash sales, causing 30 % latency spikes and SLA breaches.

**Task** – I had to design and deploy a new REST API in Go that could handle 50k QPS with <120 ms average latency while persisting state in Cassandra, all within the same release cycle.

**Action** – First, I modeled the data schema using Cassandra’s wide‑row design: a single “product_state” table keyed by `product_id` and timestamped partitions for event sourcing. I leveraged Go’s goroutine pool (worker‑pool pattern) to batch writes into 500 ms windows, reducing write amplification. For reads, I used prepared statements with consistency level ONE, and added an in‑memory LRU cache (groupcache) to hit hot products. The API was built on the `chi` router, wrapped with Prometheus metrics and a rate limiter (`rate.NewLimiter`). I containerized it with Docker, set up Helm charts for Kubernetes, and ran a k6 load test to validate 50k QPS.

**Result** – The new endpoint reduced average latency from 350 ms to 85 ms under peak load, achieved 99.9 % uptime during the sale, and cut Cassandra write cost by 40 %. I learned that careful data modeling plus Go’s concurrency primitives can turn a bottleneck into a high‑throughput service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
