---
qid: ing_47bbeac5ed__fp__local
question: 'Explain: And these are how likely they all — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 498
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:04-05:00'
sources: []
---

**Why “likelihood” matters in ML**

At its core, machine‑learning is a *probabilistic* decision problem:  
given data \(x\), we want the most plausible explanation \(y\).  The
natural way to compare explanations is by their **likelihood**
\(p(x|y)\)—the probability of observing the data if that explanation were true.  
Why does this work? Because of Bayes’ rule:

\[
p(y|x)=\frac{p(x|y)p(y)}{p(x)}
\]

The denominator \(p(x)\) is constant over all candidate \(y\), so
maximising the posterior \(p(y|x)\) reduces to maximising the product
\(p(x|y)p(y)\).  In a *maximum‑likelihood* setting we drop the prior
\(p(y)\) (or assume it flat), leaving us with

\[
\hat y=\arg\max_y p(x|y).
\]

Thus likelihood is not an arbitrary score; it is the *sufficient statistic*
for evidence in favour of a hypothesis.

**Geometric view**

If we embed all possible data points as vectors, the likelihood surface
is a probability density over that space.  The MAP estimate (maximum a
posteriori) corresponds to the point where this surface, tilted by the prior,
has its peak—exactly the most probable explanation given both data and
prior belief.

**Non‑obvious insight**

Many practitioners treat *likelihood* as just “fit to training data”.
But in high dimensions, likelihood can be **misleading**: a model may
assign extremely low probability to every single training point yet still
be useful.  The key is the *shape* of the likelihood surface; what matters
is how steeply it rises around the true parameters (its Fisher information),
not merely its absolute value.  Ignoring this leads to over‑confident
confidence intervals and poor generalisation.

So, in ML, “likelihood” is the bridge between raw data and principled
inference—grounded in Bayes’ theorem, geometry of probability space,
and the curvature that governs learning dynamics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
