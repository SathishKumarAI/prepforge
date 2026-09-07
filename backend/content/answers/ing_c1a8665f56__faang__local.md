---
qid: ing_c1a8665f56__faang__local
question: 'Explain: What CDNs Cache — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 477
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:11:18-05:00'
sources: []
---

**Clarify**  
We’re asked what a CDN actually caches—i.e., which assets it stores and serves from edge nodes. I’d confirm: is the focus on static vs dynamic content, cache‑control headers, or specific media types?

**Approach**  
1. List asset categories (HTML, CSS/JS, images, videos, APIs).  
2. Explain how CDN decides to cache (Cache‑Control, ETag, TTL).  
3. Highlight edge‑cache placement and purging.

**Depth**  
A CDN sits between origin servers and end users, replicating **any HTTP‑servable resource** that is cache‑friendly:  

| Asset | Typical Cache Rules | Edge Behavior |
|-------|--------------------|---------------|
| **Static files (CSS/JS/images)** | `Cache‑Control: max-age=31536000, immutable` | Stored indefinitely; served on every request. |
| **Media (video/audio)** | Chunked or segmented with long TTLs (`max-age=86400`) | Cached per segment; reduces origin load for repeat viewers. |
| **Dynamic APIs** | Short TTLs or `no-cache` if data is volatile | Cached only if marked cache‑able, often with signed URLs to enforce freshness. |
| **HTML pages** | Usually short TTL (`max-age=60-300`) | Edge may serve a stale page while revalidating upstream. |

CDNs honor ETag/If‑None-Match for incremental updates and can invalidate keys via purge APIs. They also support “origin pull” (fetch on miss) or “push” (pre‑populate).  

**Edge cases**  
- **Personalized content**: must bypass cache or use signed URLs.  
- **Large objects > cache limit**: streamed directly from origin.  
- **Zero‑TTL assets**: CDN still forwards but may buffer briefly.

**Optimize & communicate**  
Explain that caching reduces latency by keeping data close to users and lowers origin cost, but careful header tuning is essential—over‑caching stale data hurts freshness; under‑caching wastes bandwidth. Conclude with a quick mention of cache‑key composition (URL + headers) to avoid collisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
