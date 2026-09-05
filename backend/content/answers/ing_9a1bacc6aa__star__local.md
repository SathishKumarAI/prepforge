---
qid: ing_9a1bacc6aa__star__local
question: 'Explain: Size-based Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 321
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:01-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with improving the performance of a recommendation engine that cached user‑profile embeddings. The cache grew beyond 2 GB, causing JVM heap pressure and frequent garbage collections.

**Task**  
I needed to limit the cache size while still keeping the most frequently accessed embeddings available, ensuring we didn’t hit OOM errors or degrade latency.

**Action**  
I switched from Guava’s default time‑based eviction to a **size‑based eviction policy**. Using `CacheBuilder.newBuilder().maximumSize(1_000_000)`, I set an absolute maximum number of entries (≈ 1 M). Internally, Guava implements this with a least‑recently‑used (LRU) linked list and a counter that tracks the current size; when a new entry pushes the count over the limit, it evicts the eldest entry. I also tuned `concurrencyLevel` to 16 for our multi‑threaded service and added a custom `RemovalListener` to log eviction reasons for later analysis.

**Result**  
The cache stayed under 1 GB, reducing GC pauses by 70 % and improving query latency from 120 ms to 85 ms. I learned that size‑based eviction gives deterministic memory usage while still favoring hot data, and that careful tuning of `maximumSize` and concurrency can balance throughput against memory constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
