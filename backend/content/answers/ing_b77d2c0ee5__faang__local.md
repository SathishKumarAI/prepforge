---
qid: ing_b77d2c0ee5__faang__local
question: 'Explain: Why DNS Based Global Server Load — Why DNS Based Global Server
  Load Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 437
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:36-05:00'
sources: []
---

**Clarify**  
You’re asking why a pure DNS‑based GSLB is insufficient for reliable global load distribution. I’ll assume we need *low latency, high availability, and traffic fairness* across multiple data centers.

**Approach**  
1. Identify the core limitations of DNS (caching, TTL, lack of real‑time state).  
2. Explain how those affect GSLB goals.  
3. Contrast with non‑DNS solutions (Anycast, TCP/HTTP load balancers).

**Depth**  

| Limitation | Why it hurts GSLB |
|------------|------------------|
| **Caching & TTL** | Clients cache the IP for 1–48 h; after a DC outage they keep pointing to dead servers until the record expires. |
| **No real‑time health data** | DNS can only return static answers; it can’t react instantly to server load, latency spikes or failures. |
| **Lack of session affinity** | HTTP sessions that hit different IPs get split across DCs, breaking sticky‑session requirements. |
| **Limited granularity** | DNS returns a single IP (or a set), not per‑request routing based on geolocation or application state. |

Because of these, DNS‑only GSLB can lead to *suboptimal latency*, *downtime exposure*, and *uneven traffic*.

**Edge Cases**  
- Sudden flash crowds → cached IPs keep all traffic there until TTL expires.  
- Rapid DC recovery → clients still hit the old failed IP.  
- Mobile users switching networks → stale DNS entries cause timeouts.

**Optimize & Communicate**  
Use a hybrid model: **DNS for coarse geolocation**, then hand off to an **Anycast/HTTP load balancer** that performs real‑time health checks, latency measurements, and sticky sessions. This keeps the low‑cost DNS layer while meeting performance and reliability goals. Explain this trade‑off clearly to stakeholders, highlighting how it satisfies SLA targets without adding undue complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
