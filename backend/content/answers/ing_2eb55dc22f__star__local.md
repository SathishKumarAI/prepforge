---
qid: ing_2eb55dc22f__star__local
question: 'Explain: Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 331
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:01:44-05:00'
sources: []
---

**Situation**  
At my previous company we built a recommendation engine that queried user profiles from a database and served results in real‑time. The latency kept creeping above our SLA of 120 ms because the same profile data was being fetched repeatedly for users who interacted with multiple items per session.

**Task**  
I needed to design a caching layer that would keep hot user profiles in memory, automatically evict stale entries, and still respect a 4‑GB RAM limit while keeping hit rates above 95%.

**Action**  
I chose Guava’s `CacheBuilder` because it supports time‑based eviction (`expireAfterWrite`) and size‑based eviction (`maximumSize`). I built a composite key of user ID + profile version to avoid stale data, added an `RemovalListener` to log evictions for monitoring, and wrapped the cache in a `LoadingCache` so that missing entries were fetched asynchronously from the DB. I tuned the expiration to 30 minutes after last write and set `maximumSize` to 500 000 entries based on profiling.

**Result**  
The cache hit rate jumped from 60 % to 96 %, cutting average latency to 45 ms and reducing database load by ~70 %. The eviction strategy also prevented memory over‑commitment, keeping the JVM heap stable. I learned that combining time‑and‑size policies with a lightweight monitoring hook can give both performance and operational visibility in high‑traffic services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
