---
qid: ing_1e0f83f3fd__star__local
question: 'Explain: The Browser Cache — How DNS Actually Works - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 389
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:58-05:00'
sources: []
---

**Situation** – While working on a real‑time recommendation engine for an e‑commerce site, our user‑face web app was pulling model predictions from a REST API behind a CDN. Customers complained that page loads were lagging after the first visit, especially in regions with high latency.

**Task** – I had to reduce the round‑trip time for DNS resolution and eliminate unnecessary HTTP requests so the ML inference served within 200 ms for every user session.

**Action** – First, I introduced a local browser cache by setting `Cache-Control: public, max-age=86400` on static assets and model metadata. Then I implemented DNS prefetching (`<link rel="dns-prefetch" href="//api.example.com">`) to resolve the API domain before any request was made. To handle dynamic IP changes from our load balancer, I added a short TTL (30 s) in Cloudflare’s DNS records and used `stale-while-revalidate` so users got cached responses while background refreshes updated the cache. Finally, I instrumented a small Go microservice to log DNS lookup times and identified that 60 % of latency came from repeated lookups.

**Result** – Page load times dropped from an average of 1.2 s to 0.3 s, and API response latency fell by 70 %. The caching strategy also reduced our CDN bandwidth usage by ~40 %. I learned that a disciplined approach to DNS resolution and browser cache headers can dramatically improve ML‑driven web performance without touching the model code itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
