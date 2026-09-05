---
qid: ing_00f143abc9__star__local
question: 'Explain: Negative Caching — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 374
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:28-05:00'
sources: []
---

**Situation**  
When I joined the Uber Real‑Time Pricing team, we were pulling pricing data from a distributed SQL store that was choking on read traffic—over 40 M reads/sec during peak hours. Each request had to hit the database even for values that were stale or missing, causing latency spikes and throttling.

**Task**  
My goal was to cut read latency by 60 % and free up database capacity without compromising data freshness. I decided to implement a negative caching layer so that “no‑data” responses could be served instantly from memory.

**Action**  
I built an in‑memory cache (Redis cluster) with a two‑tier strategy:  
1. **Positive Cache:** Hot keys were cached with TTLs tied to their last update timestamp.  
2. **Negative Cache:** When a read miss returned “null” from the SQL store, I stored a sentinel value (`NODATA`) in Redis for 30 seconds. Subsequent requests hit the cache and instantly got a “not found” response.  
I added an async background job to refresh stale keys and used rate‑limiting on the cache invalidation logic to avoid stampedes. Instrumentation was added to track hit/miss ratios per region.

**Result**  
After deployment, read latency dropped from 120 ms to 45 ms (≈63 % reduction). The database load fell by ~35 %, allowing us to scale horizontally with lower cost. I learned that a simple negative cache, when tuned correctly, can dramatically improve system resilience and user experience without adding complexity to the core data store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
