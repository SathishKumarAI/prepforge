---
qid: ing_8d79044917__star__local
question: 'Explain: Summary — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 331
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:34-05:00'
sources: []
---

**Situation:**  
In a production recommendation engine for an e‑commerce platform, we were deploying nightly model updates that triggered real‑time inference pipelines via RESTful microservices. During load testing, we observed duplicate predictions being sent to downstream services when a client retried the request after a timeout.

**Task:**  
I needed to guarantee that each user query produced a single prediction regardless of repeated network calls—implementing idempotency for the inference API—while keeping latency under 50 ms and maintaining high throughput.

**Action:**  
I added a lightweight, distributed cache layer (Redis) keyed by a client‑supplied request ID. The microservice first checks Redis; if an entry exists it returns the cached prediction. If not, it runs the model, stores the result with a 5‑minute TTL, and then returns it. I also updated the API contract to require the idempotency key and added middleware that logs duplicate requests for monitoring. To preserve consistency across shards, I used Redis Cluster with consistent hashing and ensured that model weights were versioned and immutable during inference.

**Result:**  
Duplicate predictions dropped from ~18% of requests to <0.1%. Latency stayed at 42 ms on average, and the system handled a 3× increase in traffic without degradation. The exercise reinforced the importance of stateless design coupled with a shared cache for idempotent operations in ML serving pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
