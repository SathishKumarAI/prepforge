---
qid: ing_16e7fbedc2__aws__local
question: 'Explain: Introduction — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 437
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:16-05:00'
sources: []
---

**Situation & Task**  
When I joined an e‑commerce startup, we had to explain the end‑to‑end flow of a browser request for our internal training portal. The goal was to make the design clear enough that a junior engineer could reproduce it while ensuring high availability and low cost at scale.

**Action (Design)**  
1. **Client → DNS (Route 53)** – We use Amazon Route 53 with health checks for *failover routing* across two regions, giving 99.99 % uptime.  
2. **DNS → CloudFront CDN** – Edge caching reduces latency by ~70 ms per request and offloads traffic from the origin.  
3. **CloudFront → API Gateway (regional)** – Handles HTTPS termination, throttling, and JWT validation; we enable *Lambda@Edge* for A/B testing of UI variants.  
4. **API Gateway → Lambda** – Stateless functions that query DynamoDB (for product metadata) and S3 (static assets). We provision *Provisioned Concurrency* for the hot path to keep cold‑start latency < 50 ms.  
5. **Lambda → DynamoDB & RDS Aurora Serverless** – Reads are served from DynamoDB; writes go to Aurora for analytics, using *Aurora Global Database* for cross‑region replication.  

**Result**  
After rollout:  
- **Latency** dropped from 350 ms to 110 ms (average).  
- **Cost** decreased by 25 % due to CDN caching and serverless compute.  
- **Availability** hit 99.999 % in the first month, meeting SLAs.

**Reflection**  
I owned the end‑to‑end pipeline, *dove deep* into cold‑start metrics, and iterated on concurrency settings—learning that a single misconfigured Lambda timeout can ripple through the entire stack. This experience reinforced my commitment to **Ownership**, **Dive Deep**, and **Bias for Action**—qualities any bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
