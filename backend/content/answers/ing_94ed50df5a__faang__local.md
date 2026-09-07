---
qid: ing_94ed50df5a__faang__local
question: 'Explain: An Axiom — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 515
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:30:24-05:00'
sources: []
---

**Clarify**  
We’re asked why *DNS‑based Global Server Load Balancing* (GSLB) is inherently unreliable for real‑time traffic distribution. I’ll assume the question targets classic DNS‑only GSLBs that return an IP per client request, with no stateful session handling.

**Approach**  
1. Identify DNS mechanics (TTL, caching, failover).  
2. Map those to load‑balancing goals (fairness, latency, fault tolerance).  
3. Highlight mismatches and consequences.  

**Depth**  
- **Caching & TTL**: Once a resolver caches an IP for the TTL period, all subsequent traffic from that client goes to the same server regardless of downstream load changes.  
- **Lack of real‑time state**: DNS can’t see current server health or queue lengths; it only returns static records.  
- **Geographic skew & routing loops**: The closest IP may not be optimal if network paths change, yet DNS can’t react quickly.  
- **Failover latency**: When a server fails, the next healthy record is published, but clients still hit the stale cache until TTL expires or they perform a recursive lookup—often minutes later.  
- **Session persistence**: DNS gives no guarantee of sticky sessions; subsequent requests may land on different servers, breaking stateful apps.

Thus, DNS‑only GSLB cannot provide low‑latency, fault‑tolerant, and balanced routing needed for modern global services.

**Edge Cases**  
- Very short TTLs reduce cache benefits but increase query load.  
- Clients using aggressive caching (e.g., mobile networks) exacerbate stale hits.  
- Load spikes during DNS propagation can overload a single server before the new record propagates.

**Optimize & Communicate**  
Combine DNS with a *layer‑2* health‑check system: use DNS for coarse geographic routing, then a TCP/UDP probe or application‑level heartbeat to dynamically adjust weights or route via an internal load balancer. Alternatively, shift to *Anycast + HTTP(S) LB* where the edge can perform real‑time decisions. Explain trade‑offs (DNS simplicity vs. latency, cost of additional probes). This structured reasoning shows clear problem understanding and practical mitigation paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
