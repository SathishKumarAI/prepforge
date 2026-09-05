---
qid: ing_2063f5be78__fp__local
question: 'Explain: Site cookies: Guess what? Those don’t work either!'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 349
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:15:00-05:00'
sources: []
---

**Why “site‑cookies” never surface in a model’s loss function**

When you hand a learning algorithm a *site cookie*—a string like `{"theme":"dark","lang":"en"}` that only tells the browser what to render—you are feeding it a variable that is **deterministic and invariant** over all training samples from that site.  
From an information‑theoretic point of view, its entropy is zero: every user on the same domain sees the *same* value. The mutual information between this feature and any target (click‑through rate, churn, etc.) collapses to zero, so a convex loss will assign it a weight of exactly 0. In practice, regularizers (L1/L2) or tree‑based splits immediately discard it because it offers no discriminative power.

A deeper insight: *site cookies are a form of **global context**, not local variation.* Models learn patterns that generalize across users; a constant attribute cannot help distinguish one user from another. The only way a cookie could matter is if its value were to change over time (e.g., A/B test flag), in which case it becomes a temporal feature, not a static site‑wide flag.

So the rule of thumb: **don’t include global constants as features; they never improve predictive performance and simply bloat the model.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
