---
qid: ing_1e33f39f87__star__local
question: 'Explain: Endpoint: GET /songs/{song_id}/stream — Design Spotify | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 377
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:13-05:00'
sources: []
---

**Situation** – At a startup building a music streaming platform, we noticed that our public API was getting hit with over 10 k requests per second for song streams, and latency kept creeping above 300 ms during peak hours. The engineering team needed to expose an endpoint `GET /songs/{song_id}/stream` that could serve millions of users worldwide while keeping costs low.

**Task** – My goal was to design a scalable, cost‑effective streaming API that ensured <200 ms latency for 95% of requests, handled graceful degradation during traffic spikes, and provided robust security (token auth + IP whitelisting). I also had to integrate with our existing CDN and analytics pipeline.

**Action** – I first introduced request throttling per user using Redis‑based token buckets. Next, I moved the actual media delivery to a signed URL scheme via CloudFront, so clients pulled data directly from edge caches while we kept only a lightweight proxy for authentication. To handle bursts, I implemented a “request coalescing” layer that deduplicated identical stream requests within 50 ms windows, reducing backend load by ~40%. Finally, I added a metrics collector to track per‑song cache hit ratios and latency histograms, feeding into an auto‑scaling policy for the API gateway.

**Result** – After deployment, average latency dropped from 280 ms to 140 ms, and 99% of requests stayed below 200 ms. Traffic spikes were absorbed without any service degradation, and we cut CDN data transfer costs by ~35%. The exercise taught me how to balance real‑time performance with cost through caching, request shaping, and edge delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
