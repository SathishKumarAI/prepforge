---
qid: ing_ba52c560e0__fp__local
question: 'Explain: Midterm (20%) — Stanford University CS231n: Deep Learning for
  Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 410
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:39:53-05:00'
sources: []
---

**Midterm (20 %) – Stanford CS 231n: Deep Learning for Computer Vision**

The exam is a *probabilistic inference* of your mastery of the core machinery that turns raw pixels into high‑level predictions.  
Why this structure?  

1. **Fundamental problem** – Classifying an image \(x\) as label \(y\). We model \(P(y|x;\theta)\) via a neural net, training by maximizing likelihood (cross‑entropy). The midterm forces you to *re‑derive* the back‑prop chain rule: \(\partial L/\partial \theta = (\partial L/\partial z)(\partial z/\partial \theta)\), highlighting how gradients flow through layers.  
2. **Why it must work** – Each layer is a differentiable function \(f_i(z_{i-1})\). The composition of such functions preserves convexity only locally; we rely on stochastic gradient descent to navigate the non‑convex loss surface, exploiting *local minima* that generalize due to implicit regularization (weight decay, dropout).  
3. **Connection to deeper principles** – The network’s capacity is bounded by VC dimension and Rademacher complexity; the exam tests your ability to quantify this via parameter count, effective receptive field, and data augmentation.  

**Non‑obvious insight:** *Batch normalization is not merely a speed trick—it enforces a form of **distributional alignment** across mini‑batches, effectively flattening the loss landscape so that the same learning rate works for all layers.* Understanding this explains why BN can be used even with very deep residual nets without vanishing gradients.  

The midterm thus evaluates whether you can *derive* these mechanisms from first principles, not just apply them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
