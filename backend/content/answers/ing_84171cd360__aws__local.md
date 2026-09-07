---
qid: ing_84171cd360__aws__local
question: 'Explain: Explicit Removals — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 502
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:46-05:00'
sources: []
---

**Context / Situation**  
While building a high‑throughput recommendation engine for an e‑commerce site, we used **Guava’s `CacheBuilder`** to store user session data. After 6 months of production traffic (≈1 M requests/sec), the cache hit rate dropped from 95 % to 72 %, causing latency spikes and increased database load.

**Task**  
Identify a root cause, design a mitigation that keeps cost low (< $0.02/GB‑month) while improving stability, and demonstrate measurable impact.

**Action**  
1. **Dive Deep into Guava’s cache eviction policy** – the default `maximumSize` uses *least‑recently‑used* (LRU), but we also had a custom *explicit removal* callback that cleared entries when a user logged out or exceeded quota.  
2. **Implemented explicit removals correctly**:  
   ```java
   Cache<String, UserSession> sessionCache = CacheBuilder.newBuilder()
       .maximumSize(5_000_000)
       .removalListener(notification -> {
           if (notification.getCause() == RemovalCause.EXPLICIT) {
               // clean up external resources
               sessionStore.delete(notification.getKey());
           }
       })
       .build();
   ```
3. **Added a periodic cleanup job** that scans for stale entries (> 30 days inactivity) and removes them via `cache.invalidate(key)` (explicit removal).  
4. **Monitored metrics** with CloudWatch: hit rate, eviction count, latency.

**Result**  
- Hit rate recovered to 94 % within 48 hrs.  
- Latency dropped from 350 ms to 120 ms (average).  
- Database queries decreased by 68 %, saving ~\$1.5k/month on read replicas.  

**Leadership Principles Reflected**  
- **Customer Obsession** – ensured users experienced fast, reliable service.  
- **Ownership & Dive Deep** – identified subtle cache mis‑configurations and corrected them with measurable improvement.  

**Bar‑raiser takeaway**  
A strong candidate will show ownership by diagnosing hidden pitfalls (explicit vs automatic eviction), quantify the impact of a seemingly small code change, and demonstrate learning from an initial failure (cache thrashing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
