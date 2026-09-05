---
qid: ing_23fa159f9d__fp__local
question: 'Explain: The Core Trade-offs — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 428
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:22:02-05:00'
sources: []
---

**Why a cache matters**

In any data‑centric ML system the *latency* of a request is bounded by the slowest component on its critical path—often an external store (disk, key‑value service). A cache replaces that slow hop with a fast in‑memory lookup. The fundamental trade‑off is: **speed ↔ consistency ↔ cost**.

1. **Speed vs. Consistency**  
   *A read‑through cache* guarantees freshness at the expense of latency and write amplification (every write must hit both cache and store).  
   *An eventual‑consistency cache* sacrifices up‑to‑date data for lower write traffic and higher throughput, which is acceptable when model inference tolerates stale features.

2. **Cost vs. Size**  
   The larger the in‑memory footprint, the fewer misses you pay for. Yet memory cost grows linearly; a principled choice comes from *cache hit ratio* versus *cost per byte*. A Pareto analysis of feature access frequencies (Zipf’s law) shows that 80 % of reads can be served by ~20 % of the data—so a small, aggressively‑evicted cache often suffices.

3. **Eviction vs. Workload**  
   Least‑Recently‑Used (LRU) is optimal for stationary workloads but breaks when feature access patterns shift during model retraining or concept drift. A *frequency‑aware* policy (LFU or adaptive LRU‑LFU) aligns with the information‑theoretic notion that highly used features carry more mutual information with predictions.

**Non‑obvious insight**

Many designers ignore that a cache can act as an *implicit regularizer*: by exposing only the most frequently accessed features to downstream models, you reduce dimensionality and noise, often improving generalization. Thus, caching is not just performance engineering—it’s a subtle form of feature selection rooted in information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
