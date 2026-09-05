---
qid: ing_909c08412d__star__local
question: 'Explain: Least Frequently Used (LFU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 310
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:56-05:00'
sources: []
---

**Situation:**  
While working on the recommendation engine for a streaming platform, we hit a bottleneck: our in‑memory feature store was thrashing because the eviction strategy was still LRU, and rarely accessed content kept getting evicted even though it had high predictive value.

**Task:**  
Redesign the cache to prioritize items that were genuinely useful for training, not just recently used. The goal was to reduce miss rates by at least 20% while keeping memory usage below 512 MB.

**Action:**  
I implemented an LFU eviction policy in Go, using a min‑heap of frequency counts combined with a hash map for O(1) lookup. Each access incremented the item’s counter; when the cache reached capacity I popped the lowest‑frequency node from the heap. To avoid stale frequencies, I added periodic decay (halving counts every hour). The system logged hit/miss ratios per user segment so we could tune the decay factor.

**Result:**  
Within two weeks of deployment, the miss rate dropped from 18% to 12%, a 33 % improvement, and the cache held 30% more high‑value items. I learned that LFU’s focus on usage frequency aligns better with machine‑learning workloads than LRU, but requires careful decay handling to prevent “frequency saturation.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
