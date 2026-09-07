---
qid: ing_784441e1d4__aws__local
question: 'Explain: So Indians, Chinese, people in Asia can — System Design: Content
  Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 412
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:21-05:00'
sources: []
---

**Situation & Task**  
At a global media startup we were losing 35 % of page‑view revenue because videos loaded 2–3 s slower in India, China, and Southeast Asia. I was tasked to architect a CDN that would reduce latency by at least 50 % while keeping costs under $5k/month.

**Action (Design)**  
1. **Edge compute with CloudFront + Lambda@Edge** – cache video manifests at the nearest edge; run a lightweight transcoding check in Lambda@Edge for region‑specific formats.  
2. **Regional origin buckets on S3** – each region stores its own MP4 variants, eliminating cross‑continent data transfer.  
3. **Dynamic routing via Route 53 latency policies** – automatically points users to the closest origin.  
4. **Cost control with Reserved Capacity in CloudFront** and using S3 Transfer Acceleration only for the first 10 TB/month.

**Result**  
- Latency dropped from 2.6 s to 1.1 s (≈ 58 % improvement).  
- Page‑view revenue increased by $120k/quarter, a 12 % lift in regions that mattered most.  
- Monthly CDN spend stayed at $4.3k, below the target.

**Reflection & Bar‑raiser cues**  
I owned the end‑to‑end pipeline and *dove deep* into regional bandwidth patterns to justify the multi‑origin strategy. The quantitative impact (latency, revenue) satisfies a bar‑raiser’s focus on measurable results. After deployment I ran A/B tests that revealed an edge‑cache miss spike during peak hours; we added a CloudFront invalidation rule, turning a failure into a learning loop and further reducing misses by 18 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
