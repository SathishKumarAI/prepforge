---
qid: ing_c3e265d0a0__fp__local
question: 'Explain: What I mean by that is the — Detecting anomalies using Isolation
  Trees: Practical Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 388
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:58:40-05:00'
sources: []
---

**Isolation Trees for Anomaly Detection – a first‑principles view**

An anomaly is an observation that *requires fewer random cuts* to isolate than typical data points.  
If we repeatedly pick a feature and a split value uniformly within its range, the probability that a normal point survives many such splits decays exponentially with depth: every cut halves (on average) the volume of space containing it. Anomalies, being sparse, are likely already separated by a single cut, so their expected path length is *log n* rather than *O(log n)* for normals.

The algorithm constructs an **Isolation Tree** by recursively partitioning the feature space until each leaf contains at most one point or a depth limit is reached. The tree’s height is a natural estimator of “how isolated” a point is:  

```
score(x) = 2^{−E[h(x)]/c(n)}
```

where *h(x)* is path length, *E[·]* the expectation over many random trees, and *c(n)=2H(n‑1)–(2n−1)/n* normalizes the score to [0, 1].  
This formula emerges from the expected height of a binary search tree on *n* uniformly distributed keys (Harmonic number), tying isolation depth to **information entropy**: fewer cuts mean higher information gain.

A non‑obvious insight is that **anomaly detection reduces to estimating a density’s tail via random projections**, not to fitting a parametric model. The method is thus robust to high dimensionality and feature scaling, because the probability of cutting an anomaly depends only on its relative sparsity, not on distance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
