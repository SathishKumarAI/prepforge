---
qid: ing_56f6610c83__fp__local
question: 'Explain: Segmented LRU (SLRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 491
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:09:34-05:00'
sources: []
---

**Why a cache needs *segmentation* in the first place**

A cache is an information‑theoretic bottleneck: it stores only a small fraction of all requested data.  
The eviction policy must therefore answer *which of the stored items will most likely be needed again?*  In practice, two contradictory goals arise:

1. **Recency** – recent accesses are usually repeated soon (temporal locality).  
2. **Frequency** – some items are accessed many times over a long interval (long‑term popularity).

A plain Least‑Recently‑Used (LRU) policy optimizes only the first objective; it discards an item that was last used far back, even if that item is a *hot* one with many future hits.  Conversely, a pure frequency counter may keep rarely accessed items because they were hit often in the distant past.

**Segmentation as a principled compromise**

SLRU partitions the cache into two segments:

- **Protection segment (P)**: items that have been accessed twice recently are moved here and remain protected until evicted from P.
- **Probationary segment (Q)**: new or infrequently used items start here; only if they are hit again do they advance to P.

Formally, the policy implements a *two‑state Markov chain* over each cache line.  The transition probabilities are tuned so that the stationary distribution of “hotness” matches the empirical request pattern (a form of *online Bayesian updating*).  Thus SLRU is essentially an adaptive estimator of future access probability based on two short samples: the first hit promotes an item to Q, the second hit (within a bounded window) promotes it to P.  

**Non‑obvious insight**

The key advantage of SLRU is *time‑decay without explicit timestamps*.  By requiring two hits for promotion, the policy implicitly discounts items that were popular only once in the distant past—exactly what a true exponential decay would do—yet it avoids the overhead of maintaining per‑item counters or ages.  In effect, SLRU implements a lightweight *exponential forgetting* mechanism using only pointer manipulations, which is why it scales to terabyte caches while still capturing both recency and frequency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
