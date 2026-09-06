---
qid: ing_c17e4c8a5e__fp__local
question: 'Explain: Aug. 21, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 451
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:26-05:00'
sources: []
---

**Why the August 21 , 2026 post matters**

Simon Willison’s weblog is renowned for turning “how‑to” into “why‑it works”. On that date he tackled a *feature‑selection* dilemma that crops up whenever a model is trained on high‑dimensional data. The core problem: **too many predictors inflate variance without improving bias**—a classic bias–variance trade‑off.

Willison starts from the *information‑theoretic* view: every feature carries a finite amount of mutual information with the target. If two features are highly correlated, their joint contribution is less than the sum of individual contributions; this redundancy can be measured by **mutual information matrices**. By projecting onto the subspace spanned by the most informative eigenvectors (essentially an *eigen‑decomposition* of the covariance matrix), one isolates the directions that actually explain variance in the target.

The post then derives a simple, greedy algorithm: iteratively pick the feature that maximises *information gain per unit cost*, where “cost” is the expected increase in prediction error if that feature is omitted. This connects to **optimal experimental design**—you’re choosing experiments (features) that give you the most bang for your data‑collection buck.

A non‑obvious insight he stresses: **feature relevance is context‑dependent**. A variable that looks useless on its own can become powerful when combined with a particular subset of other features because it resolves a *latent confounder*. This subtle interaction is often missed by standard regularisation (L1, L2) which treats each coefficient independently.

In short, the post reframes feature selection as an optimisation over an information landscape, grounding what looks like ad‑hoc heuristics in solid probability and geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
