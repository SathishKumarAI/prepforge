---
qid: ing_94ed50df5a__star__local
question: 'Explain: An Axiom — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 348
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:37-05:00'
sources: []
---

**Situation**  
In late 2023 I was leading the migration of our global e‑commerce platform from a single data center to a multi‑region architecture. Our traffic had doubled, and we needed instant failover across continents without manual intervention.

**Task**  
I had to design a load‑balancing solution that would route users to the nearest healthy region while guaranteeing low latency and high availability, all within our existing DNS infrastructure.

**Action**  
We first implemented DNS‑based Global Server Load Balancing (GSLB) because it’s simple and inexpensive. However, after deploying it, we observed 30 % of users were still directed to a region that had just experienced an outage. I dug into the DNS TTLs, propagation delays, and the fact that DNS resolvers cache responses for up to 24 hours in some ISPs. I also noted that DNS cannot react faster than the TTL period; it can’t push traffic away when a node goes down immediately. To fix this, we introduced a health‑check API coupled with an edge CDN that could invalidate stale DNS records within minutes and added application‑level failover logic.

**Result**  
The new hybrid solution cut failed requests by 92 % during outages and reduced average latency from 350 ms to 210 ms. I learned that while DNS GSLB is cost‑effective, its inherent caching makes it unsuitable for real‑time global traffic management; combining it with dynamic health checks and edge routing yields reliable performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
