---
qid: ing_1597c3b57e__fp__local
question: 'Explain: 🧠 ML & Deep Learning Foundations — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 623
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:51:09-05:00'
sources: []
---

## 🧠 ML & Deep‑Learning Foundations – A First‑Principles Cheat Sheet  

1. **Problem Formulation**  
   - *Goal*: Learn a mapping \(f_\theta : \mathcal{X}\rightarrow\mathcal{Y}\) that minimizes expected loss  
     \[
       \min_{\theta}\;\mathbb{E}_{(x,y)\sim P}[\,L(f_\theta(x),y)\,].
     \]  
   - *Why*: The expectation is the only way to capture performance over all data; it’s a direct statement of generalization.

2. **Representational Power**  
   - Linear models: \(f_{\mathbf{w}}(x)=\mathbf{w}^\top x\).  
   - Universal Approximation (UAP): A feed‑forward network with one hidden layer and non‑linear activation \(\sigma\) can approximate any continuous function on a compact set, provided enough units.  
     *Insight*: UAP hinges on the ability of \(\sigma\) to create “basis functions” that partition space; depth merely composes these partitions.

3. **Optimization Landscape**  
   - Loss surface is non‑convex but *sufficiently smooth*. Gradient descent (GD) converges to a stationary point because the gradient is a continuous function of parameters.  
   - *Key principle*: In high dimensions, almost all critical points are saddles; stochasticity (SGD) helps escape them by injecting noise proportional to batch size.

4. **Regularization & Generalization**  
   - *Implicit regularization*: SGD’s bias toward flat minima—regions where the Hessian has small eigenvalues—leads to better generalization.  
   - Explicit penalties (weight decay, dropout) enforce smoothness or sparsity, aligning with Occam’s razor in function space.

5. **Probabilistic View**  
   - Treat \(f_\theta\) as a Bayesian posterior over functions; maximizing likelihood is equivalent to minimizing KL divergence between true data distribution and model.  
   *Non‑obvious*: Dropout at test time approximates an ensemble of exponentially many subnetworks, providing uncertainty estimates without extra cost.

---

### One Insight Most Miss: **Depth ≠ Width**  
While UAP guarantees a single hidden layer suffices in theory, practical training benefits from depth because each additional layer can *re‑use* features hierarchically. This re‑use reduces the number of parameters needed for a given expressive power and improves optimization by localizing gradients to smaller sub‑networks, thereby mitigating vanishing/exploding gradients.

> **Bottom line**: ML is fundamentally about solving an expected loss minimization with function approximators; deep learning’s architecture choices are dictated by the geometry of high‑dimensional optimization, not merely by capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
