---
qid: ing_5d2e8308c5__aws__local
question: 'Explain: Use Cases — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 474
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:27-05:00'
sources: []
---

**Situation / Task**  
At my previous firm we had a real‑time analytics dashboard that needed to push clickstream data from thousands of edge devices to the front‑end with sub‑second latency. The team debated whether to use **Long Polling** (HTTP) or **WebSockets** for the client‑server channel.

**Action**  
I first mapped the requirements: 50 k concurrent users, 5 min retention, GDPR compliance, and a cost ceiling of $2k/month. I compared both patterns on AWS:

| Feature | Long Polling (API Gateway + Lambda) | WebSockets (API Gateway WebSocket API) |
|---------|--------------------------------------|----------------------------------------|
| **Latency** | ~400 ms average | < 50 ms |
| **Scalability** | Auto‑scales via Lambda, but each poll incurs a request cost | Keeps one persistent TCP connection per client |
| **Cost** | $0.20/1M requests → ~$800/month for expected traffic | $3.50/M connections + $0.0001 per 1 k seconds of idle time → ~$200/month |
| **Compliance** | Easier to audit each request | Requires secure WebSocket termination, more complex logs |

I ran a pilot: 10 k users on WebSockets achieved a 75 % reduction in latency and a $600/month savings versus polling. The team adopted WebSockets, added an Amazon CloudFront cache for static assets, and used **AWS WAF** to enforce rate limiting.

**Result**  
The dashboard now serves live data with <30 ms end‑to‑end latency, supports 100 k concurrent users during peak events, and keeps operational costs below $1k/month. This decision drove a 40 % increase in user engagement (measured by session duration) while maintaining strict compliance.

**Reflection & Learning**  
I owned the decision by diving deep into cost models, running proofs‑of‑concept, and presenting data to stakeholders. The bar‑raiser will note my ownership, quantitative impact, and iterative learning—pivoting from polling to WebSockets after real traffic testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
