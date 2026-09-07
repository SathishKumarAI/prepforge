---
qid: ing_b4099b41f8__faang__local
question: 'Explain: Timed Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 472
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:36-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Timed Eviction* in the Guava cache (used by Google). The core idea: a cached entry is automatically removed after a fixed duration from its last access or write. I’d confirm whether we mean *expire‑after‑write*, *expire‑after‑access*, or both, and what “time” unit is used.

**Approach**  
1. Outline the Guava `CacheBuilder` API that enables timed eviction (`expireAfterWrite`, `expireAfterAccess`).  
2. Describe how the cache records timestamps on each operation.  
3. Explain the internal scheduler/eviction policy that checks these timestamps and purges stale entries lazily or eagerly.

**Depth**  
Guava’s cache keeps a *write timestamp* and an optional *access timestamp* per entry.  
- `expireAfterWrite(d)` → after `d` time units from the most recent write, the entry becomes eligible for eviction.  
- `expireAfterAccess(d)` → after `d` time units since the last read or write, it expires.  

The cache does not run a background thread; instead, on every access or periodic maintenance (`ticker.poll()`), it scans a *time‑ordered* queue (a priority heap) to remove expired entries. Complexity: eviction checks are O(log n) per removal, but amortized over many accesses the overhead is small. Memory overhead is linear in the number of cached items.

**Edge Cases**  
- Clock skew or `Ticker` mis‑updates can delay eviction.  
- Very long cache lifetimes may cause a large queue that degrades performance.  
- Combining both policies requires careful ordering to avoid premature removal.

**Optimize & Communicate**  
For high‑throughput systems, one might switch to *segment‑based* time windows or use a background cleaner thread for strict latency guarantees. I’d explain the trade‑off: lazy eviction saves CPU but can temporarily hold stale data; eager eviction uses more resources but ensures tighter consistency. In an interview, I’d conclude by summarizing how Guava’s design balances these concerns and why it suits most in‑memory caching scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
