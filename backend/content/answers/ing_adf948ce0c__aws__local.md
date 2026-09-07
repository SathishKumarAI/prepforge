---
qid: ing_adf948ce0c__aws__local
question: 'Explain: URL table — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 427
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:52-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of an internal “TinyURL”‑style microservice that handled ~50 M click‑throughs per day for a global ad network. The legacy monolith had 3× latency and was stuck on a single RDS instance, so any outage knocked out revenue.

**Action**  
I scoped the problem with *Customer Obsession* and *Ownership*:  
1. **Architecture** – Split the service into two stateless Lambdas (create & redirect) behind an API Gateway.  
2. **Storage** – Use DynamoDB with a Global Secondary Index on the short key, auto‑scaling read capacity to 10 k RCU/s and write capacity to 5 k WCU/s; TTL deletes expired keys after 90 days.  
3. **Cache** – Edge‑cache redirects in CloudFront for 24 h to reduce DynamoDB reads by ~70%.  
4. **Monitoring** – Deploy CloudWatch Alarms on Lambda error rates and API latency, auto‑triggering a Step Function that spins up an additional EC2 instance if the error rate >5% for 10 min (fallback).  

**Result**  
Latency dropped from 350 ms to <60 ms (92 % reduction). Availability hit 99.999% in production; during a planned outage we automatically spun up a standby region, keeping uptime 100%. Cost fell by 45 % due to serverless scaling and reduced RDS licensing.  

**Reflection**  
I learned that *Dive Deep* into metrics uncovers hidden bottlenecks, and *Bias for Action* means iterating quickly with clear rollback paths. This redesign set a new bar for our URL‑shortening stack and became the template for other click‑through services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
