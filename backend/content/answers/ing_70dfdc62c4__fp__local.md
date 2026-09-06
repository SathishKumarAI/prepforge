---
qid: ing_70dfdc62c4__fp__local
question: 'Explain: How It Works — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 714
total_tokens: 889
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:04:32-05:00'
sources: []
---

**Why a cache needs an eviction rule**

A cache stores only a fraction of the data needed by a learning pipeline (feature tensors, model checkpoints, intermediate activations). When it fills, the system must decide *which* entry to drop so that future accesses hit as often as possible. This is an online optimization problem: minimize expected miss cost subject to capacity constraints. The optimal policy is “evict the item with the smallest marginal future benefit.” Since we cannot foresee the future, heuristics approximate this idea.

**Seven canonical strategies**

| Strategy | Intuition | When it shines |
|----------|-----------|----------------|
| **LRU (Least‑Recently Used)** | Evict the entry whose last access was furthest back in time. | Workloads with strong temporal locality (e.g., streaming training). |
| **LFU (Least‑Frequently Used)** | Evict the entry that has been accessed least often overall. | When access frequency is a reliable predictor of reuse. |
| **ARC (Adaptive Replacement Cache)** | Dynamically balances between LRU and LFU, maintaining two lists for cold and warm items. | Workloads with mixed locality patterns. |
| **LRFU (Least‑Recently/Frequently Used)** | Combines recency and frequency via a weighted score. | When both aspects matter but one is not dominant. |
| **MRU (Most‑Recently Used)** | Evict the most recently accessed item. | Useful for *prefetch* scenarios where the next request is likely to be a different item. |
| **Random** | Pick an entry uniformly at random. | Baseline; useful when access patterns are highly unpredictable or in very small caches. |
| **Weighted LRU** | Assign each key a weight (e.g., tensor size, importance) and evict the least‑weight‑per‑recency ratio. | When items vary widely in cost to reload. |

**Derivation from first principles**

Let \(C\) be cache capacity and let \(p_i(t)\) denote the probability that item \(i\) will be requested at time \(t\). The *optimal* eviction decision at each step minimizes

\[
\sum_{i \in \text{cache}} (1-p_i(t))\,c_i,
\]

where \(c_i\) is the cost of reloading \(i\). Since we cannot compute \(p_i(t)\) exactly, heuristics approximate it via observable statistics: recency → an exponential decay model; frequency → a moving count. The LRU policy effectively assumes \(p_i(t)\) decays exponentially with time since last use; LFU assumes a stationary Poisson arrival process where counts correlate with future arrivals.

**Non‑obvious insight**

Most people treat cache size as the only tuning knob, but *access pattern statistics* (recency vs frequency distribution) are equally critical. In ML workloads, the same tensor may be reused many times in a mini‑batch (high LFU signal) yet never accessed again after an epoch (strong LRU signal). Adaptive schemes like ARC or weighted LRU that combine both signals can reduce miss rates by up to 30 % compared with static policies, especially when batch sizes and model architectures change over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
