---
qid: ing_48be879af7__think__local
question: 'Explain: DNS resolution — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 507
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:15:16-05:00'
sources: []
---

**1. Clarify the question and set assumptions**  
   - *What is asked?* Explain why a purely DNS‑based Global Server Load Balancing (GSLB) scheme often fails to deliver optimal traffic distribution or failover.  
   - *Assume*: The reader knows basic DNS, TTLs, load balancing concepts, but not the deep networking subtleties.

**2. Adopt a mental model: “Stateful vs Stateless”**  
   - DNS is stateless and cache‑centric; GSLB attempts to inject state (client location, health) into that flow.  
   - Contrast with application‑layer or TCP‑level load balancers that maintain per‑connection context.

**3. Step‑by‑step reasoning**  
   1. **TTL limits responsiveness** – DNS responses are cached for the TTL; rapid failover or traffic shifts cannot propagate until caches expire, causing stale routes.  
   2. **No client affinity** – DNS can’t track which IP a client will actually use; the same domain may resolve to multiple A records, but the client picks one arbitrarily, breaking session persistence.  
   3. **Geolocation inaccuracies** – DNS routing relies on coarse GeoIP or ISP lookup tables that are often outdated or ambiguous, leading to sub‑optimal path selection.  
   4. **No real‑time health checks** – DNS can only reflect health as seen by the resolver; a server may be down but still listed until TTL elapses.  
   5. **Caching by intermediate resolvers** – ISP or local caches can override your GSLB decisions, creating inconsistent global routing.

**4. Common traps to avoid**  
   - Assuming DNS can replace TCP‑level health checks.  
   - Ignoring that many clients use recursive resolvers with long TTLs.  
   - Overlooking that modern browsers may cache IPs for longer than the advertised TTL.

**5. Sanity‑check & communicate clearly**  
   - Verify each point against real‑world observations (e.g., a failover not taking effect for hours).  
   - Use concise bullet points, avoid jargon, and conclude with “Thus, DNS‑only GSLB lacks the statefulness and timeliness required for robust global load balancing.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
