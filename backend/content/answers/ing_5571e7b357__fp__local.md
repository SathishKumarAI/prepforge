---
qid: ing_5571e7b357__fp__local
question: 'Explain: Caching — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 543
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:06:26-05:00'
sources: []
---

### Why a database “caches” at all

A relational engine is a **probabilistic sampler** of data: for every query it must decide, *in expectation*, which rows will be touched and how often.  
The cost of accessing disk (latency ≈ 10⁻² s) dwarfs that of memory (≈ 10⁻⁶ s).  
If we could keep the most‑frequent rows in a fast storage tier, the *expected* I/O would shrink from  

\[
E[\text{I/O}] = \sum_{i} p_i\,t_{\text{disk}}
\]

to  

\[
E'[\text{I/O}] = \sum_{i} p_i\,t_{\text{mem}} + (1-\sum_{i}p_i)\,t_{\text{disk}},
\]

where \(p_i\) is the access probability of row \(i\).  
Thus caching transforms a high‑variance, latency‑bound process into one dominated by cheap, deterministic lookups.

### The deeper principle: *information locality*

The cache is essentially a **compressed representation** of the query workload.  By exploiting *temporal* (recently used) and *spatial* (adjacent rows in a page) locality, we approximate the optimal solution to the *minimum‑cost access sequence* problem—a classic instance of online caching algorithms (LRU, LFU).  
A non‑obvious insight: **eviction policies that consider future workload patterns** (e.g., predictive LRU or adaptive replacement) can outperform simple heuristics because they reduce the *entropy* of cache misses. In practice, a small “hot” buffer holding just 1–2 % of rows can deliver >90 % hit rates for read‑heavy OLTP workloads.

### Practical takeaway

- **Measure access frequencies** and build a *frequency histogram*; this guides both page size and eviction policy.
- **Co‑locate hot data** (e.g., partitioning by frequently queried columns) to reduce the number of distinct pages that need caching.
- **Use multi‑level caches**: L1 (in‑process buffer), L2 (shared memory pool), L3 (SSD or NVMe cache) each with tailored policies, mirroring hierarchical memory in processors.

By treating caching as an *information bottleneck* rather than a mere speed trick, you design systems that automatically adapt to the statistical structure of your workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
