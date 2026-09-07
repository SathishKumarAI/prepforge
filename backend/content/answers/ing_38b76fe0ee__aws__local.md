---
qid: ing_38b76fe0ee__aws__local
question: 'Explain: Cost — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 420
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:33:07-05:00'
sources: []
---

**Situation & Task**  
I led the rollout of a global ML‑model inference service for our recommendation engine. The latency requirement was < 50 ms and we had to serve 100 M requests/day from users worldwide while keeping costs under $1 M/month.

**Action – Design**  
- **Edge caching with Amazon CloudFront (CDN)**: cached the pre‑computed feature vectors (≈ 200 KB per request) at edge locations, reducing origin hits by 92%.  
- **Lambda@Edge for lightweight filtering**: performed A/B split logic and user‑segment tagging without adding latency.  
- **Origin – Amazon SageMaker Endpoint behind an Application Load Balancer**: autoscaled to 50 concurrent inferences; each inference cost ~$0.00025, totaling $12K/month.  
- **Cost controls**: enabled CloudFront’s “Cache Based on Selected Request Headers” to avoid unnecessary cache invalidations and used S3 Transfer Acceleration for model updates.

**Result**  
- Latency dropped from 120 ms to 35 ms (70% improvement).  
- Edge hit ratio increased to 92%, cutting origin traffic by $8K/month.  
- Total CDN spend was $4.2K/month, a 60% reduction versus the previous architecture.  
- System remained highly available (>99.95%) due to CloudFront’s global edge network.

**Learnings & Ownership**  
I identified that caching the feature vectors—something we initially thought “unnecessary”—was the key leverage point (Dive Deep). I owned post‑deployment monitoring, iterated on cache TTLs, and documented a playbook for future ML inference services. This aligns with **Ownership**, **Customer Obsession** (lower latency), and **Bias for Action** (quick CDN rollout).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
