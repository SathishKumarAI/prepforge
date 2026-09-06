---
qid: ing_a633175d83__think__local
question: 'Explain: Uh oh! — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 326
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:02:40-05:00'
sources: []
---

**Answer**

The “Uh oh!” section on the *Caches Explained* page of the Google Guava wiki is a quick‑fire guide to common pitfalls and best practices when using Guava’s caching utilities (primarily `Cache` and `LoadingCache`). It warns that:

1. **Eviction policies matter** – If you don’t set an appropriate maximum size or expiration, the cache can grow unbounded and cause memory pressure.
2. **Thread‑safety is built‑in but not a silver bullet** – Concurrency guarantees are provided, but you still need to design your cache usage so that expensive computations aren’t duplicated unnecessarily.
3. **Cache misses can be costly** – A miss triggers the loader; if the loader itself performs heavy I/O or CPU work, the latency is paid on every thread that experiences a miss.
4. **Strong references keep objects alive** – By default Guava holds strong keys and values, so cached objects stay in memory until evicted. If you need weak/soft references, configure them explicitly.
5. **Eviction callbacks run asynchronously** – `RemovalListener` runs on the same thread that caused eviction; long‑running listeners can block cache operations.

In short, the “Uh oh!” page reminds developers to size, time, and reference‑manage their caches correctly so they don’t become hidden memory leaks or performance bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
