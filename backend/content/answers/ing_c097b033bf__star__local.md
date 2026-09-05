---
qid: ing_c097b033bf__star__local
question: 'Explain: Removal Listeners — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 330
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:35-05:00'
sources: []
---

**Situation**  
In a micro‑service that processed real‑time analytics for an e‑commerce platform, we stored user session data in a Guava cache to avoid hitting the database on every request. After a few weeks of traffic spikes, the JVM heap started filling up and our GC pause times grew from 5 ms to over 50 ms during peak hours.

**Task**  
I needed to reduce memory usage without sacrificing hit‑rate performance, while still persisting important session data for later recovery.

**Action**  
I configured a `CacheBuilder` with a maximum size of 200 000 entries and added a custom `RemovalListener`. Inside the listener I checked the `RemovalCause`; if the cause was `EXPLICIT`, `SIZE`, or `WEIGHT`, I wrote the evicted entry to a Redis stream for later replay. For entries removed due to expiration, I logged them for audit purposes. I also tuned the eviction policy to LRU and enabled statistics collection so we could monitor hit‑rate in real time.

**Result**  
The JVM heap shrank by ~35 %, GC pause times dropped below 10 ms even during traffic peaks, and our cache hit‑rate stayed above 95 %. The Redis stream provided a reliable fallback for session recovery, eliminating data loss. I learned that fine‑grained removal listeners can turn cache evictions into useful side‑effects rather than silent data loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
