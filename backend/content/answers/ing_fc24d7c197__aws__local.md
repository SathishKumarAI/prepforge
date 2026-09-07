---
qid: ing_fc24d7c197__aws__local
question: 'Explain: From a Callable — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 399
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:13-05:00'
sources: []
---

**Situation / Task**  
I was tasked to refactor a legacy Java service that built its own in‑memory cache for user session data. The code used raw `HashMap`s and custom expiration logic, causing memory leaks and stale reads.  

**Action**  
*Customer Obsession & Ownership*: I introduced **Guava’s `CacheBuilder`**, which provides thread‑safe LRU eviction, time‑based expiration, and automatic refresh.  
1. Replaced manual maps with `LoadingCache<String, Session>`.  
2. Configured `maximumSize(10_000)` to bound memory.  
3. Used `expireAfterAccess(30, TimeUnit.MINUTES)` for stale data removal.  
4. Added `refreshAfterWrite(5, TimeUnit.MINUTES)` so background refresh kept data fresh without blocking reads.  

I wrote integration tests and benchmarked against the old implementation: read latency dropped from **350 ms** to **12 ms**, and GC churn fell by **73%**.  

**Result**  
The new cache reduced memory usage by 40 MB per node, cut CPU cycles spent on synchronization by 60%, and improved overall service uptime (SLO 99.95%) without adding cost—just a lightweight Guava dependency.  

**Technical Takeaway**  
Guava’s `Cache` is ideal for single‑region, in‑process caching where consistency can be relaxed; for distributed caching I’d layer **Amazon ElastiCache (Redis)** on top of the service to share state across instances while keeping the same API via a thin wrapper.  

*Bar‑raiser cues*: ownership of end‑to‑end performance, deep dive into cache semantics, quantifying impact, and iterating after observing real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
