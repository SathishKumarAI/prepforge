---
qid: ing_8cc7fc6ae2__fp__local
question: 'Explain: Kimi K2 is a 1T-parameter MoE with about 32B active per token
  and hundreds of experts. Explain the routing and the systems cost of training it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 602
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:04:29-05:00'
sources: []
---

**Why a Mixture‑of‑Experts (MoE) is needed**

In a vanilla transformer every token updates *all* \(N\) parameters.  
For a 1 T model the per‑token compute is \(O(N)\), which quickly exceeds GPU memory and latency budgets.  
The key insight of MoE is that most tokens only need a small, specialized subnetwork: **sparsity ≈ capacity**.  
If each token activates a handful of experts (say 32 B out of 1 T) we reduce the per‑token FLOPs by \(N_{\text{active}}/N\), while still having an expressive global parameter count.

**Routing mechanism**

Let \(E\) be the expert set.  
For each token embedding \(x\):

1. Compute a lightweight router vector \(r = \mathrm{softmax}(Wx + b)\in\mathbb{R}^{|E|}\).  
2. Select top‑\(k\) experts (here \(k=2\)) with highest scores.  
3. Weight each expert’s output by its router score and sum.

Mathematically, the token representation is  
\[
y = \sum_{e\in\text{top‑}k} r_e\,f_e(x),
\]
where \(f_e\) is a small feed‑forward network.  
The router itself is trained jointly; it learns to partition the token space so that similar tokens share experts, an implicit clustering in high‑dimensional geometry.

**Systems cost**

*Memory*: Each expert holds ~\(32\,\text{B}\) parameters. With \(E=3{,}000\) experts we need ≈ 96 TB of model weights—distributed across a GPU cluster with sharded storage.  
*Compute*: Training requires forward‑backward passes for all activated experts per token, so total FLOPs ≈ \(32\,\text{B}\times \text{tokens}\). The router adds negligible cost (≈1 % of a dense layer).  
*Communication*: During training the gradient updates are sparse; only the experts that fired need to be synced. This reduces inter‑node traffic by \(k/|E|\), but the *load imbalance* problem arises: some GPUs may host many active experts, leading to stragglers.

**Non‑obvious insight**

Because routing is differentiable, MoE learns *soft partitions* of the data manifold. The router’s gradients encode **information geometry**—tokens that are close in representation space tend to activate the same expert, effectively performing a learned clustering with minimal overhead. This emergent structure explains why MoE models can match dense baselines while keeping per‑token compute far below the full parameter count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
