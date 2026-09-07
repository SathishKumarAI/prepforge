---
qid: ing_ee5bfae228__faang__local
question: 'Explain: Less Origin Load — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 435
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:54:23-05:00'
sources: []
---

**Clarify**  
You’re asked how a CDN reduces the “origin load” of a web application. I’ll assume we’re talking about static assets (images, JS/CSS) served from an origin server to many global users, and that the goal is to lower latency, bandwidth costs, and prevent traffic spikes from hitting the origin.

**Approach**  
1. Describe what “origin load” means.  
2. Explain the CDN’s caching strategy (edge nodes, cache‑control).  
3. Show how requests are routed via DNS/CDN edge.  
4. Quantify the impact on bandwidth & latency.  

**Depth**  
- **Origin Load Definition:** Requests that hit the origin server for content that could be cached elsewhere.  
- **Cache Mechanism:** Edge servers store objects keyed by URL + Vary headers; TTLs from Cache‑Control/Expires dictate freshness. On a cache miss, the CDN fetches from origin, stores locally, and serves to the client.  
- **Routing:** Global DNS (anycast) directs users to the nearest edge node. The CDN also handles SSL termination, compression, and protocol upgrades.  
- **Impact:** If 80 % of traffic is cached at edges, origin bandwidth drops by ~80 %. Latency reduces from inter‑continent (~200 ms) to intra‑region (~30 ms).  

**Edge Cases**  
- Dynamic or personalized content bypasses cache (Cache‑Control: no‑cache).  
- Cache invalidation on updates must propagate via purge APIs.  
- SSL/TLS certificates per edge; misconfiguration can expose origin.  

**Optimize & Communicate**  
Mention multi‑layered caching (object, CDN, browser), use of versioned URLs for cache busting, and monitoring metrics (cache hit ratio). Explain that this design scales linearly: adding more edges reduces load further without touching the origin. Conclude by tying reduced origin load to lower operational cost and higher reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
