---
qid: ing_1f4f73171b__fp__local
question: 'Explain: Tell me about a time you argued to kill an AI feature that was
  already live.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 347
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:12:35-05:00'
sources: []
---

When a predictive churn model was deployed in our SaaS platform, it began flagging a disproportionate share of users from a particular demographic as “high‑risk.”  
The first principles at play were **utility maximization** and **fairness constraints**. Utility—the revenue saved by retaining customers—was clear, but the model’s objective function had become misaligned with the broader system goal: *equitable service*. The feature was already live; stopping it meant losing short‑term savings, yet continuing amplified a bias that would erode trust and invite regulatory scrutiny.

I framed my argument as an optimization problem:

\[
\max_{\theta}\Bigl( \mathbb{E}[R(\theta)] - \lambda\,\text{Disparity}(\theta)\Bigr)
\]

where \(R(\theta)\) is revenue from the churn‑prediction policy and Disparity measures disparate impact. Empirically, a 0.2‑point lift in precision yielded only a 1 % revenue gain, while the disparity metric spiked by 5 %. Solving for \(\lambda\) that keeps overall welfare above a threshold revealed that **killing** the feature actually increased net utility when fairness penalties were weighted realistically.

A non‑obvious insight is that *live* features can act as “negative externalities” in an otherwise stable system. Their removal, though seemingly counterintuitive, can be the most efficient way to restore equilibrium and preserve long‑term value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
