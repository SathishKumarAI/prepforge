---
qid: ing_125fa64a66__fp__local
question: Design a customer-facing agent for an airline that can cancel and rebook
  flights. How do you keep it from violating fare policy?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 422
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:44:53-05:00'
sources: []
---

**Why the agent must obey fare policy**

An airline’s fare rules encode a *budget‑constraint* on revenue: each ticket is a contract that promises a seat at a price \(p\) and a set of allowed modifications \(\mathcal{M}\). If the system cancels or rebooks outside \(\mathcal{M}\), it violates the contractual constraint, eroding trust and triggering penalties. Thus the agent must *solve* an optimization problem under hard constraints:

1. **Decision variables** – cancel/rebook actions \(x_i\in\{0,1\}\).
2. **Objective** – maximize customer satisfaction (e.g., minimal time to a new flight) while keeping revenue loss \(\sum_i x_i(p_i - r_i)\le 0\), where \(r_i\) is the fare of the replacement.
3. **Constraints** – each ticket’s allowed modification set \(\mathcal{M}_i\); seat availability; regulatory limits.

This is a *constrained integer program* that can be solved online with a greedy heuristic: sort tickets by penalty weight, attempt rebooking only if the new fare \(r_i\le p_i\) and no cancellation fee applies. If all constraints fail, flag for human review.

**Non‑obvious insight**

Most designers treat fare policy as static “black boxes.” In practice, *policy is a probabilistic distribution* over future demand. By modelling seat inventory as a stochastic process (e.g., Markov chain), the agent can predict the likelihood of finding an acceptable replacement before committing to cancellation. This anticipatory check prevents “last‑minute” cancellations that would otherwise trigger higher penalties and leave seats unsold, thereby preserving revenue while still honoring fare rules.

By embedding policy constraints into a real‑time optimization framework and leveraging demand forecasts, the agent stays compliant without sacrificing customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
