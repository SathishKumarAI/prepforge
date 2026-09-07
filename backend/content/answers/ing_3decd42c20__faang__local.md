---
qid: ing_3decd42c20__faang__local
question: 'Explain: The browser DNS caching issue — Why DNS Based Global Server Load
  Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 490
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:08:00-05:00'
sources: []
---

**Clarify**  
We’re asked why a *DNS‑based* Global Server Load Balancer (GSLB) often fails to deliver the expected performance or availability guarantees. The key is that DNS is a *caching* lookup: once a client resolves an IP, it will reuse that address for the TTL period, regardless of subsequent changes in server health or load.

**Approach**  
1. List the properties of DNS (cacheable, stateless, slow to update).  
2. Contrast them with what GSLB needs (real‑time load information, failover).  
3. Explain how the mismatch causes problems: stale IPs, uneven traffic, delayed failure detection.

**Depth**  
- **Caching / TTL**: A typical DNS record might have a 5–60 min TTL. If one server goes down during that window, clients still hit it until cache expires or is purged.  
- **Statelessness**: DNS responses are identical for all resolvers; they can’t embed per‑client metrics. GSLB cannot react to instantaneous load changes.  
- **Propagation delay**: Even with low TTLs (e.g., 30 s), the update cycle means a global user base may see different IPs at different times, causing “flash crowds” on some nodes while others are idle.  
- **Resolution locality**: Some resolvers honor *negative caching* or use stale‑cache policies, further delaying changes.

**Edge Cases**  
- Clients with aggressive local DNS caches (e.g., corporate proxies).  
- Mobile devices that keep long‑lived connections across cell/Wi‑Fi switches.  
- IPv6 vs IPv4 dual stacks where one stack’s TTL differs from the other.

**Optimize & Communicate**  
To mitigate, combine DNS GSLB with *application‑layer* load balancers (e.g., HTTP reverse proxies) that can redirect traffic in real time, or use low‑TTL “warm‑up” zones and health‑checks to trigger faster cache invalidation. Explain trade‑offs: lower TTL → more DNS queries, higher overhead; higher TTL → stale routing. Conclude that pure DNS GSLB is inherently limited by caching semantics, so hybrid solutions are the practical path forward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
