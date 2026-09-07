---
qid: ing_dcbc11d9b4__aws__local
question: 'Explain: When to Choose Stateless Architecture — Stateful vs. Stateless
  Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 387
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:15-05:00'
sources: []
---

**Situation / Task**  
While redesigning the recommendation engine for a global e‑commerce platform, I had to decide between a stateful microservice that persisted user session data in Redis and a stateless Lambda pipeline that processed each request independently.

**Action**  
I applied *Customer Obsession* by measuring how quickly new users could see personalized suggestions. Using *Dive Deep*, I benchmarked two prototypes: the stateful service (Redis + EC2) returned 70 % faster results but incurred 30 % higher latency under peak traffic; the stateless Lambda pipeline added 150 ms per request but scaled automatically to 10× traffic without manual intervention.  
I chose **stateless** for the core recommendation API because:

| Metric | Stateful (Redis+EC2) | Stateless (Lambda + Step Functions) |
|--------|----------------------|-------------------------------------|
| Avg latency (ms) | 120 | 270 |
| Cost per 1M requests ($) | 12.5 | 9.8 |
| Autoscale lag | 30 s | <1 s |
| Failure recovery time | 4 min | 0 s |

**Result**  
Deploying the stateless pipeline reduced operational cost by **21 %**, cut failure recovery time from 4 minutes to real‑time, and improved user engagement (click‑through rate) by **8 pp** in the first month.  

**Learning**  
I realized that *Ownership* means not just picking the fastest option but the one that aligns with business KPIs and future growth—statelessness gave us elasticity, lower ops overhead, and a clearer path for adding new ML models without state migration headaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
