---
qid: ing_0df9dbcea5__star__local
question: 'Explain: Prototyping the Presence Platform With Redis Sets'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 341
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:35-05:00'
sources: []
---

**Situation:** In my last role, we were tasked with building a real‑time user presence feature for a messaging app that needed to support millions of concurrent users. The existing stack was a monolithic Java service with MySQL, but latency spikes were unacceptable.

**Task:** I had to prototype a lightweight, low‑latency presence layer that could handle rapid join/leave events and expose an efficient API for front‑end clients while keeping the system simple enough to iterate quickly.

**Action:** I chose Redis sets as the core data structure because they give O(1) add/remove operations and built‑in set operations (union, intersection). For each chat room I created a Redis key like `room:{id}:users` and used `SADD`/`SREM` to track online members. To serve presence queries I exposed an HTTP endpoint that performed `SCARD` for member counts and `SMEMBERS` for the actual list, caching results in a local LRU store for hot rooms. I also added Lua scripts to atomically update membership and publish events via Redis Pub/Sub so clients could subscribe to join/leave notifications without polling.

**Result:** The prototype reduced presence latency from 200 ms (MySQL) to under 5 ms, handled 1.2 M concurrent users with a single Redis cluster, and cut memory usage by 40% compared to our previous design. I learned how choosing the right data structure in Redis can dramatically simplify real‑time features while keeping infrastructure costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
