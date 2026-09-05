---
qid: ing_3206a0b640__star__local
question: 'Explain: Conditional Update — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 325
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:23-05:00'
sources: []
---

**Situation** – In late 2021 I joined the Uber Maps data team, where we were struggling to keep up with over 40 million location‑query reads per second. The backend relied on a distributed SQL store that was fine for writes but introduced unacceptable latency for hot tiles.

**Task** – My goal was to design an integrated cache that could serve most read traffic while still guaranteeing consistency after each write, without adding significant operational overhead or risking stale data in high‑traffic areas.

**Action** – I implemented a *conditional update* strategy: every write went through the SQL store first, then an async Kafka stream pushed change events to a Redis cluster. The cache keys were built from tile coordinates and version hashes; on read we checked the hash against the latest value stored in Redis. If it matched, we returned cached geometry; if not, we fetched fresh data from SQL, updated Redis with the new hash, and served the result. To handle race conditions I used Lua scripts for atomic compare‑and‑set operations. We also introduced a short TTL fallback to avoid cache misses during network hiccups.

**Result** – The cache absorbed 85 % of read traffic, cutting average query latency from 250 ms to under 30 ms and reducing SQL load by 70 %. I learned that coupling an event‑driven stream with optimistic locking in the cache can deliver both high throughput and strong consistency without sacrificing developer productivity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
