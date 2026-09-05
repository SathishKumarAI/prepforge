---
qid: ing_5e399b3a87__star__local
question: 'Explain: Common Pitfalls — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 350
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:36:26-05:00'
sources: []
---

**Situation** – In my last role I was leading the deployment of a real‑time fraud detection model for a payment gateway that processed ~2 M transactions per day. The inference service had to be exposed via an HTTP API, and we were under pressure to roll out new feature flags every sprint.

**Task** – Ensure that each transaction was evaluated exactly once, even if the client retried due to network hiccups or the load balancer sent duplicate requests. A non‑idempotent endpoint would have caused double‑charging or false positives in the fraud score, jeopardizing compliance and user trust.

**Action** – I introduced a lightweight idempotency layer: every request carried a UUID header; the API gateway stored the hash of (UUID + payload) in Redis with a 24‑hour TTL. On receipt, the service checked Redis first; if present it returned the cached score instead of re‑running the model. We also added a “deduplication window” to guard against burst retries and instrumented the pipeline to log skipped runs for audit. The implementation used FastAPI, Pydantic schemas, and async aioredis, keeping latency under 50 ms.

**Result** – Duplicate evaluations dropped from ~4% of traffic (≈80k extra inferences/day) to <0.01%, saving us $12K/month in compute costs and eliminating false fraud flags. I learned that idempotency is a design pattern as much as a safety net; it protects business logic, compliance, and cost efficiency when scaling ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
