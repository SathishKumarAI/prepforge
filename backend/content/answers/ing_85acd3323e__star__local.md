---
qid: ing_85acd3323e__star__local
question: 'Explain: Public API and HTML Caching — Content Delivery Network (CDN) |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 337
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:26-05:00'
sources: []
---

**Situation:** At my previous startup we launched a real‑time analytics dashboard that pulled data from our public REST API and rendered it in browsers. Within two weeks of launch, latency spiked to 2 s for 60% of users in Asia and Europe because the API was hitting the origin server on every request.

**Task:** I had to reduce end‑to‑end response time by at least 50%, keep the API stateless, and ensure cache invalidation worked seamlessly when underlying data changed.

**Action:** I introduced a CDN (CloudFront) in front of our API. First, I added ETag and Last‑Modified headers based on a versioned hash of the payload. The API returned `Cache-Control: max-age=300, stale-while-revalidate=600`. For real‑time events, I used a WebSocket fallback for critical updates while the CDN cached non‑critical queries. I also set up Lambda@Edge functions to rewrite URLs and strip query strings that differed only in tracking parameters, maximizing cache hits.

**Result:** Cache hit ratio rose from 15% to 78%, cutting average latency from 2 s to 0.35 s for global users. We saw a 40% drop in origin load and reduced cost by $1,200/month. I learned how proper HTTP caching semantics coupled with a CDN can dramatically scale an API while keeping it simple to maintain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
