---
qid: ing_e029c4c340__star__local
question: 'Explain: Post Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 372
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:02-05:00'
sources: []
---

**Situation**  
While leading the backend team at a fast‑growth photo app, we hit a bottleneck: our monolithic media pipeline couldn’t keep up with the 4 M daily new posts and the 2 B+ likes per month. Users reported 1–2 s delays when uploading or scrolling through feeds.

**Task**  
Architect a scalable Post Service that handles upload, storage, metadata ingestion, and real‑time feed generation while keeping latency under 300 ms for 95% of requests.

**Action**  
I broke the service into micro‑components: an **Upload Gateway** (REST + gRPC) that streams to S3-compatible object store with multipart uploads; a **Metadata Service** using PostgreSQL + Redis cache for quick lookups; and a **Feed Engine** built on Kafka Streams that pushes new posts to per‑user partitioned queues. We added a rate limiter in the gateway, implemented vectorized image processing via NVIDIA TensorRT, and used DynamoDB Global Tables for cross‑region replication. For feed ranking, we leveraged a hybrid approach: precomputed popularity scores stored in Redis, updated asynchronously by a Lambda function.

**Result**  
Post‑deployment, upload latency dropped from 1.8 s to <250 ms, while the daily post ingestion rate scaled from 50 k to 4 M posts with zero outages. Feed freshness improved: 90% of users saw new content within 2 s. I learned that decomposing a monolith into event‑driven services and caching hot data is key to scaling social media at petabyte scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
