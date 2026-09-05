---
qid: ing_7a8800dd17__star__local
question: 'Explain: The Shape of a Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 349
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:05-05:00'
sources: []
---

**Situation** – While building the recommendation engine for an e‑commerce platform, our daily traffic hit 1.2 M requests per minute and latency on the product detail page spiked to 350 ms during peak hours.

**Task** – I had to cut that response time below 120 ms without adding expensive hardware, while keeping data freshness within 5 minutes for inventory updates.

**Action** – I introduced a two‑level cache: an in‑memory Redis layer for the top 10% of hot items and a CDN edge cache for static product assets. I modeled the “shape” by profiling access patterns; 60 % of traffic came from a skewed distribution (Zipf). Using Redis’ LRU eviction with a 5‑minute TTL, we kept hot keys alive. For write path, I employed an event‑driven invalidation pipeline: inventory updates published to Kafka, consumed by a microservice that updated Redis and sent a purge message to the CDN. I also added a “stale‑while‑revalidate” strategy in our API gateway to serve slightly out‑of‑date data while background refresh ran.

**Result** – Cache hit rate climbed from 12 % to 78 %, reducing page latency to 95 ms on average and cutting backend load by 60 %. I learned that the cache shape—size, eviction policy, TTLs—must be tuned to traffic skew and consistency requirements; a one‑size‑fits‑all approach rarely works.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
