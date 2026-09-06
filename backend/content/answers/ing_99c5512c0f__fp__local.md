---
qid: ing_99c5512c0f__fp__local
question: 'Explain: Two-Tiered Caching — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 571
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:33:02-05:00'
sources: []
---

**Two‑Tiered Caching in Machine Learning**

In a typical ML inference pipeline we first load *heavy* models (or embeddings) into a **primary tier** (e.g., SSD or GPU memory). When the working set exceeds its capacity, we spill items to a **secondary tier** (RAM or distributed cache). The *eviction policy* decides which model parts stay in the fast tier.  

The optimal strategy must balance three constraints:

1. **Temporal locality** – recent requests are likely to repeat.
2. **Spatial locality** – adjacent parameters (e.g., layers) are often needed together.
3. **Cost asymmetry** – loading from secondary to primary is expensive.

From these we derive the eight most effective policies:

| # | Policy | Rationale |
|---|--------|-----------|
| 1 | **Least‑Recently Used (LRU)** | Maximizes hit probability under pure temporal locality; simple stack property. |
| 2 | **Least‑Frequently Used (LFU)** | Captures long‑term popularity when requests are bursty. |
| 3 | **First‑In, First‑Out (FIFO)** | Guarantees fairness; useful when items have uniform size and cost. |
| 4 | **Weighted LRU** | Adds a decay factor to recentness, mitigating the “cache pollution” of stale hot objects. |
| 5 | **Approximate LFU (Count‑Min Sketch)** | Handles massive key spaces with bounded memory overhead. |
| 6 | **Cost‑Aware Replacement** | Uses a *value/cost* ratio (e.g., model accuracy gain vs. load time). |
| 7 | **Two‑Q (2Q) Cache** | Separates “new” and “frequent” queues, preventing one‑off requests from flooding the cache. |
| 8 | **Policy‑Hybrid (Stack Distance + ML)** | Trains a lightweight classifier on request patterns to switch between LRU/LFU dynamically. |

### Non‑obvious insight  
**Spatial locality can be exploited by *group eviction*:** instead of evicting single layers, evict whole blocks that are co‑accessed. In transformer models, attention heads or token embeddings are accessed together; removing them as a unit preserves hit rates far better than treating each tensor independently. This grouping aligns with the “chunked” nature of modern deep nets and reduces metadata overhead.

By grounding each policy in locality principles and cost asymmetry, we can systematically choose—or combine—strategies that adapt to an ML system’s workload profile.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
