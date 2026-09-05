---
qid: ing_32931c4021__star__local
question: 'Explain: Cache Repeated Work — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 388
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:44-05:00'
sources: []
---

**Situation**  
In my last role I built a recommendation engine that served personalized product suggestions to millions of users each day. The model was an ensemble of gradient‑boosted trees and a deep neural net, both retrained nightly on fresh clickstream data. Each request triggered a costly inference pipeline: feature extraction from user logs, model scoring, and post‑processing.

**Task**  
I had to cut the per‑request latency by at least 40 % without compromising recommendation quality, while keeping infrastructure costs under budget for a growing traffic base.

**Action**  
I introduced a two‑tier cache strategy. First, on the client side (browser/SDK) I stored the last 10 user interactions in IndexedDB to avoid re‑fetching them from the server. Second, on the server I deployed an in‑memory Redis cluster keyed by `user_id + request_timestamp`. The value was a precomputed score vector plus a freshness timestamp. When a request arrived, the service checked Redis; if a cached entry existed and was less than 30 minutes old, it returned that directly. If not, it ran the full pipeline and immediately populated Redis with an LRU eviction policy. I also instrumented Prometheus metrics to monitor cache hit ratio (target > 85 %) and latency distribution.

**Result**  
Latency dropped from 650 ms to 380 ms on average— a 42 % improvement— while CPU usage fell by 25 %. The cache hit rate stabilized at 88 % during peak traffic. I learned that combining client‑side storage for transient data with server‑side in‑memory caching can dramatically reduce repeated work, but it requires careful TTL tuning and observability to avoid stale recommendations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
