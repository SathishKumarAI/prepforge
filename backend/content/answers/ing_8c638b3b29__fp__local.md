---
qid: ing_8c638b3b29__fp__local
question: 'Explain: RR (Random Replacement) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 436
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:03:43-05:00'
sources: []
---

### Random Replacement (RR): Why It Works

In a **cache** we face the classic *resource‑allocation* problem:  
only \(C\) items can reside in memory, yet requests arrive for an unlimited set of keys.  
The goal is to keep the fraction of hits as high as possible.

Consider the *optimal offline policy* (Belady’s MIN): evict the item whose next request is farthest in the future.  
In practice we cannot know the future, so we approximate by a *probabilistic* criterion that balances two forces:

1. **Uniformity** – every cached item should be treated equally; otherwise hot items would starve cold ones.
2. **Recency‑independence** – the decision to evict must not depend on the history of accesses, which is often unavailable.

Random Replacement satisfies both: upon a miss it selects one resident uniformly at random and discards it.  
Mathematically, RR minimizes the *expected* number of evictions that remove an item needed in the next \(k\) requests, assuming all future requests are i.i.d. with a fixed access distribution. This expectation is
\[
E[\text{misses}] = \sum_{i=1}^{C}\frac{p_i}{1-p_i},
\]
where \(p_i\) is the request probability for item \(i\).  
Because RR does not bias any subset of items, it guarantees that over long periods each key’s eviction risk is proportional to its frequency—exactly what a *fair* policy should achieve.

#### Non‑obvious Insight
RR’s strength lies in **entropy maximization**: by treating all cache entries identically, the entropy of the cached set remains high. High entropy implies low predictability for an adversary that might try to prefetch or poison the cache. Thus, RR is not just simple; it is a *robust* strategy against worst‑case request patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
