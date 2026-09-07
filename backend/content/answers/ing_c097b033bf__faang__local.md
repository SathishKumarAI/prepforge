---
qid: ing_c097b033bf__faang__local
question: 'Explain: Removal Listeners — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 541
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:09:43-05:00'
sources: []
---

**Clarify**  
You’re asking how Guava’s *RemovalListener* works for `Cache` objects – the callback that fires when an entry is evicted or explicitly removed. I’ll assume you want to know: what it does, how to register one, and typical use cases.

**Approach**  
1. Explain the removal trigger sources (expiry, size eviction, explicit `invalidate`).  
2. Show the interface and its method signature.  
3. Walk through a minimal example of registering a listener on a cache builder.  
4. Discuss thread‑safety, ordering, and potential pitfalls.

**Depth**  
- `RemovalListener<K,V>` has one method:  
  ```java
  void onRemoval(RemovalNotification<K,V> notification);
  ```
  The `RemovalNotification` contains the key, value, and a `RemovalCause` enum (`EXPIRED`, `SIZE`, `EXPLICIT`, `COLLECTED`, `REPLACED`).  
- Listeners run in the thread that performed the removal; they’re *not* guaranteed to be sequential. If you need ordering, use `CacheBuilder.removalListener()` with a single listener or wrap multiple listeners yourself.  
- They are non‑blocking: Guava executes them asynchronously via the cache’s executor if one is configured (`removalListener(...).build()`).  
- Example:
  ```java
  Cache<String,Integer> cache = CacheBuilder.newBuilder()
      .maximumSize(100)
      .expireAfterWrite(10, TimeUnit.MINUTES)
      .removalListener((RemovalNotification<String,Integer> n) ->
          System.out.println(n.getKey()+" removed because "+n.getCause()))
      .build();
  ```
- Common use cases: logging evictions, cleaning up external resources (closing files), or updating a secondary store.

**Edge Cases**  
- Heavy listener logic can block cache operations; offload work to another executor.  
- If the listener throws an exception, Guava swallows it and logs a warning—no crash.  
- Size‑eviction may trigger multiple listeners in quick succession; test concurrency with high contention.

**Optimize & Communicate**  
For production, prefer a single `RemovalListener` that delegates to stateless sub‑listeners or uses a thread pool for long‑running tasks. Clearly document the listener’s contract (non‑blocking, idempotent) so callers know it won’t affect cache performance. This structured explanation shows both how it works and best practices for robust use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
