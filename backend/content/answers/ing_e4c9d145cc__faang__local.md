---
qid: ing_e4c9d145cc__faang__local
question: 'Explain: How CDN Routing Works — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 512
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:30:03-05:00'
sources: []
---

**Clarify**  
You’re asking how a CDN routes user requests to the nearest edge node and then retrieves content—essentially: *Given a client request, what algorithm decides which cache server serves it, and how is consistency maintained?* I’ll assume we have a global pool of edge caches, origin servers, and a DNS/HTTP load‑balancer layer.

**Approach**  
1. Client → DNS → nearest CDN node (latency‑aware).  
2. Edge node checks local cache; if hit, return content.  
3. If miss, fetch from origin or another cache, store locally, then reply.  
4. Periodic invalidation/refresh ensures consistency.

**Depth**  
*Routing:* Most CDNs use a “geo‑routing” DNS that returns the IP of the closest node based on BGP and RTT measurements. Some add *anycast*: multiple nodes share the same IP; routing protocols pick the shortest path.  
*Cache lookup:* Edge servers keep an LRU/TTL map keyed by URL (or hashed content ID). On miss, they issue a GET to the origin with conditional headers (`If-None-Match`). Origin returns `304` if unchanged or full payload otherwise.  
*Consistency:* Use versioning via ETag/HASH; clients cache until TTL expires. For dynamic content, “edge tagging” pushes invalidation messages (e.g., via pub/sub) so stale caches purge early.  

**Edge Cases**  
- *DNS cache*: Clients may stick to a distant node if their resolver caches the old IP. Mitigate with short TTLs or DNS‑TTL overrides.  
- *Stale content*: If origin changes but edge doesn’t receive invalidation, users see outdated data. Use aggressive TTLs for dynamic assets.  
- *Network partitions*: Anycast may route to an unreachable node; health checks redirect traffic.

**Optimize & Communicate**  
To reduce latency further, implement *content pre‑fetching* during low load and use *adaptive bitrate* for media. For monitoring, expose cache hit ratios per region; this informs whether to spin up new edge nodes or rebalance TTLs. In a presentation, I’d start with a diagram of the three layers (DNS→edge→origin), then walk through a sample request flow, highlighting decision points and failure modes, and finish with key metrics that guide scaling decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
