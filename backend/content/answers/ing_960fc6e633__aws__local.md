---
qid: ing_960fc6e633__aws__local
question: What is a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md at master
  \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 561
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:04-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“A CDN is a geographically distributed cache that serves content close to the user, reducing latency and load on origin servers.”*  

### Behavioral (STAR)  
**Situation:** Our video platform hit 20 M concurrent viewers during a product launch.  
**Task:** Reduce end‑to‑end latency below 200 ms for global users while keeping cost < $0.02 per GB served.  
**Action:** Deployed **Amazon CloudFront** with an edge‑optimized distribution, backed by **S3** for origin storage and **Lambda@Edge** for dynamic header rewriting. Configured **Origin Shield** to offload 70 % of requests from S3, and enabled **Cache Behaviors** tuned per content type (short TTL for HTML, long TTL for static assets).  
**Result:** Latency dropped 45 % globally; 95 % of users now load within 180 ms. Bandwidth cost fell 30 %, saving $120K/month.  

### Technical/System Design  
1. **Requirements** – Low latency (< 200 ms), high availability (99.999 %), cost‑efficiency, support dynamic content.  
2. **Architecture** – CloudFront → S3 + Lambda@Edge → Origin Shield → S3.  
3. **Scalability** – Auto‑scales to millions of requests per second; edge locations globally handle spikes.  
4. **Availability** – 99.999 % SLA, multi‑region failover via CloudFront routing.  
5. **Cost & Trade‑offs** – Edge caching reduces origin reads (≈ 70 % savings). Lambda@Edge adds compute cost but eliminates extra origin fetches; kept under $0.02/GB by optimizing TTLs.

### Bar‑raiser Focus  
- **Ownership:** Took full responsibility for end‑to‑end performance, including monitoring and tuning.  
- **Dive Deep:** Analyzed per‑region latency graphs to identify cold starts; iterated on cache policies.  
- **Quantified Impact:** Measured latency and cost reductions with clear KPIs.  
- **Learning from Failure:** After a mis‑configured TTL caused stale content, we added automated cache invalidation scripts and updated runbooks.

This answer demonstrates *Customer Obsession*, *Ownership*, and *Dive Deep*—key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
