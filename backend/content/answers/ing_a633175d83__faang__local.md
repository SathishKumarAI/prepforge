---
qid: ing_a633175d83__faang__local
question: 'Explain: Uh oh! — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 566
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:11:32-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise, interview‑style walk‑through of how Google’s Guava `Cache` works—its purpose, core API, and typical usage patterns. I’ll assume the audience knows Java basics but may not be familiar with caching concepts or Guava itself.

**Approach**  
1. Define *what* a cache is in this context.  
2. Highlight Guava’s `CacheBuilder` API and its main knobs (size, expiration, concurrency).  
3. Explain how data is stored/retrieved (`getIfPresent`, `get(K, Callable)`).  
4. Touch on eviction policies and background refresh.  
5. Wrap up with a quick code snippet.

**Depth**  
Guava’s `Cache` is an in‑memory, thread‑safe key–value store that automatically evicts entries to keep memory bounded.  

```java
LoadingCache<String, User> cache = CacheBuilder.newBuilder()
    .maximumSize(10_000)                 // LRU eviction
    .expireAfterAccess(60, TimeUnit.MINUTES)
    .refreshAfterWrite(5, TimeUnit.MINUTES)
    .build(new CacheLoader<>() {
        public User load(String id) throws Exception { return fetchFromDb(id); }
    });
```

* `maximumSize` + LRU: when exceeded, the least‑recently‑used entries are evicted.  
* `expireAfterAccess`/`write`: entries become stale after the specified duration.  
* `refreshAfterWrite` triggers asynchronous reloads while still serving stale data until the refresh completes.  

Retrieval is cheap (`getIfPresent`) or automatically loads on miss via the `CacheLoader`. The API supports bulk operations and statistics (`stats()`).

**Edge Cases**  
- **Memory pressure**: If size isn’t bounded, a cache can OOM.  
- **Stale data race**: Refreshing may return outdated values if external sources change faster than `refreshAfterWrite`.  
- **Concurrent writes**: Guava handles this via internal segment locking; heavy write contention can degrade performance.

**Optimize & Communicate**  
To improve, tune size and expiration based on real workload metrics, enable `recordStats()` for fine‑grained telemetry, and consider `CacheLoader`’s `reload(K, V)` for non‑blocking refreshes. In an interview, I’d finish by noting that Guava’s cache is great for read‑heavy scenarios where data can be recomputed or fetched lazily, but it’s not a substitute for distributed caching when scaling beyond JVM boundaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
