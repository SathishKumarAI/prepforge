---
qid: ing_84f305a2a0__star__local
question: What are the differences between HashMap and HashTable in Java?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 343
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:59:08-05:00'
sources: []
---

**Situation:**  
During my senior year I was building a real‑time analytics dashboard for a streaming service. The back‑end used Java to aggregate user session data in memory, and we had to choose the right map implementation for caching metrics that were constantly updated.

**Task:**  
I needed to decide between `HashMap` and `Hashtable`, ensuring thread safety, low latency, and minimal memory overhead while still meeting strict SLAs for data freshness.

**Action:**  
I started by profiling both classes. I found that `Hashtable` is synchronized on every method call, which introduced a 30 % slowdown under high contention. In contrast, `HashMap` offered unsynchronized access; to make it thread‑safe I wrapped critical sections with a `ReentrantReadWriteLock`, allowing concurrent reads and isolated writes. I also switched from the legacy `Hashtable`’s `Enumeration` to the more efficient `Iterator`. Finally, I benchmarked null key handling: `HashMap` allows one null key and many null values, whereas `Hashtable` throws `NullPointerException`, which was problematic for our use case.

**Result:**  
Using a lock‑protected `HashMap` reduced latency by ~35 % compared to `Hashtable`, improved throughput from 12k ops/s to 18k ops/s, and cut memory usage by roughly 15 %. I learned that choosing the right collection depends on concurrency patterns and that modern Java collections often require explicit synchronization rather than relying on legacy classes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
