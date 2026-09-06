---
qid: ing_9bc3c1a952__think__local
question: 'Explain: The punch line — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 451
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:22:12-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is “DNS‑based GSLB”?* A DNS solution that returns different IPs per request to balance load globally.  
   - *Why might it fail?* Identify performance, consistency, and policy issues.  
   - Assume typical enterprise traffic: many users, high churn, strict SLAs.

**2. Adopt a systems‑engineering mental model**  
   - Treat DNS as a *cache‑driven lookup service* with TTLs.  
   - View GSLB as an *optimisation layer* that must respect user intent (latency, availability).  
   - Consider the *distributed nature* of the internet: routing, peering, and caching.

**3. Step‑by‑step reasoning**  
   1. **Caching & TTL** – DNS answers are cached for minutes/hours; a change in load balance is invisible until cache expires.  
   2. **User location vs. IP mapping** – The resolver may not know the user’s true geographic or network position, leading to sub‑optimal IPs.  
   3. **Stateful sessions** – Once a client receives an IP, subsequent traffic stays there; load shifts are ineffective.  
   4. **Network path changes** – BGP dynamics can make the “best” IP obsolete quickly.  
   5. **Propagation delays & inconsistencies** – Global DNS infrastructure may serve stale or conflicting records.

**4. Common traps to avoid**  
   - Assuming DNS can react instantly to real‑time load metrics.  
   - Overlooking that many resolvers ignore geolocation hints.  
   - Forgetting that DNS is stateless; it cannot enforce session stickiness without extra mechanisms.

**5. Sanity‑check & verbalise**  
   - Ask: “Does this explanation cover latency, caching, and routing?”  
   - Summarise: *DNS GSLB suffers from stale TTLs, inaccurate user mapping, and lack of session awareness, so it can’t provide true real‑time global load balancing.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
