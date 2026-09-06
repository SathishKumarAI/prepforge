---
qid: ing_febd7fca5c__fp__local
question: 'Random forest vs gradient boosting: how does each work, and why do tree
  ensembles still beat neural networks on tabular data?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 563
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:01:31-05:00'
sources: []
---

**Random Forest (RF)**  
The problem: *estimate a function* \(f(x)\) that maps tabular features to a target while being robust to over‑fit and feature noise. RF solves this by *reducing variance through bootstrap aggregation*. Each tree is trained on a random subsample of the data and on a random subset of features (the “feature bagging” step). Because each tree sees a slightly different distribution, their errors are weakly correlated; averaging \(\hat f(x)=\frac1T\sum_{t=1}^T h_t(x)\) shrinks variance by roughly \(1/T\), while bias remains that of a single tree. The random feature selection also forces the model to discover complementary decision boundaries, which is why RF excels when many irrelevant features are present.

**Gradient Boosting (GB)**  
Here we *optimize* an additive model \(\hat f(x)=\sum_{t=1}^T h_t(x)\) by fitting each new tree \(h_t\) to the negative gradient of a loss function with respect to the current prediction. The first tree captures the bulk of the signal; subsequent trees learn *the residual* errors, akin to building a basis that spans the space of possible corrections. Each iteration reduces training error monotonically (in expectation), and regularization (learning rate, subsampling) keeps over‑fit in check.

**Why they beat deep nets on tabular data**

1. **Feature sparsity & interpretability** – Tabular inputs often contain categorical variables with high cardinality; trees naturally handle such splits without embedding tricks required by NNs.
2. **Implicit regularization** – Tree depth, subsampling, and bagging provide strong variance control; deep nets need elaborate early‑stopping or dropout schemes that are hard to tune on small datasets.
3. **Local decision boundaries** – Many tabular tasks involve piecewise constant relationships (e.g., risk scores). Trees approximate these with fewer parameters than a neural net would need to learn the same step function.

**Non‑obvious insight**  
The *bias–variance trade‑off* in trees is not merely about depth: it’s also governed by **feature bagging**, which decorrelates trees more effectively than simply increasing data size. In high‑dimensional tabular spaces, this decorrelation can outweigh the marginal gains from deeper models or more complex architectures, explaining why ensembles remain state‑of‑the‑art for many real‑world datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
