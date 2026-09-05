---
qid: ing_729ec312d4__star__local
question: 'Explain: Summary — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 349
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:40-05:00'
sources: []
---

**Situation:**  
I was tasked with redesigning our media streaming platform’s global delivery layer after a 30 % spike in user churn during peak hours. The existing monolithic server architecture couldn’t cache content close to users and caused latency >300 ms on average.

**Task:**  
Build a CDN‑style system that could serve video assets within 80 ms globally, reduce origin load by 70 %, and support auto‑scaling for sudden traffic surges without manual intervention.

**Action:**  
I started with a multi‑region architecture using AWS CloudFront as the front‑end edge layer. For origin caching I deployed a Redis cluster behind an Application Load Balancer, sharding keys by content hash to keep hot assets in memory. To handle dynamic content, I implemented a Lambda@Edge function that rewrites URLs on the fly and injects signed tokens for DRM protection. I also set up CloudWatch metrics (cache hit ratio, origin fetch latency) and triggered auto‑scaling based on a 95th percentile threshold. Finally, I automated deployment with Terraform and CI/CD pipelines to roll out new edge configurations in under two minutes.

**Result:**  
Cache hit ratio jumped from 45 % to 92 %, origin server load dropped by 72 %, and average latency fell to 65 ms. User churn during peak hours decreased by 18 %. I learned that a hybrid approach—combining managed edge services with custom in‑region caching—delivers both low latency and high scalability, while automation keeps the system resilient to traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
