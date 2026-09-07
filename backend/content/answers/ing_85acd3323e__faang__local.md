---
qid: ing_85acd3323e__faang__local
question: 'Explain: Public API and HTML Caching — Content Delivery Network (CDN) |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 476
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:55:19-05:00'
sources: []
---

**Public API & HTML Caching – CDN Design**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | • We want a public REST API that returns JSON and an HTML front‑end served via CDN.<br>• Assume 10 M users/day, 1 GB traffic for static assets, and up to 100 k concurrent requests. <br>• Need low latency (<200 ms) and high availability (99.9%). |
| **Approach** | 1️⃣ Separate concerns: API tier → application servers; CDN tier → edge cache for HTML/JS/CSS.<br>2️⃣ Use a reverse proxy (e.g., Nginx) with *Cache-Control* headers, signed URLs, and conditional GETs.<br>3️⃣ Employ *stale‑while‑revalidate* so stale content is served while background refreshes. |
| **Depth** | • API: Stateless microservices behind an ALB; each request checks a cache key (user‑segment + endpoint). TTL 5 min; cache miss triggers DB read and writes back to Redis.<br>• CDN: Edge nodes store compressed assets with ETag/Last‑Modified. For dynamic pages, edge computes HMAC‑signed URLs that embed expiration. Complexity is O(1) for lookups; memory ~size of popular assets (~100 MB). |
| **Edge Cases** | • Cache stampede on hot key → use distributed lock (RedLock).<br>• Invalidated content: push purge to CDN API; fall back to origin if purge fails.<br>• Varying user agents: cache per Accept‑Encoding. |
| **Optimize & Communicate** | • Reduce miss rate by prefetching next‑page assets during rendering.<br>• Monitor hit ratio, latency histograms; auto‑scale edge nodes based on traffic spikes.<br>• Explain trade‑offs: longer TTL → higher consistency risk vs. lower origin load. |

This design balances **performance**, **scalability**, and **maintainability** while keeping the architecture simple enough for rapid iteration—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
