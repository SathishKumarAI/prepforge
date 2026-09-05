---
qid: ing_cd642283cf__star__local
question: What are Live Comments? — Live Comment System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 367
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:19:54-05:00'
sources: []
---

**Situation**  
While leading the product team for a video streaming app, we noticed that the watch‑time drop‑off at the 30‑second mark was 12% higher than our benchmark. Our analytics showed users felt disconnected from other viewers and wanted real‑time interaction.

**Task**  
I was tasked with designing a low‑latency live comment system that could scale to 50k concurrent streams, support millions of comments per hour, and integrate seamlessly into the existing front‑end without affecting playback quality.

**Action**  
I chose a publish/subscribe architecture using Redis Streams for in‑memory buffering and Kafka for durability. Comments were first written to a short‑lived Redis stream (latency < 30 ms) and then asynchronously persisted to PostgreSQL via a microservice. To keep bandwidth low, we compressed payloads with Protocol Buffers and delivered them through WebSocket connections with backpressure handling. We added a rate limiter per user (max 5 comments/sec) and a profanity filter using a Bloom filter for quick lookups. For scaling, the Redis cluster was sharded by channel ID, and Kafka partitions were aligned to ensure ordering within each stream.

**Result**  
Within three weeks of rollout, engagement on live streams rose from 18% to 27% completion, and comment volume hit 1.2 M comments per hour with an average latency of 28 ms. I learned that coupling in‑memory queues for speed with durable back‑ends for reliability is key for real‑time systems, and that thoughtful sharding can keep a single service from becoming a bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
