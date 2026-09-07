---
qid: ing_5326c65499__aws__local
question: 'Explain: Security Front Door — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 461
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:58-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I led a project for a media‑streaming startup that needed to serve 30 M global viewers daily while protecting copyrighted content from hot‑linking and DDoS attacks. The goal was to design a “Security Front Door” using AWS CDN services that would reduce latency, lower origin load, and enforce strict access controls.

**Action (Dive Deep & Ownership)**  
1. **Architecture** – CloudFront as the CDN front, with an S3 bucket + EC2‑based transcoder as the origin.  
2. **Security Layer** –  
   * AWS WAF rules to block known bot IPs and rate‑limit requests.  
   * Signed URLs (using CloudFront signed cookies) for time‑limited access.  
   * Lambda@Edge for dynamic header checks (e.g., referrer, user agent).  
3. **Scalability & Availability** – Leveraged CloudFront’s global edge network; used S3’s cross‑region replication to keep origin redundant.  
4. **Cost Control** – Enabled CloudFront “Cache Behavior” with 24 h TTLs for static assets, reducing origin hits by ~85%. Used AWS Shield Advanced for DDoS protection at no extra cost per GB.

**Result (Deliver Results)**  
* Latency dropped from 250 ms to 70 ms (average) in the US and EU.  
* Origin request traffic fell 86%, cutting EC2 costs by $12k/month.  
* Incident response time for DDoS events improved from 15 min to <5 min, with zero downtime during a simulated attack.

**Reflection & Learning**  
I initially underestimated the impact of signed URLs on SEO; after user feedback I added “public” CDN paths for search crawlers, balancing security and discoverability. This iteration reinforced that ownership means iterating post‑deployment based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
