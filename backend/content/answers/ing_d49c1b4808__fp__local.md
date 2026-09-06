---
qid: ing_d49c1b4808__fp__local
question: 'Explain: TTL (Time-to-Live) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 734
total_tokens: 911
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:51-05:00'
sources: []
---

**Cache‑eviction: the core optimisation problem**

A cache stores a limited set of items while a stream of requests arrives.  
When the cache is full we must choose *which* item to discard so that the
expected miss rate over future requests is minimised.  
This is an online decision problem: at each step we observe a request and
must act without knowing the future.  The optimal policy in hindsight would be
to evict the item whose next use is farthest away – the *Belady* (or OPT)
strategy.  Since this requires full knowledge of the future, practical
algorithms approximate it using observable statistics.

**Top eight strategies**

| # | Strategy | Intuition | Typical use |
|---|----------|-----------|-------------|
| 1 | **Least‑Recently Used (LRU)** | Evict the item whose last request was longest ago.  Assumes temporal locality: recent items will be reused soon. | Web browsers, OS page replacement |
| 2 | **Least Frequently Used (LFU)** | Remove the item with the fewest accesses so far.  Captures long‑term popularity. | Database caches, content delivery |
| 3 | **First‑In‑First‑Out (FIFO)** | Evict in arrival order; simple to implement but ignores access patterns. | Simple hardware buffers |
| 4 | **Random Replacement (RR)** | Pick a random victim.  Works surprisingly well when request distribution is flat or highly dynamic. | High‑speed routers, load balancers |
| 5 | **Approximate LRU (e.g., CLOCK, ARC)** | Use compact counters to mimic LRU with low overhead. | Embedded systems |
| 6 | **Weighted Least Frequently Used (W-LFU)** | Combine recency and frequency by weighting recent accesses more heavily. | Adaptive web caches |
| 7 | **Least Recently/Frequently Used Hybrid (LRFU)** | Interpolates between LRU and LFU via a tunable parameter α: `score = α·recency + (1‑α)·frequency`.  Optimises for workloads that shift from bursty to steady. | CDN edge caches |
| 8 | **Belady’s OPT (offline)** | Evict the item whose *next* request is farthest in the future.  Theoretical benchmark; used to evaluate online algorithms. | Offline optimisation, teaching |

**Why they work**

All strategies are greedy approximations of the *optimal offline* solution
that minimises the number of cache misses – an instance of the classic
online‑algorithms problem.  LRU and LFU capture temporal and frequency
locality respectively; RR offers a simple baseline when locality is weak.
Hybrid schemes (LRFU, ARC) blend both signals, effectively performing a
Bayesian update on the likelihood that an item will be needed soon.

**Non‑obvious insight**

The *recency* of access can be viewed as a probability density over future requests: the more recent an item, the higher the probability it will be requested again.  LFU treats all past accesses equally, implicitly assuming a uniform temporal distribution.  Hybrid policies that weight recency by a decaying function (e.g., exponential decay) are thus **implicit Bayesian priors** that adapt to changing workloads—something most practitioners overlook when choosing a single eviction policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
