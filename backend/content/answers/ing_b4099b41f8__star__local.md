---
qid: ing_b4099b41f8__star__local
question: 'Explain: Timed Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 311
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:59-05:00'
sources: []
---

**Situation**  
In my last role I was refactoring the recommendation engine that served personalized content to 2 million daily users. The system used a Guava `Cache` to store pre‑computed feature vectors, but we noticed the cache hit ratio drop from 92% to 68% after a big data update because stale entries were still being served.

**Task**  
I needed to implement a robust eviction policy that would automatically purge outdated feature vectors while keeping the most relevant data in memory, without impacting latency or increasing GC pressure.

**Action**  
I chose Guava’s *Timed Eviction* by configuring `CacheBuilder.newBuilder()
 .maximumSize(500_000)
 .expireAfterWrite(4, TimeUnit.HOURS)` to expire entries 4 hours after they were written. I also added a custom `RemovalListener` that logged evictions for monitoring and triggered a lightweight background refresh for high‑priority keys. To avoid bursts of rebuilds, I used a `ScheduledExecutorService` with a sliding window to spread refreshes over the next hour.

**Result**  
The hit ratio recovered to 91% within two days, latency stayed under 10 ms, and GC pause times dropped by 35%. I learned how timed eviction balances freshness and performance, and that coupling it with selective pre‑refresh can mitigate the “cold start” problem in large caches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
