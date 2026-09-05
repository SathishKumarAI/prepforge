---
qid: ing_024ab4dde8__fp__local
question: 'Explain: Summary — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 458
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:09:58-05:00'
sources: []
---

**Sharding in machine‑learning systems**

At its core, a learning pipeline consumes an input distribution \(p(x)\) and produces predictions \(\hat y=f_\theta(x)\). The *fundamental problem* is that the data set and model parameters grow so large that a single node cannot store or process them within latency budgets. Sharding solves this by decomposing both storage and computation into disjoint “shards” \(S_i\), each handling a subset of the universe.

1. **Data sharding** partitions \(\mathcal{X}\) (e.g., by key, hash, or range). A shard processes only its local samples; the global objective is the weighted sum of shard objectives:  
   \[
   L(\theta)=\sum_i w_i\,L_i(\theta)
   \]
   where \(w_i=|S_i|/|\mathcal{X}|\). Because gradients are linear, we can aggregate shard gradients to obtain the full‑batch update without communication during forward passes.

2. **Model sharding** splits parameters across devices (e.g., partitioning a deep neural net’s layers or embedding tables). Each device computes a local forward and backward pass; gradients are exchanged only for overlapping variables. This preserves the *chain rule* while reducing memory footprint per node.

Why must it work this way?  
- **Linearity of expectation** guarantees that shard‑wise statistics converge to global ones as shards grow, ensuring unbiased learning.  
- **Commutativity of matrix multiplication** allows us to interleave local computations and sparse communication without altering the final gradient.  

A subtle insight often missed: *shard imbalance can induce bias*. If a shard receives disproportionately many “hard” samples (high loss), its gradients dominate the aggregate, skewing the global model toward that subset. Techniques like stratified sharding or dynamic load balancing are essential to preserve statistical efficiency.

Thus, sharding is not merely a scaling trick; it is an application of linearity and distributed optimization principles that keeps large‑scale ML tractable while maintaining convergence guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
