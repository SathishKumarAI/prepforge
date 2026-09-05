---
qid: ing_52417bf3d4__star__local
question: 'Explain: URL Generation Service — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 361
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:52-05:00'
sources: []
---

**Situation**  
During my last internship I was asked to prototype a URL‑shortening microservice for an internal tool that needed to handle ~10 k new links per minute and serve millions of hits daily.

**Task**  
I had to design a system that could generate unique short codes, persist them with high write throughput, provide instant lookups, and scale horizontally while keeping latency below 50 ms under peak load.

**Action**  
I chose a two‑layer architecture: an in‑memory cache (Redis) for hot URLs and a sharded NoSQL store (Cassandra) for persistence. For code generation I used a base‑62 encoder on a distributed counter implemented with a lightweight Raft cluster to avoid collisions without central bottlenecks. Each write first goes to the cache, then asynchronously to Cassandra via a Kafka queue to decouple traffic spikes. I added TTLs and read‑through logic so that cache misses trigger a fallback lookup, and used Bloom filters at the edge to filter obvious non‑existent keys. Monitoring with Prometheus tracked hit/miss ratios and latency, guiding auto‑scaling of Redis shards.

**Result**  
The prototype handled 15 k writes/sec, reduced average lookup time from 120 ms to 35 ms, and supported 1.2M daily hits with <0.01% collision rate. I learned how sharding, asynchronous persistence, and cache layering together enable a highly available URL shortener at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
