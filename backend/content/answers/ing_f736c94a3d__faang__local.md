---
qid: ing_f736c94a3d__faang__local
question: 'Explain: Explain how HNSW works, and what the M and ef parameters control.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 615
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:14:53-05:00'
sources: []
---

**Clarify**  
We need to describe Hierarchical Navigable Small‑World (HNSW) graphs for approximate nearest neighbor search, and explain how its two key hyper‑parameters—`M` (the maximum number of outgoing links per node) and `ef` (size of the dynamic candidate list during query)—affect performance.

**Approach**  
1. Outline HNSW’s multi‑layer graph construction.  
2. Explain `M`’s role in graph density & search quality.  
3. Explain `ef`’s role in recall vs speed trade‑off.  
4. Provide typical complexity figures and practical tuning tips.

**Depth**  

| Parameter | What it controls | Effect |
|-----------|------------------|--------|
| **M (out‑degree)** | Max links per node at each layer. | Larger `M` → denser graph, higher recall, more memory & build time. Typical values: 16–64. |
| **ef** | Size of the priority queue used during a query to keep candidate neighbors. | Larger `ef` → better recall (approaches exact NN), slower query; smaller `ef` → faster but risk missing true neighbors. Default `ef` ≈ 10×M for balance. |

Construction: each new vector is inserted into layers 0…L, where L ∼ logₙN and the probability of reaching higher layers decreases exponentially. At every layer a node keeps up to `M` bidirectional links chosen by proximity heuristics (e.g., greedy search). The graph becomes a small‑world network: high clustering + short average path length.

Querying: start at the top layer with a random entry point, greedily descend layers while maintaining a min‑heap of candidates. At layer 0, run a beam‑search over `ef` candidates to collect the best neighbors. Complexity ≈ O(log N) for insert/query when `M` is fixed; memory ≈ O(N·M).

**Edge cases**  
- Very small `M` (≤4): graph becomes sparse → poor recall, especially in high dimensions.  
- Very large `ef` (> 1000): query latency rises sharply; may hit cache misses.  
- Non‑uniform data: if vectors are highly clustered, default `L` may be too low; need to increase L or use a higher `M`.

**Optimize & communicate**  
For production systems I’d start with `M=32`, `ef=200`, then profile recall vs latency on validation queries. If latency is acceptable but recall < 95%, incrementally raise `ef`. If memory is constrained, reduce `M` and compensate by increasing `ef`. During interviews I would articulate this iterative tuning loop, emphasizing that HNSW’s two knobs decouple graph density from query breadth, enabling a fine‑grained trade‑off between accuracy and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
