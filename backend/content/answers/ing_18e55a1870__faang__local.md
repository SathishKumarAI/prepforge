---
qid: ing_18e55a1870__faang__local
question: 'Explain: Video and Audio Streaming — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 515
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:42:46-05:00'
sources: []
---

**Clarify**

We’re asked to design a CDN that serves video and audio streams to millions of users worldwide with low latency, high throughput, and minimal buffering.  
Key assumptions:  
- Content is immutable after upload (immutable blobs).  
- Users request *segments* or *chunks* via HTTP/HTTPS; adaptive bitrate (ABR) may be required.  
- We need to support global reach, fault tolerance, and cost‑efficiency.

**Approach**

1. **Edge cache layer** – deploy servers in major ISPs’ PoPs.  
2. **Origin storage** – object store (S3/Blob) holding original media + pre‑encoded renditions.  
3. **Cache invalidation & versioning** – immutable URLs or ETags.  
4. **Load balancing & routing** – use DNS + Anycast to nearest edge; health checks for failover.  
5. **Streaming protocol** – HLS/DASH with small segment size (~2–4 s) for ABR.  
6. **Metrics & monitoring** – cache hit ratio, latency, bandwidth usage.

**Depth**

- *Cache strategy*: LRU per content type; keep popular segments longer. Use a CDN‑specific key (contentID+bitrate).  
- *Edge storage*: SSD‑backed memory for hot data, tier to object store for cold data.  
- *Consistency*: Since media is immutable, strong consistency isn’t required; eventual is fine.  
- *Security*: Signed URLs or JWTs for DRM/geo‑restriction.  
- *Scalability*: Autoscale PoPs based on traffic spikes (e.g., live events).  
- *Complexity*: O(1) fetch from edge; fallback to origin O(log N) via CDN routing.

**Edge Cases**

- Sudden surge (live event): pre‑warm edges with the requested bitrate.  
- Network partition: Anycast reroutes to healthy PoPs automatically.  
- Cache miss on rare content: serve directly from origin, log for future caching.

**Optimize & Communicate**

To reduce cost, compress segments with HTTP/2 push and use CDN provider’s caching rules. For latency, keep segment size small; for throughput, parallelize segment requests. I’d explain the trade‑off between cache hit ratio vs storage cost, and highlight monitoring dashboards to drive data‑driven optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
