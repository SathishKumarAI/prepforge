---
qid: ing_5f375d58cf__fp__local
question: 'Explain: Eviction Policy — Design of a Modern\u00a0Cache - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 495
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:27:16-05:00'
sources: []
---

**Eviction Policy: The “What to Throw Out” Rule in a Scalable Cache**

*Fundamental problem:*  
A cache can hold only *k* items, yet an application may reference far more objects than that. When the cache is full we must decide which entry to discard so that future accesses remain cheap. This is a **resource‑allocation optimization** under uncertainty: we want to minimize expected lookup cost given a stochastic request stream.

*Why LRU (or its variants) works:*  
If requests are *temporally local*, an item accessed recently will likely be requested again soon. Mathematically, the probability that the next hit is a particular key decays with its age in the access sequence—an exponential‑like tail under many realistic workloads. Therefore, keeping the *k* most recent items maximizes the hit rate; any older item has a lower conditional probability of being accessed before one of those *k*. This follows from **Markov decision theory**: the optimal stationary policy for minimizing expected misses in a Markov chain with finite memory is to keep the states with highest occupancy probability.

*Scalable implementation:*  
Naïvely updating an age counter per access is O(1) but requires a global lock or atomic operations that serialize traffic. Modern designs use **probabilistic counters** (e.g., *count‑min sketch*) and *cuckoo hashing* to keep per‑bucket timestamps, then perform eviction by scanning only a small subset of candidates (“sampled LRU”). This reduces contention to O(1) average while preserving the same asymptotic hit‑rate guarantees.

> **Non‑obvious insight:**  
> The *entropy* of the access pattern dictates how aggressively we should sample. In low‑entropy workloads (few hot keys), a tiny candidate pool suffices; in high‑entropy workloads, sampling more candidates is essential to avoid “cache churn.” Thus, an adaptive sampler that estimates entropy on the fly can tune eviction granularity without manual tuning.

In short, eviction policies are *probabilistic greedy* solutions to a constrained optimization problem, and their scalability hinges on decoupling per‑access updates from global ordering through sketching and sampling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
