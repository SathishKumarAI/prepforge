---
qid: ing_0731a17492__fp__local
question: 'Explain: Machine learning and artificial intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 410
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:21:05-05:00'
sources: []
---

**From the problem to the solution**

At its core, *artificial intelligence* (AI) is a toolkit for **mapping sensory input \(x\)** to useful actions or predictions \(y\).  The fundamental question is: *how can a machine decide what output maximises some goal when it has never seen that exact situation before?*  
The answer is statistical inference.  If we view the world as a stochastic process, the best action for new data is the one that minimises expected loss under our model of \(P(y\mid x)\).  Learning is simply the estimation of this conditional distribution from finite samples.

**Why machine learning must work “the way it does”**

1. **Statistical consistency** – With enough data and a rich enough function class, empirical risk minimisation converges to the Bayes optimal predictor (Glivenko‑Cantelli & VC theory).  
2. **Regularisation** – Because we cannot sample all of \(X\), we impose structure (smoothness, sparsity, low‑rank) that reflects prior knowledge; this is the geometric principle underlying kernels, neural nets’ weight sharing, and Bayesian priors.  
3. **Computational tractability** – Gradient‑based optimisation turns infinite‑dimensional inference into a sequence of finite updates, exploiting convexity or stochastic approximation.

**A non‑obvious insight**

Many practitioners treat *overfitting* as merely “too many parameters”.  In fact, overfitting is an expression of **information bottleneck violation**: the model stores more mutual information about the training set than needed for predicting \(y\).  By constraining representation capacity (e.g., via dropout or bottleneck layers), we enforce a principled trade‑off between fitting and compressing—this is why seemingly arbitrary regularisers often yield robust generalisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
