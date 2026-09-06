---
qid: ing_c1311cc71e__fp__local
question: 'Explain: Late Policy — Stanford University CS231n: Deep Learning for Computer
  Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 447
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:03-05:00'
sources: []
---

### Late‑Policy in CS231n: Why It Works and a Hidden Insight

**Fundamental problem**  
In large neural nets trained on ImageNet, *early* layers learn generic visual primitives (edges, textures), while *later* layers specialize to the dataset’s classes. When we fine‑tune a pre‑trained network on a new task with limited data, updating only the final classifier often yields poor generalization: the early feature extractor is already optimal for low‑level cues, but the mid‑layers may still encode biases from ImageNet that hurt transfer.

**Why “late” policy helps**  
1. **Layer‑wise capacity** – The later layers have higher dimensionality and are closer to the decision boundary; they can absorb task‑specific patterns without overwriting robust low‑level filters.  
2. **Regularization via freezing** – Freezing early weights keeps a stable prior, reducing variance of gradient updates (Bayesian view: we maintain a strong prior over feature space).  
3. **Gradient flow control** – Updating only the top layers limits the magnitude of back‑propagated gradients, preventing catastrophic forgetting.

Mathematically, if \(W = [W_{\text{early}}, W_{\text{late}}]\), the loss gradient \(\nabla_W L\) is decomposed into two sub‑vectors. By setting \(\nabla_{W_{\text{early}}}L=0\), we constrain the optimization to a lower‑dimensional manifold where the Hessian’s conditioning improves, leading to faster convergence.

**Non‑obvious insight**  
The *optimal* point of fine‑tuning is not “freeze everything except the last layer” but a **dynamic schedule**: start with a small learning rate for all layers, then progressively unfreeze deeper blocks. This mirrors curriculum learning in human cognition—first mastering broad concepts before refining specifics. The late‑policy is simply the first stage of that curriculum; its success hinges on the hierarchical abstraction property of convolutional nets, which few people explicitly leverage when designing transfer protocols.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
