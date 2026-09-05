---
qid: ing_2142a76bfd__star__local
question: 'Explain: Streaming Traffic — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 345
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:01-05:00'
sources: []
---

**Situation** – I was part of a backend team at a music‑streaming startup that had just hit 1 M active users. Our CDN cache hit rate dropped from 92% to 70% during the holiday season, and latency spikes were hurting churn.

**Task** – Design a streaming traffic layer that could keep cache hit rates above 90%, reduce end‑to‑end latency under 120 ms for 95% of requests, and scale elastically as user counts doubled in a month.

**Action** – I introduced a two‑tier edge architecture: first, a global CDN with HTTP/2 multiplexing and Brotli compression; second, a per‑region “smart proxy” that maintained an LRU cache of the most popular 10 k tracks plus a predictive prefetch engine using a lightweight k‑means clustering model on user listening patterns. The proxies communicated via gRPC to a central metadata service built with Redis Streams for real‑time analytics. We added a fallback circuit breaker that routed traffic through the origin only if cache miss rates exceeded 5% for 30 s, preventing cascading failures.

**Result** – Cache hit rate rebounded to 93%, average latency dropped from 180 ms to 95 ms, and we handled a 150% user growth without additional infrastructure spend. I learned that combining edge caching with a simple ML prefetch model can deliver massive performance gains while keeping operational complexity low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
