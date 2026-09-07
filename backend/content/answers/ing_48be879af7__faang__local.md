---
qid: ing_48be879af7__faang__local
question: 'Explain: DNS resolution — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 498
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:32:57-05:00'
sources: []
---

**Clarify**  
We’re asked why a pure DNS‑based Global Server Load Balancing (GSLB) scheme fails to deliver true global load balancing. The key assumptions: clients resolve the same domain name once per session; DNS TTLs are long enough to cache; and we can only send IP addresses, not dynamic routing information.

**Approach**  
1. Identify the constraints of DNS (caching, TTL, no state).  
2. Explain how these constraints break load balancing guarantees.  
3. Contrast with a more robust GSLB that uses health checks or application‑layer routing.

**Depth**  
- **Caching & TTL**: Once a client receives an IP, it caches it for the TTL (often minutes to hours). During this period, all traffic from that user goes to the same data center even if that server becomes overloaded.  
- **No real‑time state**: DNS has no notion of current load or health; it can only return static records. A sudden spike in traffic cannot be reflected until the next query.  
- **Limited granularity**: DNS can’t steer individual requests to different servers within a pool—only entire clients. This leads to “hot‑spot” problems and uneven utilization.  
- **Geolocation limitations**: Geo‑DNS may return an IP based on the resolver’s location, not the user’s actual location or network path, causing suboptimal routing.

**Edge Cases**  
- Clients using corporate proxies that cache DNS aggressively.  
- Mobile users switching networks mid‑session (stuck to old IP).  
- TTL too short → excessive queries and DNS server load; too long → stale routing decisions.

**Optimize & Communicate**  
A better design couples DNS with an application‑layer load balancer or uses Anycast + health checks, allowing instant failover. If you must use DNS, keep TTL low (e.g., 30 s) and expose multiple A/AAAA records to spread traffic, but accept that true real‑time balancing isn’t achievable. Communicate this trade‑off clearly: “DNS GSLB is simple but inherently stale; for production, augment it with dynamic routing mechanisms.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
