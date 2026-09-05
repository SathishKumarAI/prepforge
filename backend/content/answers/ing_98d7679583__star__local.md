---
qid: ing_98d7679583__star__local
question: 'Explain: Approach 3: Distributed unique ID generator'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 327
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:14-05:00'
sources: []
---

**Situation** – In my last role I was tasked with adding a globally unique identifier for user sessions across our microservices architecture, which spanned three data centers and had to handle up to 10 k writes per second without a single point of failure.

**Task** – Design a distributed ID generator that guarantees uniqueness, is fast (≤1 ms latency), and scales horizontally while avoiding coordination bottlenecks.

**Action** – I chose a Snowflake‑style algorithm: each node owns a 10‑bit worker ID derived from its rack/region. I implemented the generator in Go, using a local atomic counter for the 22‑bit sequence number and timestamp bits (millisecond precision). To prevent clock skew, I incorporated a simple NTP check and a fallback to a “time‑backward” adjustment that increments an epoch offset. The service exposes a gRPC endpoint; we load‑balanced requests across nodes via Kubernetes headless services. For resilience, each node periodically syncs its worker ID with a lightweight ZooKeeper ensemble so new instances receive unique IDs without manual intervention.

**Result** – We achieved 99.9999 % uptime for ID generation, with average latency of 0.8 ms under peak load. The system handled 12 k writes/sec during a flash sale and never produced duplicate IDs in production. I learned the importance of balancing decentralization with simple coordination mechanisms, and that careful timestamp handling is critical to avoid subtle race conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
