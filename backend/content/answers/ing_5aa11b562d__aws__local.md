---
qid: ing_5aa11b562d__aws__local
question: 'Explain: CDN Request Routing — Why are Content Delivery Networks (CDN)
  so Popular?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 399
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:29-05:00'
sources: []
---

**Answer – Amazon Way**

*Situation:* In a prior role I led the migration of a video‑streaming platform from a single origin server to a global CDN in order to support 10 M concurrent users during a product launch.

*Task:* My goal was to reduce latency, increase availability and keep cost per GB under $0.02 while ensuring data privacy compliance.

*Action:*  
1. **Customer Obsession + Ownership** – I mapped every user’s request path, identified the 95th‑percentile latency hotspots, and set up CloudFront with geo‑proximity routing.  
2. **Dive Deep** – I instrumented Lambda@Edge to rewrite URLs for regional edge caches, added signed cookies for DRM content, and enabled S3 Transfer Acceleration for origin uploads.  
3. **Bias for Action + Deliver Results** – Within 48 hrs of rollout the average round‑trip time dropped from 350 ms to 120 ms (–66 %), and cache hit ratio rose from 65 % to 92 %. Cost per GB fell from $0.045 to $0.018, saving ~30 % annually.

*Result:* The CDN reduced server load by 70 %, eliminated a single point of failure, and allowed us to scale to 20 M peak users without additional infra investment. I documented the design in a living doc, shared lessons on edge‑cache consistency, and built a monitoring dashboard that now alerts on cache miss anomalies.

**Key AWS services used:** CloudFront, Lambda@Edge, S3 Transfer Acceleration, Amazon GuardDuty for security.  

*Bar‑raiser cues:* Ownership of end‑to‑end performance, deep metrics analysis, rapid iteration, and clear quantifiable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
