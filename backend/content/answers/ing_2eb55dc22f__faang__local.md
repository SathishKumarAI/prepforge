---
qid: ing_2eb55dc22f__faang__local
question: 'Explain: Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 613
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:32:01-05:00'
sources: []
---

**Eviction in Guava Caching – A Quick Guide**

---

### 1️⃣ Clarify  
*Question:* How does Guava’s cache evict entries, and what are the key strategies available?  
*Assumptions to confirm:*  
- The cache is an instance of `Cache<K,V>` or `LoadingCache`.  
- We’re interested in automatic removal (not manual `invalidate`).  

---

### 2️⃣ Approach  
1. Identify the eviction policy exposed by Guava (`maximumSize`, `expireAfterWrite/Read`, `refreshAfterWrite`, and custom `RemovalListener`).  
2. Explain how each policy works internally: size‑based LRU, time‑based expiration, refresh logic.  
3. Highlight trade‑offs (throughput vs. memory).  

---

### 3️⃣ Depth  
- **Size‑Based (`maximumSize(n)`):** Keeps at most *n* entries. Internally uses a concurrent LRU‑style linked list; when adding the *(n+1)*st entry, the least recently used element is evicted to maintain size. Complexity: O(1) amortized per put/get.  
- **Time‑Based (`expireAfterWrite(t)` / `expireAfterAccess(t)`):** Each entry stores a timestamp of last write or access. A background maintenance thread checks and removes entries older than *t*. Eviction is lazy; reads/writes trigger expiration checks. Complexity: O(1) per operation, but periodic clean‑up may add latency.  
- **Refresh (`refreshAfterWrite(t)`):** Similar to expire, but instead of removal it triggers a reload via the `CacheLoader`. Useful for stale‑but‑useful data.  
- **RemovalListener:** Callback invoked on any eviction (size, time, manual). Allows logging or resource cleanup.

---

### 4️⃣ Edge Cases  
- *Concurrent writes*: Guava’s internal segments prevent contention; still watch for race conditions when custom `RemovalListener` performs expensive work.  
- *Large cache with short TTL*: Frequent clean‑up may dominate CPU.  
- *Clock skew*: Time‑based eviction assumes monotonic clock; use `System.nanoTime()` internally.

---

### 5️⃣ Optimize & Communicate  
- For read‑heavy workloads, prefer size‑based LRU to keep hot data in memory.  
- If data can tolerate staleness but must be refreshed regularly, combine `expireAfterWrite` with a background refresh strategy.  
- Always benchmark eviction overhead; Guava’s default scheduler runs every few seconds, adjustable via `RemovalListener`.  

> **TL;DR:** Guava offers flexible eviction—size‑based LRU, time‑based expiration, and refresh—with O(1) operations and hooks for custom cleanup. Pick the policy that best balances memory usage against data freshness in your use case.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
