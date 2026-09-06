---
qid: ing_9a66677454__fp__local
question: 'Explain: Testing Timed Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 438
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:34:11-05:00'
sources: []
---

**Why a cache should evict after a set time**

A cache is meant to keep the *most useful* data while discarding stale entries.  
If an entry lives too long, it risks becoming out‑of‑date; if it expires too soon,
the cost of recomputation outweighs the benefit of caching.  
The optimal policy must therefore balance **recency** (how recently a key was
accessed) with **validity duration** (how long its value remains correct).

In Guava’s `CacheBuilder`, *time‑based eviction* is expressed as:

```java
Cache<String, V> cache = CacheBuilder.newBuilder()
    .expireAfterWrite(10, TimeUnit.MINUTES)
    .build();
```

The builder does not merely store a timestamp; it **associates a lease** with each entry.  
When `getIfPresent(key)` is called, the cache checks whether the current time
exceeds *write‑time + lease*. If so, the entry is removed *before* it can be returned.
This guarantees that any value retrieved has been recomputed at most once every
ten minutes—exactly what the principle of *freshness per unit cost* demands.

**Testing this behaviour**

A robust test must:

1. **Inject a controllable clock** (e.g., `FakeTicker`) so time can be advanced
   deterministically.
2. **Write an entry**, advance less than the lease, and assert it is present.
3. **Advance past the lease**, invoke any cache operation that triggers eviction
   (usually another `getIfPresent`), and confirm the entry has vanished.

The subtle insight many overlook: *the eviction must be triggered by a cache access or cleanup*, not by a background thread. Guava’s design ensures that even if no reads occur, stale entries are purged on subsequent accesses—an elegant coupling of **lazy evaluation** with **time‑based guarantees**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
