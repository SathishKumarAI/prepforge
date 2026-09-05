---
qid: ing_9c9c87dfc6__star__local
question: 'Explain: With the compound key, it makes removal — FAANG System Design
  Interview: Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 298
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:45:07-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with redesigning the geospatial cache for our local‑search feature, which was experiencing a 35 % hit‑rate drop during peak hours. The backend used a single‑attribute key (place_id) to store location data in Redis.

**Task**  
I needed to reduce stale entries and improve eviction efficiency so that fresh search results could surface without hitting the database every time.

**Action**  
I introduced a compound key consisting of `place_id|timestamp` where the timestamp was rounded to the nearest hour. Each cache write added the current slot, and my cleanup job scanned for keys older than 24 h and deleted them in bulk using Redis pipelines. This allowed us to remove entire hourly buckets with a single command (`SCAN | DEL`) instead of iterating over every `place_id`. I also updated our service layer to fallback to the database only when all hourly shards were missing, dramatically cutting read latency.

**Result**  
Cache hit rates rose from 65 % to 92 %, and average query latency dropped by 28 ms. The compound key strategy simplified eviction logic and reduced memory fragmentation, teaching me that thoughtful key design can solve both performance and maintenance pain points in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
