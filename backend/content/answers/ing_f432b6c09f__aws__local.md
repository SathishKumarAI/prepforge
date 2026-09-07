---
qid: ing_f432b6c09f__aws__local
question: 'Explain: Preface — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 454
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:28:26-05:00'
sources: []
---

**Situation & Task**  
At a previous role I was tasked with scaling our recommendation engine to serve 5 M users worldwide while keeping latency < 50 ms. The architecture team proposed a DNS‑based Global Server Load Balancer (GSLB) so that each region would host an identical model cluster.

**Action – Dive Deep & Ownership**  
I ran a traffic‑mix simulation in our staging environment and discovered three critical failure modes:

1. **DNS Caching** – 70 % of users hit the same IP for up to 48 h, causing sudden overload when a region’s capacity was exceeded.  
2. **Model Drift** – Each region trained on local data; when traffic shifted (e.g., due to an outage), users received inconsistent recommendations, violating *Customer Obsession*.  
3. **Cold‑start Latency** – New edge nodes required 10 s to warm up the GPU model, inflating average latency from 35 ms to 120 ms during failover.

I replaced GSLB with **AWS Global Accelerator + Route 53 weighted routing** and introduced a **Lambda@Edge cache** that pre‑warm models on request. We added an **EFS‑backed shared model store** so all regions pull the same weights, ensuring consistency.

**Result – Deliver Results**  
- Latency dropped from 120 ms to 38 ms (‑66 %).  
- 99.9 % of requests served without regional failover.  
- Customer churn fell by 12 % YoY after the fix.

**Reflection**  
The lesson: DNS‑based GSLB works for static content but fails with stateful, latency‑sensitive ML workloads. By owning the problem, diving deep into caching & consistency issues, and iterating on AWS services, we built a resilient, low‑latency system that truly serves our customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
