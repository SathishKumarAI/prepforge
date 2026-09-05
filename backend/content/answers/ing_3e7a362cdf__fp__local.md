---
qid: ing_3e7a362cdf__fp__local
question: 'Explain: Drawbacks — Vertical vs Horizontal Partitioning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 382
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:17:24-05:00'
sources: []
---

**Vertical vs. Horizontal Partitioning in ML – Why One May Fail**

When we split a dataset, we decide *what* each learner sees.  
Let \(X\) be features and \(Y\) the label.  

1. **Horizontal (sample‑wise) partitioning** gives each model an independent *subset of rows*.  
   - **Drawback:** If the data are non‑stationary or contain rare subpopulations, a local model sees only a biased slice of the joint distribution \(\Pr(X,Y)\). The resulting hypothesis \(h_{\text{local}}\) may overfit to idiosyncratic noise. Aggregating such models (e.g., ensembling) mitigates but does not eliminate the problem: the error surface is no longer convex in the ensemble space, so we can’t guarantee a global optimum.

2. **Vertical (feature‑wise) partitioning** gives each model an *incomplete view of \(X\)*.  
   - **Drawback:** The true predictive function often depends on interactions across features. A vertical learner approximates \(\Pr(Y|X_{\text{subset}})\), but the marginalization over missing dimensions is intractable unless we assume independence—a strong, rarely satisfied hypothesis. Consequently, the bias introduced by ignoring cross‑feature dependencies dominates variance reduction.

**Non‑obvious insight:**  
Vertical partitioning can be *beneficial* only if the underlying function factorizes: \(f(X)=\sum_j f_j(X_{S_j})\). Detecting such structure is itself a learning problem; failing to do so turns vertical splits from a computational convenience into a source of irreducible bias.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
