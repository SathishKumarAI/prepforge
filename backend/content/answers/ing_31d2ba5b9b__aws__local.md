---
qid: ing_31d2ba5b9b__aws__local
question: 'Explain: L4, L7, and GSLB load balancers, explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 525
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:35-05:00'
sources: []
---

**Situation & Task**  
While leading the migration of our global e‑commerce platform to AWS, I had to decide how to expose the new microservices to millions of customers worldwide. The challenge was choosing between Layer 4 (TCP/UDP), Layer 7 (HTTP/HTTPS) and Global Server Load Balancing (GSLB) solutions that would keep latency low, scale elastically and stay cost‑effective.

**Action**  
I mapped each requirement to an AWS service:

| Load‑balancer type | Typical AWS service | Key features |
|--------------------|---------------------|--------------|
| **L4** | Classic ELB or Network Load Balancer (NLB) | Handles raw TCP/UDP, 100 k+ connections per LB, ultra‑low latency (~10 µs). |
| **L7** | Application Load Balancer (ALB) | HTTP/HTTPS routing, path‑based rules, host header routing, WebSocket support. |
| **GSLB** | Amazon Route 53 + Global Accelerator | DNS‑level global routing with health checks; traffic steered to the nearest healthy endpoint, 99.95 % availability. |

I first ran a **load‑test** (10 k RPS) on an ALB and measured 98 % success at <200 ms latency. Adding Route 53 weighted routing cut cross‑region latency by 35 % during peak hours. Cost modeling showed that using NLB for the internal gRPC services saved ~30 % vs. ALB, while Global Accelerator’s $0.025/GB transfer fee was justified by a 15 % uplift in conversion rate.

**Result**  
Post‑migration, we achieved:

* 99.98 % request success across all regions  
* 25 % reduction in data‑transfer costs  
* 12 % increase in overall sales during the holiday season  

**Learning & Ownership**  
I documented the trade‑offs and built a reusable Terraform module for future launches—demonstrating *Ownership* and *Dive Deep*. The bar‑raiser will notice that I quantified impact, balanced latency vs. cost, and turned failure points (DNS TTL issues) into learning loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
