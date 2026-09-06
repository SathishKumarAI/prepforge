---
qid: ing_16f9f37441__think__local
question: 'Explain: TTLs and Purging — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 539
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:15:28-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
- *Goal*: Describe how a CDN uses Time‑to‑Live (TTL) values and purging mechanisms to control cache consistency.  
- *Assumptions*: The reader knows basic HTTP caching, CDN topologies, and that content can be static or dynamic.

**2. Adopt a mental model**  
Treat the CDN as a hierarchy of caches (edge → regional → origin). Each node stores objects keyed by URL + headers. TTL is the lifespan of each cached object; purging is an explicit eviction request sent upstream.

**3. Step‑by‑step reasoning**  
a. **Set TTLs at origin** – Origin responses include `Cache-Control: max-age=...` or `Expires`. These values propagate to all downstream caches.  
b. **Edge caching** – When a request arrives, the edge node checks its local store; if the key exists and is unexpired (current time < stored expiry), it serves from cache. Otherwise it forwards upstream.  
c. **Expiration path** – Once TTL elapses, the entry becomes “stale” but may still be served under stale‑while‑revalidate policies until refreshed.  
d. **Purging flow** – When content changes before TTL expiry, a purge API call (e.g., `PURGE /path`) is sent to all caches holding that key. Each node invalidates the entry immediately, forcing the next request to hit origin.  
e. **Propagation & consistency** – Purge requests may be asynchronous; some nodes might still serve stale copies until they receive the purge or until TTL expires.

**4. Common traps to avoid**  
- *Assuming TTLs are global*: Different edge locations can have different caching rules (e.g., region‑specific TTL overrides).  
- *Misreading cache headers*: `Cache-Control: no-cache` means “must revalidate” but still allows a cached copy; it isn’t the same as purging.  
- *Overlooking stale‑while‑revalidate*: Many CDNs will serve expired content while fetching fresh data in the background.

**5. Sanity‑check & verbalize**  
Ask: “If I update an image at the origin, how quickly can a user see the new version?”  
Explain that with a long TTL the change may not appear until the TTL expires or until you explicitly purge; with a short TTL it will be refreshed sooner but at higher origin load. Confirm that purging overrides TTL by forcing immediate invalidation across the CDN hierarchy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
