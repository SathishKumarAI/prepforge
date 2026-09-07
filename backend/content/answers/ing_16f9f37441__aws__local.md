---
qid: ing_16f9f37441__aws__local
question: 'Explain: TTLs and Purging — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 478
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:38-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of our global e‑commerce catalog CDN in Q1 2025 to cut stale‑content errors from **18% → <2%** and reduce page load time by 30 ms for high‑traffic users.

**Action**  
*Owned* the end‑to‑end TTL strategy.  
1. **Requirements:**  
   * Freshness for product images (≤ 5 min), marketing assets (≤ 24 h).  
   * Zero customer impact during purges, no extra cost to our internal devs.  
2. **Design:**  
   * Store assets in **Amazon S3** with object‑level metadata `x-cloudfront-timestamp`.  
   * Deploy **CloudFront** with a default TTL of 1 h; use cache‑control headers for fine‑grained overrides.  
   * Implement **Lambda@Edge** to inject a deterministic ETag from the S3 timestamp, ensuring clients revalidate only when content truly changes.  
   * For purges: trigger an **SQS FIFO queue** → **AWS Step Functions** that batch invalidate requests (max 1000 per API call) and respect CloudFront’s rate limits.  
3. **Dive Deep:** Monitored `CacheHitRate` and `InvalidationCount`; saw a 12 % hit‑rate lift after tuning TTLs.  

**Result**  
*Reduced stale‑content incidents by **96%**.*  
*Cut CDN spend by **18 %** through smarter caching, while maintaining 99.999% availability across all edge locations.

---

### Leadership Principles  
- **Customer Obsession:** Ensured users always saw up‑to‑date catalog data.  
- **Ownership & Dive Deep:** Took full responsibility for TTL logic and iterated on metrics to refine the system.

**Bar‑raiser cues:** Demonstrated ownership, quantified impact (96% reduction), deep technical understanding of CloudFront’s cache mechanics, and learning from initial over‑purging that caused latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
