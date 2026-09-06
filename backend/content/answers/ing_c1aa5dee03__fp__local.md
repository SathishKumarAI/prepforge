---
qid: ing_c1aa5dee03__fp__local
question: 'Explain: What to Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 478
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:49-05:00'
sources: []
---

**What to Cache – Why It Matters in Machine‑Learning System Design**

The core problem a ML service solves is *predict*—given an input `x`, return a label or value `ŷ`.  
Two constraints dominate: (1) **Latency**—users expect < 100 ms; (2) **Compute cost**—inference on large models can be expensive.  
Caching is the principled way to trade compute for latency.  

*From first principles:*  
- Let `T_compute(x)` be the time to run a model, and `T_cache` the retrieval time from memory (≈ microseconds).  
- If we cache the output of a *most‑frequent* subset `S ⊂ X`, the expected latency becomes  
  \[
  E[T] = P(x∈S)·T_{\text{cache}} + P(x∉S)·T_{\text{compute}}.
  \]
- Maximizing `P(x∈S)` while keeping `|S|` within memory gives the optimal set of cached keys.

*Deeper insight:*  
The **entropy** of the input distribution governs cache efficacy.  
High‑entropy inputs (uniform over a large space) yield little benefit; low‑entropy, skewed workloads (e.g., recurring user queries) are ideal.  
Thus, profiling *access patterns* and estimating entropy is the first step before deciding what to cache.

*Practical guidelines:*
1. **Cache embeddings or soft‑max outputs** for downstream pipelines—cheap to store, expensive to recompute.
2. **Use LRU/K-LRU** when access patterns are stationary; switch to *ARC* if you observe frequent “cold” entries.
3. Keep a **write‑through policy** for model updates: invalidate cached keys that depend on the old parameters.

**Non‑obvious tip:**  
When models are updated frequently, cache *delta‑updates* (the difference between old and new predictions) rather than full outputs. This keeps consistency while still reducing recomputation for high‑frequency queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
