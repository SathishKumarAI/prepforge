---
qid: ing_7915b33549__fp__local
question: 'Explain: Living with Non-Determinism — AI Agents Explained - by Sairam
  Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 406
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:22:06-05:00'
sources: []
---

**Living with Non‑Determinism – why an agent must *learn* to anticipate its own uncertainty**

The core problem is *prediction under stochastic dynamics*: an AI that takes actions in a world where the same state–action pair can lead to many different next states. Traditional reinforcement learning treats this as a Markov decision process (MDP) with a fixed transition distribution \(p(s'|s,a)\). The agent optimises expected return, but the expectation obscures *variance*—the spread of possible futures.  

From an information‑theoretic view, the agent’s policy \(\pi(a|s)\) is a source that must be matched to a noisy channel (the environment). Optimal communication requires not only high mutual information \(I(S;A)\) but also resilience to channel noise. The *value of information* principle tells us that an action that reduces future uncertainty can be worth more than one that merely improves immediate reward.

Sundaresan and Kim formalise this by augmenting the value function with a *non‑determinism penalty*:  
\[
V(s) = \max_{\pi}\Bigl[\mathbb{E}[R] - \lambda\, H(p(\cdot|s,\pi))\Bigr],
\]
where \(H\) is entropy. The penalty forces the agent to prefer actions that lead to *predictable* next states, thereby “living” with non‑determinism rather than ignoring it.

**Non‑obvious insight:**  
Entropy regularisation is usually blamed for exploration, but here it serves *exploitation* by protecting against catastrophic variance: an action that looks good on average but leads to wildly different outcomes can be discarded even if its mean reward is high. This reframes exploration as a risk‑management strategy grounded in the geometry of probability distributions rather than mere curiosity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
