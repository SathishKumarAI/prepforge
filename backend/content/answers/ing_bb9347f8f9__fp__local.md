---
qid: ing_bb9347f8f9__fp__local
question: 'Explain: Infinite TTL — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 413
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:42:47-05:00'
sources: []
---

**Caching – the “memory shortcut” of distributed systems**

At its core, a cache is an *intermediate storage* that answers repeated queries faster than recomputing or fetching from a slow backend.  
Suppose we have a function `f(x)` that takes time \(T_{\text{backend}}\) to compute. If we are asked the same \(x\) many times, the expected cost per request becomes  

\[
E[C] = \frac{p\, T_{\text{cache}} + (1-p)\, T_{\text{backend}}}{1}
\]

where \(p\) is the hit‑rate. The cache “solves” the *bandwidth‑latency* trade‑off: it trades off extra memory for lower latency and higher throughput.  

A **TTL (time‑to‑live)** policy decides how long a cached entry remains valid. An *infinite TTL* means “once we compute, keep it forever.” This is optimal when:

1. **Stability** – the data never changes (e.g., static config or reference tables).
2. **Read‑heavy workload** – almost all accesses are reads; any write would invalidate many entries.

The deeper principle is *staleness vs. consistency*: with infinite TTL we accept that the cache will be permanently consistent with its initial value, eliminating synchronization overhead entirely.  

**Non‑obvious insight:** In a highly dynamic system, an infinite TTL can actually **improve overall correctness** by preventing cascading invalidations. If every write forces a global purge, subsequent reads may hit a stale cache until a new write occurs; keeping a stable entry avoids this “thundering herd” of recomputation and keeps the read path deterministic. Thus, infinite TTL is not just about speed—it can be a deliberate consistency strategy in the right context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
