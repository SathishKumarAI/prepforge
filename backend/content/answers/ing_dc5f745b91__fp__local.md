---
qid: ing_dc5f745b91__fp__local
question: 'Explain: SLRU (Segmented LRU) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 469
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:47:42-05:00'
sources: []
---

**SLRU – Segmented Least‑Recently‑Used**

*Fundamental problem:* a cache must decide which item to evict when it is full. In many workloads (e.g., web servers) some objects are “hot” for only a short burst; the goal is to keep those bursts in cache while discarding long‑term stale items.

**Why segmentation?**  
LRU alone treats all accesses uniformly, so a single long‑running request can push out a very hot object that just had a brief spike. SLRU partitions the cache into two segments:

1. **Protected segment (P)** – holds objects that have survived at least one “promotion” cycle.
2. **Probationary segment (Q)** – newly inserted or recently demoted objects.

When an item in Q is accessed, it is promoted to P; when an item in P is evicted, it is demoted to Q. Thus a single hit can keep an object alive for *two* eviction cycles, giving it a higher chance of staying if the access pattern truly has bursts.

**Deeper principle – *aging with two‑step decay***  
SLRU implements a discrete approximation of exponential decay: each segment represents a time bucket. The probability that an item survives is roughly proportional to how many times it was accessed in consecutive buckets, which aligns with the *principle of least recently used* but with a controlled “memory” length. This reduces sensitivity to single outliers and improves hit rates on workloads with skewed access patterns.

**Non‑obvious insight:**  
The demotion from P to Q is not just a fallback; it acts as a *self‑correcting filter*. If an object was promoted but never accessed again, it will eventually be evicted from Q. Thus SLRU automatically adapts the effective cache size for each hotness level without any global tuning.

*SLRU sits among the top eight eviction strategies (e.g., LRU, LFU, FIFO, ARC, CLOCK, etc.) because its two‑segment design balances simplicity, low overhead, and strong empirical performance on bursty workloads.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
