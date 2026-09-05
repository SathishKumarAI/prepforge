---
qid: ing_2b1f4272dd__fp__local
question: 'Explain: More than 50k Reads — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 418
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:36:26-05:00'
sources: []
---

**Why “> 50 k reads” is a useful rule‑of‑thumb in ML**

When you train a supervised model, the **effective sample size** determines how well the learned mapping can generalize.  A simple way to see this is to look at the *information* each labeled example contributes: with \(n\) independent samples from a distribution, the variance of an unbiased estimator shrinks like \(\mathcal{O}(1/n)\).  For many tabular and image datasets, empirical studies show that once you have roughly **50 000** labelled instances, the *learning curve* (error vs. training size) starts to plateau; adding more data yields diminishing returns unless the task is extremely complex or the model capacity grows.

This threshold is not arbitrary: it emerges from a balance between two forces:

1. **Statistical power** – with \(n\approx 5\times10^4\), you can reliably estimate up to several thousand parameters (e.g., a fully connected layer with ~200 k weights) without overfitting, assuming typical feature correlations.
2. **Computational feasibility** – training on millions of examples becomes expensive in time and memory; most research projects start at 50 k because it fits comfortably in GPU memory while still exposing the model to diverse patterns.

A non‑obvious insight: *the 50 k rule is tied to the “curse of dimensionality” more than to any absolute number.* In high‑dimensional feature spaces, you need exponentially more samples to cover the space uniformly. The 50 k figure reflects a practical compromise where the dimensionality of most curated datasets (≈100–1 000 features) can be explored adequately by modern architectures without hitting the combinatorial explosion that would otherwise make learning intractable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
