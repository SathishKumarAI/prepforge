---
qid: ing_b0ca831d7a__fp__local
question: 'Explain: Refresh — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 505
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:20:11-05:00'
sources: []
---

### Why a *refresh* is needed in a cache

When an application keeps data in memory for speed, that data can become stale.  
A naïve approach is **eviction**: drop the old entry and let the next read load fresh
data from the source.  Eviction forces a blocking read on every miss, which hurts latency.

The *refresh* strategy solves this by keeping the cached value until it’s explicitly
re‑loaded, but doing so **asynchronously** so that readers are never blocked.  
Mathematically, we’re trading off two costs:

| Cost | Traditional eviction | Refresh |
|------|-----------------------|---------|
| Read latency | \(O(1) + \text{source delay}\) (on miss) | \(O(1)\) (always hits) |
| Write‑back / reload cost | 0 until next hit | incurred in background |

The cache now behaves like a *stale‑but‑fast* system, with the stale window bounded
by the refresh interval. This is an instance of **optimistic concurrency control**:
assume data is still valid; only when we suspect it’s old do we fetch anew.

### How Guava implements it

```java
CacheBuilder.newBuilder()
    .refreshAfterWrite(Duration.ofMinutes(5))
    .build(new CacheLoader<>() {
        @Override public Value load(Key k) { return source.read(k); }
        @Override public ListenableFuture<Value> reload(Key k, Value old)
            throws IOException { return asyncReload(k); }
    });
```

* `refreshAfterWrite` sets the *stale threshold*.  
* On a hit after this period, Guava starts `reload(...)` in a separate thread
  and immediately returns the **old** value.  
* Once the new value arrives, it replaces the old one atomically.

### Non‑obvious insight

Many people think refresh is just “another cache miss”.  
In reality, it’s an *implicit read–write lockless update*: the old value is still
usable while the fresh one is fetched, so the system never stalls.  
This subtle concurrency pattern is what lets Guava provide high throughput in
high‑traffic services without sacrificing data freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
