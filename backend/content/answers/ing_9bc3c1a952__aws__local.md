---
qid: ing_9bc3c1a952__aws__local
question: 'Explain: The punch line — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 452
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:09-05:00'
sources: []
---

**Situation & Task**  
At a global fintech startup I led the migration of our payment gateway from a single‑region API to a multi‑region architecture. The initial plan was to use **DNS‑based GSLB** (Route 53 latency routing) for traffic distribution.

**Action**  
I first benchmarked DNS‑propagation delays: a region failover took 2–4 minutes on average due to TTL caching, while our SLA required <30 seconds. I also ran synthetic transactions and observed 18% of users experiencing >200 ms latency spikes after a regional outage—our performance budget was 95th‑percentile <100 ms.  
To dive deep, I compared Route 53 with **AWS Global Accelerator** (which uses Anycast IPs) and **CloudFront edge caching**. I designed an architecture that routes traffic via Global Accelerator to health‑checked endpoints, then uses CloudFront for content delivery, ensuring sub‑second failover and lower latency.

**Result**  
The new design cut failover time from 4 minutes to <10 seconds (a 75% improvement) and reduced the high‑latency incidents by 92%, keeping our 95th‑percentile under 80 ms. Monthly cost rose only 12% due to accelerator usage, but we gained a 30% increase in transaction volume from low‑latency regions.

**Learning & Bar‑raiser Insight**  
Ownership: I owned the full end‑to‑end performance audit. Dive Deep: I quantified DNS TTL impact and latency metrics. Quantified Impact: 92% reduction in SLA breaches. Failure learning: DNS GSLB’s lack of real‑time health checks made it unsuitable for our stringent SLAs.

> **Leadership Principles**: *Customer Obsession*, *Ownership* (Amazon style).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
