---
qid: ing_abfee3eec1__star__local
question: 'Explain: Common Cache Key Choices — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 385
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:31-05:00'
sources: []
---

**Situation** – In my last role at a video‑streaming startup, we were hitting 4 × 10⁶ requests per day for our live sports feed. The latency on the origin server was 350 ms, which meant users saw buffering during peak matches.  

**Task** – I had to design a CDN caching strategy that reduced origin hits by at least 70% while keeping cache hit rates above 95% and ensuring content freshness for each user’s region.  

**Action** – First, I mapped the URL structure: `/video/<sport>/<match_id>?user=<id>&lang=<code>`. I decided to strip query parameters that didn’t affect the actual media file—`user` and `lang` were dynamic per request, so they would be excluded from the key. The cache key became `sport/match_id`, which meant every user in a region got the same cached stream. I implemented a signed token for authentication but kept it out of the key to avoid duplicate entries. On the CDN edge, I added a header‑based TTL that varied by sport: football had 12 h, basketball 6 h, reflecting their replays’ popularity. I also set up an invalidation webhook that fired on every new match start, purging stale keys proactively.  

**Result** – Within two weeks we cut origin hits from 4 M to 1.2 M per day (a 70% drop) and hit rates rose to 97%. User‑reported buffering fell by 55%, and the team could focus on new features instead of scaling infrastructure. I learned that a lean, content‑centric cache key plus smart TTLs can dramatically improve performance without bloating CDN storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
