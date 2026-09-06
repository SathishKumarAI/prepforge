---
qid: ing_a7bd0898ea__fp__local
question: 'Explain: Metrics — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 487
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:01:58-05:00'
sources: []
---

**Why the Mastra framework measures what it does**

At its core, an AI agent is a *policy* \( \pi(a|s) \) that maps states \( s \) to actions \( a \). The policy’s value is the expected return
\[
V^\pi(s)=\mathbb{E}\!\left[\sum_{t=0}^\infty \gamma^t r_t\,\bigg|\,s_0=s,\;\pi\right].
\]
To optimise \( \pi \) we need a *metric* that reflects how well the agent is doing in practice. Mastra’s metrics are derived directly from this value function, but they’re expressed in terms of observable statistics so developers can monitor training without inspecting gradients.

**Three foundational dimensions**

| Metric | Fundamental principle | How it’s computed |
|--------|-----------------------|-------------------|
| **Reward‑rate** | Temporal‑difference (TD) estimation of \( V^\pi \). | Mean reward per timestep, discounted by \( \gamma \). |
| **Success‑ratio** | Binary classification of episode outcome. | Fraction of episodes that reach a goal state. |
| **Uncertainty‑score** | Information‑theoretic measure of policy entropy. | Average Shannon entropy over action distributions \( H(\pi(\cdot|s)) \). |

These three are *not arbitrary*: reward‑rate captures expected utility, success‑ratio reflects task completion probability, and uncertainty‑score gauges exploration vs exploitation.

**Why the entropy metric matters**

Most people treat entropy as a regulariser, but in Mastra it is the *signal* that guides curriculum learning. A high entropy indicates that the policy is still exploring; as training progresses the entropy falls, signalling convergence. By monitoring the slope of the entropy curve one can trigger automated adjustments to exploration hyper‑parameters—something most frameworks hard‑code.

**Practical takeaway**

- **Reward‑rate** tells you *how much* you’re getting.
- **Success‑ratio** tells you *whether* you’re getting it.
- **Uncertainty‑score** tells you *when* you should change the learning strategy.

Together they form a minimal, theoretically grounded toolkit that turns raw interaction data into actionable training feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
