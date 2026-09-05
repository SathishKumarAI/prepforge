---
qid: ing_c1a8665f56__star__local
question: 'Explain: What CDNs Cache — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 361
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:06-05:00'
sources: []
---

**Situation** – When I joined the e‑commerce team, our product recommendation page was loading slowly because every user request hit our recommendation microservice and then streamed a large JSON payload of top‑10 personalized items over HTTPS.

**Task** – Reduce latency for 90 % of users while keeping recommendations fresh within one minute. We had to decide what to cache, where, and how often to invalidate it without breaking personalization.

**Action** – I proposed a two‑layer CDN strategy. First, we used the CDN’s edge cache to store the static portion of the recommendation page (layout, CSS, JS) with a 24 h TTL. Second, for the dynamic JSON payload, we configured an “origin shield” that cached the response at the nearest edge location for only 30 seconds, keyed by user ID and device type. We added a cache‑control header (`stale-while-revalidate=60`) so stale content could be served while the CDN fetched fresh data in the background. To monitor hit rates we instrumented CloudWatch metrics; when a request missed the edge cache we logged it to an SQS queue for later analysis.

**Result** – Page load time dropped from 2.3 s to 0.8 s (72 % reduction) and CDN cache hit ratio rose to 88 %. We maintained recommendation freshness within our SLA, learned that fine‑grained TTL tuning is critical, and documented the approach for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
