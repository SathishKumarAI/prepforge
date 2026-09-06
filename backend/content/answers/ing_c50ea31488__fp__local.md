---
qid: ing_c50ea31488__fp__local
question: 'Explain: Self-Attention Recap — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 377
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:00:42-05:00'
sources: []
---

**Self‑attention in GPT‑2: a principled view**

At its core, a transformer must decide *which past tokens to weigh when predicting the next one*. The attention mechanism does this by projecting each token into three vectors—query (Q), key (K) and value (V). For a target position \(i\), it computes scores \(\alpha_{ij}= \frac{Q_i K_j^\top}{\sqrt{d_k}}\), a dot‑product that measures similarity in the learned embedding space. The softmax over all positions turns these raw similarities into *probabilities* that sum to one, ensuring that the model can mix information from any context length without bias toward nearby words.

Why this design?  
1. **Optimization**: The dot‑product is differentiable and cheap; the scaling factor \(\sqrt{d_k}\) stabilizes gradients by preventing large logits when dimensionality grows.  
2. **Information theory**: Softmax gives a probability distribution, allowing the model to learn *entropic* attention—sharpening on useful cues while maintaining uncertainty elsewhere.  
3. **Geometry**: Q and K live in the same space; their dot product captures angular similarity, enabling the network to focus on semantically aligned tokens regardless of position.

**Non‑obvious insight:** The values \(V\) are *not* transformed by attention weights during the forward pass—they merely get weighted and summed. This means the model learns to *re‑encode* useful content into V while Q/K decide *when* it matters. Consequently, the same token can influence many contexts with different strengths, giving GPT‑2 its remarkable flexibility across diverse prompts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
