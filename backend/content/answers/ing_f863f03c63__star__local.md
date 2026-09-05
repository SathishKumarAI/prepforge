---
qid: ing_f863f03c63__star__local
question: 'Explain: Protocol and Media Optimizations — Content Delivery Network (CDN)
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 343
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:45:15-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a video‑on‑demand platform that served over 10 million users worldwide. During peak launch, latency spikes caused buffering on 18% of Asian devices, pushing our churn rate up by 4%.

**Task:**  
I was tasked with reducing average content delivery latency to under 200 ms globally and cutting CDN costs by at least 20% without compromising quality.

**Action:**  
First, I performed a traffic heat‑map analysis using AWS CloudWatch and identified that 70% of requests came from three Asian regions. I then integrated a multi‑region edge caching strategy:  
1. Deployed an Akamai CDN with region‑specific origin pull rules to cache transcoded segments closer to users.  
2. Implemented dynamic content compression (Brotli) at the edge, reducing payload by 35%.  
3. Added a latency‑aware routing layer in our load balancer that directed low‑latency requests to the nearest CDN node and heavy‑content requests to a regional origin server with pre‑warm cache.  
4. Configured cost‑based tiered caching—frequently accessed videos were stored on cheaper, slower tiers after 30 days.

**Result:**  
Latency dropped from an average of 350 ms to 140 ms, buffering fell below 2%, and our CDN spend decreased by 23% in the first quarter. I learned that a hybrid edge‑origin strategy, combined with intelligent compression and tiered caching, can deliver both performance and cost efficiency at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
