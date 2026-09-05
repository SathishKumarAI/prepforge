---
qid: ing_40a859fd72__fp__local
question: 'Explain: Least Frequently Used (LFU) — 7 Cache Eviction Strategies You
  Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 427
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:01-05:00'
sources: []
---

**Least Frequently Used (LFU)**  
A cache must decide which entry to evict when full. LFU tackles the *frequency* dimension: an item that has been accessed many times is likely to be needed again, so we keep it and drop the one with the lowest hit count.

### Why frequency matters  
From a probabilistic viewpoint, each request can be seen as sampling from a stationary distribution over keys. The expected future usage of key *k* is proportional to its empirical frequency \(f_k\). Minimizing the miss probability therefore reduces to keeping the keys with largest \(f_k\). LFU approximates this by maintaining a counter per item and evicting the minimum.

### How it works in practice  
1. **Count**: Increment a counter on every hit.  
2. **Eviction**: When space is needed, remove the entry with the smallest counter (ties broken arbitrarily).  
3. **Decay** (optional): To avoid “stale” items forever blocking new ones, periodically divide counters by two or reset them after a threshold.

### Deep principle  
LFU embodies **entropy minimization** for cache content: we concentrate capacity on the most probable future requests, thus reducing the expected information entropy of cache misses. This is analogous to the *optimal coding* problem where symbols with higher probability receive shorter codes.

### Non‑obvious insight  
A naïve LFU can suffer from “frequency bias”: an item that was popular in the distant past but is no longer relevant may remain cached indefinitely. The subtle trick is **time‑decay**—not just counting hits, but weighting them by recency (e.g., exponential decay). This hybrid approach turns LFU into a *temporal frequency* estimator, reconciling long‑term popularity with short‑term trends without sacrificing the simplicity of counter‑based eviction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
