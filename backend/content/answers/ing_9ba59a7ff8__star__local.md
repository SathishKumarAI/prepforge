---
qid: ing_9ba59a7ff8__star__local
question: 'Explain: Caching Requirements — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 416
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:30-05:00'
sources: []
---

**Situation**  
While working on a prototype of an Instagram‑style photo feed at my last internship, the backend hit 4 M requests per minute during peak hours and latency spiked to 350 ms for the “home timeline” endpoint.

**Task**  
I had to reduce average response time below 80 ms and keep cache hit rates above 95% while ensuring fresh data for likes/comments that update every few seconds.

**Action**  
1. **Profile‑level sharding:** split user feeds into 64 shards using a consistent hash on `user_id`; each shard served by its own Redis cluster to avoid single‑point contention.  
2. **Two‑tier cache:**  
   - *Tier 1* (Redis) stored the latest 200 posts per user, keyed as `feed:{user_id}:{page}`; TTL set to 30 s for new media and 10 min for older posts.  
   - *Tier 2* (Memcached) cached serialized JSON of the rendered feed pages for 5 min to avoid repeated rendering costs.  
3. **Cache invalidation:** subscribed to a Redis Pub/Sub channel that pushed `feed:update:{user_id}` whenever a new post or interaction occurred; subscribers evicted related keys immediately.  
4. **CDN edge caching** served static images, freeing backend resources for dynamic feed logic.

**Result**  
Latency dropped from 350 ms to 65 ms under peak load, hit rate climbed to 97%, and the system processed 6 M RPS with a 30 % reduction in memory footprint. I learned that careful sharding plus layered caching, combined with event‑driven invalidation, turns a monolithic feed into a horizontally scalable microservice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
