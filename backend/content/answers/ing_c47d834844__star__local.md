---
qid: ing_c47d834844__star__local
question: 'Explain: Inserted Directly — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 344
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:02:50-05:00'
sources: []
---

**Situation**  
At my last role, our product recommendation engine was hitting a 45 % cache miss rate on the user‑profile lookup layer, causing latency to spike from 120 ms to over 350 ms during peak traffic.

**Task**  
I had to redesign the caching strategy so that we could bring the hit rate above 85 % while keeping memory usage under 1.2 GB and ensuring eviction policies didn’t discard hot data prematurely.

**Action**  
I chose Guava’s `CacheBuilder` because of its fine‑grained control over size, expiration, and removal listeners. I implemented a composite cache:  
- A *short‑lived* LRU cache (`maximumSize(500_000)` with `expireAfterAccess(10m)`) for profile objects that change often.  
- An *expiring* cache (`expireAfterWrite(30m)`) for derived recommendation vectors, keyed by a combination of user ID and context hash.  
I added a custom `RemovalListener` to log evictions for audit and automatically trigger background refreshes via a thread‑pool executor. I also wrapped the cache in a read‑through layer that fetched from Redis on miss and populated both caches asynchronously.

**Result**  
After deployment, hit rates jumped to 88 %, latency dropped to an average of 140 ms under load, and memory stayed within limits. The exercise taught me how Guava’s eviction policies can be tuned for hybrid workloads and the importance of coupling cache logic with background refresh pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
