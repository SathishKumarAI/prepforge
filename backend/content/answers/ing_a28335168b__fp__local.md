---
qid: ing_a28335168b__fp__local
question: 'Explain: Compaction — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 417
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:51:09-05:00'
sources: []
---

**Context Engineering as a Compaction Principle**

At its core, every learning algorithm solves an *inverse problem*: it infers a model \(f\) that maps inputs \(x\) to outputs \(y\) from observed data \(\{(x_i,y_i)\}\). The space of admissible models is astronomically large; without constraints the learner will overfit or never converge.  
Compaction, in this setting, means *compressing* the input representation so that only the information truly relevant to predicting \(y\) survives. Context engineering is a systematic form of compaction: we design a context vector \(c(x)\) by selecting, weighting, and transforming raw features so that the conditional distribution \(p(y|x)\) ≈ \(p(y|c(x))\).  

Why must it work this way?  
1. **Information bottleneck** – By forcing the model to operate on a low‑dimensional context, we enforce an information‑theoretic trade‑off: retain maximal mutual information with \(y\) while discarding irrelevant entropy.  
2. **Geometry of feature space** – The context acts as a projection onto a subspace where decision boundaries are linear or simple; this reduces curvature and improves generalization.  
3. **Optimization stability** – Fewer, more salient parameters lower the condition number of the Hessian, speeding convergence and mitigating vanishing gradients.

A non‑obvious insight: *context is not merely a feature subset; it can be an adaptive function of the target distribution itself*. For example, in few‑shot learning we construct \(c(x)\) by aggregating embeddings from support examples, effectively performing a localized dimensionality reduction that adapts to each query. This dynamic compaction turns static models into meta‑learners that “compress” knowledge on the fly, explaining why context engineering often outperforms static feature selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
