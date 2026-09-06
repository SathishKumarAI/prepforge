---
qid: ing_d0b12b0670__fp__local
question: 'Explain: Caching Anti-Patterns — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 391
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:24:17-05:00'
sources: []
---

**What is caching?**  
At its core, a cache is an *intermediate memory* that stores the results of expensive computations or I/O operations so that subsequent requests can be served faster. In system‑design terms, it implements the principle of **“time‑locality”**: data accessed now is likely to be accessed again soon. By materializing this locality in a fast store (RAM, SSD, in‑memory DB), we trade *storage* for *latency*.

**Why caching must obey certain rules**  
1. **Staleness control:** The cache must expose a clear policy (time‑to‑live, write‑through, versioning). If the cache silently drifts from source truth, downstream services may diverge, violating consistency guarantees.  
2. **Cache key hygiene:** A key that omits any field that influences the output violates *idempotence*; two logically distinct queries could map to one cached entry, producing erroneous results.  
3. **Bounded size & eviction policy:** Unbounded growth turns a cache into an unstructured store, destroying its purpose. LRU or LFU are practical because they approximate “most useful” data under diminishing returns.

**Non‑obvious insight: “Cache is a probabilistic model.”**  
A cache can be seen as a *Bayesian prior* over the distribution of future requests. The eviction strategy is essentially a decision rule that maximizes expected utility given limited capacity. Optimizing this policy requires understanding request frequencies, not just raw hit rates—a subtlety often overlooked when developers simply “cache everything”.

In short, caching solves the *latency–consistency* trade‑off by exploiting locality; it must be designed as a disciplined, bounded probabilistic system to avoid hidden anti‑patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
