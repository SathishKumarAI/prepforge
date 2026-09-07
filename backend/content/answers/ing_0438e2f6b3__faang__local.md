---
qid: ing_0438e2f6b3__faang__local
question: 'Explain: Browser DNS caching — Why DNS Based Global Server Load Balancing
  (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 432
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:54:16-05:00'
sources: []
---

**Clarify**  
We’re asked why a *DNS‑based Global Server Load Balancer* fails to provide true global load balancing for browsers that cache DNS responses. The key assumption is that every client will look up the domain anew each request and that DNS TTLs are short enough to reflect real server health.

**Approach**  
1. Explain how GSLB works: multiple IPs per hostname, weighted/health‑checked.  
2. Show browser DNS caching behavior and its impact on round‑trip time.  
3. Highlight the mismatch between DNS TTL and actual server load changes.

**Depth**  
- A GSLB returns a set of IPs (e.g., `A`, `AAAA` records).  
- Browsers cache these responses for the record’s TTL (often 1–86400 s).  
- If a backend fails or is overloaded, the GSLB can change its next‑DNS response, but clients that have cached the old IP will keep using it until the TTL expires.  
- Even with short TTLs, browsers may still reuse the same connection (`keep‑alive`) and DNS cache aggressively for performance, so load changes aren’t reflected immediately.  
- Consequently, traffic can be unevenly distributed, overloading some servers while others are idle.

**Edge Cases**  
- Very short TTLs → high query overhead, increased DNS server load.  
- Clients behind aggressive corporate proxies or NAT that ignore DNS caching rules.  
- Mobile devices with limited battery may avoid frequent lookups, extending cache usage.

**Optimize & Communicate**  
A better approach is *Anycast* + health‑checks at the edge, or application‑level load balancing (e.g., HTTP/HTTPS redirects, client SDKs). Explain that these methods keep routing decisions close to the user and react faster than DNS. Conclude by noting trade‑offs: Anycast needs global BGP peering; client‑side SDK adds overhead but gives near‑instant load adaptation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
