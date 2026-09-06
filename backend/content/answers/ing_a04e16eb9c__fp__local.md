---
qid: ing_a04e16eb9c__fp__local
question: 'Explain: Title: A Survey of Agent Memory in the Second Half: Towards Self-Evolving
  and Long-Horizon Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 422
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:46:35-05:00'
sources: []
---

**Why “Agent Memory” matters for long‑horizon learning**

In a sequential decision problem an agent must infer the *true* state of its environment from noisy observations and past actions. The fundamental obstacle is that the underlying dynamics are often *partially observable*: what we see at time \(t\) is only a projection of the latent world state. If an agent cannot remember relevant past evidence, it will commit to a wrong posterior and consequently make suboptimal decisions.

Mathematically, the optimal policy maximizes expected cumulative reward
\[
J(\pi)=\mathbb{E}_{\pi}\!\left[\sum_{t=0}^{T} r_t\right]
\]
subject to the belief‑update equation
\[
b_{t+1}= \tau(b_t,a_t,o_{t+1}),
\]
where \(b_t\) is a probability distribution over latent states. The operator \(\tau\) contracts information: it discards all but what can be inferred from the current observation and action. To avoid this loss, an agent must *store* sufficient statistics—an internal memory—that preserves enough of the past to reconstruct the belief.

The “second half” in the title signals a shift from short‑term reactive policies (the first half) toward **self‑evolving** architectures that learn their own memory mechanisms over time. By treating memory as an end‑to‑end differentiable module, agents can optimize not only policy parameters but also how they compress and replay past trajectories—akin to *variational inference* on a latent trajectory space.

A non‑obvious insight: **memory is not just a buffer; it is itself a learning objective**. When the memory update rule is jointly optimized with the policy, agents discover *structured priors* (e.g., hierarchical episodic traces) that dramatically reduce sample complexity in long horizons—much like how humans chunk experiences into reusable schemas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
