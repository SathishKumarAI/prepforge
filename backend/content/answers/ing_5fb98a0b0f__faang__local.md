---
qid: ing_5fb98a0b0f__faang__local
question: What Is A CDN? How Does It Work?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 424
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:56-05:00'
sources: []
---

**Clarify**  
A Content Delivery Network (CDN) is a globally distributed cache that serves static and dynamic content closer to end‑users. I’ll assume we’re talking about typical web assets (images, JS/CSS, videos) and not edge‑compute services.

**Approach**  
1. Identify origin servers and asset types.  
2. Deploy edge nodes in strategic regions.  
3. Use DNS or Anycast routing to direct users to the nearest node.  
4. Cache policy: TTL, purging, cache‑busting keys.  
5. Invalidate on updates, handle dynamic content via origin pulls or signed URLs.

**Depth**  
- **Routing:** Anycast IPs let multiple edge servers share one public address; routers choose the lowest hop path.  
- **Caching:** Edge nodes store assets locally after first fetch; subsequent requests hit cache (O(1) latency).  
- **Cache‑invalidation:** Purge or expire via API; signed URLs allow per‑request freshness for dynamic data.  
- **Security:** TLS termination at edge, WAF integration, DDoS mitigation.  
- **Performance:** Reduces round‑trip time, offloads origin bandwidth, enables compression/HTTP2.

**Edge Cases**  
- Stale content if TTL too long.  
- Hot‑spot regions may overload a single node—need load balancing.  
- Dynamic personalization must bypass cache or use edge functions.  
- Mixed HTTPS/TLS certs can cause handshake delays.

**Optimize & Communicate**  
Start with a small regional deployment, monitor cache hit ratio and latency. Scale by adding nodes in high‑traffic zones. Explain trade‑offs: larger TTL = lower origin load vs. risk of stale data; aggressive invalidation = higher bandwidth usage. Emphasize that a well‑configured CDN turns 200 ms global latency into ~20–50 ms, directly boosting user experience and reducing infrastructure costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
