---
qid: ing_6ce5fbb189__star__local
question: 'Explain: Production Practices — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 345
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:00-05:00'
sources: []
---

**Situation** – I was leading the deployment of a real‑time image classification API for an e‑commerce client. Their traffic spiked during seasonal sales, with latency exceeding 250 ms on the edge nodes in North America and Europe, causing cart abandonment.

**Task** – Reduce end‑to‑end inference latency to under 80 ms globally while keeping model size below 200 MB so that the CDN could cache it. Also ensure zero downtime during updates and maintain strict data privacy compliance.

**Action** – I architected a multi‑tier CDN strategy with CloudFront + Lambda@Edge. First, I containerized the PyTorch model into a lightweight TorchScript bundle (~150 MB) and pushed it to an S3 origin that was replicated in edge locations. Then I wrote a Lambda@Edge function to preprocess incoming images (resize, normalize) directly at the edge, reducing payload size by 60%. For cache invalidation, I used versioned URLs tied to model checkpoints; the CDN automatically purged stale content after each A/B‑test roll‑out. Finally, I instrumented CloudWatch metrics and set up an automated rollback if latency exceeded a threshold.

**Result** – Latency dropped from 250 ms to 65 ms on average across all regions, boosting conversion by 12%. The cache hit ratio improved to 92%, cutting origin load by 70%. I learned that coupling edge preprocessing with model versioning in the CDN not only speeds up inference but also simplifies continuous delivery and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
