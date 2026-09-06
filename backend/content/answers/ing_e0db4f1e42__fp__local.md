---
qid: ing_e0db4f1e42__fp__local
question: 'Explain: Caching — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 482
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:57:48-05:00'
sources: []
---

**Caching as a scalability principle**

At its core, every database is an *information bottleneck*: a single store must satisfy many concurrent read/write requests.  
Let  

\[
R=\text{read rate},\; W=\text{write rate},\; C=\text{capacity of the DB}
\]

and suppose each query touches a fraction \(p\) of rows.  The effective load is  

\[
L = R + pW .
\]

If \(L > C\), latency blows up because the DB must serialize or lock more work than it can handle.  
A cache turns this bottleneck into a *probabilistic shortcut*. By storing the most frequently accessed items in memory, we reduce the fraction \(p\) to \(p_{\text{cache}}\ll p\).  The new load is  

\[
L' = R + p_{\text{cache}}W .
\]

Since \(L'\!<\!C\), throughput improves linearly with cache hit‑rate.  
This is an instance of the **law of diminishing returns** in caching: every extra byte of cache yields less marginal benefit, but even a modest 1 GB can halve the number of DB round‑trips if it covers the hot spot.

**Non‑obvious insight:**  
A cache *must* be consistent with the underlying data.  Many designs treat it as an “auxiliary storage” and ignore write‑through semantics, leading to stale reads that break application logic.  The right way is to view the cache as a **probabilistic data structure** that must satisfy two constraints simultaneously:

1. **Staleness bound** – guarantee that any read is at most \(k\) versions old (e.g., via write‑through or version tags).  
2. **Cache eviction policy** – choose an algorithm (LRU, LFU, ARC) that optimizes *information gain* rather than raw hit count.

Balancing these constraints turns caching from a simple performance trick into a principled scalability lever that can push read throughput by orders of magnitude while preserving correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
