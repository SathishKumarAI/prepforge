---
qid: ing_96b308f6ac__fp__local
question: 'Explain: Overfitting examples — What is Overfitting? - Overfitting in Machine
  Learning Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 456
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:26:06-05:00'
sources: []
---

**Overfitting: a statistical shortcut gone wrong**

In supervised learning we try to approximate an unknown function \(f^*\) mapping inputs \(\mathbf{x}\) to outputs \(y\).  
Given a finite training set \((\mathbf{x}_i,y_i)\), the learner picks a hypothesis \(h_\theta\) by minimizing empirical risk  
\(L_{\text{emp}}(h)=\frac1n\sum_{i=1}^n \ell(h(\mathbf{x}_i),y_i)\).  
The *fundamental problem* is that we only observe one sample from the distribution; the true error \(L_{\text{true}}(h)=\mathbb E[\ell(h(\mathbf{x}),y)]\) remains unknown.

If the hypothesis space is too expressive (high‑dimensional \(\theta\)), there exists a model that **fits** every training point perfectly, making \(L_{\text{emp}}\approx0\).  
But this fit captures *noise* rather than the underlying signal.  
By the law of large numbers, as \(n\to\infty\) empirical and true risks converge; with finite data they diverge: the model’s capacity to interpolate random fluctuations leads to a large gap \(L_{\text{true}}-L_{\text{emp}}\).  

Thus overfitting is not merely “too many parameters”; it is the *mismatch between sample size and hypothesis complexity*.  
Regularization, cross‑validation, or early stopping shrink this mismatch by trading bias for variance.

**Non‑obvious insight:**  
Overfitting can be seen as a **geometric collapse**—the decision boundary folds tightly around training points, reducing its *effective dimensionality* in the data manifold.  
When projected onto unseen data, these folds have zero volume, causing catastrophic error. Recognizing overfitting as a geometric over‑compression clarifies why simple capacity controls (e.g., pruning trees) often outperform complex probabilistic penalties.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
