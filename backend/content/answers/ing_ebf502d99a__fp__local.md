---
qid: ing_ebf502d99a__fp__local
question: 'Explain: Fully Sharded Data Parallel (FSDP): Nobody Holds Everything'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 439
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:21:26-05:00'
sources: []
---

**Why “Fully Sharded Data Parallel” needs to exist**

When a model has *B* parameters and we want to train it on *N* GPUs, the naïve strategy is to copy the entire model onto each device (Data‑Parallel, DP). This works only if *B ≤ M* (memory per GPU) and incurs *O(N)* communication of gradients. As models grow (hundreds of billions of weights), copying every replica becomes impossible and gradient exchange dominates training time.

**Sharding as the fundamental fix**

FSDP starts from a simple observation: during forward‑backward passes, each layer only needs its own parameters, not the whole network. If we partition (shard) each module’s weight tensor across GPUs, no device ever holds *B* in memory. Backpropagation then requires only local gradients; cross‑GPU communication is limited to the gradient of that particular shard, yielding a per‑layer communication cost independent of *N*. The algorithm therefore satisfies:

1. **Memory optimality** – each GPU stores at most its share + activations.
2. **Scalable communication** – only shard‑wise gradients are exchanged.

Mathematically, FSDP implements a block‑diagonal partitioning of the Jacobian \(J\) such that  
\(J = \operatorname{diag}(J_1,\dots,J_k)\). The backward pass reduces to solving each block locally, with a collective only for the diagonal blocks’ gradients.

**Non‑obvious insight**

The *“nobody holds everything”* slogan hides an architectural principle: by treating every module as an independent sub‑network, we can fuse sharding with **gradient checkpointing** without extra memory overhead. Because each shard’s activations are discarded after backward, recomputation costs remain bounded—allowing training of models that would otherwise exceed any single device’s capacity. This synergy between sharding and checkpointing is rarely exploited but unlocks truly massive scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
