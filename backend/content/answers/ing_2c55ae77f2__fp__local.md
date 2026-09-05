---
qid: ing_2c55ae77f2__fp__local
question: 'Explain: your capacity is above your provision capacity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 430
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:58-05:00'
sources: []
---

### Why a model’s *capacity* can exceed its *provisioned capacity*

**Fundamental problem:**  
We want a learner that generalizes well from finite data while respecting computational budgets (memory, FLOPs). The *model capacity*—the number of degrees of freedom (weights, neurons) that can be tuned—is a measure of the hypothesis space’s richness. *Provisioned capacity* is the actual resources we allocate at inference: e.g., a pruned network or quantized weights.

**Why they can diverge:**  
1. **Implicit regularization:** Training with stochastic gradient descent (SGD) implicitly biases solutions toward flat minima, effectively reducing expressiveness even if the parameter count is high. Thus a 10 M‑parameter net may behave like a 2 M one in practice.
2. **Parameter sharing & low-rank structure:** Convolutional kernels and attention weight matrices often lie on manifolds of far lower intrinsic dimension than their ambient space. A model can carry many parameters but encode only a few independent directions, so its *effective* capacity is small compared to the provisioned one.

**Deeper principle – Information Bottleneck (IB):**  
The IB objective \(I(X;T)-\beta I(T;Y)\) balances compression (\(I(T;X)\)) against prediction. A high‑parameter model can achieve a low mutual information \(I(T;X)\) if it learns to discard irrelevant input details, thereby operating at a lower *effective* capacity than provisioned.

**Non‑obvious insight:**  
Provisioning for the worst case (full precision, no pruning) guarantees safety, but most practical workloads operate in a *sparse subspace*. Leveraging dynamic sparsity or conditional computation lets the model **activate only the necessary capacity on each input**, so its theoretical capacity can far exceed what is actually provisioned per sample—yet generalization remains intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
