---
qid: ing_5f742e2255__star__local
question: 'Explain: So let’s add another 16 bytes. So — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 360
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:16-05:00'
sources: []
---

**Situation**  
At my previous company we were building a new location‑based recommendation feature for our mobile app. The existing service could return top 10 places within 5 km, but users complained the response time was 1.8 s on average, and the cache hit rate dropped to 40% after we added more POI categories.

**Task**  
I had to redesign the architecture so that a user request for “restaurants near me” would return results in under 800 ms while supporting millions of concurrent users, all without exceeding our infrastructure budget.

**Action**  
I introduced a two‑tier cache: an in‑memory LRU store (Redis) keyed by hashed geohash + category, and a pre‑computed proximity matrix stored in Parquet on S3. For the 16‑byte “extra payload” (e.g., user preferences), I encoded it into a compact bitmask and attached it to the cache key, reducing miss rates. The request pipeline now first checks Redis; on miss, it streams the relevant Parquet block, filters by distance with a Haversine vectorized kernel in Rust, then serializes the top 5 results back to the client. I also added a Bloom filter per geohash to avoid costly disk reads for sparsely populated areas.

**Result**  
Cache hit rate jumped from 40% to 78%, average latency dropped to 420 ms, and we cut query‑to‑database cost by 35%. The exercise taught me how small data‑structure tweaks (like bitmasking the 16 bytes) can cascade into significant system‑level gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
