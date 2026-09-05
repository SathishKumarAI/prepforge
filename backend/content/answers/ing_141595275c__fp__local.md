---
qid: ing_141595275c__fp__local
question: 'Explain: Feature Selection Techniques in Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 413
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:47:56-05:00'
sources: []
---

**Feature selection is the act of choosing a subset \(S\subseteq \{1,\dots,p\}\) of predictors that maximises predictive performance while minimising redundancy and over‑fitting.**  
The fundamental problem it solves is *curse of dimensionality*: in high dimensions, the volume grows exponentially, data become sparse, and any learning algorithm’s variance explodes. Formally, for a model \(f(x_S)\) we seek to minimise expected loss  

\[
\mathbb{E}_{(X,Y)}[\ell(Y,f(X_S))]+\lambda |S|,
\]

where \(\lambda\) penalises the cardinality of \(S\). The penalty term embodies Occam’s razor: a smaller model is less likely to fit noise.  

Three canonical families arise from how this optimisation is tackled:

| Family | Principle | Typical method |
|--------|-----------|----------------|
| **Filter** | Information‑theoretic / statistical independence | Mutual information, ANOVA F‑test, correlation threshold |
| **Wrapper** | Empirical risk minimisation via search | Recursive Feature Elimination (RFE), Genetic Algorithms |
| **Embedded** | Joint optimisation with model training | LASSO (\(\ell_1\) regularisation), tree‑based importance |

*Non‑obvious insight*: **Feature selection can be seen as a Bayesian prior over the combinatorial space of subsets.**  
A filter score is equivalent to a *marginal likelihood* that ignores interactions; a wrapper approximates the posterior by sampling; an embedded method imposes a sparsity‑inducing prior directly in the loss. Recognising this unifies the three families: they differ only in how aggressively they approximate or enforce the same Bayesian objective, and it explains why hybrid methods (e.g., using filter scores to initialise a wrapper) often outperform pure wrappers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
