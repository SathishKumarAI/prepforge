---
qid: ing_8c8c693bc2__fp__local
question: 'Explain: So, to implement this rule we need — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 504
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:04:01-05:00'
sources: []
---

### Why a *rule* matters in machine learning

At its core, supervised learning seeks a function \(f\) that maps inputs \(x\in\mathcal{X}\) to outputs \(y\in\mathcal{Y}\). A *rule* is simply a handcrafted constraint of the form  

\[
g(x)\;\Rightarrow\; y = h
\]

that we know must hold for a subset of data. By inserting such a rule into the learning pipeline, we reduce the hypothesis space: instead of fitting \(f\) to every point, we only need to learn the *residual* \(r(x)=f(x)-h\) on the remaining region. This is an instance of **regularization by prior knowledge**—the rule encodes a strong prior that shrinks variance without inflating bias.

### How to implement it in Python

1. **Data preparation** – split your dataset into `X, y`.  
2. **Rule function** – write a vectorised predicate `mask = g(X)` (e.g., `mask = X[:,0] > 5`).  
3. **Apply the rule** – set target values where the mask is true: `y_rule = np.where(mask, h, np.nan)`.  
4. **Model training** – fit a model only on rows with `np.isnan(y_rule)` (the *unconstrained* portion). In scikit‑learn you can pass a sample weight of zero to ignore those rows.  
5. **Prediction** – combine the rule and the model:  

```python
def predict(X):
    y_pred = np.where(mask, h, model.predict(X))
```

### One subtle insight

Most people treat rules as *hard* constraints that never fail. In practice, a noisy or outdated rule can degrade performance if applied indiscriminately. The elegant fix is to **soften** the mask: replace `np.where` with a probabilistic gate (e.g., logistic sigmoid on \(g(x)\)). This turns the rule into a *prior probability* rather than an absolute decree, allowing the model to override it when data strongly contradicts it—exactly what Bayesian inference prescribes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
