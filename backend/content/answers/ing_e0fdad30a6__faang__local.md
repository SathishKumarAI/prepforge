---
qid: ing_e0fdad30a6__faang__local
question: 'Explain: Browser Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 520
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:22:21-05:00'
sources: []
---

**Clarify**  
You’re asking about *browser caching*—the mechanism that lets a browser store resources (HTML, CSS, JS, images) locally so subsequent page loads don’t hit the server again. I’ll assume we need to explain what it is, why it matters for performance, and how it’s implemented at the system level.

**Approach**  
1. Define caching as a storage‑in‑memory or on‑disk copy of web assets.  
2. Explain cache hits vs misses.  
3. Describe HTTP cache headers (`Cache-Control`, `ETag`, `Last-Modified`).  
4. Touch on browser eviction policies (LRU, size limits).  
5. Briefly mention CDN edge caching as a broader system design.

**Depth**  
Caching stores a copy of a resource identified by its URL and optional query string. When the same request appears again, the browser first checks its local store; if the entry is still fresh per its TTL (derived from `max-age` or `Expires`), it serves it instantly—*cache hit*. If stale, it revalidates with the server via conditional GET (`If-None-Match`, `If-Modified-Since`). The server returns 304 Not Modified to avoid resending the body.  

Cache headers control freshness:  
- `Cache-Control: no-store` → never cache.  
- `max-age=3600` → keep for one hour.  
- `ETag`/`Last-Modified` → versioning.  

Browsers maintain a size‑bounded store; when exceeded, they evict least‑recently used items. This keeps memory and disk usage predictable.

**Edge Cases**  
- Dynamic content with query params may bypass cache.  
- Private vs public caches: `Cache-Control: private`.  
- Cache poisoning if headers are misconfigured.  
- Large binary assets exceeding disk quota—browser falls back to network.

**Optimize & Communicate**  
To improve performance, serve compressed assets (`gzip`/`brotli`) and use aggressive TTLs for immutable content. For dynamic pages, leverage service workers for offline caching or partial page updates. In a system design interview, I’d illustrate the flow with diagrams: request → cache lookup → hit/miss → conditional GET → response → store/update cache. This demonstrates clear understanding of both browser internals and HTTP semantics—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
