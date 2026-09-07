---
qid: ing_dc9b1ed2e9__faang__local
question: 'Explain: HTTP Caching Headers — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 564
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:11:19-05:00'
sources: []
---

**Clarify**  
We’re asked how HTTP caching headers enable a CDN to serve content efficiently. I’ll assume the client is a browser or API consumer; the origin server hosts static assets (images, CSS, JS). The CDN sits between them and caches responses based on header directives.

**Approach**  
1. Identify key cache‑control directives (`Cache-Control`, `ETag`, `Last-Modified`).  
2. Explain how they influence CDN behavior: freshness, revalidation, conditional requests.  
3. Show the typical request–response flow with a CDN edge node.  
4. Touch on trade‑offs (cache hit ratio vs. staleness) and how to tune headers.

**Depth**  

| Header | Purpose in CDN | Typical Value | Effect |
|--------|----------------|---------------|--------|
| `Cache-Control` | Explicit cache policy | `public, max-age=86400, stale-while-revalidate=60` | Stores for 24 h; serves stale content while background refreshes. |
| `ETag` | Entity tag for exact match | `"abcd1234"` | CDN can do a conditional GET (`If-None-Match`) to validate without sending body. |
| `Last-Modified` | Timestamp of last change | `Wed, 21 Oct 2023 07:28:00 GMT` | Similar to ETag but less granular; used with `If-Modified-Since`. |

**Typical Flow**  
1. **Client → CDN Edge** – request arrives.  
2. CDN checks its cache. If a fresh copy exists (within `max‑age`), it serves it immediately.  
3. If stale or missing, CDN forwards to origin.  
4. Origin returns response with caching headers.  
5. CDN stores body and metadata; subsequent requests hit the edge.

**Edge Cases**  
- **Short max-age** → high origin load but fresh data.  
- **Missing ETag/Last‑Modified** → CDN must revalidate on every request.  
- **Private content** (`private` flag) → bypass CDN or use signed URLs.  

**Optimize & Communicate**  
For large static sites, set `Cache-Control: public, max-age=31536000, immutable`. For dynamic APIs, use `stale-while-revalidate` to keep latency low while updating in the background. Explain that tuning these headers is a balance between cache hit ratio and data freshness, often measured via CDN analytics dashboards.  

This structured view shows how caching headers orchestrate CDN behavior, directly impacting performance and cost—key points interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
