---
qid: ing_cbbe8ee4a6__star__local
question: When Does Cleanup Happen? — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 352
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:09-05:00'
sources: []
---

**Situation:**  
In a micro‑service that aggregates real‑time telemetry for our SaaS platform, the JVM heap was ballooning to 3 GB after just one week of traffic spikes. We were using Guava’s `CacheBuilder` with an LRU eviction policy, but the cache never released memory even when entries became stale.

**Task:**  
I had to implement a deterministic cleanup strategy so that the cache would free up memory proactively without affecting latency or data consistency.

**Action:**  
1. Added `expireAfterAccess(30, TimeUnit.MINUTES)` and `maximumSize(200_000)` to the builder to enforce time‑based eviction.  
2. Implemented a custom `RemovalListener` that logged each removal event; this helped us confirm when items were purged.  
3. Scheduled a periodic `Cache#cleanUp()` call via a single‑threaded executor, running every 5 minutes.  
4. Monitored the cache’s `stats()` to verify hit/miss ratios and adjusted the expiry threshold until we hit a 92% hit rate with heap usage staying under 1 GB.

**Result:**  
The service’s memory footprint dropped from 3 GB to 950 MB, and CPU overhead for GC fell by ~40%. We also reduced latency jitter during traffic bursts. The exercise taught me that in Guava, combining size‑based limits, time‑based eviction, a removal listener, and periodic `cleanUp()` is the most robust way to keep caches lean and predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
