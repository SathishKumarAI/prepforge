---
qid: ing_407e4cf601__star__local
question: 'Explain: Origin Overload on Misses — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 354
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:37:23-05:00'
sources: []
---

**Situation** – In my last role I was responsible for scaling the video streaming service’s global CDN. During a promotional launch we saw a 35 % spike in traffic; our edge caches were suddenly hitting 80 % miss rates and every miss hit the origin, causing latency to double.

**Task** – My goal was to prevent origin overload while keeping cache hit ratios above 90 % so that end‑users wouldn’t experience buffering or increased costs.

**Action** – I first profiled the request patterns with Prometheus + Grafana; we discovered that many “misses” were due to short‑lived, low‑popularity videos. I introduced a two‑tier cache: (1) an in‑memory LRU store on each edge node for the top 10 % of requests, and (2) a secondary Redis cluster with a custom eviction policy that kept high‑frequency content but allowed quick purge of stale items. I also added rate‑limiting middleware at the edge to back‑off origin requests when downstream latency exceeded 200 ms. Finally, I rewrote our cache key strategy to include user region and device type, reducing unnecessary duplicates.

**Result** – Cache hit ratio jumped from 60 % to 92 %, origin request load dropped by 70 %, and the average end‑to‑end latency fell below 150 ms for 95 % of users. I learned that fine‑grained cache key design combined with adaptive eviction is critical when protecting an origin under sudden traffic surges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
