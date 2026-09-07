---
qid: ing_99872fb198__faang__local
question: 'Explain: Content Delivery Network — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 518
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:41:42-05:00'
sources: []
---

**Clarify**  
*Problem:* Design a CDN that caches static assets (images, JS/CSS) globally, serves them with low latency, handles high traffic spikes, and ensures cache consistency.  
*Assumptions to confirm:*  
1. Traffic is read‑heavy; writes are rare updates to origin servers.  
2. Latency requirement: < 100 ms for 95% of requests.  
3. Data size per asset ≤ 10 MB; total catalog ≈ 10⁶ items.

**Approach**  
1. **Edge nodes** – Deploy globally (cloud regions + on‑prem PoPs).  
2. **Global DNS with latency routing** – Resolve user to nearest edge.  
3. **Cache tiering** – In‑memory LRU for hot objects; SSD tier for less‑hot.  
4. **Origin pull & push** – On miss, fetch from origin, store in cache, return.  
5. **Invalidation strategy** – Versioned URLs or ETag/Last‑Modified checks; optional publish‑subscribe to evict stale entries.

**Depth**  
*Data flow:* User → DNS → nearest edge → (cache hit) → response; otherwise → pull from origin.  
*Consistency:* Use immutable object URIs; for mutable content, embed version hash in URL or use signed tokens.  
*Scalability:* Each edge runs load balancer + HTTP reverse proxy (e.g., Nginx). Replicate configuration via config‑sync service.  
*Complexity:* O(1) cache lookup; network hop adds ~20 ms latency. Memory usage: 8 GB per PoP can hold ~50k hot objects.

**Edge Cases**  
- **Cache stampede:** Use mutex or token bucket at edge to allow single origin fetch.  
- **TTL expiry during traffic spike:** Pre‑warm popular items via background prefetch.  
- **Network partition:** Edge continues serving stale cache until connectivity restored.

**Optimize & Communicate**  
*Improvements:* Add adaptive eviction (LFU) for bursty workloads; implement CDN analytics to auto‑scale PoPs.  
*Communication:* Present the architecture diagram, justify latency routing with DNS metrics, and walk through a hit/miss scenario, highlighting fail‑over paths. This showcases structured thinking, technical depth, and awareness of production trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
