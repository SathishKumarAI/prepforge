---
qid: ing_cbbe8ee4a6__faang__local
question: When Does Cleanup Happen? — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 742
total_tokens: 992
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:32:54-05:00'
sources: []
---

**Clarify**

We’re asked *when* Guava’s `Cache` (the implementation behind `CachesExplained`) performs cleanup—i.e., evicts entries, runs expiration logic, or clears the backing map.  
Assumptions to confirm:  
- We’re dealing with `com.google.common.cache.CacheBuilder`/`LoadingCache`.  
- “Cleanup” means *any* internal maintenance that removes stale or oversized entries.  
- The cache is used in a multithreaded environment (typical FAANG workloads).  

**Approach**

1. Identify the triggers Guava exposes (`expireAfterWrite`, `expireAfterAccess`, `maximumSize`, `weakKeys/values`).  
2. Map each trigger to its internal scheduler or on‑access logic.  
3. Summarize the cleanup phases: *scheduled executor*, *lazy eviction on access*, and *background maintenance*.  

**Depth**

| Trigger | Cleanup Mechanism | When Happens |
|---------|-------------------|--------------|
| `expireAfterWrite` / `expireAfterAccess` | Each entry records a timestamp; on read/write, the cache checks the current time vs. stored expiry. If expired, it’s evicted immediately (lazy). Additionally, a **ScheduledExecutor** runs every *clean‑up interval* (default 60 s) to sweep all entries in parallel and remove any that slipped through due to contention. | On access *and* periodically on the executor. |
| `maximumSize` | Uses a *size‑based LRU* ring buffer (`LinkedList`) updated on every write. When size exceeds limit, the least‑recently used entry is evicted immediately in the same thread performing the write. No background job needed. | On write (or cache load). |
| `refreshAfterWrite` | A scheduled task per key that triggers a refresh if the key has been idle longer than the refresh period; the old value is replaced only after the new value loads successfully. | On read *and* by a background scheduler that checks each entry’s last‑access time. |
| `removalListener` | Invoked synchronously when an entry is evicted, expired, or manually removed. | Immediately during cleanup. |

All cleanup runs in **background threads** (unless the cache is configured with `recordStats()` which adds extra overhead). The default executor pool size is 1 per JVM; you can override via `CacheBuilder#executor`.  

**Edge Cases**

- **High contention**: Two threads may evict the same entry concurrently; Guava uses CAS to avoid double‑removal.  
- **Clock skew**: If system time changes backward, expired entries might linger until next scheduled sweep.  
- **Large cache with low access rate**: The background sweeper may never run if no access triggers lazy eviction.

**Optimize & Communicate**

To reduce latency spikes, you can:

1. Increase the cleanup interval for low‑traffic caches (configurable via `expireAfterWrite` + custom executor).  
2. Use `maximumSize` instead of `expireAfter*` when size is the primary constraint; it guarantees O(1) eviction on writes.  
3. If predictable latency is critical, pre‑warm the cache or batch cleanup during low‑usage windows.

When explaining this to an interviewer, I’d first restate the question, confirm assumptions, then lay out the table of triggers and mechanisms, highlight concurrency safety, discuss edge cases, and finish with tuning knobs—showing deep understanding and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
