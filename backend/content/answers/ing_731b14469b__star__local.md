---
qid: ing_731b14469b__star__local
question: 'Explain: Common Use Cases — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 310
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:53-05:00'
sources: []
---

**Situation**  
While leading the architecture of a real‑time recommendation engine for a global e‑commerce platform, we noticed that latency spikes were hurting click‑through rates by ~12 % during peak traffic.

**Task**  
I needed to design a low‑latency data pipeline so that model inference could be served from every region within 50 ms, without overloading the central GPU cluster.

**Action**  
I introduced a CDN layer in front of our inference microservice. Using AWS CloudFront with Lambda@Edge, we cached the top‑10 predictions per user segment at edge locations. The CDN triggered a lightweight “warm‑up” request to our primary model only when a cache miss occurred, and it leveraged origin pull caching headers to keep stale data fresh for 5 s. We also integrated Redis‑based key‑value store at each edge to store feature vectors, reducing the need to hit the central database. Finally, we instrumented CloudWatch metrics to auto‑scale edge caches based on request patterns.

**Result**  
Latency dropped from 120 ms to 35 ms in all regions, boosting conversion rates by 9 % and cutting inference cost by 18 %. I learned that CDNs aren’t just for static assets; when combined with smart caching policies they can dramatically accelerate ML‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
