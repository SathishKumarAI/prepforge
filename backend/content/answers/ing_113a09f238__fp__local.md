---
qid: ing_113a09f238__fp__local
question: You're exposing one of your agents to another company's agent. What crosses
  the boundary, and what do you refuse to expose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 351
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:42:41-05:00'
sources: []
---

When two autonomous systems meet, the **boundary** is the *information that can be inferred about the internal state of each agent*.  
At first principles, an agent’s goal is to maximise expected reward subject to its policy constraints. The only thing it truly needs from another system is a predictive model of that system’s future actions—nothing more. This minimal requirement follows from **Bayesian decision theory**: the optimal action depends on the posterior over the other agent’s policy given observable traces, not on the full internal code or data.

Thus, what *crosses* the boundary are:

1. **Observable behaviour streams** (action sequences, sensor logs) that allow one to update a posterior over the other’s policy.
2. **Utility‑aligned signals** (reward proxies) that help calibrate expectations about future actions.

What we *must not expose*:

- **Source code or architectural details** – these leak implementation secrets and potential vulnerabilities.
- **Training data, private datasets, or internal state variables** – revealing them would violate confidentiality guarantees and can compromise privacy.
- **Policy parameters (weights, hyper‑parameters)** – they constitute intellectual property and a potential attack surface.

The non‑obvious insight is that *exposing behaviour alone* already gives the other agent enough to approximate its policy, but *withholding internal structure* preserves security. This separation mirrors the principle of **information bottleneck**: compress the data to what’s necessary for prediction while discarding extraneous details. By adhering to this boundary, we ensure interoperability without sacrificing proprietary integrity or privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
