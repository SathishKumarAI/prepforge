---
qid: ing_d5441ec827__fp__local
question: How does the classification stage work? — What is the difference between
  Bagging and Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 544
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:33:52-05:00'
sources: []
---

**Classification as a decision‑boundary inference problem**

At its core, supervised classification seeks the mapping  
\(f:\mathcal X\to \{1,\dots,K\}\) that minimises expected loss  

\[
L(f)=\mathbb E_{(X,Y)}[\ell(Y,f(X))].
\]

For a finite training set we approximate this by empirical risk
\(\hat L(f)\).  The *classification stage* is the optimisation of \(f\)
subject to the chosen hypothesis class (e.g., decision trees, linear
models) and loss (0‑1, hinge, log‑loss).  In practice, we train a base
learner on the data, then use its predictions as features or
probabilities for higher‑level inference.

**Bagging vs. Boosting: two different variance–bias trade‑offs**

| Aspect | Bagging | Boosting |
|--------|---------|----------|
| Goal | Reduce *variance* of unstable learners by averaging. | Reduce *bias* by sequentially correcting errors. |
| Sampling | Bootstrap (with replacement) each training set; independent trees. | Sequential reweighting: mis‑classified samples receive higher weight. |
| Aggregation | Simple majority vote / average probabilities. | Weighted sum of predictions, often with a shrinkage factor. |
| Theoretical basis | Law of large numbers: \(\operatorname{Var}(\bar f)\approx\frac{\sigma^2}{B}\). | Boosting minimises an exponential loss; equivalent to gradient descent in function space (Freund & Schapire 1997). |

**Why it must work that way**

Bagging exploits the *independence* of bootstrap samples: if each
learner’s error is uncorrelated, averaging cancels noise.  
Boosting treats training as an iterative optimisation problem: each step
moves in the direction that most reduces a convex surrogate loss; the
sequence of weak learners approximates a complex decision boundary.

**Non‑obvious insight**

Both methods can be seen through the lens of *ensemble geometry*: the
prediction space is a high‑dimensional simplex.  Bagging samples random
directions within this simplex, reducing spread (variance).  Boosting
takes deterministic steps along the negative gradient in that space,
shaping the boundary.  Thus, their difference is not merely “parallel vs.
sequential” but fundamentally **sampling versus optimisation** in a shared geometric framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
