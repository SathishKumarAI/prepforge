---
qid: ing_abfee3eec1__aws__local
question: 'Explain: Common Cache Key Choices — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 413
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:54:53-05:00'
sources: []
---

**Situation / Task**  
I was redesigning the image‑serving pipeline for a global e‑commerce platform that had just rolled out a new CDN layer (Amazon CloudFront). Our cache hit ratio dropped to **58 %**, causing > 30 % latency spikes during flash sales. The goal: lift hit ratio to 90 % while keeping cost under the $5k/month budget.

**Action**  
I led a cross‑functional team and performed a *dive deep* analysis of request logs, discovering that cache keys were too coarse (only image ID) and ignored query params such as `size`, `format` and user locale. I proposed three key strategies:

1. **Granular Keying** – include normalized size/format values in the key (`imageId-size-format`).  
2. **Version Tagging** – embed a short content hash to force invalidation on updates.  
3. **User‑Segmented Keys** – add locale for localized thumbnails, reducing cache misses by 12 %.  

We implemented these using CloudFront’s *Cache Policy* and Lambda@Edge to rewrite keys at request time. I also set up an automated monitoring pipeline (CloudWatch + Athena) that surfaced key usage patterns in real time.

**Result**  
Within two weeks we hit a **92 % cache hit ratio**, cutting CDN data transfer costs from $3.2k to $1.9k/month and reducing average latency by 45 %. The initiative earned an internal “Innovation” award, and I documented the key‑design pattern in our design library for future services.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end change, demonstrated deep technical insight into CDN mechanics, quantified the impact, and learned that over‑simplified keys can silently erode performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
