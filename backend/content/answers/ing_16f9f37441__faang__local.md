---
qid: ing_16f9f37441__faang__local
question: 'Explain: TTLs and Purging — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 529
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:37:54-05:00'
sources: []
---

**Clarify**  
We need to explain how a CDN uses *Time‑to‑Live* (TTL) metadata and purging mechanisms to keep cached content fresh while minimizing bandwidth. Assume the CDN serves static assets for a global web app; we’re talking about edge caches, origin servers, and cache invalidation policies.

**Approach**  
1. Define TTL: expiration timestamp per object in an edge node.  
2. Show how browsers/edge nodes use TTL to decide whether to fetch from cache or validate with the origin (conditional GET).  
3. Describe purging: manual API call or automated rule that forces a specific URL or pattern to be removed from all edges, bypassing TTL.

**Depth**  
- **TTL** is set in HTTP headers (`Cache‑Control`, `Expires`). Edge nodes store it; when a request arrives and the cached object’s TTL > now, the edge serves it directly. If expired, the edge sends a conditional GET (`If‑Modified‑Since/ETag`) to the origin—if 304, cache stays valid; if 200, the new body replaces the old.  
- **Purging**: An API (e.g., `PURGE /image.png`) or a “cache‑busting” URL triggers an invalidation event propagated to all edge nodes via a publish/subscribe system. The CDN marks the object as stale immediately; subsequent requests fetch fresh content from origin, even if TTL hasn’t expired.  
- **Trade‑offs**: Short TTL → more origin traffic but fresher data; long TTL → less origin load but risk of stale content. Purging is expensive (propagation delay) and should be limited to critical updates.

**Edge Cases**  
- Stale content served while purging propagates (race condition).  
- Cache‑coherence issues when multiple edge nodes serve the same object concurrently.  
- Purge storms: many simultaneous purges can overload control plane.

**Optimize & Communicate**  
Use a *hierarchical cache* with “stale‑while‑revalidate” to keep serving while fetching fresh data, reducing perceived latency. Explain that CDN operators expose both TTL controls and selective purging APIs so teams can balance freshness vs. cost. Highlight how monitoring metrics (cache hit ratio, purge latency) guide dynamic TTL adjustments. This concise, structured answer demonstrates clear problem framing, technical depth, and awareness of operational trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
