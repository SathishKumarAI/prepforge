---
qid: ing_71361cd1bb__faang__local
question: 'Explain: System Design: Content Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 520
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:07:07-05:00'
sources: []
---

**Clarify**

We’re asked to sketch a *simplified* design for a CDN that caches and serves static assets (images, JS/CSS).  
Assumptions:  
- Content is read‑heavy, write occasional; no real‑time updates.  
- Latency matters more than consistency.  
- Edge nodes can store ~10 GB each; central origin holds all originals.

**Approach**

1. **Hierarchy** – Origin → Regional Cache (edge) → Client.  
2. **Routing** – Use DNS or HTTP(S) load balancer to point clients to nearest region.  
3. **Cache policy** – LRU eviction, TTL per object; optional versioning via query string.  
4. **Invalidation** – Push‑through or pull‑on‑miss: when origin updates, send a message (e.g., SNS/SQS) to edge nodes to purge stale keys.

**Depth**

- *Data flow*: Client → Edge → Origin (if miss).  
- *Storage*: Each edge keeps a key–value store; metadata includes ETag, TTL.  
- *Consistency*: Eventual – after origin change, edges may serve stale copy until TTL expires or invalidated.  
- *Scalability*: Add more regions; use consistent hashing to balance load.  
- *Complexity*:  
  - **Time**: O(1) lookup per request.  
  - **Space**: O(total objects cached).  

Trade‑offs: Aggressive caching reduces origin traffic but increases staleness risk; fine‑grained TTLs mitigate that.

**Edge Cases**

- *Large files* exceeding node capacity → stream from origin or split into chunks.  
- *Cache stampede*: multiple concurrent misses for a missing key → use request coalescing (single fetch).  
- *Invalidation lag*: stale content served until all edges purge – test with TTL short enough for critical assets.

**Optimize & Communicate**

Improvements:  
- Use CDN‑specific optimizations like HTTP/2 multiplexing, gzip compression, and prefetch hints.  
- Implement monitoring (latency, hit ratio) to auto‑scale edge nodes.  

I’d explain the trade‑offs while walking through a sample request path, emphasizing how latency is minimized by proximity and cache hits, and how consistency is handled via TTLs and invalidation messages—showing clear, structured reasoning expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
