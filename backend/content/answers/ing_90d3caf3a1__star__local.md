---
qid: ing_90d3caf3a1__star__local
question: 'Explain: Sliding Window Counter — Rate Limiting Algorithms Explained with
  Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:32-05:00'
sources: []
---

**Situation:**  
At my previous startup we were launching a new public API for real‑time analytics. Within the first week of beta, our traffic spiked from 1,000 QPS to over 12,000 QPS, causing several downstream services to time out and user complaints about “rate limit exceeded” errors.

**Task:**  
I had to design a rate‑limiting mechanism that could handle bursty traffic while keeping latency low, enforce a per‑user quota of 5 requests/second, and avoid the “thundering herd” problem when many users hit the limit simultaneously.

**Action:**  
I implemented a **sliding window counter** in Go using Redis’ sorted sets. For each request I pushed the current timestamp into a ZSET keyed by user ID (`zadd user:<id> 0 <ts>`). Then I removed old entries older than one second (`zremrangebyscore user:<id> -inf <now-1s>`) and counted the remaining elements with `zcard`. If the count exceeded five, I returned a 429. This approach gives a fine‑grained window without needing periodic cleanup tasks. I also added a small “leaky bucket” background job to pre‑evict stale keys after inactivity.

**Result:**  
After deployment, our API maintained sub‑50 ms latency even during traffic peaks, and the error rate dropped from 12% to <0.2%. The team now uses this pattern across all services, and I documented the Redis schema for future onboarding. I learned that a correctly tuned sliding window counter can balance accuracy with performance in high‑throughput systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
