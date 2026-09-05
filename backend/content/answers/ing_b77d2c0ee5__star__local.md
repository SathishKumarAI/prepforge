---
qid: ing_b77d2c0ee5__star__local
question: 'Explain: Why DNS Based Global Server Load — Why DNS Based Global Server
  Load Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 384
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:08-05:00'
sources: []
---

**Situation:**  
At my last role I was leading a migration of our e‑commerce platform to a multi‑region cloud deployment. The product team wanted the simplest way to route users to the nearest data center so they could keep latency under 50 ms during peak traffic.

**Task:**  
I had to design a global load balancing solution that would satisfy SLA guarantees, handle sudden traffic spikes, and be cost‑effective for our $5 M monthly spend.

**Action:**  
We initially considered DNS‑based GSLB because it was cheap and required no new hardware. I set up Route 53 latency routing with health checks, then ran a 72‑hour test during a simulated flash sale. The DNS cache on browsers and ISPs caused stale records to persist for up to 30 minutes after we decommissioned one region. During the spike, half of our users were still directed to the overloaded data center, causing a 12 % rise in page load times. I documented these failures, compared them with an IP‑based Anycast solution that updated instantly, and presented the trade‑offs: DNS GSLB offers low cost but suffers from TTL caching, no real‑time failover, and limited granularity for per‑request routing.

**Result:**  
We abandoned DNS GSLB in favor of a software load balancer (NGINX Plus) with health checks and Layer 4 routing. Latency dropped to 35 ms on average, and the system recovered from regional outages within seconds. I learned that while DNS GSLB is attractive for cost, it cannot meet strict real‑time SLA requirements due to TTL propagation delays and lack of per‑request intelligence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
