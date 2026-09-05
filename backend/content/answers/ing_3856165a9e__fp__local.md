---
qid: ing_3856165a9e__fp__local
question: 'Explain: Outdated Fact Poisoning — The Day 30 Problem: Why Your AI Agent
  Gets Worse Over Time | Cipher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 383
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:04:16-05:00'
sources: []
---

### Outdated‑Fact Poisoning – the “Day 30” effect

When an AI agent learns continuously from a stream of user interactions, it treats every new datum as a fresh signal that should be merged with its existing knowledge base (KB). The fundamental problem is that **the world changes**—facts that were true yesterday may become false tomorrow. If the learning algorithm simply *averages* new observations into the KB without weighting them by their temporal validity, the agent’s internal model drifts toward a mixture of stale and current facts.

Formally, let \(K_t\) be the knowledge vector at day \(t\), and \(x_{t+1}\) an incoming observation. A naive update

\[
K_{t+1} = (1-\alpha) K_t + \alpha x_{t+1}
\]

implicitly assumes a stationary environment: every past datum contributes equally long after it was observed. In non‑stationary settings, the optimal policy is to *forget* older evidence at a rate that matches the true concept drift speed. The Day 30 phenomenon appears when the forgetting factor is too small; by day 30 the cumulative weight of outdated facts surpasses that of recent truths, so predictions degrade.

**Non‑obvious insight:**  
The degradation is not merely “data poisoning” (adversarial noise) but a *temporal poisoning*—old facts masquerade as fresh evidence. A principled fix is to attach a *recency weight* \(w(t)\propto e^{-\lambda t}\) to each datum, effectively turning the learning rule into an exponential moving average that respects concept drift. This simple Bayesian update restores robustness without sacrificing the agent’s ability to learn from new interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
