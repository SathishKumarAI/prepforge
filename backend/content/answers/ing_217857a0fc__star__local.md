---
qid: ing_217857a0fc__star__local
question: 'Explain: Cache Key Bugs — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 294
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:31-05:00'
sources: []
---

**Situation:** While leading the launch of a global e‑commerce platform, we noticed sudden spikes in page load times during peak sales events—our CDN was serving stale or incorrect product images.

**Task:** I had to pinpoint why cached assets were not invalidating correctly and devise a robust cache‑key strategy that would prevent future regressions without compromising performance.

**Action:** First, I traced the request pipeline from the origin server to edge nodes. I discovered that our cache keys were built only on the product ID, ignoring locale and user‑segment parameters. This caused identical URLs across regions to hit the same cache entry. I redesigned the key schema to include a hash of `product_id + locale + variant`, stored in a Redis lookup for quick validation. I also implemented a signed token system that the CDN checked before serving; if the token was missing or mismatched, it forced a cache miss and fetched fresh content. Finally, I added automated unit tests that simulate concurrent invalidation scenarios to catch key collisions early.

**Result:** Cache hit rates improved from 68% to 92%, cutting average latency by 350 ms during peak traffic. The new system eliminated stale‑content incidents for six months of continuous operation, and I documented the pattern as a reusable CDN cache‑key best practice across our engineering teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
