---
qid: ing_5fb98a0b0f__star__local
question: What Is A CDN? How Does It Work?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 345
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:51-05:00'
sources: []
---

**Situation** – While working on a real‑time recommendation engine at a media startup, our API served personalized video embeddings to over 1 M users worldwide. Latency spikes were crippling the user experience; average response time jumped from 150 ms to 700 ms during peak traffic.

**Task** – I had to reduce latency and increase reliability of model inference by caching model outputs closer to end‑users, without adding extra compute layers that would inflate cost or introduce stale data issues.

**Action** – I proposed using a CDN (Content Delivery Network) to edge‑cache the serialized embeddings. First, I wrapped the TensorFlow Lite model in an AWS Lambda@Edge function that could run inference on the fly if cache misses occurred. Then I configured CloudFront to store the 1 KB embedding responses for each user session with a TTL of 10 minutes. To keep data fresh, I set up a signed URL system so only authenticated requests hit the origin. Finally, I monitored cache hit ratios via AWS CloudWatch and adjusted TTLs based on traffic patterns.

**Result** – Cache hit rate improved from 20 % to 95 %, cutting average latency to 80 ms and reducing origin server load by 70 %. User engagement rose 12 % in the following month. I learned that a CDN can act as an intelligent, low‑cost cache for ML inference outputs when paired with edge compute, turning geographic proximity into performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
