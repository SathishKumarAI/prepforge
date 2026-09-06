---
qid: ing_cc1e9f880e__fp__local
question: What Is Transfer Learning? — Transfer Learning in Keras with Computer Vision
  Models - MachineLearningMastery.com
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 454
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:24-05:00'
sources: []
---

**Transfer learning is the principle that a model trained on one task can serve as a good starting point for another, related task.**  
In supervised deep learning we usually solve  

\[
\min_{\theta}\; \mathbb{E}_{(x,y)\sim P}[\,L(f_\theta(x),y)\,]
\]

where \(f_\theta\) is the network and \(P\) is the data distribution.  Training from scratch requires a large \(P\) to explore the high‑dimensional parameter space; otherwise we overfit or converge to poor local minima.

When a *source* dataset \(\mathcal{D}_s\) shares structure with a *target* dataset \(\mathcal{D}_t\), the early layers of a network learn generic features (edges, textures).  These form a **feature extractor** that approximates an optimal basis for any image task. By freezing or fine‑tuning only higher layers we reduce the optimization problem to a low‑dimensional subspace:

\[
\theta = \{\theta_{\text{fixed}},\,\theta_{\text{adapt}}\},\qquad
\min_{\theta_{\text{adapt}}}\; \mathbb{E}_{(x,y)\sim P_t}[L(f_{\theta}(x),y)] .
\]

This dramatically cuts data needs, training time, and the risk of over‑parameterization.  

**Non‑obvious insight:** *The bottleneck is not weight initialization but the **representation manifold**.*  A pre‑trained network already aligns its feature space with the intrinsic geometry of natural images; fine‑tuning merely rotates it within that manifold to match \(\mathcal{D}_t\). Thus, transfer learning works because we exploit a shared latent structure, not merely random weight seeds.  

In Keras, this is implemented by loading a pre‑trained model (e.g., ResNet50), freezing its convolutional base, and attaching new dense layers for the target classification task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
