---
qid: ing_7aecf3cb38__fp__local
question: 'Explain: Evaluation. — \ud835\udc40\u2062\ud835\udc52\u2062\ud835\udc5a^\ud835\udc5d:
  Exploring Agent Procedural Memory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 622
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:26:11-05:00'
sources: []
---

**Why we need an evaluation for procedural memory**

An agent that learns *procedures* (e.g., a sequence of actions that solve a task) must be judged not only on the *accuracy* of the final outcome but also on how well it *recalls and executes* the underlying chain.  The fundamental problem is to quantify **how much information** about the procedure is retained in the agent’s internal state, and whether that information can be retrieved quickly enough to achieve high reward.

**Deriving a principled metric**

Let \(S\) be the set of all possible procedures and let \(\pi_\theta(s)\) denote the probability that the agent retrieves procedure \(s\) from its procedural memory.  The *information gain* associated with this retrieval is

\[
I(\pi_\theta)= -\sum_{s\in S}\pi_\theta(s)\log\frac{\pi_\theta(s)}{p_{\text{prior}}(s)},
\]

where \(p_{\text{prior}}\) captures the prior distribution of procedures in the environment.  This is exactly the Kullback–Leibler divergence between the agent’s retrieval distribution and the prior; it measures how much the agent has *sharpened* its beliefs.

To connect this to performance, we weight each procedure by its expected return \(R(s)\):

\[
\mathcal{E}(\theta)= \sum_{s\in S}\pi_\theta(s) R(s).
\]

The **evaluation score** is then the product

\[
\boxed{\;\mathcal{V}(\theta)= I(\pi_\theta)\times \mathcal{E}(\theta)\;}
\]

which rewards agents that both concentrate probability on high‑return procedures and maintain a low‑entropy, highly informative memory.

**Non‑obvious insight**

Many works treat recall accuracy alone as sufficient.  However, \(\mathcal{V}\) shows that *information compression* (low entropy) is as crucial as reward: an agent can achieve high returns by memorizing every possible procedure (high entropy), but such a strategy fails to generalize and incurs huge retrieval costs.  The product form forces the agent to learn compact, yet highly rewarding, procedural representations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
