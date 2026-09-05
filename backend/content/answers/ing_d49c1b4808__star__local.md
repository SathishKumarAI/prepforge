---
qid: ing_d49c1b4808__star__local
question: 'Explain: TTL (Time-to-Live) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 492
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:32-05:00'
sources: []
---

**Situation:**  
At my last startup we built a recommendation engine that served millions of personalized product suggestions per day. Our Redis cache was holding the pre‑computed feature vectors, but after a week the cache hit ratio dropped from 92 % to 68 %, causing latency spikes.

**Task:**  
I had to redesign the eviction policy so that frequently accessed items stayed in memory while stale or rarely used data was purged, all without breaking the real‑time inference pipeline.

**Action:**  
First, I introduced a TTL (Time‑to‑Live) of 24 h for every cache entry to automatically expire outdated vectors. Then I evaluated and implemented the top eight eviction strategies:  
1. **LRU (Least Recently Used)** – tracks recent access via Redis `MEMORY` commands.  
2. **LFU (Least Frequently Used)** – uses access counters in a sorted set.  
3. **FIFO (First In, First Out)** – simple queue with `LPUSH/RPOP`.  
4. **Random Replacement** – `RANDOMKEY` for quick eviction when memory is tight.  
5. **TTL‑Aware LRU** – combines TTL and recency by resetting the TTL on each hit.  
6. **LFU‑Aware TTL** – resets TTL only if usage frequency exceeds a threshold.  
7. **Segmented LRU** – splits cache into hot, warm, cold segments to protect high‑value items.  
8. **Custom Priority Queue** – assigns priority scores based on click‑through rate and recency, evicting lowest score first.

I benchmarked each strategy using Redis `INFO` stats and simulated traffic loads with `redis-benchmark`. The hybrid TTL‑LRU policy yielded a 15 % hit‑ratio improvement and cut average latency from 120 ms to 78 ms.

**Result:**  
The new eviction framework sustained a 93 % cache hit ratio under peak load, reduced server costs by 18 %, and gave the team confidence that stale data wouldn’t corrupt recommendations. I learned how TTL can be leveraged as a safety net while fine‑tuning eviction logic to balance freshness and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
