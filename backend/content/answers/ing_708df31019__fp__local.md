---
qid: ing_708df31019__fp__local
question: 'Explain: Reference — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 406
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:03:43-05:00'
sources: []
---

**Reference in supervised learning**

The *reference* is the target value that a model must approximate.  
At its core, learning is an **optimization problem**: find parameters θ such that a loss function  
\[
L(\theta)=\mathbb{E}_{(x,y)\sim P}\big[\ell(f_\theta(x),y)\big]
\]  
is minimized. The expectation uses the true distribution \(P\) of data–label pairs, but we never observe it directly; we only have a finite sample \(\{(x_i,y_i)\}_{i=1}^n\).  

Thus the *reference* is the **ground‑truth label** \(y\), the observable realization of the random variable that the model predicts. It anchors the loss to a concrete quantity, turning an abstract functional into a computable scalar. Without it, we could not evaluate \(\ell\) or update θ.

The deeper principle: the reference embodies the *information* we wish to recover about \(P(y|x)\). The loss measures how much information is lost when replacing \(y\) by its estimate. Minimizing this loss maximizes mutual information between prediction and target, a manifestation of the *information bottleneck*.

**Non‑obvious insight**  
In many modern architectures (e.g., self‑supervised learning), we construct a *pseudo‑reference*—a proxy label derived from data itself. This shows that the reference need not be an external annotation; any function that preserves the underlying structure of \(P(y|x)\) can serve, provided it yields a loss that is still convex (or tractable) in θ. This flexibility underlies contrastive and masked‑language models, where the “ground truth” is created on the fly from the data stream itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
