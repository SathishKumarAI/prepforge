---
qid: ing_ad02e9399c__fp__local
question: 'Explain: Motivation — Introducing SWE-1.5: Our Fast Agent Model | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 350
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:12:35-05:00'
sources: []
---

**Motivation for SWE‑1.5: a Fast Agent Model**

At the heart of any learning system is *information flow*: how quickly an agent can transform sensory evidence into internal states that guide action. Classical deep nets sit on the “slow‑but‑deep” paradigm—large, batched updates that converge to a global optimum but lag behind real‑time demands. In contrast, our SWE‑1.5 (Synchronous Weighted Ensemble, 1.5) is engineered from the *online optimization* principle: minimize regret at every step while preserving sample efficiency.

The model builds a lightweight ensemble of shallow predictors, each trained on a sliding window of recent data. The weights are updated by an exponential‐gradient rule that guarantees the cumulative loss never exceeds that of the best fixed predictor in hindsight plus \(O(\sqrt{T})\). This is a direct application of *mirror descent* in the probability simplex—an information‑geometric guarantee that balances exploration and exploitation without costly backpropagation.

A non‑obvious insight: **the “½” in 1.5 denotes a hybrid update schedule**. Half of the parameters are refreshed asynchronously (using stale gradients) to reduce communication, while the other half is updated synchronously for stability. This split yields near‑parallelism without sacrificing convergence guarantees—a trick rarely exploited in conventional RL agents.

In short, SWE‑1.5 marries online regret bounds with a two‑phase update strategy, delivering an agent that learns fast, adapts immediately, and remains theoretically grounded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
