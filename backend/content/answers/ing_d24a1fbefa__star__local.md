---
qid: ing_d24a1fbefa__star__local
question: 'Explain: Netflix System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 297
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:03-05:00'
sources: []
---

**Situation** – At my last role I was tasked with redesigning the recommendation pipeline for a streaming platform that served 70 M users. The existing batch‑based model produced stale recommendations; user engagement dropped by ~12% during peak hours.

**Task** – Build an end‑to‑end real‑time recommendation system that could ingest clickstreams, update models within seconds, and deliver personalized suggestions with <50 ms latency, while keeping cost under $2M/month.

**Action** – I architected a microservice mesh using gRPC over Kubernetes, partitioning user data across 32 shards keyed by user ID to avoid hot‑spots. For feature extraction I used Apache Flink streaming jobs that pushed updates into Redis Streams; the model served via TensorFlow Serving behind an Envoy cache layer. We switched from a single monolithic SQL DB to a distributed ClickHouse store for fast analytic reads, and implemented a nightly retraining job on Spot instances with Hyperopt to tune hyper‑parameters.

**Result** – Latency dropped from 1.2 s to 30 ms; real‑time recommendation click‑through rate improved by 18%, translating into $3M incremental revenue over six months. I learned that balancing freshness and cost requires careful sharding, caching, and leveraging managed streaming frameworks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
