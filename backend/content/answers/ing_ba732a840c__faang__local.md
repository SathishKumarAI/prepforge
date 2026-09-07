---
qid: ing_ba732a840c__faang__local
question: 'Explain: Based on location. So you might have — System Design: Content
  Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 406
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:56:20-05:00'
sources: []
---

**Clarify**  
You’re asking how a CDN can serve content “based on location.” I’ll assume we need to design a system that chooses the nearest edge server for a request, caches objects, and handles global traffic while keeping latency low.

**Approach**  
1. Map user IP → geographic region (via GeoIP).  
2. Route the request to the closest edge node using anycast or a global load balancer.  
3. Edge nodes cache content; on miss fetch from origin.  
4. Use consistent hashing for object placement, and replicate popular assets across multiple edges.

**Depth**  
- **Routing:** Anycast IPs let BGP steer packets to the nearest node (≈O(1) lookup).  
- **Caching policy:** LRU with a size‑based eviction; also support TTL overrides from origin.  
- **Replication:** Use consistent hashing on object keys → edge shards; replication factor 3 for durability.  
- **Failure handling:** Heartbeat probes; if an edge fails, traffic falls back to the next nearest node (fallback list).  
- **Scaling:** Add nodes by announcing new anycast prefixes; sharding tables update via gossip.

**Edge Cases**  
- IP spoofing → use TLS client auth or WAF.  
- Cold start for a new region → pre‑warm cache with popular assets.  
- Content updates → invalidate edge caches via purge API.

**Optimize & Communicate**  
To improve, add CDN edge‑level analytics to auto‑replicate hot objects and employ machine learning to predict demand spikes per region. I’d explain the trade‑off between cache hit rate vs. storage cost, and how consistent hashing keeps rebalancing minimal during scaling events. This demonstrates clear structure, depth, and an eye toward operational robustness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
