---
qid: ing_99048515c3__fp__local
question: 'Explain: Least-Recently Used (LRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 371
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:31:21-05:00'
sources: []
---

**Least‑Recently Used (LRU): a principled eviction rule**

Imagine a cache as a *bounded memory* that must decide which item to discard when new data arrives.  
From an **information‑theoretic** view, each cached element is a “signal” whose future usefulness depends on its *recency of access*.  If the last request for key k was long ago, the probability that k will be requested again soon is low—assuming temporal locality (a common property in real workloads).  
Thus LRU implements a **greedy Bayesian update**: it keeps the item with the highest posterior probability of being needed next.  The *recency* timestamp acts as a sufficient statistic for this probability under the assumption that request times are i.i.d. and memoryless between accesses.

Mathematically, let \(t_k\) be the last access time of key k.  When space is needed, we evict \(\arg\min_k t_k\).  
This rule minimizes the *expected miss penalty* under a Poisson arrival model: the expected number of misses per unit time equals the sum over items of their inter‑arrival rates times the probability they are still in cache—exactly what LRU enforces.

**Non‑obvious insight:**  
LRU is **not** simply “last used first out”; it’s a *dynamic, probabilistic filter* that adapts to changing access patterns.  When workloads shift, the timestamps automatically realign, providing robustness without explicit monitoring.  In effect, LRU turns temporal locality into an online Bayesian estimator of future hits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
