---
qid: ing_909c08412d__fp__local
question: 'Explain: Least Frequently Used (LFU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 383
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:12:35-05:00'
sources: []
---

**Least‑Frequently‑Used (LFU): a principled cache eviction rule**

A cache is a memory buffer that stores a subset of data items so that future requests can be answered quickly. When the cache fills, we must evict an item to make room for a new one. The *fundamental problem* is: “Which item’s removal will minimize expected future miss cost?”  

Assume each request chooses an item independently according to some stationary distribution \(p_i\). If an item has been requested \(f_i\) times, the probability that it will be needed again in the next step is roughly proportional to \(p_i\). The **expected miss penalty** of evicting item \(i\) equals the cost of fetching it on a future request. Since this cost grows with how often we *expect* to need \(i\), the optimal policy is to keep items that have been requested most frequently and drop those with the lowest access frequency.  

Mathematically, LFU implements a greedy solution to minimizing \(\sum_i p_i\,C_i\) where \(C_i\) is the cost of evicting item \(i\). The rule follows directly from *information‑theoretic* optimality: items that provide the most “predictive power” (high frequency) should be retained.  

**Non‑obvious insight:** LFU implicitly assumes a *stationary* access pattern; if workloads shift rapidly, the cache may lock into stale frequencies, causing thrashing. A practical remedy is to apply an exponential decay to counts or maintain a sliding window, thereby letting LFU adapt to non‑stationary traffic while preserving its optimality under the stationary assumption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
