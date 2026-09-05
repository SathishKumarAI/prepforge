---
qid: ing_8dfbc905e1__star__local
question: 'Explain: CDN Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 357
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:54-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a global e‑commerce platform that served product images to millions of users daily. When traffic spiked during flash sales, our origin servers struggled and page load times doubled.

**Task:**  
I was tasked with reducing latency for image requests by 70% while keeping costs under budget and ensuring cache consistency across all regions.

**Action:**  
First, I mapped the access patterns: 85 % of requests were for a fixed set of 2 TB of static assets. I chose CloudFront as our CDN and configured a two‑tier caching strategy:  
1. **Edge caching** with a short TTL (15 min) to serve hot items instantly.  
2. **Regional origin cache** using an S3 bucket behind Elasticache Redis for less frequent but still popular assets, extending TTL to 6 h.  

I implemented signed URLs and versioned object keys so that updates would bypass the cache automatically. To monitor hit/miss ratios I added CloudWatch metrics and set up alerts when miss rates exceeded 5 %. Finally, I ran a load test with k6, simulating 100k concurrent users.

**Result:**  
Cache hit rate jumped from 45 % to 92 %, cutting image delivery latency from 1.2 s to 250 ms on average. Traffic to the origin dropped by 80 %, saving us $12k/month in compute costs. I learned how TTL tuning, key versioning, and real‑time metrics are critical for balancing freshness against performance in CDN caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
