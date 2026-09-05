---
qid: ing_3ce0f3ac3d__star__local
question: 'Explain: LRU (Least Recently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 388
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:55-05:00'
sources: []
---

**Situation** – I was leading the optimization of a real‑time recommendation engine for an e‑commerce platform. Our model served over 10 M requests per day and we had to keep the top 5000 user embeddings in memory to avoid recomputing them on every hit.

**Task** – Reduce latency while staying within a 512 MB RAM budget. I needed to choose an eviction policy that would keep the most useful items alive, with minimal overhead during inference.

**Action** – I benchmarked eight cache strategies: LRU, LFU, FIFO, ARC, Random, Clock, Segmented LRU (SLRU), and a hybrid “LRU‑LFU” mix. Using Redis 7 with Lua scripting, I instrumented hit/miss rates and memory usage for each policy on a synthetic workload mimicking real traffic. LRU was straightforward to implement via the `maxmemory-policy allkeys-lru` flag, while ARC required a custom module. I also added a small “hot‑spot” prefetcher that warmed the cache during low‑traffic windows.

**Result** – LRU outperformed the others with a 12 % higher hit rate and only a 2 ms increase in latency compared to FIFO. The hybrid LRU‑LFU improved cold‑start performance by 18 %. We slashed inference time from 45 ms to 32 ms per request, freeing up resources for new feature experiments. I learned that while LRU is often the default choice, profiling under realistic workloads can reveal a better fit—ARC or hybrid strategies may be worth the extra complexity when traffic patterns shift dramatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
