---
qid: ing_04cbb70aab__star__local
question: 'Explain: High-Level Design — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 348
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:36-05:00'
sources: []
---

**Situation** – In my senior capstone I was tasked with designing a scalable instant‑messaging app similar to WhatsApp for a class project. The prototype had to support 10,000 concurrent users, end‑to‑end encryption, and media streaming while keeping latency under 200 ms.

**Task** – Build an architecture that guarantees reliability, low latency, and secure messaging at scale, and then implement a minimal viable product in Python/Node with Docker orchestration.

**Action** – I started by defining the core services: **Auth**, **Message Queue**, **Presence**, **Media Store**, and **Chat API**. For message delivery I chose Kafka as the pub/sub backbone because of its horizontal scalability and exactly‑once semantics. The Chat API was built in Go for speed, exposing gRPC endpoints; it pulls from a Redis cache for online status, falling back to Cassandra for persistent chat history. End‑to‑end encryption was handled on the client side using libsodium, with session keys rotated every 30 days. Media uploads hit an S3‑compatible bucket behind CloudFront, and thumbnails were generated asynchronously by a worker pool.

**Result** – The prototype served 12,000 concurrent users in a test lab while keeping average round‑trip latency at 170 ms. Message loss was <0.02% under simulated network jitter. I learned how to balance consistency vs. availability using Kafka’s partitioning and how to architect services for independent scaling. This design earned us the “Best Architecture” award in our department.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
