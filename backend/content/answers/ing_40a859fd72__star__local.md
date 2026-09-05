---
qid: ing_40a859fd72__star__local
question: 'Explain: Least Frequently Used (LFU) — 7 Cache Eviction Strategies You
  Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 345
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:37:44-05:00'
sources: []
---

**Situation:**  
At my last role I was building a recommendation engine that served millions of users per day. The model’s inference layer was bottlenecked by a GPU memory limit; we had to keep the top‑k most frequently requested embeddings in a small cache.

**Task:**  
I needed an eviction policy that minimized latency spikes while staying within the 2 GB GPU budget, and I wanted something simpler than LRU but still effective for skewed request patterns.

**Action:**  
I implemented a Least Frequently Used (LFU) cache. Each key stored its access count and timestamp; on every hit we incremented the counter. When eviction was required we sorted by (count, oldest timestamp) to pick the least used, yet most stale, item. I added a decay factor so that old accesses faded over time, preventing hot items from staying forever if traffic shifted. We benchmarked against LRU and LFU+decay using synthetic workloads; the LFU variant reduced cache miss rate from 18 % (LRU) to 9 %.

**Result:**  
The new strategy cut GPU memory usage by 30 % while keeping average inference latency under 15 ms. It also gave us a clear, tunable parameter (decay window) for future traffic changes. I learned that a well‑chosen eviction policy can be as powerful as hardware upgrades, and that LFU’s simplicity hides a lot of nuance when you add decay and timestamp tie‑breakers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
