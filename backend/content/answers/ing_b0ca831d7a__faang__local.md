---
qid: ing_b0ca831d7a__faang__local
question: 'Explain: Refresh — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 677
total_tokens: 924
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:34:15-05:00'
sources: []
---

**1️⃣ Clarify**  
You want a concise, interview‑ready explanation of how Guava’s *Refresh* mechanism works for cache entries (the `CacheLoader`/`LoadingCache` API).  
Assumptions:  
- The audience knows basic caching concepts.  
- They’re interested in when/why to use “refresh” versus “eviction.”  

**2️⃣ Approach**  
Describe the lifecycle: loading → refreshing → eviction, then show the key methods (`reload`, `refreshAfterWrite`, etc.), and finish with a quick code sketch.

**3️⃣ Depth**  
Guava’s `LoadingCache` can be configured with `refreshAfterWrite(Duration)`. When an entry is older than that duration, a *background* refresh occurs:  

1. The cache still serves the stale value immediately.  
2. `CacheLoader.reload(key, oldValue)` (or just `load(key)` if `reload` isn’t overridden) runs asynchronously on a thread‑pool.  
3. When the new value arrives, it replaces the old one *without* blocking readers.  

Benefits:  
- **Low latency** for reads – never block on I/O.  
- **Freshness** – stale window is bounded by `refreshAfterWrite`.  
- **Back‑pressure safe** – Guava caps concurrent reloads to avoid flooding the loader.

Complexities:  
- Requires a thread pool (`ExecutorService`), defaulting to a cached one.  
- If `reload` throws, the old value stays; errors are logged but don’t crash the cache.  
- Cache size remains unchanged; only values update.  

**4️⃣ Edge Cases**  
| Case | What breaks / test |
|------|--------------------|
| Loader throws on refresh | Old value persists – ensure fallback logic in app |
| Refresh takes long | Multiple concurrent reloads for same key can occur if `reload` is slow and `refreshAfterWrite` is short – guard with `maxConcurrentReloads`. |
| High churn keys | Too many refreshes → thread‑pool exhaustion; test load under burst. |

**5️⃣ Optimize & Communicate**  
- Prefer `CacheBuilder.newBuilder().refreshAfterWrite(10, TimeUnit.MINUTES)` for read‑heavy workloads where 10 min stale is acceptable.  
- If freshness is critical, use `expireAfterWrite` instead of refresh.  
- Explain trade‑off: *refresh* keeps size constant but can lag behind the source; *eviction* drops data entirely.

**Quick code example**

```java
LoadingCache<String, String> cache = CacheBuilder.newBuilder()
    .maximumSize(10_000)
    .refreshAfterWrite(Duration.ofMinutes(5))
    .build(new CacheLoader<>() {
        @Override public String load(String key) throws Exception {
            return fetchFromDb(key);          // blocking I/O
        }
        @Override public ListenableFuture<String> reload(String key, String oldValue) {
            return Futures.submit(() -> fetchFromDb(key), executor);
        }
    });
```

This succinctly captures the mechanics, trade‑offs, and practical usage of Guava’s *Refresh* feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
