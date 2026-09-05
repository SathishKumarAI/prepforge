---
qid: ing_9588d40ede__star__local
question: 'Explain: Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 316
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:31:50-05:00'
sources: []
---

**Situation:** In my last role at a video‑streaming startup, our user growth hit 2 million monthly viewers. The latency on the main data center was 250 ms globally, causing buffering and a 12 % churn spike during peak hours.

**Task:** I had to design a CDN architecture that reduced end‑to‑end latency below 100 ms for 95 % of users while keeping cost under $200k/month.

**Action:** I chose a multi‑layered approach: first, I integrated AWS CloudFront as the edge layer, caching popular video chunks with a 24‑hour TTL. Next, I deployed a custom reverse‑proxy cluster on Kubernetes in regions near our primary content servers; this handled dynamic requests and signed URLs for DRM. For real‑time analytics, I used Redis Streams to track cache hit ratios per region, feeding an automated Lambda that refreshed stale edges when the hit rate dropped below 80 %. I also set up a GeoIP‑based routing rule in Route 53 to steer traffic to the nearest edge.

**Result:** After rollout, average latency fell to 78 ms and buffering incidents dropped by 70 %, translating into a 5 % increase in daily active users. The CDN cost stayed at $180k/month, under budget. I learned how to balance cache aggressiveness against freshness and how to use real‑time metrics for dynamic edge management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
