---
qid: ing_0b46f15b25__fp__local
question: 'Explain: Compute Requirements — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 437
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:30:11-05:00'
sources: []
---

**Why transformers need so much compute**

The transformer’s core operation is a *self‑attention* matrix \(A = \operatorname{softmax}(QK^\top / \sqrt{d_k})\).  
For an input of length \(n\) and hidden dimension \(d\), each token produces query, key, value vectors of size \(d\); the dot product between every pair of tokens is computed.  
Thus a single attention head costs  

\[
O(n^2 d)\;\text{flops}
\]

and with \(h\) heads this becomes \(O(h n^2 d)\).  
The feed‑forward network that follows each head adds another \(O(n d^2)\).  
Across \(L\) layers the total is roughly

\[
C \approx L\,n^2d\left(\frac{h}{d_k} + d\right).
\]

Because \(n\) (sequence length) and \(d\) (model width) are both large in modern NLP, the quadratic term dominates.  
Hence, to train a model with billions of parameters you need GPUs that can perform trillions of floating‑point operations per second—otherwise training stalls.

**Deeper principle**

This is an instance of *information bottleneck*: each token must “see” every other token to capture long‑range dependencies. The cost scales with the number of pairwise interactions, a combinatorial explosion.  
The quadratic term is unavoidable unless we change the algorithmic structure (e.g., sparse or linear attention).

**Non‑obvious insight**

Most people focus on *parameter count* when estimating compute. In transformers, however, **the sequence length is the true driver**: doubling \(n\) quadruples the cost even if the model size stays fixed. Thus, optimizations that reduce effective sequence length (e.g., chunking, hierarchical attention) can yield far greater savings than merely pruning weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
