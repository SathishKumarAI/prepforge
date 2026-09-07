---
qid: ing_cbbe8ee4a6__aws__local
question: When Does Cleanup Happen? — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 366
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:26-05:00'
sources: []
---

**Situation / Task**  
I was tasked with refactoring a high‑traffic recommendation service that used Guava’s `CacheBuilder`. The cache had stale data for up to **12 hrs**, causing users to see outdated recommendations and driving a 4 % drop in engagement.

**Action**  
1. **Dive Deep** into the Guava docs: I discovered that cleanup is *lazy*—it runs only on cache access (`get`, `put`, etc.) or via an explicit `cleanUp()` call, not automatically on a schedule.  
2. Designed a lightweight background cleaner: every 30 min a scheduled executor calls `cache.cleanUp()`.  
3. Added size‑based eviction (maxSize) and time‑based expiration (`expireAfterWrite`) to keep memory bounded.  
4. Instrumented the cache with Prometheus metrics (`guava_cache_evictions_total`, `guava_cache_hits_total`).  

**Result**  
- Stale data window shrank from 12 hrs to **≤30 min**.  
- Cache hit ratio improved from 68 % to **92 %**, cutting request latency by 37 ms on average.  
- Overall engagement rose 3.8 %, translating to ~$1.2 M in incremental revenue per quarter.

**Reflection**  
I learned that “cleanup happens only when the cache is accessed”—a subtle detail that can have huge business impact if ignored. I’ll continue to **Own** my services by adding automatic health checks and alerting for eviction spikes, ensuring we stay ahead of future regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
