---
qid: ing_4f17000293__star__local
question: 'Explain: What is a CDN? Why should we — What Is A CDN? How Does It Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 330
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:38-05:00'
sources: []
---

**Situation:**  
During the launch of our e‑commerce platform, traffic spiked to 3 M users per day. The product catalog was served from a single AWS S3 bucket in us-east-1, and latency kept increasing during peak hours—page load times hit 4–5 seconds on the West Coast.

**Task:**  
I needed to reduce global page‑load latency by at least 50% while keeping costs under the $10k/month budget.

**Action:**  
I proposed deploying a CDN (Content Delivery Network). I chose CloudFront because it integrates with S3, offers edge caching in over 200 locations, and supports custom SSL. I set up an origin access identity to secure the bucket, configured cache‑behavior rules to vary by query string for dynamic content, and enabled HTTP/2 for faster multiplexing. To stay on budget, I used CloudFront’s “Custom Origin” feature with a small number of edge locations prioritized where traffic was highest, and leveraged Lambda@Edge to rewrite URLs for A/B testing without extra origin hits.

**Result:**  
Within two weeks, average page load dropped from 4.2 s to 1.7 s (58% improvement). Cache hit ratio climbed to 92%, cutting backend requests by ~70%. Monthly CDN cost stayed below $8k, and we gained a measurable boost in conversion rates (+12%). I learned that a well‑configured CDN is the simplest way to deliver static assets globally with low latency while keeping infrastructure costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
