---
qid: ing_c187bf2e52__aws__local
question: 'Explain: Different CDNs use different technologies to direct'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 475
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:34-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with migrating a high‑traffic e‑commerce site from a legacy CDN to **Amazon CloudFront** while maintaining 99.9 % global availability and reducing latency by 30 %. The goal was to prove that the new CDN could intelligently route requests based on real‑time analytics, something our existing vendor couldn’t do.

**Action**  
I mapped the customer journey (search → product page → checkout) and identified three key routing strategies:  

| Strategy | How it works | AWS services used |
|----------|--------------|-------------------|
| Geo‑based routing | Uses `CloudFront` edge locations + Lambda@Edge to redirect traffic by country | CloudFront, Lambda@Edge |
| Real‑time health checks | Edge functions query Route 53 health checks and fall back to secondary origin | Route 53, CloudWatch Alarms |
| Dynamic content acceleration | Edge caches static assets; dynamic API calls are forwarded via `API Gateway` + `AWS WAF` for security | API Gateway, WAF, CloudFront |

I implemented a **Lambda@Edge** function that inspected the `User‑Agent`, performed a quick health check on the origin, and redirected to a secondary origin if latency exceeded 120 ms. I also set up **CloudWatch dashboards** to track miss rates per edge location.

**Result**  
*Latency dropped from 250 ms to 170 ms (32 % improvement).  
*Cache hit ratio increased from 65 % to 82 %.  
*Operational cost fell by 18 % due to fewer origin hits.  

The migration was delivered **two weeks ahead of schedule**, and the new routing logic is now part of our CI pipeline, ensuring any future CDN upgrades automatically inherit the same intelligent behavior.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end change, diving deep into CloudFront’s caching headers and Lambda performance limits. The measurable impact—latency and cost savings—proved the value. After a brief rollback during peak traffic, I added automated health‑check alerts, turning failure into a learning loop for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
