---
qid: ing_7aff7ae9f2__fp__local
question: 'Explain: Title: ZeRO: Memory Optimizations Toward Training Trillion Parameter
  Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 394
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:26:18-05:00'
sources: []
---

**ZeRO (Zero Redundancy Optimizer)** tackles the *redundancy* that plagues distributed training of gigantic language models.  
In a naïve multi‑GPU setup each worker holds a full copy of all model parameters, gradients and optimizer state. The memory cost therefore scales linearly with the number of devices: \(M_{\text{total}} = N \times M_{\text{single}}\). For a trillion‑parameter transformer this quickly exceeds GPU capacity.

ZeRO re‑examines what *is truly necessary* to perform a stochastic gradient descent step:

1. **Parameter sharding** – each device stores only the subset of parameters it owns, reducing \(M\) by \(1/N\).  
2. **Gradient sharding** – gradients are computed locally and aggregated only for the owned shard, avoiding an extra full‑size copy.  
3. **Optimizer state sharding** – Adam’s moment estimates are likewise split; each device keeps only what it needs to update its parameters.

Mathematically this is a *block‑diagonal* decomposition of the Hessian‑like second‑order terms: we preserve the exact per‑parameter updates while discarding cross‑shard redundancies. The algorithm guarantees that the global loss surface is traversed identically to full‑precision training, because all sharded tensors are recombined only at synchronization points.

**Non‑obvious insight:**  
Sharding optimizer state does **not** increase convergence time even though it removes coupling between parameters. This works because Adam’s update rule is element‑wise; the global second‑moment estimate of a parameter depends solely on its own past gradients, not on others’. Thus zero redundancy can be achieved without altering the optimization trajectory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
