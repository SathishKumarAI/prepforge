---
qid: ing_7760ef620e__fp__local
question: 'Explain: Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 586
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:18:23-05:00'
sources: []
---

**Sharding in Machine‑Learning Systems**

At its core, a learning system must *evaluate* a model on billions of examples and *update* parameters with gradients that arrive from the same scale of data. The problem is twofold:

1. **Compute bottleneck** – a single machine cannot perform the required matrix multiplications or reductions in reasonable time.
2. **Memory bottleneck** – a full model (e.g., transformer with > 10B params) does not fit into RAM/VRAM.

Sharding solves these by *partitioning* both data and model across multiple devices:

| Data‑shard | Model‑shard |
|------------|-------------|
| A subset of the training set is stored on node A. | The same subset of parameters (e.g., a column block of weight matrix) resides on node B. |

When computing forward/backward passes, each node only needs its local shard and communicates *partial results* to neighbors. Two canonical patterns emerge:

- **Data‑parallel sharding**: Each replica holds the full model but processes disjoint mini‑batches; gradients are summed (all‑reduce). This is optimal when memory per node suffices for the whole model.
- **Model‑parallel sharding**: The model itself is split across nodes; activations/gradients flow between them. This is mandatory when the model exceeds a single device’s capacity.

Why must sharding *split* both data and parameters? Because gradients are linear in both inputs and weights:  
\[
\nabla_{\mathbf{W}} \mathcal{L} = X^\top Y,
\]  
so if we partition \(X\) by rows (data shards) and \(Y\) by columns (model shards), each node can compute a *partial product* that is later aggregated. This linearity guarantees correctness regardless of how the tensors are split.

**Non‑obvious insight:**  
When sharding across GPUs, one often assumes communication cost dominates. Yet, for *large‑scale* models, the *reduction traffic* grows linearly with parameter count, whereas the *compute* per node shrinks sublinearly because each shard only handles a fraction of layers. Thus, beyond a certain point, the system becomes **communication‑bound** not by network bandwidth but by *serialization overhead* (packing tensors). Efficient sharding therefore pairs with *tensor compression* or *gradient sparsification*, which are rarely considered in naive designs.

In short, sharding is a principled decomposition that respects linear algebraic structure and transforms an otherwise impossible scaling problem into a distributed computation amenable to parallel hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
