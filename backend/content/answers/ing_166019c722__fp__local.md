---
qid: ing_166019c722__fp__local
question: 'Explain: Random Replacement (RR) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 447
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:53:12-05:00'
sources: []
---

**Random Replacement (RR)**  
A cache holds a fixed number of items; when it is full and a new item arrives, an existing entry must be evicted.  
The *fundamental problem* is to minimize the miss‑rate under an unknown access pattern.  

1. **Uniformity vs. bias** – RR selects any resident uniformly at random.  This guarantees that each slot has equal probability of being removed, so no item can “win” simply by staying long enough.  
2. **Expectation of future use** – In the absence of statistical knowledge about access frequencies, the *principle of indifference* says we should treat all items as equally likely to be needed next. RR is the algorithm that implements this principle.  
3. **Statistical equivalence to LRU under random accesses** – If requests are i.i.d., the miss‑rate of RR equals that of Least Recently Used (LRU).  Thus, without correlation, RR is optimal in expectation.  

*Non‑obvious insight:*  
Because RR’s eviction probability is independent of *age*, it automatically adapts to “burst” workloads where a few hot items dominate for short periods.  In such scenarios, LRU would keep the hot items forever, inflating miss‑rates when the burst ends. RR’s age‑independent policy keeps the cache ready to absorb new patterns without stale items lingering.

**Why it works**  
Mathematically, let \(p_i\) be the probability that item \(i\) will be requested next.  The expected miss after an eviction is \(\sum_{i} p_i(1-\frac{1}{C})\), where \(C\) is cache size.  RR minimizes this expectation by making every \(p_i\) appear once in the denominator, yielding the lowest possible bound when no \(p_i\) dominates.  

In short, Random Replacement is a *statistically fair* strategy that performs optimally under uncertainty and gracefully degrades when access patterns become highly skewed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
