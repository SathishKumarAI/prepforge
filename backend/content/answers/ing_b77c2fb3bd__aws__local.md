---
qid: ing_b77c2fb3bd__aws__local
question: 'Explain: Trade-offs and Things That Can Go Wrong — Content Delivery Network
  (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 430
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:42-05:00'
sources: []
---

**Situation / Task**  
I was asked to redesign our global video‑streaming platform to reduce latency for 95 % of users while keeping the monthly CDN cost under $1 M. The challenge was balancing performance, reliability and spend.

**Action**  
* **Architecture** – I chose Amazon CloudFront (global edge network) with origin in an S3 bucket + Lambda@Edge for dynamic header rewriting.  
* **Caching strategy** – Set a short TTL (5 min) for personalized content but a long TTL (24 h) for static assets, using Cache-Control headers and signed URLs to enforce policy.  
* **Monitoring & Rollback** – Implemented CloudWatch metrics (cache hit ratio, latency percentile) and an automated rollback script that reverts edge configuration if hit‑ratio drops below 70 % or latency >200 ms.  
* **Cost control** – Enabled CloudFront’s “cost optimization” feature to pause unused origins and used AWS Budgets + alerts for traffic spikes.

**Result**  
Cache hit ratio rose from 65 % to 92 %, average end‑to‑end latency dropped 35 % (from 400 ms to 260 ms), and CDN spend stayed at $950k/month. The system survived a sudden 3× traffic surge during a product launch without manual intervention.

**Bar‑raiser notes**  
* Ownership: I owned the full loop from design to cost monitoring.  
* Dive Deep: Chose TTLs after analysing per‑user request patterns (30 % of users made >10 requests/day).  
* Quantified impact: 12 % increase in user engagement reported by product team.  
* Learning: Initial rollout caused a cache miss spike; I learned to pre‑warm edges during low‑traffic windows, now automated.

**Leadership Principles** – *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
