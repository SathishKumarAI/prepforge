---
qid: ing_be398f4a7d__fp__local
question: 'Explain: The Final Linear and Softmax Layer — The Illustrated Transformer
  \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 368
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:48:03-05:00'
sources: []
---

**The last two layers of a Transformer are the bridge from hidden geometry to discrete predictions.**

*Why a linear layer?*  
After multi‑head attention and positionwise feed‑forward blocks we have a dense representation \(h\in\mathbb{R}^{d}\) for each token. To map this continuous vector to vocabulary logits, we need a *linear transformation*:  
\(z = W h + b,\quad z_i \in \mathbb{R}.\)  
Linear functions are the most general differentiable mapping that preserves convexity and enables back‑propagation; any higher‑order nonlinearity would destroy the linear relationship between gradients and logits, making learning unstable.  

*Why softmax?*  
The transformer’s goal in language modeling is to output a probability distribution over tokens: \(p_i = \frac{e^{z_i}}{\sum_j e^{z_j}}\). Softmax is the unique mapping from arbitrary real‑valued logits to a simplex that maximizes entropy subject to fixed expected logit values. It guarantees a proper probability distribution, enabling cross‑entropy loss and calibrated predictions.  

*Deep insight*: The linear layer can be viewed as projecting \(h\) onto the space spanned by one‑hot embeddings of each token. Softmax then normalises these projections into probabilities. Thus, the final two layers are not just “post‑processing”; they perform a *probabilistic inference step*, turning high‑dimensional geometry into discrete choices while preserving gradient flow. This principled link between linear algebra and probability is why Transformers generalise so well across tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
