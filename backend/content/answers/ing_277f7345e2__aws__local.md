---
qid: ing_277f7345e2__aws__local
question: 'Explain: What HTTPS Adds — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 381
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:19-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation / Task** – In my last role I led the redesign of a public API that served 1 M requests/day. The original HTTP endpoint exposed sensitive user data in clear text and caused a breach risk, so we had to migrate to HTTPS while keeping latency under 100 ms.

**Action** –  
* **Ownership & Dive Deep:** I scoped the migration by profiling traffic with CloudWatch Logs, discovering that 80 % of requests were from mobile apps.  
* **Design:** I chose *Amazon API Gateway* + *AWS Certificate Manager (ACM)* for TLS termination, adding *WAF* to guard against injection attacks. To preserve speed I enabled *Edge‑Optimized APIs* and set a custom caching policy (TTL = 60 s).  
* **Scalability & Cost:** Using CDN edge locations reduced origin hits by 70 %, cutting data transfer costs by ~30 %. The solution automatically scales; the only added cost was the ACM certificate (~$0) and API Gateway’s request fee ($3.5 / M), a negligible increase versus the $10 k annual breach‑prevention savings.

**Result** – Within two weeks of deployment we achieved:  
* 99.999% TLS compliance (no unencrypted traffic).  
* <95 ms average latency, unchanged from HTTP baseline.  
* Zero security incidents in the first year post‑migration.  

**Bar‑raiser takeaways:** I demonstrated full ownership, deep technical insight into TLS flow and edge caching, quantified impact on cost & risk, and learned that early performance profiling prevents hidden regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
