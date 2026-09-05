---
qid: ing_0a4e4c7046__fp__local
question: 'Explain: What''s included — Supervised Machine Learning: Regression and
  Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 510
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:27:24-05:00'
sources: []
---

**Supervised learning** tackles the inverse problem *“given data points and their labels, find a rule that predicts labels for new points.”*  
At its core it is an optimization over functions \(f:\mathcal X\to \mathcal Y\). We choose a hypothesis class (e.g. linear models) and minimize a loss that measures the discrepancy between predicted outputs \(f(x_i)\) and true targets \(y_i\).

### Regression  
When \(\mathcal Y=\mathbb R^k\), the goal is to recover a continuous mapping. The most common loss, squared error \((f(x)-y)^2\), has a unique minimizer in linear spaces: the **least‑squares solution** \(w=(X^\top X)^{-1}X^\top y\). This follows directly from setting the gradient of the empirical risk to zero, revealing that regression is solving a *linear system* whose solution balances fidelity to data against overfitting.

### Classification  
When \(\mathcal Y=\{0,1\}\), we ask for a decision boundary. The empirical risk uses an indicator loss \(\mathbf 1[f(x)\neq y]\). Since this loss is non‑convex, we replace it with convex surrogates (hinge, logistic) that are upper bounds on the misclassification rate. Minimizing these surrogates yields **maximum‑margin** or **probabilistic** classifiers whose decision function can be expressed as \(f(x)=\operatorname{sign}(w^\top x+b)\). The geometry of the margin shows why larger margins generalize better: they maximize the distance to the nearest training point, a direct consequence of Vapnik–Chervonenkis theory.

#### Non‑obvious insight  
Both regression and classification ultimately solve *regularized empirical risk minimization*. The regularizer (e.g. \(\|w\|^2\)) is not merely a penalty—it encodes an **information‑theoretic prior**: it prefers functions with low complexity, i.e., those that compress the training data most efficiently. Thus supervised learning can be viewed as *finding the simplest hypothesis consistent with observations*, a principle that unifies seemingly disparate tasks under one mathematical umbrella.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
