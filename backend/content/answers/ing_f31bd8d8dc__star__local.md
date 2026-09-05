---
qid: ing_f31bd8d8dc__star__local
question: 'Explain: So another thing is we also selectively — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 350
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:16-05:00'
sources: []
---

**Situation**  
When I joined the video platform team, our recommendation engine was hitting a 60 % cache miss rate during peak hours, which meant every user request had to hit our GPU‑accelerated inference cluster. The latency spike pushed average watch time down by 8 %, and we were already over budget for compute usage.

**Task**  
I needed to reduce the inference load by selectively caching model outputs for high‑frequency content while still delivering fresh recommendations for niche videos, all without compromising accuracy or user experience.

**Action**  
First, I profiled request patterns with Prometheus and identified that 30 % of videos accounted for 80 % of requests (the classic Pareto). I then built a lightweight LRU cache in Redis keyed by video ID and user segment. For each cached entry I stored the top‑5 predicted tags plus a timestamp. On cache miss, we triggered inference on our TensorRT model; on hit, we returned the precomputed tags. To keep freshness, I set an 8‑hour TTL and implemented a background job that invalidated caches when a video’s view count crossed a threshold. We also added a Bloom filter to avoid unnecessary lookups for content with no historical data.

**Result**  
The cache hit rate jumped from 40 % to 78 %, cutting GPU usage by 35 %. Latency fell from 350 ms to under 120 ms, and the overall watch time increased by 6 %. I learned that a targeted, metrics‑driven caching strategy can dramatically improve scalability without sacrificing recommendation quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
