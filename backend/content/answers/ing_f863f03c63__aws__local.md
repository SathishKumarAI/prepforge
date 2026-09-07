---
qid: ing_f863f03c63__aws__local
question: 'Explain: Protocol and Media Optimizations — Content Delivery Network (CDN)
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 513
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:40:06-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the redesign of our video‑streaming pipeline for a global e‑commerce platform that had 200 M monthly active users. The latency on mobile was 4× higher than on desktop, and we were losing ~15 % of revenue from cart abandonment during video previews.

**Action (Design)**  
I scoped a **CDN‑first architecture** using **Amazon CloudFront** + **AWS Global Accelerator**.  
1. **Origin**: S3 for immutable assets + MediaConvert to transcode videos into adaptive bitrate HLS/MP4.  
2. **Edge caching**: CloudFront with *Cache Policy* tuned to 24 h for static thumbnails, 30 min for dynamic preview clips; set *Field‑Level Encryption* for DRM keys.  
3. **Dynamic content**: API Gateway + Lambda@Edge for real‑time personalization (e.g., user‑specific ads).  
4. **Metrics & A/B testing**: CloudWatch dashboards with custom dimensions (region, device type) and an automated rollback script.

**Result**  
- 70 % reduction in average mobile latency (from 1.2 s to 0.36 s).  
- Cart abandonment dropped from 15 % to 8 %, boosting revenue by ~$3 M/year.  
- Cost was <10 % of the previous CDN spend due to intelligent cache‑control and S3 lifecycle policies.

**Leadership Principles Anchored**  
*Customer Obsession*: focused on mobile UX that directly impacted revenue.  
*Ownership*: drove cross‑team buy‑in, defined SLAs, and maintained post‑launch monitoring.  

**Bar‑raiser Checklist**  
- **Ownership**: I owned the full pipeline from S3 to edge, not just a component.  
- **Dive Deep**: I quantified latency by device & region; tuned cache headers until we hit the target.  
- **Quantified Impact**: Provided concrete revenue lift and cost savings.  
- **Learning from Failure**: Initial rollout had stale cache issues; resolved by adding versioned URLs and automated purges—documented as a best‑practice for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
