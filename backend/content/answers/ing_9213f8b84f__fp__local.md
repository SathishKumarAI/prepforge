---
qid: ing_9213f8b84f__fp__local
question: 'Explain: Population — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 474
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:16:04-05:00'
sources: []
---

**Guava’s “Caches Explained” – Population**

At its core, a cache solves *the mismatch between access speed and storage cost*.  
A CPU‑level store can return an item in nanoseconds but is limited to a few megabytes; a disk can hold gigabytes but incurs milliseconds of latency. A cache sits in the middle: it keeps a **population** of “hot” entries—those that have been requested recently or are expected to be requested soon—and evicts others when space runs out.

Guava implements this by letting you **populate** a `Cache` through one of three mechanisms:

| Mechanism | How it works | When to use |
|-----------|--------------|-------------|
| **Explicit put/get** | The user calls `cache.put(key, value)` or `cache.getIfPresent(key)`. | Simple, deterministic workloads. |
| **Loading cache** (`CacheBuilder.newBuilder().build(new CacheLoader<>() )`) | On a miss, Guava automatically calls the supplied `load(K)` method to compute and insert the entry. | When values are expensive to produce but can be recomputed on demand. |
| **Automatic population via `refreshAfterWrite` or `expireAfterAccess`** | Guava periodically refreshes or discards entries based on time‑based policies, keeping the cache “warm” without explicit intervention. | Time‑sensitive data that drifts (e.g., API responses). |

The *population* is governed by two orthogonal principles:

1. **Size‑based eviction** – The cache has a maximum size; when exceeded, Guava removes entries according to an LRU or custom policy.  
2. **Time‑based invalidation** – Entries expire after a fixed duration of inactivity (`expireAfterAccess`) or age (`expireAfterWrite`), ensuring stale data is purged.

A subtle but powerful insight: *Guava’s `CacheLoader` can return a `Future<V>`*, enabling asynchronous loading. This allows the cache to serve concurrent requests for the same key with only one load operation, dramatically reducing contention in high‑throughput scenarios—a feature many overlook when configuring caches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
