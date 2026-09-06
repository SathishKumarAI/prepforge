---
qid: ing_996c2ed8d8__fp__local
question: 'Explain: LFU (Least Frequently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 655
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:32:10-05:00'
sources: []
---

### Least‑Frequently‑Used (LFU)

**Problem to solve:**  
When a cache is full we must pick one entry to evict so that future accesses hit as often as possible. The core intuition is *“keep what people use most.”* LFU formalises this by maintaining, for every cached key \(k\), a counter
\[
c_k \;=\;\text{# of times } k \text{ has been requested since it entered the cache}.
\]
When eviction is required we choose the key with the smallest \(c_k\).  
Mathematically, LFU implements a **frequency‑based priority queue** over keys. The counter updates are O(1) per access; evictions require finding the minimum counter, which can be kept in a min‑heap or bucketed structure for amortised efficiency.

**Why it works:**  
From an information‑theoretic viewpoint, the counter estimates the *expected future request probability* of each key. By removing the least probable item we minimise the expected miss cost under a stationary request process (a consequence of the **optimality of the “minimum‑cost” policy for independent requests**). LFU thus converges to the optimal static cache configuration when access frequencies are stable.

**Non‑obvious insight:**  
LFU is *not* equivalent to LRU. In workloads with *burstiness*, a key that was popular long ago but not recently may still have a high counter and survive an eviction, while a newer key with many recent accesses (but low total count) might be evicted. This bias can be advantageous in highly skewed traffic where “long‑term popularity” matters more than recency.

---

### Top 8 Cache Eviction Strategies

| Rank | Strategy | Core Idea |
|------|----------|-----------|
| 1 | **LRU (Least Recently Used)** | Evict the entry whose last access time is oldest. |
| 2 | **LFU (Least Frequently Used)** | Evict the entry with the smallest hit counter. |
| 3 | **ARC (Adaptive Replacement Cache)** | Dynamically balances between LRU and LFU using two lists (recent & frequent). |
| 4 | **LRFU (Hybrid of LRU/LFU)** | Uses a decaying weight combining recency and frequency. |
| 5 | **Clock / Second‑Chance** | Approximate LRU with a circular buffer and reference bits. |
| 6 | **Random Replacement** | Pick any entry uniformly at random (simple, useful when access patterns are unknown). |
| 7 | **FIFO (First In First Out)** | Evict the oldest inserted entry regardless of usage. |
| 8 | **GDSF (Greedy Dual Size Frequency)** | Weighs cost/benefit by size and frequency: \(\theta = \frac{c + F}{S}\). |

*All eight strategies trade off implementation complexity, sensitivity to workload dynamics, and cache hit‑rate performance.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
