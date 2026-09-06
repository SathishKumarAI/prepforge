---
qid: ing_e7565970b6__fp__local
question: 'Explain: Features — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 349
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:16-05:00'
sources: []
---

**Features – the problem’s language**

At its core, a supervised learning task is an inference problem: given data \(X\) we want to predict a target \(y\).  
The *information* that allows us to discriminate between classes must be encoded somewhere in \(X\).  A **feature** is simply a measurable quantity extracted from raw observations that preserves the predictive structure of the underlying generative process.  

Why must features be chosen this way?  
1. **Identifiability** – If two different settings of the world produce identical feature vectors, no algorithm can separate them; thus features must be *injective* with respect to the target.  
2. **Sufficiency** – The feature mapping \(f\) should be a sufficient statistic for \(y\); mathematically \(p(y|x)=p(y|f(x))\).  This guarantees that no predictive power is lost by compressing \(X\) into features.  

These principles tie directly to **information theory**: the mutual information \(I(Y; f(X))\) must be maximized, and any compression that reduces this value harms learning.  

A non‑obvious insight: *feature relevance is context‑dependent*.  A feature highly informative for one task may be useless or even detrimental for another because it introduces irrelevant correlations (the “curse of dimensionality”).  Thus feature engineering is not just about extracting variables, but about tailoring them to the specific conditional distribution \(p(y|x)\) we wish to model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
