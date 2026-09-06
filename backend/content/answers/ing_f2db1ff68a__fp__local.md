---
qid: ing_f2db1ff68a__fp__local
question: 'Explain: Key Parts — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 524
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:35:20-05:00'
sources: []
---

**Caching in machine‑learning systems**

At its core, a learning system must answer queries (inference) or update models (training) at rates far exceeding what raw computation can deliver. The *fundamental problem* is that each request may require re‑computing the same expensive function—matrix multiplications, feature extraction, or database lookups—over and over again. Caching turns this repetition into a simple lookup.

1. **Why it must work as a key–value store**  
   The inference pipeline is *deterministic* for a fixed model and input: `f(model, x) = y`. If we can guarantee that the same `(model_id, input_hash)` pair will always produce the same output, storing the result eliminates recomputation. This determinism stems from the fact that deep networks are purely functional; stochasticity is confined to training.

2. **Optimality principle**  
   The *law of diminishing returns* in computation says that the first few executions of a function dominate total cost. By caching these, we reduce the average latency \(L_{\text{avg}}\) to
   \[
   L_{\text{avg}} = p\,\ell_{\text{cache}} + (1-p)\,\ell_{\text{compute}},
   \]
   where \(p\) is cache hit rate. Maximizing \(p\) subject to memory constraints is a classic knapsack problem, linking caching to combinatorial optimization.

3. **Information‑theoretic insight**  
   Caching implicitly compresses the *entropy* of repeated queries: instead of transmitting raw inputs and recomputing outputs, we transmit a short cache key. The amount of saved bandwidth equals the mutual information between input and output conditioned on the cache state.

4. **Non‑obvious design cue**  
   Many architects focus only on *LRU* eviction. Yet in ML workloads, the *temporal locality* of queries is highly skewed by model versioning: a new training run invalidates all cached entries for that model. Therefore, the eviction policy should be *model‑aware*: purge all keys tied to a specific `model_id` when its parameters change, rather than relying on recency alone.

In short, caching in ML systems is not just a performance trick—it’s an application of determinism, optimization, and information theory that turns repetitive computation into instant lookups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
