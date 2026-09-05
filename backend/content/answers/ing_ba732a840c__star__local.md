---
qid: ing_ba732a840c__star__local
question: 'Explain: Based on location. So you might have — System Design: Content
  Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 320
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:55-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with revamping the video streaming service for a global audience. Our latency had spiked in Asia and Europe, pushing buffering rates from 2 % to over 12 % during peak hours.

**Task**  
I needed to design a lightweight CDN that could route users to the nearest edge server based on geographic location while keeping infrastructure cost under 15 % of the current spend.

**Action**  
I started by mapping user IPs to AWS Regions using GeoIP. I deployed a small set of stateless NGINX edge nodes in three key regions (N. America, EU‑West, APAC) and configured an API Gateway with Lambda@Edge to inspect the `x-forwarded-for` header and redirect clients to the closest node. To keep costs low, each edge node ran only 2 vCPU instances and used CloudFront’s “origin failover” for redundancy. I also added a lightweight cache layer in Redis at each edge to store the most popular 10 % of content.

**Result**  
After launch, average latency dropped from 350 ms to 120 ms, buffering fell to 3 %, and we reduced CDN spend by 12 %. The exercise taught me how geographic routing can be combined with simple caching to deliver measurable performance gains without a huge infrastructure footprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
